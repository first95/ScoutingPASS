library(shiny)
library(DT)
library(DescTools)
library(dplyr)
library(shinyjs)

mode_columns <- c("Compatible", "Harmony", "Queue.Time", "Trap", "Driver", "Defense")
plot_columns <- c("Auto.Amp", "Auto.Spkr", "Teleop.Amp", "Teleop.Spkr")

mode_func <- function(x) {
  ux <- unique(x)
  ux[which.max(tabulate(match(x, ux)))]
}

generate_plot <- function(data = NULL, column_name = NULL, file = NULL) {
    plot(data[[column_name]], type = "l", 
         main = column_name,
         col = "palegreen4",
         lwd = 3,
         xlab = "Match", ylab = "Pts",
         xlim = c(1, 12),
         ylim = c(0, max(file[column_name]))
    )
}

ui <- fluidPage(
  tags$head(
    tags$style(
      HTML("
      body {
        background-color: #36648B;
        color: white;
      }
      .dataTables_wrapper {
        color: white;
      }
      .shiny-plot-output {
        margin: 10px;
      }
      ")
    )
  ),

    titlePanel("ScoutR"),
    
    tabsetPanel(
      id = "inTabset",
      # Data organized by team
      tabPanel(
        title = "Table",
        DTOutput("table")
      ),
      tabPanel(
        title = "Team",
        value = "team",
        fluidPage(
          fluidRow(
            column(12, verbatimTextOutput("team_title")),
            column(4, actionButton("primary_btn", "1st Choice Selection")),
            column(4, actionButton("secondary_btn", "2nd Choice Selection"))
          ),
          fluidRow(
            column(4, plotOutput("plot_1")),
            column(4, plotOutput("plot_2")),
            column(4, plotOutput("plot_3"))
          ),
          fluidRow(
            column(4, plotOutput("plot_4")),
            column(8, DTOutput("char"))
          )
        )
      ),
      tabPanel("Favorites", 
        fluidPage(
          fluidRow(
            titlePanel("1st Choices"),
            column(12, DTOutput("primary_table"))),
          fluidRow(
            titlePanel("2nd Choices"),
            column(12, DTOutput("secondary_table"))),
          fluidRow(
            column(4, actionButton("unfavorite_btn", "Remove Selected Row"))
          )
        )
      ),
      tabPanel("Input",
          br(),
          fileInput("file", "Load TSV"),
          br(),
          textAreaInput("tsvInput", "Enter TSV Text", rows = 10, width = 1000),
          actionButton("update", "Update")
      )
    )
)

server <- function(input, output, session){
  
  data <- reactiveVal(NULL)
  file <- reactiveVal(NULL)
  
  # Render the datatable
  output$table <- renderDT({
    datatable(
      data(),
      selection = "single",
      rownames = FALSE,
      options = list(rowId = "ID")
    )
  })
  
  # Reactive expression to filter data based on selected value
  selected_row_data <- reactive({
    selected_row <- input$table_rows_selected
    if (length(selected_row) > 0) {
      selected_value <- data()[selected_row, "Team"]
      teamName <- selected_value
      filtered_data <- file()[file()$Team == selected_value, ]
      filtered_data
    }
  })
  
  observeEvent(input$table_rows_selected, {
    updateTabsetPanel(session, "inTabset", selected = "team")
  })
  
  output$plot_1 <- renderPlot({req(input$table_rows_selected)
    generate_plot(selected_row_data(), plot_columns[1], file())})
  output$plot_2 <- renderPlot({req(input$table_rows_selected)
    generate_plot(selected_row_data(), plot_columns[2], file())})
  output$plot_3 <- renderPlot({req(input$table_rows_selected)
    generate_plot(selected_row_data(), plot_columns[3], file())})
  output$plot_4 <- renderPlot({req(input$table_rows_selected)
    generate_plot(selected_row_data(), plot_columns[4], file())})
  
  output$char <- renderDT({
    datatable(selected_row_data()[c("Match.Num", mode_columns, "Comments")], options = list(pageLength = 6, lengthMenu = c(6,12)))
  })
  
  primary <- reactiveValues(data = NULL)
  secondary <- reactiveValues(data = NULL)
  
  observeEvent(input$primary_btn, {
    selected_row <- input$table_rows_selected
    if (length(selected_row) > 0) {
      primary$data <- rbind(primary$data, data[selected_row, ])
    }
  })
  
  observeEvent(input$secondary_btn, {
    selected_row <- input$table_rows_selected
    if (length(selected_row) > 0) {
      secondary$data <- rbind(secondary$data, data[selected_row, ])
    }
  })
  
  observeEvent(input$unfavorite_btn, {
    selected_row <- c(input$primary_table_rows_selected, input$secondary_table_rows_selected)
    if (length(selected_row) > 0) {
      primary$data <- primary$data[-selected_row, , drop = FALSE]
      secondary$data <- secondary$data[-selected_row, , drop = FALSE]
    }
  })
  
  output$team_title <- renderText({
    selected_row <- input$table_rows_selected
    if (length(selected_row) > 0) {
      paste("Team:", data()[selected_row, "Team"])
    } else {
      "Team"
    }
  })
  
  # Render the favorites table
  output$primary_table <- renderDT({
    datatable(primary$data, rownames = FALSE, selection = "single")
  })
  
  output$secondary_table <- renderDT({
    datatable(secondary$data, rownames = FALSE, selection = "single")
  })
  
  load_data <- function(file_path) {
    temp <- read.delim(file_path)
    file(temp)
    averaged_data <- temp %>%
      group_by(Team) %>%
      summarise(across(all_of(plot_columns), ~round(mean(., na.rm = TRUE), 1)))
    mode_data <- temp %>%
      group_by(Team) %>%
      summarise(across(all_of(mode_columns), mode_func))
    return(merge(averaged_data, mode_data, by = "Team"))
  }
  
  observeEvent(input$file, {
    data(load_data(input$file$datapath))
  })
  
  observeEvent(input$update, {
    req(input$file, input$tsvInput)
    if (nzchar(input$tsvInput)) {
      write(paste0("\n", input$tsvInput), input$file$datapath, append = TRUE)
    } else {
      return("Text input is empty.")
    }
    updateTextInput(session, "tsvInput", value = "")
    data(load_data(input$file$datapath))
  })
}

# Run the application 
shinyApp(ui = ui, server = server)

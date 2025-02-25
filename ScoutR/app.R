library(shiny)
library(DT)
library(DescTools)
library(dplyr)
library(shinyjs)

mode_columns <- c("Leaves.Line", "Climb.Stat", "Climb.Time", "Handles.Cor", "Handles.Alg", "Driver.Skill", "Defense.Skill", "Human.Skill")
plot_columns <- c("Auto.Cor", "Auto.Alg", "Auto.Rmvd", "Tele.Cor", "Tele.Barge", "Tele.Proc")

mode_func <- function(x) {
  ux <- unique(x)
  ux[which.max(tabulate(match(x, ux)))]
}

generate_plot <- function(data = NULL, column1 = NULL, column2 = NULL) {
  if (!is.null(column1)) {
    plot(data[[column1]], type = "l", 
         main = if (!is.null(column2)) paste(column1, "and", column2) else column1,
         col = "olivedrab3",
         lwd = 3,
         xlab = "Match", ylab = "Pts",
         xlim = c(1, 12),
         ylim = c(0, 15)
    )
    if (!is.null(column2)) {
      lines(data[[column2]], col = "steelblue4", lwd = 3)
      legend("topright", legend = c(column1, column2), col = c("olivedrab3", "steelblue4"), lwd = 3)
    }
  }
}


ui <- fluidPage(
  tags$head(
    tags$style(
      HTML("
      body {
        background-color: #36648B;
        color: white;
        margin: 5px;
      }
      .dataTables_wrapper {
        color: white;
      }
      .shiny-plot-output {
        margin: 5px;
      }
      .nav-tabs > li > a {
        color: white;
      }
       .nav-tabs > li.active > a,
      .nav-tabs > li.active > a:focus,
      .nav-tabs > li.active > a:hover {
        background-color: #9ACD32;
        color: white;
      }
      .btn {
        background-color: #9ACD32;
        color: white;
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
            column(4, verbatimTextOutput("team_title")),
            column(2, actionButton("primary_btn", "1st Choice Selection")),
            column(3, actionButton("secondary_btn", "2nd Choice Selection"))
          ),
          fluidRow(
            column(3, plotOutput("plot_1")),
            column(3, plotOutput("plot_2")),
            column(3, plotOutput("plot_3")),
            column(3, plotOutput("plot_4"))
          ),
          fluidRow(
            column(12, DTOutput("char"))
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
          fileInput("file", "Load CSV"),
          br(),
          textAreaInput("csvInput", "Enter CSV Text", rows = 10, width = 1000),
          actionButton("update", "Update")
    )
  )
)

server <- function(input, output, session){
  
  data <- reactiveVal(NULL)
  file <- reactiveVal(NULL)
  team <- reactiveVal(NULL)
  primary <- reactiveValues(data = NULL)
  secondary <- reactiveValues(data = NULL)
  
  # Render the datatable
  output$table <- renderDT({
    datatable(
      data(),
      selection = "single",
      rownames = FALSE,
      options = list(rowId = "ID")
    )
  })
  
  output$primary_table <- renderDT({
    datatable(primary$data, rownames = FALSE, selection = "single")
  })
  
  output$secondary_table <- renderDT({
    datatable(secondary$data, rownames = FALSE, selection = "single")
  })
  
  # Reactive expression to filter data based on selected value
  selected_row_data <- reactive({
    if (!is.null(team())) {
      filtered_data <- file()[file()$Team == team(), ]
      return(filtered_data)
    }
    return(NULL)
  })
  
  observeEvent(input$table_rows_selected, {
      team(data()[input$table_rows_selected, "Team"])
      updateTabsetPanel(session, "inTabset", selected = "team")
  })
  observeEvent(input$primary_table_rows_selected, {
      team(primary$data[input$primary_table_rows_selected, "Team"])
  })
  observeEvent(input$secondary_table_rows_selected, {
      team(secondary$data[input$secondary_table_rows_selected, "Team"])
  })
  
  output$plot_1 <- renderPlot({
    generate_plot(selected_row_data(), plot_columns[1])})
  output$plot_2 <- renderPlot({
    generate_plot(selected_row_data(), plot_columns[2], plot_columns[3])})
  output$plot_3 <- renderPlot({
    generate_plot(selected_row_data(), plot_columns[4])})
  output$plot_4 <- renderPlot({
    generate_plot(selected_row_data(), plot_columns[5], plot_columns[6])})
  
  output$char <- renderDT({
    datatable(selected_row_data()[c("Match", mode_columns, "Comments")], rownames = FALSE, options = list(pageLength = 6, lengthMenu = c(6,12)))
  })
  
  observeEvent(input$primary_btn, {
    if (!is.null(team()) && (nrow(primary$data[primary$data$Team == team(),]) != 1 || is.null(primary$data[primary$data$Team == team(),]))) {
      primary$data <- rbind(primary$data, data()[data()$Team == team(),])
    }
  })
  
  observeEvent(input$secondary_btn, {
    if (!is.null(team()) && (nrow(primary$data[secondary$data$Team == team(),]) != 1 || is.null(secondary$data[secondary$data$Team == team(),]))) {
      secondary$data <- rbind(secondary$data, data()[data()$Team == team(),])
    }
  })
  
  observeEvent(input$unfavorite_btn, {
    selected_row_first <- input$primary_table_rows_selected
    selected_row_second <- input$secondary_table_rows_selected
    if (length(selected_row_first) > 0) {
      primary$data <- primary$data[-selected_row_first, , drop = FALSE]
    }
    if (length(selected_row_second) > 0) {
      secondary$data <- secondary$data[-selected_row_second, , drop = FALSE]
    }
  })
  
  output$team_title <- renderText({
    paste("Team:", team())
  })
  
  load_data <- function(file_path) {
    if (file.exists(file_path)) {
      temp <- read.csv(file_path)
      if (ncol(temp) == 0) {
        stop("The CSV file is empty or has an unexpected format.")
      }
      file(temp)
      averaged_data <- temp %>%
        group_by(Team) %>%
        summarise(across(all_of(plot_columns), ~max(.)))
      mode_data <- temp %>%
        group_by(Team) %>%
        summarise(across(all_of(mode_columns), mode_func))
      return(merge(averaged_data, mode_data, by = "Team"))
    } else {
      stop("File does not exist.")
    }
  }
  
  observeEvent(input$file, {
    data(load_data(input$file$datapath))
  })
  
  observeEvent(input$update, {
    req(input$file, input$csvInput)
    if (nzchar(input$csvInput)) {
      write(paste0("\n", input$csvInput), input$file$datapath, append = TRUE)
    } else {
      return("Text input is empty.")
    }
    updateTextInput(session, "csvInput", value = "")
    data(load_data(input$file$datapath))
  })
}

# Run the application 
shinyApp(ui = ui, server = server)

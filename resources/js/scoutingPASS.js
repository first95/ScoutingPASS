document.addEventListener("touchstart", startTouch, false);
document.addEventListener("touchend", moveTouch, false);

// Swipe Up / Down / Left / Right
var initialX = null;
var xThreshold = 0.3;
var slide = 0;

// Options
var options = {
	text: "t=9998;m=99;l=q;r=b1;s=rjs;d=0;to=0;ds=5;if=0;f=15;cf=0;in=1;alp=5;aop=5;aip=5;apu=5;atr=1;atro=0;lp=20;op=10;ip=10;rc=0;pc=0;ss=[(111,111),(111,111),(111,111),(111,111),(111,111),(111,111),(111,111)];c=1;hbc=0;ac=1;hc=0;cb=0;cs=3;nh=0;p=0;b=0;tr=1;ct=3;dr=3;comm='good shooter; shot from all over the field'",
	correctLevel: QRCode.CorrectLevel.L,
    quietZone: 15,
    quietZoneColor: '#FFFFFF',
    width: 200,
    height: 200
};

// Must be filled in: e=event, m=match#, l=level(q,qf,sf,f), t=team#, r=robot(r1,r2,b1..), s=scouter
//var requiredFields = ["e", "m", "l", "t", "r", "s", "as"];
var requiredFields = [];

function addCounter(table, idx, column, data){
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${data.title}`;
    return idx+1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = data.title+'&nbsp;';
  cell2.classList.add("field");

  var button1 = document.createElement("button");
  button1.setAttribute("type", "checkbox");
  button1.setAttribute("onclick", "return counter(this.parentElement, -1)");
  button1.innerHTML += "-"
  cell2.appendChild(button1);

  var inp = document.createElement("input");
  inp.classList.add("counter");
  inp.setAttribute("id", "input_" + data.code);
  inp.setAttribute("type", "text");
  inp.setAttribute("name", column + data.code);
  inp.setAttribute("style", "background-color: black; color: white;border: none; text-align: center;");
  inp.setAttribute("disabled", "");
  inp.setAttribute("value", 0);
  inp.setAttribute("size", 2);
  inp.setAttribute("maxLength", 2);

  var minValue = data.hasOwnProperty('minValue') ? parseInt(data.minValue) : Number.MIN_SAFE_INTEGER;
  var maxValue = data.hasOwnProperty('maxValue') ? parseInt(data.maxValue) : Number.MAX_SAFE_INTEGER;

  inp.dataset.minValue = minValue; // Set minimum value as a data attribute
  inp.dataset.maxValue = maxValue; // Set maximum value as a data attribute

  cell2.appendChild(inp);

  var button2 = document.createElement("button");
  button2.setAttribute("type", "checkbox");
  button2.setAttribute("onclick", "return counter(this.parentElement, 1)");
  button2.innerHTML += "+";
  cell2.appendChild(button2);

  if (data.hasOwnProperty('defaultValue')) {
    var def = document.createElement("input");
    def.setAttribute("id", "default_"+data.code)
    def.setAttribute("type", "hidden");
    def.setAttribute("value", data.defaultValue);
    cell2.appendChild(def);
  }

  return idx+1;
}

function addDropdown(table, idx, column, data) {
  // Create a single row for both title and dropdowns
  var row = table.insertRow(idx);
  
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${data.title}`;
    return idx + 1;
  }
  
  cell1.innerHTML = data.title + '&nbsp;';

  var cell2 = row.insertCell(1);
  cell2.classList.add("field");

  // Check if the "data" field has a "columns" property
  if (data.hasOwnProperty('columns') && Array.isArray(data.columns) && data.columns.length > 0) {
    // Handle multiple columns
    for (var i = 0; i < data.columns.length; i++) {
      var col = data.columns[i];

      // Check if the column has choices
      if (col.hasOwnProperty('choices')) {
        // Create a select element for each column
        var select = document.createElement("select");
        select.setAttribute("id", "dropdown_" + data.code + "_" + col.title);
        select.setAttribute("name", column + data.code + "_" + col.title);

        for (var choice in col.choices) {
          if (col.choices.hasOwnProperty(choice)) {
            var option = document.createElement("option");
            option.value = choice;
            option.text = col.choices[choice];
            select.appendChild(option);
          }
        }

        cell2.appendChild(select);
      }
    }
  } else if (data.hasOwnProperty('choices')) {
    // Handle a single column
    var select = document.createElement("select");
    select.setAttribute("id", "dropdown_" + data.code);
    select.setAttribute("name", column + data.code);

    for (var choice in data.choices) {
      if (data.choices.hasOwnProperty(choice)) {
        var option = document.createElement("option");
        option.value = choice;
        option.text = data.choices[choice];
        select.appendChild(option);
      }
    }

    cell2.appendChild(select);
  }

  return idx + 1;
}

function addFieldImage(table, idx, column, data) {
  var row = table.insertRow(idx);
  idx += 1
  var cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  cell.setAttribute("style", "text-align: center;");
  cell.innerHTML = data.title;
	
  row = table.insertRow(idx); 
  idx += 1;
  cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  cell.setAttribute("style", "text-align: center;");
  var undoButton = document.createElement("button");
  undoButton.setAttribute("type", "checkbox");
  undoButton.setAttribute("onclick", "undo(this.parentElement)");
  undoButton.innerHTML += "Undo";
  undoButton.setAttribute("id", "undo_"+data.code);
  undoButton.setAttribute("class", "undoButton");
  cell.appendChild(undoButton);

  row = table.insertRow(idx);
  idx += 1;
  cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  cell.setAttribute("style", "text-align: center;");
  var canvas = document.createElement('canvas');
  //canvas.onclick = onFieldClick;
  canvas.setAttribute("onclick", "onFieldClick(event)");
  canvas.setAttribute("class", "field-image-src");
  canvas.setAttribute("id", "canvas_"+data.code);
  canvas.innerHTML = "No canvas support";
  cell.appendChild(canvas);

  row = table.insertRow(idx);
  idx += 1
  row.setAttribute("style", "display:none");
  cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  var inp = document.createElement('input');
  inp.setAttribute("type", "hidden");
  inp.setAttribute("id", "XY_"+data.code);
  inp.setAttribute("value", "");
  cell.appendChild(inp);
  inp = document.createElement('input');
  inp.setAttribute("hidden", "");
  inp.setAttribute("id", "input_"+data.code);
  inp.setAttribute("value", "");
  cell.appendChild(inp);

  row = table.insertRow(idx);
  row.setAttribute("style", "display:none");
  idx += 1
  //row.setAttribute("style", "display:none");
  cell = row.insertCell(0);
  cell.setAttribute("colspan", 2);
  var img = document.createElement('img');
  img.src = data.filename;
  img.setAttribute("id", "img_"+data.code);
  img.setAttribute("class", "field-image-src");
	img.setAttribute("onload", "drawFields()");
  //img.setAttribute("onclick", "onFieldClick(event)");
  img.setAttribute("hidden", "");
  cell.appendChild(img);
}

function addDivider(table, idx, column, data) {
  var row1 = table.insertRow(idx);
  // var row2 = table.insertRow(idx+1);
  var cell1 = row1.insertCell(0);
  // var cell2 = row2.insertCell(0);
  cell1.colSpan = 2;
  // cell2.colSpan = 2;
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error:`;
    // cell2.innerHTML = `No code specified for ${data.title}`
    return idx+1;
  }
  cell1.setAttribute("class", "divider-header");
  cell1.innerHTML = data.title;
  // cell2.setAttribute("id", column + "_teaminfo_" + data.code);
  // cell2.setAttribute("class", "divider-info");
  // cell2.innerHTML = ("Fill in \"Match #\" and \"Robot\" fields");
  return idx+1;
}

function addText(table, idx, column, data) {
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${data.title}`;
    return idx+1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = data.title+'&nbsp;';
  cell2.classList.add("field");
  var inp = document.createElement("input");
  inp.setAttribute("id", "input_"+data.code);
  inp.setAttribute("type", "text");
  inp.setAttribute("name", column + data.code);
  if (data.hasOwnProperty('size')) {
    inp.setAttribute("size", data.size);
  }
  if (data.hasOwnProperty('maxSize')) {
    inp.setAttribute("maxLength", data.maxSize);
  }
  if (data.hasOwnProperty('defaultValue')) {
    inp.setAttribute("value", data.defaultValue);
  }
  if (data.hasOwnProperty('required')) {
    inp.setAttribute("required", "");
  }
  if (data.hasOwnProperty('disabled')) {
    inp.setAttribute("disabled", "");
  }
  cell2.appendChild(inp);

  if (data.hasOwnProperty('defaultValue')) {
    var def = document.createElement("input");
    def.setAttribute("id", "default_"+data.code)
    def.setAttribute("type", "hidden");
    def.setAttribute("value", data.defaultValue);
    cell2.appendChild(def);
  }
  return idx+1
}

function addNumber(table, idx, column, data) {
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${data.title}`;
    return idx+1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = data.title+'&nbsp;';
  cell2.classList.add("field");
  var inp = document.createElement("input");
  inp.setAttribute("id", "input_"+data.code);
  inp.setAttribute("type", "number");
  inp.setAttribute("name", column + data.code);
	if (data.type == 'match')
	{
		inp.setAttribute("onchange", `updateMatchStart('${column}')`);
	}
  if (data.type == 'team')
	{
		inp.setAttribute("onchange", `onTeamnameChange('${column}')`);
	}
  if (data.hasOwnProperty('min')) {
    inp.setAttribute("min", data.min);
  }
  if (data.hasOwnProperty('max')) {
    inp.setAttribute("max", data.max);
  }
  if (data.hasOwnProperty('defaultValue')) {
    inp.setAttribute("value", data.defaultValue);
  }
  if (data.hasOwnProperty('disabled')) {
    inp.setAttribute("disabled", "");
  }
  if (data.hasOwnProperty('required')) {
    inp.setAttribute("required", "");
  }
  cell2.appendChild(inp);

  if (data.hasOwnProperty('defaultValue')) {
    var def = document.createElement("input");
    def.setAttribute("id", "default_"+data.code)
    def.setAttribute("type", "hidden");
    def.setAttribute("value", data.defaultValue);
    cell2.appendChild(def);
  }

  return idx+1;
}

function addRadio(table, idx, column, data) {
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${data.title}`;
    return idx+1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = data.title+'&nbsp;';
  cell2.classList.add("field");
	if ((data.type == 'level') ||
			(data.type == 'robot')
		)
	{
		cell2.setAttribute("onchange", `updateMatchStart('${column}')`);
	}
  var checked = null
  if (data.hasOwnProperty('defaultValue')) {
    checked = data.defaultValue;
  }
  if (data.hasOwnProperty('choices')) {
    keys = Object.keys(data.choices);
    keys.forEach(c => {
      var inp = document.createElement("input");
      inp.setAttribute("id", "input_"+data.code+"_"+c);
      inp.setAttribute("type", "radio");
      inp.setAttribute("name", column + data.code);
			inp.setAttribute("value", c);
      if (checked == c) {
        inp.setAttribute("checked", "");
      }
      cell2.appendChild(inp);
      cell2.innerHTML += data.choices[c];
    });
  }
  var inp = document.createElement("input");
  inp.setAttribute("id", "display_"+data.code);
  inp.setAttribute("hidden", "");
  inp.setAttribute("value", "");
  cell2.appendChild(inp);

  if (data.hasOwnProperty('defaultValue')) {
    var def = document.createElement("input");
    def.setAttribute("id", "default_"+data.code)
    def.setAttribute("type", "hidden");
    def.setAttribute("value", data.defaultValue);
    cell2.appendChild(def);
  }

  return idx+1;
}

function addCheckbox(table, idx, column, data){
  var row = table.insertRow(idx);
  var cell1 = row.insertCell(0);
  cell1.classList.add("title");
  if (!data.hasOwnProperty('code')) {
    cell1.innerHTML = `Error: No code specified for ${data.title}`;
    return idx+1;
  }
  var cell2 = row.insertCell(1);
  cell1.innerHTML = data.title+'&nbsp;';
  cell2.classList.add("field");
  var inp = document.createElement("input");
  inp.setAttribute("id", "input_"+data.code);
  inp.setAttribute("type", "checkbox");
  inp.setAttribute("name", column + data.code);
  cell2.appendChild(inp);

  if (data.type == 'bool') {
    // cell2.innerHTML += "(checked = Yes)";
  }

  if (data.hasOwnProperty('defaultValue')) {
    var def = document.createElement("input");
    def.setAttribute("id", "default_"+data.code)
    def.setAttribute("type", "hidden");
    def.setAttribute("value", data.defaultValue);
    cell2.appendChild(def);
  }

  return idx+1;
}

function addElement(table, idx, column, data){
  var type = null;
  if (data.hasOwnProperty('type')){
    type = data.type
  } else {
    console.log("No type specified");
    err = (("defaultValue", "No type specified"));
    idx = addText(table, idx, column, err);
    return
  }
  if (type == 'counter') {
    idx = addCounter(table, idx, column, data);
  } else if (data.type == 'divider') {
    idx = addDivider(table, idx, column, data);
  } else if ((data.type == 'scouter') ||
             (data.type == 'event') ||
             (data.type == 'text')
           )
  {
    idx = addText(table, idx, column, data);
  } else if ((data.type == 'level') ||
             (data.type == 'radio') ||
             (data.type == 'robot')
           )
  {
    idx = addRadio(table, idx, column, data);
  } else if ((data.type == 'match') ||
             (data.type == 'team') ||
             (data.type == 'number')
           )
  {
    idx = addNumber(table, idx, column, data);
  } else if (data.type == 'field_image')
  {
    idx = addFieldImage(table, idx, column, data);
  } else if ((data.type == 'bool') ||
             (data.type == 'checkbox') ||
             (data.type == 'pass_fail')
           )
  {
    idx = addCheckbox(table, idx, column, data);
  } else if (data.type == 'counter')
  {
    idx = addCounter(table, idx, column, data);
  } else if (data.type == 'dropdown')
  { 
    idx = addDropdown(table,idx, column, data);
  } else {
    console.log(`Unrecognized type: ${data.type}`);
  }
  return idx
}

function update3(fieldname) {
  thisfielddata = document.forms["topForm"]['top' + fieldname].value;
  // for (column of ["left", "mid", "right"]) {
  for (column of columnList) {

    document.forms[column + "Form"][column + fieldname].value = thisfielddata;
    updateMatchStart(column);


  };
}

function setRobots(){
  allianceColor = document.forms["topForm"]["topr"].value
  rnum = "1".charCodeAt(0);
  // for (column of ["left", "mid", "right"]) {
  for (column of columnList) {
    document.forms[column + "Form"]["input_r_" + allianceColor + String.fromCharCode(rnum++)].checked = true;
    updateMatchStart(column);
  }
}

function configure(column){
  try {
    var mydata = config_data;
  } catch(err) {
    console.log(`Error parsing configuration file`)
    console.log(err.message)
    var table = document.getElementById("prematch_table")
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = `Error parsing configuration file: ${err.message}`
    return -1
  }


  if (mydata.hasOwnProperty('title')) {
    document.title = mydata.title;
  }

  if (mydata.hasOwnProperty('page_title')) {
    var elements = document.getElementsByClassName("page_title");
    for(var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = mydata.page_title;
    }
  }

  // Configure prematch screen
  var pmc = mydata.elements.prematch;
  var table = document.getElementById("prematch_table_" + column);
  var idx = 0;
  Object.entries(pmc).forEach((el) => {
    const [key, value] = el;
    idx = addElement(table, idx, column, value);
  });

  // Configure auton screen
  var ac = mydata.elements.auton;
  var at = document.getElementById("auton_table_" + column);
  idx = 0;
  Object.entries(ac).forEach((el) => {
    const [key, value] = el;
    idx = addElement(at, idx, key, value);
  });

  // Configure teleop screen
  var tc = mydata.elements.teleop;
  var tt = document.getElementById("teleop_table_" + column);
  idx = 0;
  Object.entries(tc).forEach((el) => {
    const [key, value] = el;
    idx = addElement(tt, idx, key, value);
  });

  // Configure endgame screen
  var egc = mydata.elements.endgame;
  var egt = document.getElementById("endgame_table_" + column);
  idx = 0;
  Object.entries(egc).forEach((el) => {
    const [key, value] = el;
    idx = addElement(egt, idx, key, value);
  });

  // Configure postmatch screen
  pmc = mydata.elements.postmatch;
  pmt = document.getElementById("postmatch_table_" + column);
  var idx = 0;
  Object.entries(pmc).forEach((el) => {
    const [key, value] = el;
    idx = addElement(pmt, idx, key, value);
  });
	
  return 0 
}

function getRobot(column){
		return document.forms[column + "Form"][column + "r"].value;
}

function validateRobot(column) {
		return (document.forms[column + "Form"][column + "r"].value != "")
}

function resetRobot() {
  document.querySelectorAll(`[id*='${column}_teaminfo_']`)
  for ( rb of document.querySelectorAll(`[*name='r']`)) { rb.checked = false };
}


function getLevel(column){
	// return document.forms[column + "Form"][column + "l"].value
  return "qm";
}

function validateLevel(column) {
  return (document.forms[column + "Form"][column + "l"].value != "")
}

function validateData() {
	var ret = true
	var errStr = "Bad fields: ";
	for (rf of requiredFields) {
		// Robot requires special (radio) validation
		if (rf == "r") {
			if (!validateRobot()) {
				errStr += rf + " "
				ret = false
			}
		} else if (rf == "l") {
			if (!validateLevel()) {
				errStr += rf + " "
				ret = false
			}
		// Normal validation (length <> 0)
		} else if (document.getElementById("input_"+rf).value.length == 0) {
			errStr += rf + " "
			ret = false
		}
	}
	if (ret == false) {
		alert("Enter all required values\n"+errStr);
	}
	return ret
}


function getData(Formname) {
  var UniqueFieldNames = [];
  var Data = []
  var Form = document.forms[Formname];
  // collect the names of all the elements in the form
  var fieldnames = Array.from(Form.elements, formElmt => formElmt.name);
  
  // the field names in the form will include blanks for separators and buttons, 
  // and duplicates for radio buttons in the same group.
  // strip out the blanks, and only add the field name if it has not already been added to UniqueFieldNames
  fieldnames.forEach((fieldname) => {if ( fieldname != "" && !UniqueFieldNames.includes(fieldname)) { UniqueFieldNames.push(fieldname) }} );
  
  //For each of the values stored in the fields listed in UniqueFieldNames, Convert Checkboxes to "Yes" or "No", and 
  // replace any tab characters with a dash,
  // then join the list of data with tabs and return it.  Using the /\t/g format for the replace string to catch multiple 
  // tabs in the same input string.
  UniqueFieldNames.forEach((field) => {
    if (Form[field].type == 'checkbox') {
      Data.push(Form[field].checked ? "Yes" : "No")
    } else {
      Data.push(Form[field].value.replace(/\t/g,"-"))
    }
  })
  return Data.join("\t")
}

function updateQRHeader() {
	var str = 'Event: !EVENT! Match: !MATCH! Robot: !ROBOT! Team: !TEAM!';

	str = str
		.replace('!EVENT!', document.getElementById("input_e").value)
		.replace('!MATCH!', document.getElementById("input_m").value)
		.replace('!ROBOT!', document.getElementById("display_r").value)
		.replace('!TEAM!', document.getElementById("input_t").value);

	document.getElementById("display_qr-info").textContent = str;
}


function qr_regenerate() {
	// Validate required pre-match data (event, match, level, robot, scouter)
	if (validateData() == false) {
		// Don't allow a swipe until all required data is filled in
		return false
	}
  var datafromcols = "";
	// Get data
  for (column of columnList) {
    datafromcols += getData(column + "Form") + "\n";
  }
	// leftdata = getData("leftForm");
  // middata = getData("midForm");
  // rightdata = getData("rightForm");
  // Regenerate QR Code
	// qr.makeCode(leftdata + "\n"  + middata + "\n" + rightdata)
  qr.makeCode(datafromcols);
	updateQRHeader();
	return true
}

function qr_clear() {
    qr.clear()
}

function clearForm() {

    console.log("Clear Form");

	var match = 0;
	var e = 0;

	swipePage(-1)
  
  // clear any displayed data
  document.getElementById('data').innerHTML = "";
  // reset copy data button text
  document.getElementById('copyButton').setAttribute('value','Copy Data');
  

	// Increment match
  if ("topForm" in document.forms) {
    var matchIncrementForms = [].concat("top", columnList);
  } else {
    var matchIncrementForms = columnList;
  }
  console.log("clearing forms "+ matchIncrementForms)
  for (formPosition of matchIncrementForms)  {
    match = parseInt(document.forms[formPosition + "Form"][formPosition + "m"].value)
    if (match == NaN) {
      document.forms[formPosition + "Form"][formPosition + "m"].value = ""
    } else {
      document.forms[formPosition + "Form"][formPosition + "m"].value = match+1
    }

  };

  //Uncommenting this will make "Clear Form" clear the Robot field
  //We usually scout the same alliance every time
  //resetRobot()

	// Clear XY coordinates
	inputs = document.querySelectorAll("[id*='XY_']");
	for (e of inputs) {
		code = e.id.substring(3)
		e.value = ""
	}

	inputs = document.querySelectorAll("[id*='input_']");
	for (e of inputs) {
		code = e.id.substring(6)

		// Don't clear key fields
		if (code == "m") continue
		if (code.substring(0,2) == "r_") continue
		if (code.substring(0,2) == "l_") continue
		if (code == "e") continue
		if (code == "s") continue


		radio = code.indexOf("_")
		if (radio > -1) {
			var baseCode = code.substr(0, radio)
			if (e.checked) {
				e.checked = false
				document.getElementById("display_"+baseCode).value = ""
			}
			var defaultValue = document.getElementById("default_"+baseCode)
			if (defaultValue) {
				if (defaultValue.value == e.value) {
					console.log("they match!")
					e.checked = true
					document.getElementById("display_"+baseCode).value = defaultValue.value
				}
			}
		} else {
			if (e.type=="number" || e.type=="text" || e.type=="hidden") {
				if (e.className == "counter") {
					e.value = 0
				} else {
					e.value = ""
				}
			} else if (e.type == "checkbox") {
				if (e.checked == true) {
					e.checked = false
				}
			} else {
				console.log("unsupported input type")
			}
		}
	}
	drawFields();
  for (column of columnList)  {
    updateMatchStart(column);
  }
}

function startTouch(e) {
	initialX = e.touches[0].screenX;
};

function moveTouch(e) {
	if (initialX === null) {
  	return;
	}

	var currentX = e.changedTouches[0].screenX;
	var diffX = initialX - currentX;

  // sliding horizontally
	if (diffX/screen.width > xThreshold) {
		// swiped left
		swipePage(1);
	} else if(diffX/screen.width < -xThreshold) {
		// swiped right
  	swipePage(-1);
	}
	initialX = null;
};

function swipePage(incriment){
  console.log("swipepage called with " + incriment);
	if (qr_regenerate() == true) {
		slides = document.getElementById("main-panel-holder").children
		if(slide + incriment <= slides.length && slide + incriment >= 0){
			slides[slide].style.display = "none";
			slide += incriment;
			window.scrollTo(0,0);
			slides[slide].style.display = "block";
		}
	}
}

function drawFields(name) {
	var fields = document.querySelectorAll("[id*='canvas_']");

	for (f of fields) {
		code = f.id.substring(7);
		var img = document.getElementById("img_"+code);
		var ctx = f.getContext("2d");
		ctx.clearRect(0,0,f.width,f.height);
		ctx.drawImage(img, 0, 0, f.width, f.height);

		var xyStr = document.getElementById("XY_"+code).value
		if (JSON.stringify(xyStr).length > 2) {
			pts = Array.from(JSON.parse(xyStr))
			for (p of pts) {
				var coord = p.split(",")
				var centerX = coord[0];
				var centerY = coord[1];
				var radius = 5;
				ctx.beginPath();
				ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
				ctx.lineWidth = 1;
				ctx.strokeStyle = '#FFFFFF';
				ctx.stroke();
			}
		}
	}
}

function onFieldClick(event){
	//Resolution height and width (e.g. 52x26)
	var resL = 12;
	var resH = 6;

	let target = event.target;

	//Turns coordinates into a numeric box
	let box = ((Math.ceil(event.offsetY / target.height * resH )-1) * resL) + Math.ceil(event.offsetX / target.width * resL)
	let coords = event.offsetX + "," + event.offsetY;

	//Cumulating values
	changingXY = document.getElementById("XY" + getIdBase(target.id));
	changingInput = document.getElementById("input" + getIdBase(target.id));

	// TODO: 2nd half of this if statement is a hack for auto start - don't allow more than one starting position
	if((JSON.stringify(changingXY.value).length > 2) && changingXY.id !== "XY_as"){
		var tempValue = Array.from(JSON.parse(changingXY.value));
		tempValue.push(coords);
		changingXY.value = JSON.stringify(tempValue);

		tempValue = Array.from(JSON.parse(changingInput.value));
		tempValue.push(box);
		changingInput.value = JSON.stringify(tempValue);
	} else{
		changingXY.value = JSON.stringify([coords]);
		changingInput.value = JSON.stringify([box]);
	}

	drawFields()
}

function getIdBase(name){
	return name.slice(name.indexOf("_"), name.length)
}

function getTeamName(teamNumber){
	if(teamNumber !== undefined){
		if (teams) {
			var teamKey = "frc" + teamNumber;
			var ret = "";
			Array.from(teams).forEach(team => ret = team.key == teamKey ? team.nickname : ret);
			return ret;
		}
	}
	return "";
}

function getMatch(matchKey){
	//This needs to be different than getTeamName() because of how JS stores their data
	if(matchKey !== undefined){
		if (schedule) {
			var ret = "";
			Array.from(schedule).forEach(match => ret = match.key == matchKey ? match.alliances : ret);
			return ret;
		}
	}
	return "";
}

function getCurrentTeamNumberFromRobot(column){
  robot = getRobot(column);
	if(robot != "" && typeof robot !== 'undefined' && getCurrentMatch(column) != ""){
		if(robot.charAt(0) == "r"){
			return getCurrentMatch(column).red.team_keys[parseInt(robot.charAt(1))-1]
		} else if(getRobot(column).charAt(0) == "b"){
			return getCurrentMatch(column).blue.team_keys[parseInt(robot.charAt(1))-1]
		}
	} else {
    return "";
  }
}

function getCurrentMatchKey(column){
	return document.forms[column + "Form"][column + "e"].value + "_" + getLevel(column) + document.forms[column + "Form"][column + "m"].value;
}

function getCurrentMatch(column){
	return getMatch(getCurrentMatchKey(column));
}

function updateMatchStart(column){
	if((getCurrentMatch(column) == "") || (getRobot(column) == "") || (getCurrentTeamNumberFromRobot(column) == "") || (!teams)) {
    document.forms[column + "Form"][column + "t"].value = "";
    onTeamnameChange(column);
    return;
	}
  console.log("updateMatchStart - validated");
	document.forms[column + "Form"][column + "t"].value = getCurrentTeamNumberFromRobot(column).replace("frc", "");
	onTeamnameChange(column);
}

function onTeamnameChange(column){
	var newNumber = document.forms[column + "Form"][column + "t"].value;
  var teamInfos = document.querySelectorAll(`[id*='${column}_teaminfo_']`);
	if(newNumber != ""){
    for (i of teamInfos) {
      i.innerHTML = "<b><i>" + newNumber + ": " + getTeamName(newNumber) + "</i></b>";
    }
	} else{
    for (i of teamInfos) {
      i.innerHTML = ("Fill in \"Match #\" and \"Robot\" fields");
    }
	}
}

/**
 * adds to the number in innerHTML of the value tag.
 *
 * @param {element} element the <div> tag element (parent to the value tag).
 * @param {number} step the amount to add to the value tag.
 */
function counter(element, step)
{
  console.log("counter() called");
  var ctr = element.getElementsByClassName("counter")[0];
  var result = parseInt(ctr.value) + step;

  if(isNaN(result)) {
    result = 0;
  }

  if(result >= 0 || ctr.hasAttribute('data-negative')) {
    ctr.value = result;
  } else {
    ctr.value = 0;
  }
  console.log("counter() finished");
  return false;
}

function undo(event)
{
   let undoID = event.firstChild;
   //Getting rid of last value
   changingXY = document.getElementById("XY" + getIdBase(undoID.id));
   changingInput = document.getElementById("input" + getIdBase(undoID.id));
   var tempValue = Array.from(JSON.parse(changingXY.value));
   tempValue.pop();
   changingXY.value = JSON.stringify(tempValue);

   tempValue = Array.from(JSON.parse(changingInput.value));
   tempValue.pop();
   changingInput.value = JSON.stringify(tempValue);
   drawFields();
}

function displayData(){
  var datafromcols = "";
	// Get data
  for (column of columnList) {
    datafromcols += getData(column + "Form") + "<br>\n";
  }
  document.getElementById('data').innerHTML = datafromcols;
}

function copyData(){
  var datafromcols = "";
	// Get data
  for (column of columnList) {
    datafromcols += getData(column + "Form") + "\n";
  }
  navigator.clipboard.writeText(datafromcols);
  document.getElementById('copyButton').setAttribute('value','Copied');
}

window.onload = function(){

  for (column of columnList) {
    var ret_left = configure(column);
    if (ret_left != -1) {
      var ec = document.getElementById("input_e").value;
      getTeams(ec);
      getSchedule(ec);
      this.drawFields();
    }
   
  }

};

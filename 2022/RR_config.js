var config_data = `
{
  "title":"Scouting PASS 2022",
  "page_title":"ScoutingPASS 95",
  "elements":{
    "prematch": {
      "Scouter Name": {
        "code":"s",
        "type":"scouter",
        "size":10,
        "maxSize":20,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022nhgrs",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "qm":"Qualifiers<br>",
          "ef":"Eliminations"
        },
        "defaultValue":"qm",
        "required":"true"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
     "Robot": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        },
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      },
      "Taxi": {
        "code":"at",
        "title":"Taxi",
        "type":"bool"
      },
      "Auton Cargo Scored": {
        "code":"as",
        "title": "Auton Cargo Scored",
        "type":"radio",
        "choices":{
          "0":"0",
          "1":"1",
          "2":"2<br>",
          "3":"3",
          "4":"4",
          "5":"5<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Auton Target Goal": {
        "code":"ag",
        "title":"Auton Target Goal",
        "type":"radio",
        "choices":{
          "None":"None<br>",
          "Low":"Low<br>",
          "High":"High<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Shots Taken": {
        "code":"ta",
        "title": "Cargo Attempted",
        "type":"radio",
        "choices":{
          "None":"None<br>",
          "Some":"Some<br>",
          "Lots":"Lots<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Shot Accuracy": {
        "code":"ts",
        "title": "Cargo Scored",
        "type":"radio",
        "choices":{
          "Low":"Low<br>",
          "Medium":"Medium<br>",
          "High":"High<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Target Goal": {
        "code":"tg",
        "title": "Target Goal",
        "type":"radio",
        "choices":{
          "None":"None<br>",
          "Low":"Low<br>",
          "High":"High<br>",
          "Both":"Both<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Cargo Intake": {
        "code":"ci",
        "title": "Cargo Intake",
        "type":"radio",
        "choices":{
          "None":"None<br>",
          "Terminal":"Terminal<br>",
          "Ground":"Ground<br>",
          "Both":"Both<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Shooting Spot": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"radio",
        "choices":{
          "None":"None<br>",
          "Close":"Close<br>",
          "Far":"Far<br>",
          "Adjustable":"Adjustable<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Attempted Climb": {
        "code":"ac",
        "title": "Attempted Climb",
        "type":"radio",
        "choices":{
          "1":"Bar 1<br>",
          "2":"Bar 2<br>",
          "3":"Bar 3<br>",
          "4":"Bar 4<br>",
          "Not Attempted":"Not Attempted<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Successful Climb": {
        "code":"sc",
        "title": "Successful Climb",
        "type":"radio",
        "choices":{
          "None":"None<br>",
          "1":"Bar 1<br>",
          "2":"Bar 2<br>",
          "3":"Bar 3<br>",
          "4":"Bar 4<br>",
          "Not Attempted":"Not Attempted<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Climb Time": {
        "code":"ct",
        "title": "Climb Time",
        "type":"radio",
        "choices":{
          "0-10":"0-10 secs<br>",
          "10-20":"10-20 secs<br>",
          "20-30":"20-30 secs<br>",
          ">30":">30 secs<br>",
          "Not Attempted":"Not Attempted<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Driver Skill": {
        "code":"drs",
        "title": "Driver Skill",
        "type":"radio",
        "choices":{
          "Low":"Low<br>",
          "Medium":"Medium<br>",
          "High":"High<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Defense Skill": {
        "code":"des",
        "title": "Defense Skill",
        "type":"radio",
        "choices":{
          "Didn't Defend":"Didn't Defend<br>",
          "Low":"Low<br>",
          "Medium":"Medium<br>",
          "High":"High<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Defense Tolerance": {
        "code":"dt",
        "title": "Defense Tolerance",
        "type":"radio",
        "choices":{
          "Wasn't Defended":"Wasn't Defended<br>",
          "Low":"Low<br>",
          "Medium":"Medium<br>",
          "High":"High<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":100
      }
    }
  }
}`;

var config_data = 
{
  "title":"ScoutingPASS 95",
  "page_title":"ScoutingPASS 95",
  "elements":{
    "prematch": {
      "Prematch": {
        "code":"prm-div",
        "title":"Prematch",
        "type":"divider"
      },
      "Scouter Name": {
        "code":"s",
        "title":"Scouter Name",
        "type":"scouter",
        "size":10,
        "maxSize":20
      },
      "Event":{
        "code":"e",
        "title":"Event",
        "type":"event",
        "defaultValue":"2025necmp2",
        "disabled":"true"
      },
      "Match Number":{
        "code":"m",
        "title":"Match Number",
        "type":"match",
        "min":1,
        "max":100
      },
     "Robot": {
        "code":"r",
        "title":"Robot",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        }
      },
      "Team Number": {
        "code":"t",
        "title":"Team Number",
        "type":"team",
        "min":1,
        "max":99999
      },
    },
    "auton": {
      "Autonomous": {
        "code":"a-div",
        "title":"Autonomous",
        "type":"divider"
      },
      "Auton Leaves Line?": {
        "code":"all",
        "title":"Leaves Line?",
        "type":"bool"
      },
      "Auton Coral Scored": {
        "code":"ac",
        "title": "Coral Scored",
        "type":"counter",
        "min":0,
        "max":10
      },
      "Auton Algae Scored": {
        "code":"aa",
        "title": "Algae Scored",
        "type":"counter",
        "min":0,
        "max":10
      },
      "Auton Algae Removed": {
        "code":"aar",
        "title": "Algae Removed",
        "type":"counter",
        "min":0,
        "max":10
      },
    },
    "teleop": {
      "Teleop": {
        "code":"t-div",
        "title":"Teleop",
        "type":"divider"
      },
      "Teleop Coral Scored": {
        "code":"tco",
        "title": "Coral Scored",
        "type":"radio",
        "choices":{
          "0":"None<br>",
          "2":"1-3<br>",
          "5":"4-6<br>",
          "8":"7-9<br>",
          "10":"10+<br>"
        },
        "defaultValue":"'0"
      },
      "Teleop Algae Scored B": {
        "code":"tab",
        "title": "Barge Algae Scored",
        "type":"counter",
        "min":0,
        "max":10
      },
      "Teleop Algae Scored P": {
        "code":"tap",
        "title": "Processor Algae Scored",
        "type":"counter",
        "min":0,
        "max":10
      },
      "Teleop Preferred Scoring Level": {
        "code":"tl",
        "title": "Preferred Scoring Level",
        "type":"radio",
        "choices":{
          "L4":"L4<br>",
          "L3":"L3<br>",
          "L2":"L2<br>",
          "L1":"L1<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
    },
    "endgame": {
      "Endgame": {
        "code":"e-div",
        "title":"Endgame",
        "type":"divider"
      },
      "Endgame Climb Status": {
        "code":"ec",
        "title": "Climb Status",
        "type":"radio",
        "choices":{
          "None":"None<br>",
          "Parked":"Parked<br>",
          "Shallow":"Shallow<br>",
          "Deep":"Deep<br>"
        },
        "defaultValue":"Not Observed"
      },
      "Endgame Time to Climb": {
        "code":"et",
        "title": "Time to Climb",
        "type":"radio",
        "choices":{
          "'0-5":"0-5 secs<br>",
          "'5-15":"5-15 secs<br>",
          "'15-30":"15-30 secs<br>",
          "'>30":">30 secs<br>",
          "Not Attempted":"Not Attempted<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
    },
    "postmatch": {
      "Postmatch": {
        "code":"pom-div",
        "title":"Postmatch",
        "type":"divider"
      },
      "Teleop Can Handle Coral?": {
        "code":"tco",
        "title":"Can Handle Coral?",
        "type":"bool"
      },
      "Teleop Can Handle Algae?": {
        "code":"tal",
        "title":"Can Handle Algae?",
        "type":"bool"
      },
      "Driver Skill": {
        "code":"pdri",
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
        "code":"pdef",
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
      "Human Player Skill": {
        "code":"php",
        "title": "Human Player Skill",
        "type":"radio",
        "choices":{
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
};

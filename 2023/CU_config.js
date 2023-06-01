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
        "defaultValue":"2023MAWo2",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "title":"Match Level",
        "type":"level",
        "choices":{
          "qm":"Qualifiers",
        },
        "defaultValue":"qm"
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
      "Auton Objects Scored": {
        "code":"as",
        "title": "Objects Scored",
        "type":"radio",
        "choices":{
          "'0":"None<br>",
          "'1":"1<br>",
          "'2":"2<br>",
          "'3":"3<br>",
          "'4+":"4+<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Auton Highest Scoring Level": {
        "code":"al",
        "title": "Highest Scoring Level",
        "type":"radio",
        "choices":{
          "Low":"Low<br>",
          "Medium":"Medium<br>",
          "High":"High<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Auton Charging Pad Level": {
        "code":"ac",
        "title": "Charging Pad Level",
        "type":"radio",
        "choices":{
          "None":"None<br>",
          "Docked":"Docked<br>",
          "Engaged":"Engaged<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Auton Charging Pad Location": {
        "code":"ab",
        "title": "Charging Pad Location",
        "type":"radio",
        "choices":{
          "Edge":"Edge<br>",
          "Center":"Center<br>",
          "Not Attempted":"Not Attempted<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
    },
    "teleop": {
      "Teleop": {
        "code":"t-div",
        "title":"Teleop",
        "type":"divider"
      },
      "Teleop Objects Scored": {
        "code":"tos",
        "title": "Objects Scored",
        "type":"radio",
        "choices":{
          "'0":"None<br>",
          "'1-3":"1-3<br>",
          "'4-6":"4-6<br>",
          "'7-10":"7-10<br>",
          "'11-15":"11-15<br>",
          "'16+":"16+<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Teleop Picks Up From Ground": {
        "code":"tpg",
        "title":"Picks Up From Ground",
        "type":"bool"
      },
      "Teleop Picks Up From Shelf": {
        "code":"tps",
        "title":"Picks Up From Shelf",
        "type":"bool"
      },
      "Teleop Preferred Scoring Level": {
        "code":"tl",
        "title": "Preferred Scoring Level",
        "type":"radio",
        "choices":{
          "Low":"Low<br>",
          "Medium":"Medium<br>",
          "High":"High<br>",
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
      "Endgame Ending Position": {
        "code":"ec",
        "title": "Ending Position",
        "type":"radio",
        "choices":{
          "None":"None<br>",
          "BC Dot":"BC Dot<br>",
          "Docked":"Docked<br>",
          "Engaged":"Engaged<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Endgame Time to Dock": {
        "code":"et",
        "title": "Time to Dock",
        "type":"radio",
        "choices":{
          "'0-5":"0-5 secs<br>",
          "'5-10":"5-10 secs<br>",
          "'10-15":"10-15 secs<br>",
          "'15+":"15+ secs<br>",
          "Not Attempted":"Not Attempted<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Endgame Charging Pad Location": {
        "code":"eb",
        "title": "Charging Pad Location",
        "type":"radio",
        "choices":{
          "Edge":"Edge<br>",
          "Center":"Center<br>",
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
      "Teleop Can Handle Cones?": {
        "code":"tco",
        "title":"Can Handle Cones?",
        "type":"bool"
      },
      "Teleop Can Handle Cubes?": {
        "code":"tcu",
        "title":"Can Handle Cubes?",
        "type":"bool"
      },
      "Driver Skill": {
        "code":"pdrs",
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
        "code":"pdes",
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

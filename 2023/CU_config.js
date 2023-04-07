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
        "defaultValue":"2023necmp2",
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
      "Auton Exits Community?": {
        "code":"ae",
        "title":"Exits Community?",
        "type":"bool"
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
          "'1":"1<br>",
          "'2-3":"2-3<br>",
          "'4-6":"4-6<br>",
          "'7-10":"7-10<br>",
          "'11+":"11+<br>",
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
      "Endgame Charging Pad Level": {
        "code":"ec",
        "title": "Charging Pad Level",
        "type":"radio",
        "choices":{
          "None":"None<br>",
          "Parked":"Parked<br>",
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
          "'5-15":"5-15 secs<br>",
          "'15-30":"15-30 secs<br>",
          "'>30":">30 secs<br>",
          "Not Attempted":"Not Attempted<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Endgame Number of Balance Buddies": {
        "code":"eb",
        "title": "Number of Balance Buddies",
        "type":"radio",
        "choices":{
          "0":"0<br>",
          "1":"1<br>",
          "2":"2<br>",
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

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
        "defaultValue":"2024nhgrs",
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
        "max":78
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
        "title":"Leaves Startline?",
        "type":"bool"
      },

      "Auto Amp Notes Scored": {
        "code":"aa",
        "title": "Amp Notes Scored",
        "type":"counter",
        "min":0,
        "max":50
      },
      "Auto Speaker Notes Scored": {
        "code":"as",
        "title": "Speaker Notes Scored",
        "type":"counter",
        "min":0,
        "max":50
      },
    },
    "teleop": {
      "Teleop": {
        "code":"t-div",
        "title":"Teleop",
        "type":"divider"
      },
      "Teleop Amp Notes Scored": {
        "code":"ta",
        "title": "Amp Notes Scored",
        "type":"counter",
        "min":0,
        "max":50
      },
      "Teleop Muffled Speaker Notes Scored": {
        "code":"tms",
        "title": "Muffled Speaker Notes",
        "type":"counter",
        "min":0,
        "max":50
      },
      "Teleop Amped Speaker Notes Scored": {
        "code":"tas",
        "title": "Amped Speaker Notes",
        "type":"counter",
        "min":0,
        "max":50
      },
    },
    "endgame": {
      "Endgame": {
        "code":"e-div",
        "title":"Endgame",
        "type":"divider"
      },
      "Endgame Harmony": {
        "code":"eh",
        "title": "Harmony",
        "type":"radio",
        "choices":{
          "None":"None<br>",
          "Parked":"Parked<br>",
          "Soloist":"Soloist<br>",
          "Harmony":"Harmony<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Endgame Show Queue": {
        "code":"et",
        "title": "Time to Queue",
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
      "Trap?": {
        "code":"tr",
        "title":"Trap",
        "type":"bool"
      },
      "Spotlit?": {
        "code":"sl",
        "title":"Spotlit?",
        "type":"bool"
      },

    },
    "postmatch": {
      "Postmatch": {
        "code":"pom-div",
        "title":"Postmatch",
        "type":"divider"
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
      "Button Presser": {
        "code":"th",
        "title":"Button Presser?",
        "type":"bool"
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

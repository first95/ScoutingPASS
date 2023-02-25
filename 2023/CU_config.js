var config_data = 
{
  "title":"ScoutingPASS 95",
  "page_title":"ScoutingPASS 95",
  "elements":{
    "prematch": {
      "Prematch": {
        "code":"prm-div",
        "title":"Pregame",
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
        "defaultValue":"2022necmp2",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "title":"Match Level",
        "type":"level",
        "choices":{
          "qm":"Qualifiers<br>",
          "ef":"Eighthfinals<br>",
          "qf":"Quarterfinals<br>",
          "sf":"Semifinals<br>",
          "f":"Finals"
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
        "type":"counter"
      },
      "Auton Can Score Cones?": {
        "code":"aco",
        "title":"Can Score Cones?",
        "type":"bool"
      },
      "Auton Can Score Cubes?": {
        "code":"acu",
        "title":"Can Score Cubes?",
        "type":"bool"
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
      "Teleop": {
        "code":"t-div",
        "title":"Teleop",
        "type":"divider"
      },
      "Teleop Objects Scored": {
        "code":"ts",
        "title": "Objects Scored",
        "type":"counter"
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
      "Teleop Picks Up From Ground": {
        "code":"tpg",
        "title":"Picks Up From Ground",
        "type":"bool"
      },
      "Teleop Picks Up From Chute": {
        "code":"tpc",
        "title":"Picks Up From Chute",
        "type":"bool"
      },
      "Teleop Picks Up From Shelf": {
        "code":"tps",
        "title":"Picks Up From Shelf",
        "type":"bool"
      },
      "Teleop Highest Scoring Level": {
        "code":"tl",
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
      "Endgame": {
        "code":"eg-div",
        "title":"Endgame",
        "type":"divider"
      },
      "Endgame Returns to Community?": {
        "code":"er",
        "title":"Returns to Community?",
        "type":"bool"
      },
      "Endgame Charging Pad Level": {
        "code":"ec",
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
      "Endgame Time to Dock": {
        "code":"et",
        "title": "Time to Dock",
        "type":"radio",
        "choices":{
          "0-5":"0-5 secs<br>",
          "5-15":"5-15 secs<br>",
          "15-30":"15-30 secs<br>",
          ">30":">30 secs<br>",
          "Not Attempted":"Not Attempted<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Postmatch": {
        "code":"pom-div",
        "title":"Postmatch",
        "type":"divider"
      },
      "Speed": {
        "code":"ps",
        "title": "Speed",
        "type":"radio",
        "choices":{
          "Slow":"Slow<br>",
          "Medium":"Medium<br>",
          "Fast":"Fast<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      },
      "Maneuverability": {
        "code":"pm",
        "title": "Maneuverability",
        "type":"radio",
        "choices":{
          "Low":"Low<br>",
          "Medium":"Medium<br>",
          "High":"High<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
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
      "Defense Tolerance": {
        "code":"pdet",
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
};

var config_data = `
{
  "title":"Scouting PASS 2022",
  "page_title":"Rapid React",
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
     "Alliance": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red<br>",
          "r2":"Blue"
        },
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      }
    },
    "auton": {
      "Taxi": {
        "code":"at",
        "title":"Taxi",
        "type":"bool"
      },
      "Cargo Scored": {
        "code":"as",
        "title": "Cargo Scored",
        "type":"radio",
        "choices":{
          "None":"None<br>",
          "Some":"Some<br>",
          "Lots":"Lots<br>",
          "Not Observed":"Not Observed"
        },
        "defaultValue":"Not Observed"
      }
    },
    "teleop": {
      "Cargo Attempted": {
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
      "Cargo Scored": {
        "code":"ts",
        "title": "Cargo Scored",
        "type":"radio",
        "choices":{
          "None":"None<br>",
          "Some":"Some<br>",
          "Lots":"Lots<br>",
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
      }
    },
    "endgame": {
      "Attempted Climb": {
        "code":"ac",
        "title": "Attempted Climb",
        "type":"radio",
        "choices":{
          "1":"Bar 1<br>",
          "2":"Bar 2<br>",
          "3":"Bar 3<br>",
          "4":"Bar 4<br>",
          "Not Attempted":"Not Attempted"
        },
        "defaultValue":"Not Attempted"
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
          "Not Attempted":"Not Attempted"
        },
        "defaultValue":"Not Attempted"
      },
      "Climb Time": {
        "code":"ct",
        "title": "Climb Time",
        "type":"radio",
        "choices":{
          "None":"None<br>",
          "0-10":"0-10 secs<br>",
          "10-20":"10-20 secs<br>",
          "20-30":"20-30 secs<br>",
          "30+":"30+ secs<br>",
          "Not Attempted":"Not Attempted"
        },
        "defaultValue":"Not Attempted"
      }
    },
    "postmatch": {
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
      "Was Defended": {
        "code":"wd",
        "title": "Was Defended",
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
}`;

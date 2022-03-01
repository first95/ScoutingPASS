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
          "Not observed":"Not observed"
        },
        "defaultValue":"Not observed"
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
          "Not observed":"Not observed"
        },
        "defaultValue":"Not observed"
      },
      "Cargo Scored": {
        "code":"ts",
        "title": "Cargo Scored",
        "type":"radio",
        "choices":{
          "None":"None<br>",
          "Some":"Some<br>",
          "Lots":"Lots<br>",
          "Not observed":"Not observed"
        },
        "defaultValue":"Not observed"
      },
      "Target Goal": {
        "code":"tg",
        "title": "Target Goal",
        "type":"radio",
        "choices":{
          "Low":"Low<br>",
          "High":"High<br>",
          "Both":"Both<br>",
          "None":"None<br>",
          "Not observed":"Not observed"
        },
        "defaultValue":"Not observed"
      },
      "Cargo Intake": {
        "code":"ci",
        "title": "Cargo Intake",
        "type":"radio",
        "choices":{
          "Terminal":"Terminal<br>",
          "Ground":"Ground<br>",
          "Both":"Both<br>",
          "None":"None<br>",
          "Not observed":"Not observed"
        },
        "defaultValue":"Not observed"
      },
      "Was Defended": {
        "code":"wd",
        "title": "Was Defended",
        "type":"bool"
      },
      "Shooting Spot": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"radio",
        "choices":{
          "Close":"Close<br>",
          "Far":"Far<br>",
          "Adjustable":"Adjustable<br>",
          "None":"None<br>",
          "Not observed":"Not observed"
        },
        "defaultValue":"Not observed"
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
          "Not attempted":"Not attempted"
        },
        "defaultValue":"Not attempted"
      },
      "Successful Climb": {
        "code":"sc",
        "title": "Successful Climb",
        "type":"radio",
        "choices":{
          "1":"Bar 1<br>",
          "2":"Bar 2<br>",
          "3":"Bar 3<br>",
          "4":"Bar 4<br>",
          "None":"None<br>",
          "Not attempted":"Not attempted"
        },
        "defaultValue":"Not attempted"
      },
      "Climb Time": {
        "code":"ct",
        "title": "Climb Time",
        "type":"radio",
        "choices":{
          "10":"0-10 secs<br>",
          "20":"10-20 secs<br>",
          "30":"20-30 secs<br>",
          "30+":"30+ secs<br>",
          "Not attempted":"Not attempted"
        },
        "defaultValue":"Not attempted"
      }
    },
    "postmatch": {
      "Driver Skill": {
        "code":"drs",
        "title": "Driver Skill",
        "type":"radio",
        "choices":{
          "High":"High<br>",
          "Medium":"Medium<br>",
          "Low":"Low<br>",
          "Not observed":"Not observed"
        },
        "defaultValue":"Not observed"
      },
      "Defense Skill": {
        "code":"des",
        "title": "Defense Skill",
        "type":"radio",
        "choices":{
          "High":"High<br>",
          "Medium":"Medium<br>",
          "Low":"Low<br>",
          "Didn't Defend":"Didn't Defend<br>",
          "Not observed":"Not observed"
        },
        "defaultValue":"Not observed"
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
var config_data = `
{
  "title":"Scouting PASS 2022",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Scouter": {
        "code":"s",
        "type":"scouter",
        "size":20,
        "maxSize":20,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022NHGRS",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "Quals":"Qualifiers",
          "Elims":"Eliminations"
        },
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
          "Red":"Red<br>"
          "Blue":"Blue"
        },
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
        "required":"true"
      }
    },
    "auton": {
      "Taxi": {
        "code":"at",
        "title":"Taxi",
        "type":"bool"
      },
      "Cargo Scored": {
        "code":"scored",
        "title": "Cargo Scored",
        "type":"radio"
        "choices":{
          "None":"None<br>"
          "Some":"Some<br>"
          "Lots":"Lots"
        }
      }
    },
    "teleop": {
      "Cargo Attempted": {
        "code":"attempted",
        "title": "Cargo Attempted",
        "type":"radio"
        "choices":{
          "None":"None<br>"
          "Some":"Some<br>"
          "Lots":"Lots"
        }
      },
      "Cargo Scored": {
        "code":"scored",
        "title": "Cargo Scored",
        "type":"radio"
        "choices":{
          "None":"None<br>"
          "Some":"Some<br>"
          "Lots":"Lots"
        }
      },
      "Target Goal": {
        "code":"target"
        "title":"Target Goal"
        "type":"radio"
        "choices"{
          "Low":"Low<br>"
          "High":"High<br>"
          "Both":"Both"
        }
      }
      "Was Defended": {
        "code":"defended",
        "title": "Was Defended",
        "type":"bool"
      },
      "Cargo Intake From": {
        "code":"cif",
        "title": "Cargo Intake From",
        "type":"radio",
        "choices":{
          "Terminal":"Terminal<br>",
          "Ground":"Ground<br>",
          "Both":"Both<br>",
          "None":"None"
        },
        "defaultValue":"None"
      },
      "Shooting Spot": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"radio",
        "choices":{
          "Close":"Close<br>"
          "Far":"Far<br>"
          "Adjustable":"Adjustable"
        }
      }
    },
    "endgame": {
      "Attempted Climb": {
        "code":"c",
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
        "code":"lsr",
        "title": "Successful Climb",
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
      "Climb Time": {
        "code":"be",
        "title": "Climb Time",
        "type":"radio"
        "choices":{
          "10":"0-10 secs"
          "20":"10-20 secs"
          "30":"20-30 secs"
          "30+":"30+ secs"
        }
      }
    },
    "postmatch": {
      "Driver Skill": {
        "code":"ds",
        "title": "Driver Skill",
        "type":"radio",
        "choices":{
          "High":"High<br>",
          "Medium":"Medium<br>",
          "Low":"Low<br>",
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

var config_data = `
{
  "title":"Scouting PASS 2022",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Scouter": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "Quals":"Qualifiers>",
          "Elims":"Eliminations"
        },
        "defaultValue":"Quals",
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
        "type":"radio",
        "choices":{
          "Red":"Red"
          "Blue":"Blue"
        },
        "required":"true"
      },
      "Team 1 #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      },
      "Team 2 #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      },
      "Team 3 #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      }
    },
    "autonomous": {
      "Taxi": {
        "code":"at",
        "title":"Taxi",
        "type":"bool"
      },
      "Team 1 Cargo Scored": {
        "code":"scored1",
        "title": "Team 1 Cargo Scored",
        "type":"radio"
        "choices":{
          "None":"None"
          "Some":"Some"
          "Lots":"Lots"
        }
      }
    },
    "teleop": {
      "Team 1 Cargo Scored": {
        "code":"scored1",
        "title": "Team 1 Cargo Scored",
        "type":"radio"
        "choices":{
          "None":"None"
          "Some":"Some"
          "Lots":"Lots"
        }
      },
      "Team 1 Cargo Attempted": {
        "code":"attempted1",
        "title": "Team 1 Cargo Attempted",
        "type":"radio"
        "choices":{
          "None":"None"
          "Some":"Some"
          "Lots":"Lots"
        }
      },
      "Team 1 Was Defended": {
        "code":"defended1",
        "title": "Team 1 Was Defended",
        "type":"bool"
      },
      "Cargo Intake From": {
        "code":"cif",
        "title": "Cargo Intake From",
        "type":"radio",
        "choices":{
          "t":"Terminal<br>",
          "g":"Ground<br>",
          "b":"Both<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
      "Shooting Spot": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "endgame": {
      "Climb": {
        "code":"c",
        "title": "Climb",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "f":"Attempted but Failed<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
      "Last successful rung": {
        "code":"lsr",
        "title": "last succcessful rung",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "x":"Successful/Not Attempted"
        },
        "defaultValue":"x"
      },
      "Started Climb before Endgame": {
        "code":"be",
        "title": "Started climb before EndGame",
        "type":"bool"
      },
      "Num of Robots Climbed": {
        "code":"cn",
        "title": "# of alliance bots climbed",
        "type":"counter"
      }
    },
    "postmatch": {
      "Driver Skill": {
        "code":"ds",
        "title": "Driver Skill",
        "type":"radio",
        "choices":{
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Defense Rating": {
        "code":"dr",
        "title": "Defense Rating",
        "type":"radio",
        "choices":{
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Shot enemy balls away?": {
        "code":"ba",
        "title": "Shot enemy balls away?",
        "type":"bool"
      },
      "Died/Tipped": {
        "code":"d",
        "title": "Died/Tipped",
        "type":"bool"
      },
      "Card Foul": {
        "code":"cf",
        "title": "Yellow/Red Card",
        "type":"bool"
      },
      "Make good alliance partner?": {
        "code":"all",
        "title": "Make good alliance partner?",
        "type":"bool"
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":50
      },
      "Confidence Rating": {
        "code":"cnf",
        "title": "Confidence Rating",
        "type":"radio",
        "choices":{
          "v":"Very Confident<br>",
          "a":"Average<br>",
          "n":"Not Confident"
      },
       "defaultValue":"a"
    }
    }
  }
}`;

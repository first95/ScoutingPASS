var config_data =
{
  "title": "Scouting PASS 95",
  "page_title": "Scouting PASS 95",
  "elements": {
    "prematch": {
      "Prematch": {
        "code": "prm-div",
        "title": "Prematch",
        "type": "divider"
      },
      "Scouter Name": {
        "code": "s",
        "title": "Scouter Name",
        "type": "scouter",
        "size": 10,
        "maxSize": 20
      },
      "Event": {
        "code": "e",
        "title": "Event",
        "type": "event",
        "defaultValue": "2026nhbed",
        "disabled": "true"
      },
      "Match Number": {
        "code": "m",
        "title": "Match Number",
        "type": "match",
        "min": 1,
        "max": 100
      },
      "Robot": {
        "code": "r",
        "title": "Robot",
        "type": "robot",
        "choices": {
          "r1": "Red-1",
          "b1": "Blue-1<br>",
          "r2": "Red-2",
          "b2": "Blue-2<br>",
          "r3": "Red-3",
          "b3": "Blue-3"
        }
      },
      "Team Number": {
        "code": "t",
        "title": "Team Number",
        "type": "team",
        "min": 1,
        "max": 99999
      },
      "Auto Start Location": {
        "code": "as",
        "title": "Auto Start Location",
        "type": "clickable_image",
        "filename": "2026/half_field.png",
        "clickRestriction": "one",
        "dimensions": "7 10",
        "allowableResponses": "4 11 18 25 32 39 46 53 60 67",
        "shape": "circle 5 black red true"
      }
    },
    "auton": {
      "Autonomous": {
        "code": "a-div",
        "title": "Autonomous",
        "type": "divider"
      },
      "Auto Shooting Location": {
        "code": "asl",
        "title": "Auto Shooting Location",
        "type": "clickable_image",
        "filename": "2026/half_field.png",
        "dimensions": "7 10",
        "allowableResponses": "1 2 3 4 8 9 10 11 15 16 17 18 22 23 24 25 29 30 31 32 36 37 38 39 43 44 45 46 50 51 52 53 57 58 59 60 64 65 66 67",
        "expectedMax": 5,
        "shape": "circle 5 black red true"
      },
      "Auton Fuel Scored": {
        "code": "afs",
        "title": "Fuel Scored",
        "type": "counter",
        "expectedMax": 32,
        "altInc1": 10,
        "altInc2": 5
      },
      "Auton Pass from Neutral Zone": {
        "code": "apn",
        "title": "Pass from Neutral Zone",
        "type": "counter",
        "expectedMax": 60,
        "altInc1": 10,
        "altInc2": 5
      },
      "Auton Climb (L1)": {
        "code": "ac",
        "title": "Climb (L1)",
        "type": "radio",
        "choices": {
          "c": "Climbed<br>",
          "a": "Attempted<br>",
          "x": "Not Attempted"
        },
        "defaultValue": "x"
      },
      "Auton Pickup from Depot": {
        "code": "afd",
        "title": "Pickup from Depot",
        "type": "bool"
      },
      "Auton Pickup from Outpost": {
        "code": "afo",
        "title": "Pickup from Outpost",
        "type": "bool"
      },
      "Auton Pickup from Neutral Zone": {
        "code": "aff",
        "title": "Pickup from Neutral Zone",
        "type": "bool"
      },
    },
    "teleop": {
      "Teleop": {
        "code": "t-div",
        "title": "Teleop",
        "type": "divider"
      },
      "Teleop Shooting Locations": {
        "code": "tsl",
        "title": "Shooting Locations",
        "type": "clickable_image",
        "filename": "2026/half_field.png",
        "dimensions": "7 10",
        "allowableResponses": "1 2 3 4 8 9 10 11 15 16 17 18 22 23 24 25 29 30 31 32 36 37 38 39 43 44 45 46 50 51 52 53 57 58 59 60 64 65 66 67",
        "expectedMax": 25,
        "shape": "circle 5 black red true"
      },
      "Teleop Fuel Scored": {
        "code": "tfs",
        "title": "Fuel Scored",
        "type": "counter",
        "expectedMax": 150,
        "altInc1": 10,
        "altInc2": 5
      },
      "Teleop Pass from Neutral Zone": {
        "code": "pnz",
        "title": "Pass from Neutral Zone",
        "type": "counter",
        "expectedMax": 250,
        "altInc1": 10,
        "altInc2": 5
      },
      "Teleop Pass from Opp Alliance Zone": {
        "code": "poa",
        "title": "Pass from Opp Alliance Zone",
        "type": "counter",
        "expectedMax": 250,
        "altInc1": 10,
        "altInc2": 5
      },
      "Teleop Pickup from Depot": {
        "code": "tfd",
        "title": "Pickup from Depot",
        "type": "bool"
      },
      "Teleop Pickup from Outpost": {
        "code": "tfo",
        "title": "Pickup from Outpost",
        "type": "bool"
      },
      "Teleop Pickup from Floor": {
        "code": "tff",
        "title": "Pickup from Floor",
        "type": "bool"
      },
    },
    "endgame": {
      "Endgame": {
        "code": "e-div",
        "title": "Endgame",
        "type": "divider"
      },
      "Endgame Climb": {
        "code": "tc",
        "title": "Climb",
        "type": "radio",
        "choices": {
          "1": "Level 1<br>",
          "2": "Level 2<br>",
          "3": "Level 3<br>",
          "a": "Attempted<br>",
          "x": "Not Attempted"
        },
        "defaultValue": "x"
      },
    },
    "postmatch": {
      "Postmatch": {
        "code": "pom-div",
        "title": "Postmatch",
        "type": "divider"
      },
      "Driver Skill": {
        "code": "ds",
        "title": "Driver Skill",
        "type": "radio",
        "choices": {
          "n": "Not Effective<br>",
          "a": "Average<br>",
          "v": "Very Effective<br>",
          "x": "Not Observed"
        },
        "defaultValue": "x"
      },
      "Defense Rating": {
        "code": "dr",
        "title": "Defense Rating",
        "type": "radio",
        "choices": {
          "b": "Below Average<br>",
          "a": "Average<br>",
          "g": "Good<br>",
          "e": "Excellent<br>",
          "x": "Did not play defense"
        },
        "defaultValue": "x"
      },
      "Speed Rating": {
        "code": "sr",
        "title": "Speed Rating",
        "type": "radio",
        "choices": {
          "1": "1 (slow)<br>",
          "2": "2<br>",
          "3": "3<br>",
          "4": "4<br>",
          "5": "5 (fast)"
        },
        "defaultValue": "3"
      },
      "Crossed Bump": {
        "code": "bmp",
        "title": "Crossed Bump",
        "type": "bool"
      },
      "Crossed Trench": {
        "code": "tre",
        "title": "Crossed Trench",
        "type": "bool"
      },
      "Died/Immobilized": {
        "code": "die",
        "title": "Died/Immobilized",
        "type": "bool"
      },
      "Tippy": {
        "code": "tip",
        "title": "Tippy<br>(almost tipped over)",
        "type": "bool"
      },
      "Make good alliance partner?": {
        "code": "all",
        "title": "Make good<br>alliance partner?",
        "tooltip": "Would you want this robot on your alliance in eliminations?",
        "type": "bool"
      },
      "Was Defended": {
        "code": "def",
        "title": "Was Defended",
        "type": "bool"
      },
      "Excessive Penalties": {
        "code": "pen",
        "title": "Excessive Penalties",
        "type": "bool"
      },
      "Fuel Percentage": {
        "code": "pct",
        "title": "Fuel Percentage",
        "tooltip": "What percentage of the total fuel for this alliance did this robot score?",
        "type": "number",
        "min": 0,
        "max": 100
      },
      "Comments": {
        "code": "co",
        "title": "Comments",
        "type": "text",
        "size": 25,
        "maxSize": 100
      },
    }
  }
};

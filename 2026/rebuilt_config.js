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
        "type": "radio",
        "choices": {
          "L": "Left<br>",
          "M": "Mid<br>",
          "R": "Right"
        }
      }
    },
    "auton": {
      "Autonomous": {
        "code": "a-div",
        "title": "Autonomous",
        "type": "divider"
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

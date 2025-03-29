var config_data =
{
  "title": "ScoutingPASS 95",
  "page_title": "ScoutingPASS 95",
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
        "defaultValue": "2025vtbur",
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
    },
    "auton": {
      "Autonomous": {
        "code": "a-div",
        "title": "Autonomous",
        "type": "divider"
      },
      "Auton Start Position?": {
        "code": "asp",
        "title": "Auton Start Position",
        "type": "radio",
        "choices": {
          "L": "Left<br>",
          "M": "Mid<br>",
          "R": "Right"
        }
      },
      "Auton Leaves Line?": {
        "code": "all",
        "title": "Leaves Line?",
        "type": "bool"
      },
      "Auton Coral Scored": {
        "code": "ac",
        "title": "Coral Scored",
        "type": "counter",
        "min": 0,
        "max": 10
      },
      "Auton Algae Processed": {
        "code": "aa",
        "title": "Algae Proccessed",
        "type": "bool"
      },
      "Auton Algae Removed": {
        "code": "aar",
        "title": "Algae Removed",
        "type": "bool"
      },
    },
    "teleop": {
      "Teleop": {
        "code": "t-div",
        "title": "Teleop",
        "type": "divider"
      },
      "L1": {
        "code": "tl1",
        "title": "Coral Scored on L1",
        "type": "bool"
      },
      "L2": {
        "code": "tl2",
        "title": "Coral Scored on L2",
        "type": "bool"
      },
      "L3": {
        "code": "tl3",
        "title": "Coral Scored on L3",
        "type": "bool"
      },
      "L4": {
        "code": "tl4",
        "title": "Coral Scored on L4",
        "type": "bool"
      },
      "Teleop Algae Scored B": {
        "code": "tab",
        "title": "Barge Algae Scored",
        "type": "counter",
        "min": 0,
        "max": 10
      },
      "Teleop Algae Scored P": {
        "code": "tap",
        "title": "Processor Algae Scored",
        "type": "counter",
        "min": 0,
        "max": 10
      },
    },
    "endgame": {
      "Endgame": {
        "code": "e-div",
        "title": "Endgame",
        "type": "divider"
      },
      "Endgame Status": {
        "code": "ec",
        "title": "Barge Status",
        "type": "radio",
        "choices": {
          "None": "None<br>",
          "Parked": "Parked<br>",
          "Shallow": "Shallow<br>",
          "Deep": "Deep<br>"
        },
        "defaultValue": "Not Observed"
      },
      "Endgame Time to Climb": {
        "code": "et",
        "title": "Time to Climb",
        "type": "radio",
        "choices": {
          "'0-5": "0-5 secs<br>",
          "'5-15": "5-15 secs<br>",
          "'15-30": "15-30 secs<br>",
          "'>30": ">30 secs<br>",
          "Not Attempted": "Not Attempted<br>",
          "Not Observed": "Not Observed"
        },
        "defaultValue": "Not Observed"
      },
    },
    "postmatch": {
      "Postmatch": {
        "code": "pom-div",
        "title": "Postmatch",
        "type": "divider"
      },
      "Teleop Can Handle Coral?": {
        "code": "tco",
        "title": "Can Handle Coral?",
        "type": "bool"
      },
      "Teleop Can Handle Algae?": {
        "code": "tal",
        "title": "Can Handle Algae?",
        "type": "bool"
      },
      "Driver Skill": {
        "code": "pdri",
        "title": "Driver Skill",
        "type": "radio",
        "choices": {
          "Low": "Low<br>",
          "Medium": "Medium<br>",
          "High": "High<br>",
          "Not Observed": "Not Observed"
        },
        "defaultValue": "Not Observed"
      },
      "Defense Skill": {
        "code": "pdef",
        "title": "Defense Skill",
        "type": "radio",
        "choices": {
          "Didn't Defend": "Didn't Defend<br>",
          "Low": "Low<br>",
          "Medium": "Medium<br>",
          "High": "High<br>",
          "Not Observed": "Not Observed"
        },
        "defaultValue": "Not Observed"
      },
      "Human Player Skill": {
        "code": "php",
        "title": "Human Player Skill",
        "type": "radio",
        "choices": {
          "Low": "Low<br>",
          "Medium": "Medium<br>",
          "High": "High<br>",
          "Not Observed": "Not Observed"
        },
        "defaultValue": "Not Observed"
      },
      "Comments": {
        "code": "co",
        "title": "Comments",
        "type": "text",
        "size": 25,
        "maxSize": 100  
      }
    }
  }
};

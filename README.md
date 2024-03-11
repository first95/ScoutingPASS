<div id="top"></div>

# Scouting P.A.S.S.

#### A scouting system for FIRST FRC competitions developed by [PWNAGE - Team #2451](https://pwnagerobotics.org). Altered By [Grasshoppers - Team #95](https://www.frcteam95.com).

<a href="https://first95.github.io/ScoutingPASS">Team 95's version Live Demo</a> . <a href="#getting-started">Getting Started</a> . <a href="#faq">FAQ</a>

![Stars](https://img.shields.io/github/stars/PWNAGERobotics/ScoutingPASS?style=plastic) ![Forks](https://img.shields.io/github/forks/PWNAGERobotics/ScoutingPASS?style=plastic) ![watchers](https://img.shields.io/github/watchers/PWNAGERobotics/ScoutingPASS?style=plastic)
<h1></h1>

# Sample String for Testing:
	s=Sample;e=2022nhgrs;l=qm;m=1;r=r1;t=95;at=Y;as=Lots;ta=Lots;ts=Some;tg=High;ci=Ground;ss=Close;ac=4;sc=4;ct=20-30;drs=Not Observed;des=Not Observed;wd=N;co=This is a sample string

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#features">Features</a></li>
    <li><a href="#live-demo">Live Demo</a></li>
    <li><a href="#description">Description</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#how-we-scout">How We Scout</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#faq">FAQ</a></li>
    <li><a href="#things-to-add">Things To Add Someday</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#Parsing">Parsing QR code data for pasting into a spreadsheet</a></li>
  </ol>
</details>

<div id="features"></div>

# Features:
### **Configurable**
  * A JSON configuration file controls the elements of the game to track.  Create a new configuration file each year for the new game, or tweak it week to week to refine your scouting.  No additional coding needed.
### **Universal**
  * Works on any device that has a web browser that runs JavaScript.  Apple, Android, phones, tablets, laptops, it works on them all.
### **Low/No Bandwidth**
  * Neither WiFi nor Cellular required at event.  The web page can be downloaded before the event and doesn't need to be reloaded.
### **Easy hosting**
  * Self hosting via GitHub. (See directions below)
### **[The Blue Alliance Integration](https://thebluealliance.com)**
  * Pull data for the event from The Blue Alliance.  Team #s, Team Names and Schedules

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="live-demo"></div>

## Live Demo
This repository is hosted on GitHub Pages.  You can view a live version of it here: https://PWNAGERobotics.github.io/ScoutingPASS.  (You can host your ScoutingPASS application on GitHub Pages as well.)

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="description"></div>

## Description:
Scouting PASS is a web page displayed in a browser.  It consists of 1 long "swipeable" page, divided into 5 distinct sections, each representing a specific aspect of a FRC match: Pre-Match, Autonomous, Teleop, End Game and Post-Match.  A configuratioin file allows the screens to be easily modified to collect any metrics that are important for your scouting needs. A QR code is dynamically generated after the form has been completed, and a button labeled "Next" at the top has been pressed.  This QR code can be scanned to transfer the data to your data repository.  The QR code can also be stored for processing later using a screenshot or camera.  Once the data has been transfered, the scout hits the clear button and the form is cleared out and ready for the next match.

Configuration is as easy as creating a JSON file with the fields that your scouting team wants to track.  Some fields are common to all teams and years.  The basic fields are:
* Scouter - who is scouting this robot
* Event - the event that is being scouted
* Level - The level of competition (Qualifications, Semi-Finals, Finals, etc)
* Match - the match number that is being scouted
* Robot - Which robot is being scouted (Red-1, Blue-1, etc.)
* Team # - What team is being scouted

User defined fields can be of several different types:
* Text - A freeform text field
* Number - Like text, but restricted to numbers
* Counter - A counter that can be increased or decreased with a click or touch
* Radio Buttons - A single choice between several options (Ball pick up: ()Ground ()Loading Bay ()Both ()None)
* Checkbox - A single on/off or yes/no check box (Exit Start Line?  []Yes if checked)

These should cover most of your scouting team's data collection needs. Every Grasshopper's previous configuration files are included as examples.  The import of the configuration file is in index.html and would need to be updated to import a different configuration file. Only import one configuration file.

Since this is a HTML/JavaScript web page, scouters can use almost any device that has a web broswer.  If the device has a touchscreen the screen can be used to swipe up and down between pages and interact with the data elements.  The webpage only needs to be loaded once.  Once loaded the functionality and data is stored locally in the webpage and doesn't need to be reloaded.  The QR code generation and clear button only resets the form and does not cause the page to reload.  This means that a cellular or WiFi connection is not needed at the competition as long as the webpage is loaded before the event.

If your team has a The Blue Alliance API access token (See https://www.thebluealliance.com/apidocs) the web page will pull team and schedule information from The Blue Alliance.  Put your access token in the authKey variable in resources/js/TBAInterface.js and when the web page is loaded it will load the data (for the event code in the Event field).  This enables some features on the PreMatch Screen.  With the team information the team name will populate just below the Team # field when the team # field is filled in.  If the schedule information is available when the web page is loaded then when the match and robot fields are populated it will automatically populate the team number and team name for the scouter.  This reduces typo errors when entering the team numbers manually.  (Schedules are usually published before the event a day or two before matches start.  However, it may be delayed for various reasons an may only be published hours or minutes before the start of a competition.)

The QR code can be read by a web camera or hand scanner to import the data into the Excel scouting database.  The hand scanner used reads the QR code and inputs the data as if it is typed in from a keyboard.  Included in this repository is the Excel code to pop up an input window and parse the qr data into a row in Excel. (see the [Excel directory](Excel))

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="getting-started"></div>

## Getting Started:
It's really simple to get started:
* Fork GitHub project (as public if you want to host on GitHub Pages)
* Change configuration file (examples in [2020](2020) or [2022](2022) directories)
  * Update your the competition your attending
  * Change the data elements to capture (if desired)
* Enable GitHub Pages in your repository settings ([GitHub Pages Instructions](https://pages.github.com/))
* Load page via GitHub pages (https://<your_username>.github.io/ScoutingPASS)
<p>
To enable The Blue Alliance API:
  
* Put your API token in the authKey variable in resources/js/TBAInterface.js.  (line 4)
* Reload your page.
  
Note: In order for this to work, the schedule has to be posted to The Blue Alliance.  That usually doesn't happen until just before the event. (a few days to a few hours)  To test this you can point it to a past event.   Set the event to 2020ilch.   Reload the page to load the schedule for that event. Select Match 6 and Blue-2.  You should see it populate the Team # to 2451, and the next line will show the team name, PWNAGE.
  
<p align="right">(<a href="#top">back to top</a>)</p>
<div id="how-we-scout"></div>

## How We Scout

We have 2 scouts per match.  One for each alliance.  Each scout has this web site pre-loaded on a team tablet.

The lead scout has a laptop with Excel and a wired hand held scanner in the stands with the scouts.  ([Nadomoo Bur3072 - ~$55](https://www.amazon.com/NADAMOO-Wireless-Barcode-Cordless-Computer/dp/B06Y2RMM51?th=1)) Any barcode scanner should work, this is just the one we used.

At the end of each match the lead scout kicks off an Excel macro that pops up an input box. (See an example Excel spreadsheet in the Excel directory)  The scouts show their QR code to the lead scout, one by one, who scans the QR code.  The data from the QR code is parsed and a row is added to the Scouting Data Table in Excel.   If the table doesn't exist, it will create it.

We use custom Excel screens and graphs to determine strategy for each of our matches.

We load the Excel data into our "ScoutR" app (written in R), where it is convereted into graphs and readble data. A list is then made manually by the Lead Scout.

The pick list can be modified up to Alliance Selection based on the data that is continued to be collected all the way up to the last match.

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="contributing"></div>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply [open an issue](https://github.com/PWNAGERobotics/ScoutingPASS/issues/new) if anything is missing or unclear in this
  documentation. to let us know what you'd like changed.

Don't forget to give the project a star!

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="faq"></div>

## Frequently Asked Questions:

<details><summary>Why hardcode and disable the event field?</summary>
<br />
The biggest reason is so it doesn't get changed during the event.  If it's changed and your using the TBA features they will not work correctly.  There is no reason to change it during the event and easy to change for your next event.  One more way to reduce mistakes during the event.
</details>

<details><summary>Why doesn't my configuration file load?</summary>
<br />
JSON is a stickler for commas and brackets.  If you see JSON errors check your JSON for missing or extra commas or brackets when adding or removing elements
</details>

<details><summary>What does P.A.S.S. stand for?</summary>
<br />
PWNAGE Analytical Strategy System
(Or G.A.S.S.!)
</details>

## Things we might want to add someday:
* Timing Element
* Pit Scouting
* More options for processing the QR code (Done!)

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="license"></div>

## License
Distributed under the GNU GPL v3.0 License. See `LICENSE` for more information.

## Parsing
There may be teams who's laptops don't have excel on them.

Due to this we added tab separated value functionality, so data can be printed into an .csv file (or even notepad). There is an option for using the codes and the macro, but you would have to look at FRC Team PWNAGE's ScoutingPASS to see a functional version of the macro system.

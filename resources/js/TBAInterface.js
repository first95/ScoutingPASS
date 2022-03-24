// TBAInterface funcitons to pull data from TheBlueAlliance.com
// but don't clobber the values if they were loaded from a local file
if (typeof teams === 'undefined') {
	var teams = null;
}
if (typeof schedule === 'undefined') {
	var schedule = null;
} 

// Read-only API key - please use your own if you fork/clone this project
// thebluealliance.com, Account menu lets you create a free account and generate
// your own. 
var authKey = "hNDnK23dYcPhS6V5SKwfZK8l9VKtWZyZBDKYQRQh5aUqWiKj5KyvKOLDJW49YO00";

/**
 * Get list of teams in event
 *
 * @param {eventCode} eventCode the event code (i.e. 2020caln) to pull the team list
 */
function getTeams(eventCode) {
	if (authKey) {
		var xmlhttp = new XMLHttpRequest();
		var url = "https://www.thebluealliance.com/api/v3/event/" + eventCode + "/teams/simple";
		xmlhttp.open("GET", url, true);
		xmlhttp.setRequestHeader("X-TBA-Auth-Key", authKey);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = this.responseText;
				if (response != "[]") {
					teams = JSON.parse(response);
				};
			};
		};
		// Send request
		xmlhttp.send();
	}
}

/**
 * Get schefule for event
 *
 * @param {eventCode} eventCode the event code (i.e. 2020caln) to pull the team list
 */
function getSchedule(eventCode) {
	if (authKey) {
		var xmlhttp = new XMLHttpRequest();
		var url = "https://www.thebluealliance.com/api/v3/event/" + eventCode + "/matches/simple";
		xmlhttp.open("GET", url, true);
		xmlhttp.setRequestHeader("X-TBA-Auth-Key", authKey);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = this.responseText;
				var matches = JSON.parse(response);
				if (matches.length > 0) {
					schedule = matches;
				};
			};
		};
		// Send request
		xmlhttp.send();
	}
}

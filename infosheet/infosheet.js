function weAreInThisMatch(match) {
	return match.alliances.blue.team_keys.includes(ourTeamKey) || match.alliances.red.team_keys.includes(ourTeamKey)
}

// schedule.filter(weAreInThisMatch).map(match => match.match_number).sort(function(a, b){return a-b})
// schedule.filter(weAreInThisMatch).sort(function(a,b){return a.match_number - b.match_number})

function buildMatchList() {
	matchSelectElement = document.getElementById("MatchNumber-select");
	ourMatchNumbers = schedule.filter(weAreInThisMatch).map(match => match.match_number).sort(function(a, b){return a-b});
	ourMatchNumbers.forEach(match_number => {
		const optionEl = document.createElement('option');
		optionEl.value = parseInt(match_number);
		optionEl.textContent = match_number;
		matchSelectElement.appendChild(optionEl);		
	});

}


function buildPage() {
	copyDiv;
	buildMatchList;
	setTeamNumbers;
}

function setTeamNumbers() {
	selectedMatch = schedule.filter(match => match.match_number == document.getElementById("MatchNumber-select").value)[0];
	if (selectedMatch.alliances.red.team_keys.includes(ourTeamKey)) {
		allies = selectedMatch.alliances.red.team_keys.filter(team => team != ourTeamKey);
		opponents = selectedMatch.alliances.blue.team_keys;
	} else {
		allies = selectedMatch.alliances.blue.team_keys.filter(team => team != ourTeamKey);
		opponents = selectedMatch.alliances.red.team_keys;
	}
	document.getElementById("Ally1").querySelector('input[name="team_number"]').value = allies[0].replace("frc","");
	document.getElementById("Ally1_number").value = allies[0].replace("frc","");
	document.getElementById("Ally1").querySelector('input[name="team_name"]').value = teams.filter(team => team.key == allies[0])[0].nickname;
	
	document.getElementById("Ally2").querySelector('input[name="team_number"]').value = allies[1].replace("frc","");
	document.getElementById("Ally2_number").value = allies[1].replace("frc","");
	document.getElementById("Ally2").querySelector('input[name="team_name"]').value = teams.filter(team => team.key == allies[1])[0].nickname;

	document.getElementById("Opponent1").querySelector('input[name="team_number"]').value = opponents[0].replace("frc","");
	document.getElementById("Opponent1").querySelector('input[name="team_name"]').value = teams.filter(team => team.key == opponents[0])[0].nickname;

	document.getElementById("Opponent2").querySelector('input[name="team_number"]').value = opponents[1].replace("frc","");
	document.getElementById("Opponent2").querySelector('input[name="team_name"]').value = teams.filter(team => team.key == opponents[1])[0].nickname;

	document.getElementById("Opponent3").querySelector('input[name="team_number"]').value = opponents[2].replace("frc","");
	document.getElementById("Opponent3").querySelector('input[name="team_name"]').value = teams.filter(team => team.key == opponents[2])[0].nickname;
3}3
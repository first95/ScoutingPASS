$unixEpoc = get-date "01.01.1970"
get-content .\2025necmp1_matches.json `
| convertfrom-json `
| foreach-object {
	$_ | select match_number, 
	            @{N="red1";E={$_.alliances.red.team_keys[0].replace("frc","")}},
				@{N="red2";E={$_.alliances.red.team_keys[1].replace("frc","")}},
				@{N="red3";E={$_.alliances.red.team_keys[2].replace("frc","")}},
				@{N="blue1";E={$_.alliances.blue.team_keys[0].replace("frc","")}},
				@{N="blue2";E={$_.alliances.blue.team_keys[1].replace("frc","")}},
				@{N="blue3";E={$_.alliances.blue.team_keys[2].replace("frc","")}},
				@{N="Predicted_Start";E={$unixEpoc.AddSeconds($_.predicted_time).ToLocalTime()}}
  } | Sort-object {[int]$_.match_number}
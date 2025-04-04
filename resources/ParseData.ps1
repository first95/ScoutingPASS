 $matchdata = ipcsv .\2025necmp1.tsv -Delimiter "`t"

 $insights = import-csv .\2025necmp1_team_insights.csv
 $nameOf = @{}
 $TotalEpaOf = @{}
 $epasOf = @{}
 $insights | foreach-object {
	$nameOf[$_.num] = $_.team
	$TotalEpaOf[$_.num] = $_.total_epa
	$epasOf[$_.num] = "   Auto: $($_.auto_epa)`n   Tele: $($_.teleop_epa)`nEndgame: $($_.endgame_epa)"
 }
    
 $barge = @{N="Barge";e={(($_.group |? barge_status).barge_status | group | % {"$($_.count) $($_.name)"} ) -join "`n"}}
 $AutonStart = @{N="AutonStart";e={(($_.group |? auton_start_position).auton_start_position | group | % {"$($_.count) $($_.name)"} ) -join "`n"}}
 $comments = @{N="comments";e={($_.group |? comments | % {"$($_.match_number): $($_.comments)"}) -join "`n"}}
 $bargeAlgaeScored = @{N="MaxBargeAlgae";E={$measure = $_.group | measure-object -property Barge_Algae_Scored -max
 										  $measure.maximum }}
 $ProcessorAlgaeScored = @{N="MaxProcessorAlgae";E={$measure = $_.group | measure-object -property Processor_Algae_Scored -max 
 										  $measure.maximum }}
$coralLevelsObserved = @{N="# Matches Coral Levels observed"; E={$_.group | % { 
	if ($_.Coral_Scored_on_L1 -eq "Yes") {"L1"}
	if ($_.Coral_Scored_on_L2 -eq "Yes") {"L2"}
	if ($_.Coral_Scored_on_L3 -eq "Yes") {"L3"}
	if ($_.Coral_Scored_on_L4 -eq "Yes") {"L4"}
} | group-object -noelement | sort name | ft -autosize -hidetableheaders | out-string 
	
	}}
 
 $matchdata | group team_number | select @{N="TeamNumber";E={$_.name}}	,
										 @{N="TeamName";E={$nameOf[$_.name]}},
										 @{N="TotalEpa";E={$TotalEpaOf[$_.name]}},
										 @{N="EPAs";E={$epasOf[$_.name]}},
 										 $barge, 
										 $autonStart, 
										 $bargeAlgaeScored, 
										 $ProcessorAlgaeScored, 
										 $coralLevelsObserved,
										 $comments `
| sort {[int]$_.TeamNumber} | convertto-csv -notypeinformation
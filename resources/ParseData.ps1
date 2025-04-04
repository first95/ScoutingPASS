 $matchdata = ipcsv .\2025necmp1.tsv -Delimiter "`t"
    
 $barge = @{N="Barge";e={(($_.group |? barge_status).barge_status | group | % {"$($_.count) $($_.name)"} ) -join "`n"}}
 $AutonStart = @{N="AutonStart";e={(($_.group |? auton_start_position).auton_start_position | group | % {"$($_.count) $($_.name)"} ) -join "`n"}}
 $comments = @{N="comments";e={($_.group |? comments | % {"$($_.match_number): $($_.comments)"}) -join "`n"}}
 $bargeAlgaeScored = @{N="BargeAlgaeScored";E={$measure = $_.group | ? Barge_Algae_Scored | measure-object -property Barge_Algae_Scored -min -max -average
 										  "n: $($measure.count)`nMin: $($measure.minimum)`nAvg: $($measure.average)`nMax: $($measure.maximum)"}}
 $ProcessorAlgaeScored = @{N="ProcessorAlgaeScored";E={$measure = $_.group | ? Processor_Algae_Scored | measure-object -property Processor_Algae_Scored -min -max -average
 										  "n: $($measure.count)`nMin: $($measure.minimum)`nAvg: $($measure.average)`nMax: $($measure.maximum)"}}
$coralLevelsObserved = @{N="# Matches Coral Levels observed"; E={$_.group | % { 
	if ($_.Coral_Scored_on_L1 -eq "Yes") {"L1"}
	if ($_.Coral_Scored_on_L2 -eq "Yes") {"L2"}
	if ($_.Coral_Scored_on_L3 -eq "Yes") {"L3"}
	if ($_.Coral_Scored_on_L4 -eq "Yes") {"L4"}
} | group-object -noelement | sort name | ft -autosize -hidetableheaders | out-string 
	
	}}
 
 $matchdata | group team_number | select name, $barge, $autonStart, $comments, $bargeAlgaeScored, $ProcessorAlgaeScored, $coralLevelsObserved | sort {[int]$_.name} | convertto-csv -notypeinformation
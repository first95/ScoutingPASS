 $matchdata = ipcsv .\2025necmp1.tsv -Delimiter "`t"
    
 $barge = @{N="Barge";e={(($_.group |? barge_status).barge_status | group | % {"$($_.count) $($_.name)"} ) -join "`n"}}
 $AutonStart = @{N="AutonStart";e={(($_.group |? auton_start_position).auton_start_position | group | % {"$($_.count) $($_.name)"} ) -join "`n"}}
 $comments = @{N="comments";e={($_.group |? comments | % {"$($_.match_number): $($_.comments)"}) -join "`n"}}
 
 $matchdata | group team_number | select name, $barge, $autonStart, $comments  | convertto-csv -notypeinformation
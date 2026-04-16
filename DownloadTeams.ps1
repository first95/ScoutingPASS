[CmdletBinding()]
param (
        [Parameter(Position=0,mandatory=$true)]
        [string]
        $event 
)
$year = $event.substring(0,4)

$path = "$year\${event}_teams.js"
write-verbose "writing to $path"
Set-Content -Path $path "var teams = " -NoNewline
$headers = @{"X-TBA-Auth-Key" = "hNDnK23dYcPhS6V5SKwfZK8l9VKtWZyZBDKYQRQh5aUqWiKj5KyvKOLDJW49YO00"}
(iwr -UseBasicParsing -Headers $headers -uri "https://www.thebluealliance.com/api/v3/event/$event/teams/simple").content | out-file -FilePath $path -append -encoding ascii
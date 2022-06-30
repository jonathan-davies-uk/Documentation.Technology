---
sidebar_position: 5
---

# Find what agent is opted in/out of a call queue

Unfortunately you cannot find out whose signed in/out of a call queue through the Teams Admin Center, however you can by issuing the following powershell command:

```
Connect-MicrosoftTeams

$callqueues = get-cscallqueue
$arrayofcallqueues = @()
foreach($queue in $callqueues) {
    $queuename = $queue.Name
    $agents = $queue.agents
    foreach ($agent in $agents) {
        $user = $agent.ObjectId | Get-CsOnlineUser
        $arrayofcallqueues += @([pscustomobject]@{CallQueue=$queuename;Agent=$user.UserPrincipalName;OptIn=$agent.OptIn})
    } 
}
$arrayofcallqueues
```
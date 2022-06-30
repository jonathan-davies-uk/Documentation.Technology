---
sidebar_position: 2
---

# Copy members of one group to another

The following script allows you to copy members of one group to another in AD:

```
$group = get-adgroupmember -identity "Group Source"
Add-adgroupmember -identity "New Group Name" -Members $group
```

OR

```
$groupsource = "Group Source"
$gtarget = "Group Destination"
$targetusers = Get-ADGroupMember $grouptarget
$sourceusers = Get-ADGroupMember $groupsource

foreach ($user in $sourceusers)
{
    $test = $true
    foreach ($tuser in $targetusers){if ($tuser.samaccountname -eq $user.samaccountname){$test = $false}}
    if ($test){Add-ADGroupMember -Identity $grouptarget -Members $user}
}
```
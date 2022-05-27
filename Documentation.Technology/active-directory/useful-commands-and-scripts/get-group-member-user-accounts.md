---
sidebar_position: 5
---

# Get Group Members of User accounts

This script gets a list of all accounts with the description "Service Account" and finds what groups they are a member of.

```
$obj = @()
$users = Get-ADUser -Filter * -Properties Description, MemberOf | Select Name, Description, MemberOf, SamAccountName | ? Description -like "Service Account" | sort Name

foreach($user in $users){
  $groups = Get-ADPrincipalGroupMembership $user.SamAccountName 
  foreach($group in $groups){
    $obj += [PSCustomObject]@{
        "User" = $user.Name
        "Username" = $user.SamAccountName
        "Account Type" = $user.Description
        "Group" = $group.name
    }
  }
}

$obj | export-csv -Path "C:\temp\service-account-groups.csv" -NoTypeInformation
```
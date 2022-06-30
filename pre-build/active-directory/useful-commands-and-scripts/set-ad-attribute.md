---
sidebar_position: 3
---

# Set Attribute for AD User

```
Import-module ActiveDirectory  
$csv = Import-Csv C:\temp\ADNew.csv 
Get-ADUser -Filter * -Properties EmployeeId | select Name, SamAccountName, EmployeeId | Sort-Object Name | Export-Csv C:\temp\employeeid.csv
$csv | % { 
    $User = $_.SamAccountName
    $ID = $_.EmployeeID 
    Set-ADUser $User -employeeID $ID 
} 
```
OR
```
$allusers = Get-ADUser -Filter * -Properties DisplayName,GivenName,Surname -searchbase "OU=Test Accounts,OU=Users,OU=Domain,DC=Domain,DC=local"
$allusers | % {
	$user = $_.UserPrincipalName
	$givenname = $_.givenname
	$surname = $_.surname
	Set-ADUser $_ -Replace @{url="www.domain.com/$($givenname)-$($surname)"}
}
```

Add custom attribute:
- `Get-ADUser test.user.teams.01 | Set-ADUser -add @{"msRTCSIP-DeploymentLocator"="SRV:"}`
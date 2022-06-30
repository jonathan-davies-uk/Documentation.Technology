---
sidebar_position: 1
---

# Useful Powershell One Liners

## User object commands

### Find inactive users

This commmand will find inactive users for the last 60 days using powershell.

```
Search-ADAccount -Accountinactive -TimeSpan 60 -Usersonly | Select name,mail,lastlogondate | Export-CSV "C:\temo\Inactive-Users.csv" -NoTypeInformation -Encoding UTF8
```

### Find the total number of users within a domain

```
(Get-ADUser -Filter *).Count
```

### Finding all disabled user objects

```
Get-ADUser -Filter {Enabled -eq $false} | FT samAccountName
```

### List all Domain Controllers and their IP

```
for /f %i in ('dsquery server -domain %userdnsdomain% -o rdn') do psexec \\%i ipconfig /all
```

### Add user to an AD Group

```
Add-ADGroupMember -identity "<group_name>" -Member "<upn>"
```

### Remove user from an AD Group

```
Remove-ADGroupMember -identity "<group_name>" -Member "<upn>"
```

### Find all users who are locked out

```
Search-ADAccount -LockedOut | select name, samAccountName
```

### Disable a user account

```
Disable-ADAccount -Identity Spud
```

### Enable a user account

```
Enable-ADAccount -Identity Spud
```

### Set expiration date for a user account

```
Set-ADAccountExpiration -Identity Spud -DateTime "10/05/2022"
```


## Computer object commands

### Find all disabled Computer accounts

```
Get-ADComputer -Filter {(enabled -eq $false)} -ResultPageSize 2000 -resultSetSize $null -Properties Name,OperatingSystem,SamAccountName,DistinguishedName
```

### Find Computers by Operating System

```
Get-ADComputer -Filter * -Properties OperatingSystem | Select OperatingSystem -unique | Sort OperatingSystem
```

### List all Servers on a Domain

```
Get-ADComputer -Server "domain.com" -Filter {operatingsystem -like "*server*"} -Properties * | select enabled,name,operatingsystem,canonicalname,lastlogondate | Export-Csv C:\temp\computer-list.csv -Append -NoTypeInformation -NoClobber
```

### Find all Domain Controllers in a Domain

```
Get-ADDomainController -Filter * -server <domain> | Select-Object name, domain
```

### Get all Computer in a Particular OU on a Domain

```
Get-ADComputer -server "domain.com" -SearchBase 'OU=Computers,OU=London,OU=UK,DC=domain,DC=com' -Filter '*' -Properties * | Select name, ipv4address, operatingsystem, CanonicalName, distinguishedname | Format-Table -AutoSize
```

## Recycle Bin

### Enable AD Recycle Bin feature

```
Enable-ADOptionalFeature 'Recycle Bin Feature' -Scope ForestOrConfigurationSet -Target 'domain.com'
```

### To restore an AD Account from the Recycle Bin

```
Get-ADObject -Filter 'samaccountname -eq "Spud"' -IncludeDeletedObjects | RestoreADObject
```

## Forest, Domains and OU's

### See Forest details

```
Get-ADForest domain.com
```

### See Domain details

```
Get-ADDomain domain.com
```

### Raise the functional level of the Domain

:::caution
Raise the functional level of the domain with care. Once you raise the functional level of the domain, some servers may cease to work if you've not upgraded them. [View Microsofts article for more details](https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/active-directory-functional-levels)
:::

```
Set-ADForestMode -Identity test.local -ForestMode Windows2016Forest
```

### Move FSMO roles

```
MoveADDirectoryServerOperationMasterRole -Identity "DestinationDC" -OperationMasterRole PDCEmulator,SchemaMaster
```

### See OU details

```
Get-ADOrganizationalUnit -Identity 'OU=Users,OU=UK,DC=domain,DC=com'
```

### Create a new OU

```
New-ADOrganizationalUnit -Name Users -Path 'OU=USA,DC=domain,DC=com'
```


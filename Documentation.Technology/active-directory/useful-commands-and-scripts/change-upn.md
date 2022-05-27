---
sidebar_position: 4
---

# Change User Principal Name (UPN)

### Change for a specific user

```
import-module activedirectory
$x = Get-ADUser -Filter * -SearchBase "OU=Office 365,OU=User Accounts,DC=ad,DC=domain,DC=co,DC=uk"
$x | sort SamAccountName | Export-Csv -Path "C:\temp\pre-upn.csv" -NoTypeInformation
#Test for users with the following SIDs
$wa = $x | ? SID -like "S-1-5-21-996000114-33600580-253070951-2999"
$wa | % {Set-ADUser $_ -UserPrincipalName ($_.SamAccountName + '@domain.co.uk')}
```

### Change for every user

```
$x | % {Set-ADUser $_ -UserPrincipalName ($_.SamAccountName + '@domain.co.uk')}
$y = Get-ADUser -Filter * -SearchBase "OU=Office 365,OU=User Accounts,DC=ad,DC=domain,DC=co,DC=uk"
$y | sort SamAccountName | Export-Csv -Path "C:\temp\post-upn.csv" -NoTypeInformation
```

### Backout

```
import-module activedirectory
$b = Get-ADUser -Filter * -SearchBase "OU=Office 365,OU=User Accounts,DC=ad,DC=domain,DC=co,DC=uk"
$b | sort SamAccountName | Export-Csv -Path "C:\temp\pre-backout-upn.csv" -NoTypeInformation
$b | % {Set-ADUser $_ -UserPrincipalName ($_.SamAccountName + '@ad.domain.co.uk')}
$ba = Get-ADUser -Filter * -SearchBase "OU=Office 365,OU=User Accounts,DC=ad,DC=domain,DC=co,DC=uk"
$ba | sort SamAccountName | Export-Csv -Path "C:\temp\post-backout-upn.csv" -NoTypeInformation
```
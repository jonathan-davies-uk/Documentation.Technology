---
sidebar_position: 4
---

# 3. Setup Users

## Assign the relevant license to user

1. Logon to https://admin.microsoft.com
2. Browse Billing > Licenses
3. Find the relevant license you want to assign, example: MS E3 and MS Phone System (without Calling plan)
4. Wait a few hours for the Teams provisioning service to setup the user in the background

## Setup user through PowerShell

### Assign user settings 1-by-1

The following commands are how you assign Enterprise Voice, Voicemail, VRP, DP and Phone numbers to a user.

```
Connect-MicrosoftTeams
Set-CsUser teams.user.01@domain.com -EnterpriseVoiceEnabled $true -HostedVoicemail $true -LineURI "tel:+442074445501"
Grant-CsOnlineVoiceRoutingPolicy teams.user.01@domain.com -PolicyName "UK-London-International"
Grant-CsTenantDialPlan teams.user.01@domain.com -PolicyName "UK-London"
```

### Bulk assign user settings

You may already have a list of users with currently assigned phone numbers that they want to keep, and the file may look like the following:

| UserPrincipalName | Number |
| --- | --- |
| teams.main.reception@domain.com | 442074445500 |
| teams.user.01@domain.com | 442074445501 |
| teams.user.02@domain.com | 442074445502 |
| teams.user.03@domain.com | 442074445503 |
| ... | ...

You can automate the list of users and assign Enterprise Voice, Voicemail, VRP, DP and Phone numbers with the following commands:

```
Connect-MicrosoftTeams
$csv = Import-Csv "C:\location\of\your\list.csv"

$csv | % {
	$user = $_.UserPrincipalName
	$number = $_.Number
	Write-Host "Setting up $user with $number"
	Set-CsUser $user -LineURI "tel:+$number" -EnterpriseVoiceEnabled $true -HostedVoiceMail $true
	Grant-CsOnlineVoiceRoutingPolicy $user -PolicyName $VRP
	#Grant-CsTenantDialPlan $user -PolicyName $dialplan
}
```

## Setup user through GUI

1. Logon to the [Teams Admin Center](https://admin.teams.microsoft.com)
2. Browse Users > Manage users and select your users
3. Under Account > General information click Edit
4. The Assign phone number window will appear
- Phone number type: Direct Routing
- Assigned phone number: 442074445501
- Phone number extension: blank
5. Assign Voice Routing Policies and Dial Plan to the user. Whilst you have the user selected, do the following
6. Find your user and click on them > Policies
7. Edit Policies and assign the relevant policy based on location. 
- Dial Plan: UK-London
- Voice routing policy: UK-London-International
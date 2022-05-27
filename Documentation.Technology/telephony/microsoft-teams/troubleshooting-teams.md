---
sidebar_position: 7
---

# Troubleshooting Teams

## Teams disconnecting during dialling

### Issue

Microsoft teams desktop app disconnects during dialling, once connected to participant it immediately closes

### Explanation

Some users headsets have "Call buttons" and sometimes they get "stuck" and just automatically disconnect the call whenever you answer

### Solution 

1. Try a different calling device (new headset) - normally this resolves it, however should you require more steps:
2. Try https://teams.microsoft.com
3. Try re-installing Teams
4. Try re-logging user in and out of teams
5. Update headset device driver

## User cannot dial out

### Issue

User cannot dial out but can answer incoming calls from internal staff

### Explanation

In order for a user to dial out, they need to meet a certain criteria:
- Have the relevant licenses applied
- Enterprise voice enabled
- Valid phone number
- Valid voice routing policy
- Valid dial plan

References:
- https://docs.microsoft.com/en-us/microsoftteams/business-voice/whats-business-voice
- https://docs.microsoft.com/en-us/powershell/module/teams/connect-microsoftteams?view=teams-ps
- https://docs.microsoft.com/en-us/microsoftteams/troubleshoot/teams-conferencing/no-dial-pad

### Solution

1. Logon to https://admin.microsoft.com
    1. Browse Users > Find user
    2. Browse Licenses and apps
    3. Ensure user has a Phone System license
2. Logon to https://admin.teams.microsoft.com
    1. Browse Users > Manage Users and select your user
    2. Ensure user has a valid phone number under "General Information - Assigned phone number"
    3. Ensure user has right voice routing and dial plan policy under Policies
    4. If the user has a UK and Newcastle number, our Dial plan standard would look like "UK-Newcastle
    5. If the user has a UK and Newcastle number, our Voice routing policy standard would look like "UK-Newcastle-International" - this means users can dial out internationally - you may notice "-Local" and "-National", these policies restrict the calls a user can place
3. Connect up to MS Teams through powershell: Connect-MicrosoftTeams
    1. For users with phone number assigned from Microsoft, run the following command:
    - `Get-CsOnlineVoiceUser example.user@domain.com | UserPrincipalName, EnterpriseVoiceEnabled, OnPremEnterpriseVoiceEnabled, RegistrarPool, VoiceRoutingPolicy, OnlineVoiceRoutingPolicy, DialPlan, TenantDialPlan, OnPremLineURI, LineURI`
    2. For users with a phone number provided by an outside carrier (Direct Routing), run the following command:
    - `Get-CsOnlineVoiceUser example.user@domain.com | UserPrincipalName, EnterpriseVoiceEnabled, OnPremEnterpriseVoiceEnabled, RegistrarPool, VoiceRoutingPolicy, OnlineVoiceRoutingPolicy, DialPlan, TenantDialPlan, OnPremLineURI, LineURI`
    3. These commands will give you an insight to the users enterprise voice settings, phone number, voice routing policies assigned and dial plans
4. If the user has the correct settings and they still cannot call out - try running an LX trace on the SBC or checking the Teams reporting. If the user's callee number is Anonymous - this means that some carriers automatically reject anonymous calls. The reason the user may seem to be calling as anonymous, is that they don't have a number under their Dial Pad on the Calls menu. To rectify this you can re-assign the LineURI and reassign the Voice routing policy of the user
```
Set-CsUser joe.bloggs@domain.com -onpremlineuri $Null
Set-CsUser joe.bloggs@domain.com -onpremlineuri "tel:01914662443"
Grant-CsOnlineVoiceRoutingPolicy -Identity user@domain.com -PolicyName $Null
Grant-CsOnlineVoiceRoutingPolicy -Identity user@domain.com -PolicyName "UK-Birmingham-International"
```

## User cannot collaborate with External user

### Issue

User cannot collaborate with an external user within Teams

### Explanation

This depends on the external access set at a global level within Microsoft Teams itself

**References:**
https://docs.microsoft.com/en-US/microsoftteams/manage-external-access?WT.mc_id=TeamsAdminCenterCSH

### Solution

1. Logon to https://admin.teams.microsoft.com
2. Browse > Users > External Access
3. Under the option: Choose which external domains your users have access to:
    1. Allow all external domains: This is the default setting in Teams, and it lets people in your organization find, call, chat, and set up meetings with people external to your organization in any domain.
    2. Allow only specific external domains: By adding domains to an Allow list, you limit external access to only the allowed domains. Once you set up a list of allowed domains, all other domains will be blocked. To allow specific domains, click Add a domain, add the domain name, click Action to take on this domain, and then select Allowed.
    3. Block specific domains - By adding domains to a Block list, you can communicate with all external domains except the ones you've blocked. To block specific domains, click Add a domain, add the domain name, click Action to take on this domain, and then select Blocked. Once you set up a list of blocked domains, all other domains will be allowed.
    4. Block all external domains - Prevents people in your organization from finding, calling, chatting, and setting up meetings with people external to your organization in any domain.
4. Choose the option you wish to select carefully - the company may have a policy in place that restricts access to other Teams/Skype for Business users, or they may restrict it to a certain domain. Altering this setting will have a global effect on every user - make sure this goes through change control process

## Teams gets stuck loading - MacOS

### Issue

For MacOS:
- When launching Teams it gets stuck at the loading page.
- If you click the Teams icon on the task bar there will be a blank/white screen open for Teams.
- If you right click the Teams icon and press sign out nothing happens.

### Explanation 

Teams may have become corrupt

### Solution 

1. Open Finder
2. Go to folder ~/Library/
3. Go to Application Support
4. Delete Teams folder and delete the Teams folder inside the Microsoft folder
5. Then back inside Library go to Preferences and delete com.microsoft.teams.plist
6. Drag Microsoft Teams app to the bin
7. Reinstall using pkg found online
8. When it launches it will have the users email auto remembered > Ignore this and click 'sign in with another account'
9. This should redirect to Microsoft sign in screen > Sign in with their account (work or school account) and then Teams should Launch correctly.
10. If this fails shut down and boot with NVRAM by pressing Command + Option + P + R as it boots up and then repeat steps 1-9.
11. If it still fails repeat steps 1-8 then at step 9 log in with your own account and see if it works. Then sign out and relaunch teams and you should be able to select sign in with another account again.

## Cannot find a room for a meeting

### Issue

When attempting to create a meeting and find the room that you wish to use, it does not appear in the location and you get "Sorry, we could not find any building"

### Explanation 

This is because no distribution groups have been created.

**Reference:**
- https://answers.microsoft.com/en-us/msteams/forum/all/adding-roomresource-while-creating-a-ms-teams/069355ff-7e1d-47f4-a545-5aaddb01817c

### Solution 

Open powershell and issue the following commands

```
Connect-ExchangeOnline
New-DistributionGroup -Name "MS Teams Meeting Room" -RoomList
Add-DistributionGroupMember -Identity “MS Teams Meeting Room” -Member “name of the room/resource mailbox here"
```

## Poor call quality

### Issue 

The user is complaining of poor call quality

### Explanation 

The user may have a networking issue

### Solution

Find the phone call that had the networking issue by checking out the reporting:

#### General phone calls

1. Logon to https://admin.teams.microsoft.com/
2. Browse Analytics & Reports > Usage Reports
3. Select PSTN and SMS (preview) usage
4. Select last 7 days
5. From here you can see how calls routed

#### User level calls

1. Logon to https://admin.teams.microsoft.com
2. Browse Users > Manage Users
3. Find the user in question and click on their name
4. Click Meetings & calls
5. Observe ongoing calls and past calls

#### Some tools at your disposal to help you troubleshoot the network:
- https://www.microsoft.com/en-us/download/details.aspx?id=53885
- https://www.powershellgallery.com/packages/NetworkTestingCompanion/1.5.5
- https://connectivity.office.com/


Network requirements of Teams:
- https://docs.microsoft.com/en-us/microsoftteams/prepare-network#bandwidth-requirements


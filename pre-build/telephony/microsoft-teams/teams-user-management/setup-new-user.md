---
sidebar_position: 1
---

# Setup a new user

## Assign the relevant license

1. Logon to https://admin.microsoft.com
2. Browse Billing > Licenses
3. Find the relevant license you want to assign, example: MS E3 and MS Phone System (without Calling plan)
4. Wait a few hours for the Teams provisioning service to setup the user in the background


## Setup the user for Teams calling

### For numbers bought through Microsoft

1. Logon to Teams Admin Center
2. Voice > Phone numbers
3. On the Phone numbers page, select an unassigned number in the list, and then click Edit.
4. In the Edit pane, under Assigned to, search for the user by display name or user name, and then click Assign.


### For numbers bought through a carrier like Gamma/Pure-IP etc - using Direct Routing
At the time of writing, Teams have now released the ability to assign a Direct Routing number through the Teams Admin Center

#### Assign number through Powershell

1. Logon to Teams through Powershell
- `Connect-MicrosoftTeams`
2. Issue the following command to enable Enterprise Voice, HostedVoicemail and the Number for a user:
- `Set-CsUser teams.user@domain.com -EnterpriseVoiceEnabled $true -HostedVoicemail $true -LineURI "tel:+441912134789"`

### Assign number through Teams Admin Center

1. Browse Users > Manage users
2. Under Account > General information click Edit
3. The Assign phone number window will appear
    1. Phone number type: Direct Routing
    2. Assigned phone number: 441912342345
    3. Phone number extension: blank

#### Assign Voice routing policies and Dial plans

1. Logon to Teams Admin Center
2. Assign Voice Routing Policies and Dial Plan to the user
3. Browse Users > Manage Users
4. Find your user and click on them > Policies
5. Edit Policies and assign the relevant policy based on location. Note: for Waterstons Teams setups, we setup Voice routing policies and Dial plans based on the location of offices.
    1. Dial Plan: UK-London
    2. Voice routing policy: UK-London-International


## References:
**Licenses**
- https://docs.microsoft.com/en-us/microsoftteams/teams-add-on-licensing/microsoft-teams-add-on-licensing?tabs=small-business
- https://docs.microsoft.com/en-us/microsoftteams/teams-add-on-licensing/assign-teams-add-on-licenses

**Phone number**
- https://docs.microsoft.com/en-us/microsoftteams/assign-change-or-remove-a-phone-number-for-a-user
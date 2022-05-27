---
sidebar_position: 2
---

# Change a number

This article will run through how to change the number of user and resource accounts.

## User account

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
Issue the following command to enable Enterprise Voice, HostedVoicemail and the Number for a user:
- `Set-CsUser teams.user@domain.com -EnterpriseVoiceEnabled $true -HostedVoicemail $true -LineURI "tel:+441912134789"`

#### Assign number through Teams Admin Center

1. Browse Users > Manage users
2. Under Account > General information click Edit
3. The Assign phone number window will appear
    1. Phone number type: Direct Routing
    2. Assigned phone number: 441912342345
    3. Phone number extension: blank

## Resource account

### Assign phone number to Auto-Attendant

1. Logon to Teams through powershell and issue the following commands:
- `Set-CsOnlineApplicationInstance "ra.aa.marketing@domain.com" -OnpremPhoneNumber "+442081064321"`

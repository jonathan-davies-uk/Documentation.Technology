---
sidebar_position: 3
---

# Assigning Policies

This document will run you through assigning a Vocie Routing Policy and a Dial Plan to a user, through the means of Powershell or the Teams Admin Center.

## Teams Admin Center

1. Logon to the Teams Admin Center
2. Browse Users > Manage users
3. Find the user you want and click Edit settings
4. Choose the Policies tab
5. Click Edit on Assigned policies
    1. Edit Dial plan: UK-Durham
    2. Edit Voice routing policy: UK-Durham-International

## Powershell

1. Connect through Teams Powershell and issue the following commands:

```
Connect-MicrosoftTeams

Grant-CsTenantDialPlan "teams.user@domain.com" -PolicyName "UK-Durham"
Grant-CsOnlineVoiceRoutingPolicy "teams.user@domain.com" -PolicyName "UK-Durham-International"
```
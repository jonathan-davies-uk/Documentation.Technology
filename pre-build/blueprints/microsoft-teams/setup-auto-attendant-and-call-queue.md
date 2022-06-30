---
sidebar_position: 5
---

# 4. Setup Auto Attendant and Call Queue

## Scenario

Say you client has a new requirement to setup a new call flow for their up and coming new Marketing team. They've give the number they would like assigned, told you opening hours are 09:00-18:00 Mon-Fri and that calls in hours should route to the Marketing Office 365 group which has already been setup and out of hours, it should go to voicemail.

### Requirements based off the Scenario

- 1 x MS Teams Phone Standard - Virtual User license. This will be used for the Auto-Attendant, as that's going to be the account that gets assigned the phone number.
- 1 x Auto-Attendant
- 1 x Call Queue
- 2 x Resource Accounts (one for Auto-Attendant, one for the Call Queue).
    - Resource accounts should go by the following email standard: 
    - ra = resource account . aa or cq = auto-attendant or call-queue . nameofaaorcq @ domain.com
    - Converts into: ra.aa.marketing@domain.com

## Setup your resource accounts

### Create the resource accounts

1. Logon to the [Teams Admin Center](https://admin.teams.microsoft.com)
2. Browse Voice > Resource accounts
3. Click +Add and fill the details out as follows:
    - Display Name: Marketing AA
    - Username: ra.aa.marketing@domain.com
    - Resource account type: Auto Attendant
    - Save
4. Repeat for the call queue, click +Add and fill the details out as follows:
    - Display Name: Marketing CQ
    - Username: ra.cq.marketing@domain.com
    - Resource account type: Call Queue
    - Save

### Assign license to the Auto-Attendant

1. Logon to [Microsoft 365 Admin portal](https://admin.microsoft.com)
2. Browse Billing > Licenses
3. Assign Microsoft Teams Phone Standard - Virtual User license to the newly created auto-attendant resource account: ra.aa.marketing@domain.com 

### Assign phone number to Auto-Attendant

1. Logon to Teams through powershell and issue the following commands:
    - `Set-CsOnlineApplicationInstance "ra.aa.marketing@domain.com" -OnpremPhoneNumber "+442074445500"`

## Setup the Auto-Attendant

1. Logon to the [Teams Admin Center](https://admin.teams.microsoft.com)
2. Browse Voice > Auto Attendants and click on Add
3. Follow the procedure on screen, given the requirements from the Scenario
4. When you come to Call Flow and routing options, do the following:
    - Redirect call to Voice app: ra.cq.marketing@domain.com
5. On the final page - assign the resource account you created for the Auto-Attendant: ra.aa.marketing@domain.com


## Setup the Call Queue

1. Browse Voice > Call queues and click on Add
2. Assign the resource account you created for the Call queue: ra.cq.marketing@domain.com
3. Follow the procedure on screen, given the requirements from the Scenario

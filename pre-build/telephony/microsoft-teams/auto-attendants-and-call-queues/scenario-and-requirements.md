---
sidebar_position: 1
---

# Scenario, requirements and resource accounts

## Scenario

Say you client has a new requirement to setup a new call flow for their up and coming new Marketing team. They've give the number they would like assigned, told you opening hours are 09:00-18:00 Mon-Fri and that calls in hours should route to the Marketing Office 365 group which has already been setup and out of hours, it should go to voicemail.

### Requirements based off the Scenario

- 1 x MS Teams Phone Standard - Virtual User license. This will be used for the Auto-Attendant, as that's going to be the account that gets assigned the phone number.
- 1 x Auto-Attendant
- 1 x Call Queue
- 2 x Resource Accounts (one for Auto-Attendant, one for the Call Queue)

## Setup your resource accounts

### Create the resource accounts

1. Logon to Teams Admin Center
2. Browse Voice > Resource accounts
3. Click +Add and fill the details out as follows:
    1. Display Name: Marketing AA
    2. Username: ra.aa.marketing@domain.com
    3. Resource account type: Auto Attendant
    4. Save
4. Repeat for the call queue, click +Add and fill the details out as follows:
    1. Display Name: Marketing CQ
    2. Username: ra.cq.marketing@domain.com
    3. Resource account type: Call Queue
    4. Save

### Assign license to the Auto-Attendant

1. Logon to admin.microsoft.com
2. Browse Billing > Licenses
3. Assign Microsoft Teams Phone Standard - Virtual User license to the newly created auto-attendant resource account: ra.aa.marketing@domain.com 



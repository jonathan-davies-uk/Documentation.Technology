---
sidebar_position: 2
---

# Creating an Auto Attendant

For a recap on the requirements, please visit the Scenario, requirements and resource accounts section.

## Assign phone number to Auto-Attendant

1. Logon to Teams through powershell and issue the following commands:
`Set-CsOnlineApplicationInstance "ra.aa.marketing@domain.com" -OnpremPhoneNumber "+442081064560"`

## Setup the Auto-Attendant

1. Logon to Teams Admin Center
2. Browse Voice > Auto Attendants and click on Add
3. Follow the procedure on screen, given the requirements from the Scenario
4. When you come to Call Flow and routing options, do the following:
    1. Redirect call to Voice app: ra.cq.marketing@domain.com
5. On the final page - assign the resource account you created for the Auto-Attendant: ra.aa.marketing@domain.com

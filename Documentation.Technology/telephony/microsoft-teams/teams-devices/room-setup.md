---
sidebar_position: 1
---

# Teams Room Setup

This is article is about setting up a Teams Room resource account that will automatically process Meeting requests

##  Requirements

- Require a resource account in either 365 or synced from on-prem
- Require a Common Area Phone or Meeting room license

## Setup

1. Setup mailbox in Exchange online:
- `New-Mailbox -name "our account" -alias "Friendly name" -Room -EnableRoomMailboxAccount $true -MicrosoftOnlineServicesID "accountupn@here.com" -RoomMailboxPassword (ConvertTo-SecureString -string "password" -asplaintext -force)`
2. Apply automatic calendar processing:
- `Set-CalendarProcessing -Identity "our account" -AutomateProcessing AutoAccept -AddOrganizerToSubject $false -DeleteComments $false -DeleteSubject $false -RemovePrivateProperty $false`
3. Never Expire password:
- `Set-MsolUser -UserPrincipalName "our account" -PasswordNeverExpires $true`
4. Phone number, may need TeamsOnly mode configured - assign a number through either Direct Routing or Microsoft (you can find out how to assign a number in Teams Admin - Setup new user article)

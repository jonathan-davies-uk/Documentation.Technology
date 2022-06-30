---
sidebar_position: 4
---

# Guest Access

## Guest access configuration

Guest access needs to be configured in a few locations:
1. Azure AD
2. O365 Groups
3. Teams
4. Sharepoint Online

### To turn on guest access in Azure AD

1. Browse to https://aad.portal.azure.com/
2. Click Users > User Settings > Manage external collaboration settings
3. From here you can select the guest access and block/allow certain domains

### To turn on guest access in Teams

1. Browse to https://admin.teams.microsoft.com/
2. Click Users > Guest access
3. From here you can control guest access within Teams and configure what guests can do

### Control guest access via Powershell

1. When connected to Microsoft Teams powershell, issue the following commands
- `Set-CsTeamsClientConfiguration -Identity Global -AllowGuestUser $true`
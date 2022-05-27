---
sidebar_position: 6
---

# 6. Install and Configure NPS Servers

### Install NPS

1. Logon to your NPS server
2. Open powershell as administrator and issue the following command:
- `Install-WindowsFeature NPAS -IncludeManagementTools`

### Configure NPS

1. Open NPS console
2. Right click the NPS Server and select Register in Active Directory
3. Click OK
4. In NPS expand RADIUS Clients and Servers
5. Right-click on RADIUS Clients > New
6. Check the box for Enable this RADIUS Client
7. Friendly name: name of the VPN server
8. IP: 10.0.8.6 (BackDMZ)
9. Shared tab - ensure Manual is checked and enter the Shared Secret from the VPN server
10. In NPS console under Standard Configuration, ensure RADIUS server for Dial-Up or VPN Connections is selected
11. Select Configure VPN or Dial-UP
12. Select Virtual Private Network (VPN) Connects > Next
13. Clear Microsoft Encrypted Authentication version 2 (MS-CHAPv2) check box
14. Check Extensible Authentication Protocol
15. Set Type to Microsoft: Protected EAP (PEAP)
16. Select Configure
17. Remove Secured password (EAP-MSCHAP v2)
18. Add Smart Card or other certificate > Next
19. Under User Groups, select Add > AOVPN Users AD group
20. IP Filters > Next
21. Encryption settings > Next
22. Realm Name > Next > Finish
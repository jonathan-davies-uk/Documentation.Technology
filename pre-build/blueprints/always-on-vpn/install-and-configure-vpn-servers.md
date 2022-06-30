---
sidebar_position: 5
---

# 5. Install and Configure VPN Servers

### Install Remote Access as a RAS Gateway on your VPN Server

1. Open powershell as administrator and issue the following command:
- `Install-WindowsFeature DirectAccess-VPN -IncludeManagementTools`
2. Open server manager and click Open the Getting Started Wizard
3. Configure remote access window - Deploy VPN only
4. Welcome to the Routing and Remote Access Server Setup Wizard > Custom Configuration > VPN access

### Configure Remote Access as a VPN Server

1. Select Start service to start Remote Access
2. Right-click on the VPN server and select Configure and Enable Routing and Remote Access
3. Security tab - Change the Authentication provider to RADIUS Authentication and click Configure
4. Security tab continue - Click Add, FQDN: vpnservername.clientname.co.uk, Shared secret: randomly generated (save it in password vault)
5. Security tab continue - Review Time-out, Initial Score and Port
6. Security tab continue - Accounting provider, enabled Windows Accounting and to RADIUS Account and configure the NPS server name
7. Security tab continue - Under SSL chose the Clientname VPN Server Authentication
8. IPv4 tab for the VPN server - Static Address pool 10.0.26.20 - 10.0.26.240. Number 989. IP Address 10.0.26.0. Adapter: BackDMZ
10. Click OK
11. Right-click Ports > Properties
12. Select WAN Miniport (SSTP) > Configure
13. Clear the Remote access connections (inbound only) and Demand-dial routing connections (inbound and outbound) check boxes.
14. Under Maximum Ports enter 989
15. Select WAN Miniport (IKEv2) > Configure
16. Under Maximum Ports enter 989
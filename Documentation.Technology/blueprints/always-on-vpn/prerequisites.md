---
sidebar_position: 0
---

# Prerequisites of AOVPN

### Network Configuration
- External adapter of the firewall to the FrontDMZ NIC of the VPN server
- Internal adapter (BackDMZ) of the VPN server assigned a static NIC
- Create static route:
```powershell
#Create static route:
New-NetRoute -AddressFamily IPv4 -DestinationPrefix 10.0.0.0/8 -InterfaceAlias 'BackDMZ' -NextHop 192.168.1.254 
#Check static route
Get-NetRoute -InterfaceAlias 'BackDMZ'
 ```
- Traffic allowed from the internet facing firewall to the External NIC of the VPN server (FrontDMZ)
    - 500 udp (IKE)
    - 4500 udp (IPSec NAT Traversal)
    - 443 tcp (SSL)
- Traffic allowed to and from the internal NIC (BackDMZ) of the VPN server to the internal network
    - 1812 udp (RADIUS Authentication)
    - 1813 udp (RADIUS Accounting)
    - 53 tcp/udp (DNS)
    - 88 tcp/udp (Kerberos)
    - 135 tcp (RPC Endpoint Mapper)
    - 389 tcp/udp (LDAP)
    - 445 tcp (SMB)
    - 636 tcp (LDAPS)
    - 3268 tcp (LDAP GC)
    - 3269 tcp (LDAPS GC)

### VPN Server
 - Name: CLIENTVPN01
 - Microsoft Server 2019
 - 60GB C Drive
 - 8GB RAM
 - 4 vCPU's
 - 2 NIC's
    - FrontDMZ - 10.0.7.6
    - BackDMZ - 10.0.8.6
- Public IP: 215.1.1.6
- Not domain joined
- Static routes:
    - To the 10.0.0.0/8 network

### NPS Server
 - Name: CLIENTNPS01
 - Microsoft Server 2019
 - 60GB C Drive
 - 8GB RAM
 - 4 vCPU's
 - 2 NIC's
    - Internal - 10.0.1.7
    - BackDMZ - 10.0.8.7
- Domain joined
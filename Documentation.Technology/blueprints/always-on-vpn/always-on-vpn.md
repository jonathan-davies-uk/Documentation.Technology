---
sidebar_position: 2
---

# What is Always on VPN (AOVPN)?

Always on VPN (AOVPN) is a remote access solution that is built into Windows 10. AOVPN comes in handy in the 21st Century with the rise in working from home and remote access due to the Coronavirus.

AOVPN is a solution that allows client machines to automatically establish a VPN connection to your remote network without any user interaction. AOVPN makes this possible by harnessing the VPNv2 CSP node*, which is built into Window 10. This configuration service provider allows the built in VPN client to be configured as a scriptable appliance through the likes of Intune, SCCM and Powershell.

The diagram below, shows how AOVPN works in a client scenario:

![AOVPN](/img/aovpn-overview.jpg)

#### References
* *Description: "The VPNv2 configuration service provider allows the mobile device management (MDM) server to configure the VPN profile of the device." Link: https://docs.microsoft.com/en-us/windows/client-management/mdm/vpnv2-csp
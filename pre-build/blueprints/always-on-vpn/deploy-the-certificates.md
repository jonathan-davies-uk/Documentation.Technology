---
sidebar_position: 3
---

# 3. Deploy the Certificates

### Deploy User, Computer and NPS certificates

1. Logon to a Domain Controller
2. Open Group policy management
3. Create new group policy object named AOVPN Enable Certificate Auto-enrollment and edit the policy
4. Navigate Computer Configuration > Policies > Windows Settings > Security Settings > Public Key Policies > Certificate Services Client – Auto-Enrollment
5. Set configuration model to Enabled
6. Check Renew expired certificates and Update certificates
7. Navigate User Configuration > Policies > Windows Settings > Security Settings > Public Key Policies > Certificate Services Client – Auto-Enrollment
8. Set configuration model to Enabled
9. Check Renew expired certificates and Update certificates
10. Close Group policy editor
11. Under Security Filtering limit the policy to apply to AOVPN Users and AOVPN Computers
12. Link the group policy to the OU's containing computer and user objects
13. clientname.co.uk > Test_NoGP > Users
14. clientname.co.uk > Test_NoGP > Computers

### Deploy VPN Certificates

1. Logon to your VPN server
2. Save the following file as vpngateway.inf
```
[Version]
Signature="$Windows NT$"

[NewRequest]
Subject = "CN=alwaysonvpn.clientname.com"
Exportable = FALSE
KeyLength = 2048
KeySpec = 1
KeyUsage = 0xA0
MachineKeySet = True
ProviderName = "Microsoft RSA SChannel Cryptographic Provider"
RequestType = PKCS10

[Extensions]
2.5.29.17 = "{text}"
_continue_ = "dns=alwaysonvpn.clientname.com&"
```
3. Open CMD as administrator and issue the following commands: `certreq -new vpngateway.inf vpngateway.req`
4. Copy across to the PKI server
5. Open CMD as administrator and issue the following commands:
6. certreq -attrib "CertificateTemplate:ClientnameVPNServerAuthentication" -submit VPNGateway.req VPNGateway.cer
7. Copy the vpngateway.cer file back to the VPN server
8. Open CMD as administrator and issue the following commands:
9. certreq -accept vpngateway.cer
10. Import the ROOT CA and Internal Issuing CA1 certificates to the Trusted Root Certificate store and Intermediate Certificate store
---
sidebar_position: 2
---

# 2. Creating 4 new Certificate Templates

### Create the VPN server certificate template - IKEv2

1. Logon to your PKI server
2. Open up Certificate Authority > right click Certificate Templates > Manage
3. Right click RAS and IAS Server template and select Duplicate Template
4. General tab - Template display name: Clientname VPN Server Authentication
5. Extensions tab - Select Applications > Edit > Add > IP security IKE intermediate
6. Security tab - Add AOVPN RRAS Servers group and grant it Read and Enroll permissions
7. Security tab - Remove RAS and IAS Servers group
8. Subject name tab - Check Supply in the request 
9. Click OK to save

### Create NPS server certificate template

1. Right click RAS and IAS Server template and select Duplicate Template
2. General tab - Template display name: Clientname NPS Server Authentication
3. Security tab - Add AOVPN NPS Servers group and grant it Read, Enroll and Autoenroll permissions
4. Security tab - Remove RAS and IAS Servers group 
5. Compatibility tab - select Windows Server 2012 R2 for certificate authority
6. Compatibility tab - select Windows 8.1/Windows Server 2012 R2 for certificate recipient
7. Click OK to save

### Create User Authentication Certificate template

1. Right-click User and select Duplicate Template
2. General tab - Template display name: Clientname VPN User Authentication
3. General tab - Clear the Publish certificate in Active Directory check box
4. Security tab - Add AOVPN Users group and grant it Read, Enroll and Autoenroll permissions
5. Security tab - Remove the Domain Users group
6. Compatibility tab - select Windows Server 2012 R2 for certificate authority
7. Compatibility tab - select Windows 8.1/Windows Server 2012 R2 for certificate recipient
8. Request Handling tab - Clear the Allow private key to be exported check box
9. Cryptography tab - Change provider category to Key Storage Provider
10. Cryptography tab - Check Requests must use one of the following providers
11. Cryptography tab - Select the Microsoft Platform Crypto Provider check box 
12. Subject name tab - Uncheck Include e-mail name in the subject name and E-mail name
13. Click OK to save

### Create Computer Authentication Certificate template

1. Right-click Computer template and Duplicate Template
2. General tab - Template display name: Clientname VPN Computer Authentication
3. Compatibility tab - select Windows Server 2012 R2 for certificate authority
4. Compatibility tab - select Windows 8.1/Windows Server 2012 R2 for certificate recipient
5. Security tab - Add AOVPN Computers group and grant it Read, Enroll and Autoenroll permissions
6. Security tab - Remove the Domain Computers group
7. Click OK to save

### Publish the newly created certificate templates

1. Right-click Certificate Templates > New > Certificate Template to Issue > select:
    - Clientname VPN Server Authentication
    - Clientname NPS Server Authentication
    - Clientname VPN User Authentication
    - Clientname VPN Computer Authentication

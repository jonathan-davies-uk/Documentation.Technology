---
sidebar_position: 4
---

# 4. Test the certificates have issued successfully

### Validate Computer and User certificate

1. Logon to test computer and test user
2. Issue gpupdate /force
3. Ensure user and computer certificate are in the certificate stores

### Validate NPS server certificate

1. Restart the NPS server
2. Ensure NPS server certificate is in the personal certificate store

### Validate VPN server certificate

1. Logon to the VPN server
2. Ensure VPN server certificate is in the personal certificate store
3. On the General tab, confirm that the date listed under Valid from is today's date. If it isn't, you might have selected the incorrect certificate.
4. On the Details tab, select Enhanced Key Usage, and verify that IP security IKE intermediate and Server Authentication display in the list.
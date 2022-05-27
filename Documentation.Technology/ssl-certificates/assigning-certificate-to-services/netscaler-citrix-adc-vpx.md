---
sidebar_position: 13
---

# Netscaler certificate replacement (Citrix ADC VPX)

1. Login to Netscaler
2. Browse to Traffic Management > SSL > Certificates > Server Certificates
3. Import the certificate
4. Bind it to the relevant service
5. Click on XenApp and XenDesktop
6. Down the right-hand side, click edit on your application
7. Click edit on Server Certificates and import the relevant one you've just imported
8. Click continue a few times until you get the Done option
9. Go back too Traffic Management > SSL > Certificates > Server Certificates
10. Right-click the certificate you've imported and click Link
11. Link the intermediate certificate and click Done
12. Save the config with the Save button in the top right corner of the screen
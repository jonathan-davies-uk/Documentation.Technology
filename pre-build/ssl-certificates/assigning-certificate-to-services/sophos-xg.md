---
sidebar_position: 17
---

# Sophos XG certificate replacement

## To import the SSL to FortiGate:

1. Export private key
2. Login to Sophos XG
3. Go to Certificates
	- Click Add
	- Give the certificate a name
	- Click on PKCS12 (.pfx or .p12) on the Certificate drop down
	- Type in the password of the private key and click Save
	
## To apply the VPN SSL:

1. On the Sophos XG go to Administration
2. Click on Admin Settings
3. Under Admin Port Settings > Certificate, click the certificate you want.
4. Click Apply
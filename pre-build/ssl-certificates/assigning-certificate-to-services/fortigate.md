---
sidebar_position: 8
---

# Foritgate certificate replacement

## To Import the SSL to FortiGate:

1. Export private key
2. Use openssl to get a .cer and .key
	- openssl pkcs12 -in certname.pfx -nocerts -out key.cer -nodes
	- openssl pkcs12 -in certname.pfx -nokeys -out cert.key -nodes
3. Go to FortiGate > System > Certificates
4. Import > Local Certificate
5. Choose Certificate from the drop down
6. Choose the files and put in the password

## To Apply the VPN SSL:

1. On the FortiGate goto VPN > SSL > Settings
2. Change the Server Certificate to the new one
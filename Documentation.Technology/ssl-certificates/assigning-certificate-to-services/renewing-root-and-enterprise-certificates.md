---
sidebar_position: 19
---

# Renewing Root and Enterprise Certificates

### Renew root CA certificate

1. From the CA MMC snap-in, right click on Root CA Node
2. All Tasks > Renew CA Certificate
3. Choose to create a new signing key when prompted
4. Export new certificate (public key only) from Certificates (Local Computer) > Personal > Certificates to `C:\CABackup\Certificates\Root CA`. 
5. Specify DER encoded binary X.509 (.CER) format.

### Reissue CRL from Root CA

1. Open an administrative command prompt on the root CA. Generate a new CRL file signed using SHA256
	- ` Certutil -CRL`
2. Locate and publish CRL from %windir%\system32\CertSrv\CertEnroll
	- ` Certutil “[.crl file name]” | findstr /spi algorithm`
3. Confirm that the Algorithm ObjectId value is the correct hash algorithm (SHA256RSA)
4. Copy new CRL and Root CRT to C:\Certificates on PKISERVER01 or another domain-joined machine and publish them to AD.
	```
	certutil -f -dspublish C:\Certificates\[.crt file] RootCA
	certutil –f -dspublish C:\Certificates\[.crl file]
	```
5. Verify presence of CRL in certificate store (under Trusted Root Certification Authorities)
6. Copy CRL to CertEnroll folder used for http access to certificates (C:\Windows\System32\certsrv\CertEnroll)

:::info
Allow time to propagate around AD
:::

### Renew Subordinate CA certificate and change algorithm to SHA-2

1. Logon to PKISERVER01 and open the Certificate Authority MMC
2. Back up CA (right click server in CA MMC and choose Back up CA) and choose options to backup private key and CA certificate, and database/log. Do not select incremental backup and ensure you record the password in AuthAnvil
3. Backup CA registry settings
	- Export registry: `"HKLM\SYSTEM\CurrentControlSet\services\CertSvc"` to `C:\CABackup\CAregistry.reg`
4. Right click on the CA and choose All Tasks > Renew CA Certificate
5. Follow the steps, choosing “no” when asked to generate a new key pair
6. Make sure the computer name is PKISERVER01.domain.local and select the Root CA as the parent
7. Press Cancel to create a .req file in the root of C:
8. Copy the REQ file from C: to the Root CA at C:\CABackup\Requests
9. Open the CA MMC on the Root CA. Right click on the Root CA > All Tasks > Submit new Request and select the REQ file
10. Go to Pending Request and issue the pending certificate
11. Double click the certificate you have just issued and go the details tab, and select copy to file
12. Export the certificate as a DER encoded binary x.509 (.CER) file and copy the certificate over to the Issuing CA (PKISERVER01)
13. Allow time for group policy and AD to update with the certificates
14. On PKISERVER01, Right click on CA > All Tasks > Install CA Certificate, select the new certificate
15. Start the AD CS Service
16. Take a one-time backup off offline Root CA and shut it down
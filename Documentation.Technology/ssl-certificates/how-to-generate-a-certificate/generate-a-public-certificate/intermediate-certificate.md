---
sidebar_position: 6
---

# Intermediate Certificate

With websites like Godaddy, they may automatically renew your certificate for you.

This means that you will not have a CSR to import the certificate to on a server. They give you a certificate that is called something like *_iis_intermediates.p7b and then the actual certificate.

To import the Intermediate certificate that is needed to import the actual certificate you must do the following:

1. Open MMC and local certificates
2. Right-click Intermediate Certification Authorities > All Tasks > Import…
3. Follow the wizard and import the *.p7b file to the Intermediate Certification Authorities store.

To import the actual certificate after you have imported the Intermediate certificate:

1. Open IIS
2. Click on the server > Server Certificates
3. In the Actions panel on the right, click Complete Certificate Request....
4. Do the following to install the certificate, and then click OK:
	- File name containing the certificate authority's response — Click ..., locate the .crt file on your computer, and then click Open.
	- Enter a friendly name
	- Select a certificate store for the new certificate — Select Personal.

The certificate is now on the server, you can bind this to the specified service and also export the private key to use on other servers.

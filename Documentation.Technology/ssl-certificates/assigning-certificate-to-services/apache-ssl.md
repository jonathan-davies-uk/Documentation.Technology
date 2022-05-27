---
sidebar_position: 7
---

# Apache SSL certificate replacement

Apache requires your certificate files to be in .pem and .crt format. You will need to convert your .pfx to .pem and .crt using openssl.

1. Download Openssl and install from here: http://gnuwin32.sourceforge.net/packages/openssl.htm
2. Browse to the openssl folder location in CMD or Powershell: C:\Program Files (x86)\GnuWin32\bin
3. Issue the following commands:
	- .\openssl.exe pkcs12 -in wc.pfx -out C:\temp\wildcard.pem -nodes
	- .\openssl.exe pkcs12 -in wc.pfx -clcerts -nokeys -out C:\temp\wc.crt
4. The .pem and .crt files can now be copied to the Apache SSL folder location. To find this, open Apache Configuration and ctrl+f SSLCertificateFile.
5. Restart Apache service
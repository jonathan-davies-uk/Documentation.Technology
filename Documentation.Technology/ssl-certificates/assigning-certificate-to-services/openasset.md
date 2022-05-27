---
sidebar_position: 16
---

# Openasset certificate replacement

1. Copy the certificate and the intermediates to `C:\Apache2\conf\ssl\`
2. Convert the intermediate certificate (intermediate-certname.p7b) to .cer
	- Open up Cygwin Bash Shell
	- Type the following commands:
    ```
	    cd /cygdrive/c/Apache2/conf/ssl/
		openssl pkcs7 -print_certs -in intermediate-certname.p7b -out gd-intermediate-certname.cer 
    ```

3. Apply the certificate to the config
	- Open up the file `C:\Apache2\conf\OpenAsset.conf`
	- Find `SSLCertificateFile` and type: `conf/ssl/certificatename.crt`
	- Find `SSLCertificateChainFile` and type: `conf/ssl/ intermediate-certname.cer`

4. Go to services and  restart the Apache service.
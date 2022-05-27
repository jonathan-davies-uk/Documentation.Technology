---
sidebar_position: 2
---

# Exchange 2013

## Replace a certificate for Exchange 2013

1. Access the Exchange Admin Center by opening a web browser and visiting https://localhost/ecp
2. On the left side bar, select Servers > Certificates.
3. Import your certificate
4. Select the certificate that you've just imported and click on it > Services
5. Select the services where you want the certificate enabled, e.g: `SMTP, IMAP, POP and IIS`

## Got a Hyrbid Exchange environment and use TLS send connectors?

The next steps we are going to do using Exchange powershell.

1. Open up Exchange Management Shell as administrator
2. Check what certificate the send connector is using by issuing the command below: (make note of the send connector name)
        
#### `Get-SendConnector | fl`

3. Get the thumbprint of the new certificate that you've just imported:
`Get-ExchangeCertificate | fl `
4. Make note of the thumbprint and issue the following commands:
```
$certificate = Get-ExchangeCertificate -Thumbprint "<insert thumbprint>"
$tlscertificatename = "<i>$($certificate.Issuer)<s>$($certificate.Subject)"
Set-SendConnector "Name of Send connector" -TlsCertificateName $tlscertificatename
```
5. Confirm that the commands you have just run were successful, by issuing the following command:

#### `Get-SendConnector | fl`

6. Enable the certificate with SMTP services using the command below:

#### `Enable-ExchangeCertificate "<insert thumbprint>" -services SMTP`

7. Repeat the above steps, incase you have any receive connectors that are using TLS:

#### `Get-ReceiveConnector | fl`
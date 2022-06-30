---
sidebar_position: 5
---

# Exchange Online TLS Connectors

## Renew an Exchange Online Send or Receive Connector TLS Certificate

### Connect to Exchange Online through Powershell

#### Install the Exchange Online modules

1. Open powershell as administrator
2. Issue the following commands and login as Exchange Administrator or Global Admin:
```
Install-Module -Name ExchangeOnlineManagement
Import-Module -Name ExchangeOnlineManagement
Connect-ExchangeOnline
```

### Replace certificate for Send or Receive Connectors

#### `Get-OutboundConnector | fl`

3. Get the thumbprint of the new certificate that you've just imported:
`Get-ExchangeCertificate | fl `
4. Make note of the thumbprint and issue the following commands:
```
$certificate = Get-ExchangeCertificate -Thumbprint "<insert thumbprint>"
$tlscertificatename = "<i>$($certificate.Issuer)<s>$($certificate.Subject)"
Set-SendConnector "Name of Send connector" -TlsCertificateName $tlscertificatename
```
5. Confirm that the commands you have just run were successful, by issuing the following command:

#### `Get-OutboundConnector | fl`

7. Repeat the above steps, incase you have any receive connectors that are using TLS:

#### `Get-InboundConnector | fl`
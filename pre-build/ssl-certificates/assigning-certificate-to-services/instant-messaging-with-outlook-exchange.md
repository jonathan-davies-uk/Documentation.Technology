---
sidebar_position: 12
---

# Instant Messaging with Outlook Exchange certificate replacement

### Get old certificates
`Get-SettingOverride`

### Bind certificate on all Exchange servers
```
New-SettingOverride -Name "OWa-Skype-Tele-New" -Component OwaServer -Section IMSettings -Parameters @("IMServerName=dur-server-01.domain.local","IMCertificateThumbprint=bsdfcsggdd93c5797fhssha976822f868a49a2be") -Reason "Configure IM"
```

### Restart services
`Restart-WebAppPool MSExchangeOWAAppPool`

### Validate it's successfull
```
Get-ExchangeDiagnosticInfo -Server server-mail-02 -Process Microsoft.Exchange.Directory.TopologyService -Component VariantConfiguration -Argument Refresh
Get-ExchangeDiagnosticInfo -Server server-mail-01 -Process Microsoft.Exchange.Directory.TopologyService -Component VariantConfiguration -Argument Refresh
[xml]$diag=Get-ExchangeDiagnosticInfo -Server server-mail-02 -Process MSExchangeMailboxAssistants -Component VariantConfiguration -Argument "Config,Component=OwaServer"; $diag.Diagnostics.Components.VariantConfiguration.Configuration.OwaServer.IMSettings
[xml]$diag=Get-ExchangeDiagnosticInfo -Server server-mail-01 -Process MSExchangeMailboxAssistants -Component VariantConfiguration -Argument "Config,Component=OwaServer"; $diag.Diagnostics.Components.VariantConfiguration.Configuration.OwaServer.IMSettings
```
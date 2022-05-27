---
sidebar_position: 6
---

# ADFS and WAP certificate replacement

## ADFS Certificate replacement

1. Import certificate to ADFS Server in the Personal store
2. Right-click the certificate in MMC > All Tasks > Manage Private Keys
	- Add the ADFS service with Full Control and Read permissions
		- Select the local machine as location
		- Nt service\adfssrv
		- Nt service\drs
3. Take note of Thumbprint:
	- Open the Certificate in MMC > Details
	- The Thumbprint can be found at the bottom of Details tab and look something similar to:
	- 6eb44ed4a495dec64fe96c1ae5eb43c0157ee44e
4. Export the private key from MMC
5. Open up ADFS Management
	- Go to AD FS > Service > Certificates
	- Click Set Service Communications in the right corner
	- Select the new certificate
6. Open up powershell as admin on the primary ADFS and type following commands:
	- `Set-AdfsCertificate -CertificateType Service-Communications -Thumbprint 6eb44ed4a495dec64fe96c1ae5eb43c0157ee44e`
	- `Set-AdfsSslCertificate -Thumbprint 6eb44ed4a495dec64fe96c1ae5eb43c0157ee44e`
7. Restart ADFS Service
8. Open up powershell as admin on the secondary ADFS and type following commands:
	- `Set-AdfsSslCertificate -Thumbprint 6eb44ed4a495dec64fe96c1ae5eb43c0157ee44e`
9. Restart ADFS Service

## WAP Certificate replacement (repeat on each WAP server)

1. Import the private key into the WAP Server
2. Open powershell as admin and type the following commands:
	- `Set-WebApplicationProxySslCertificate –Thumbprint 6eb44ed4a495dec64fe96c1ae5eb43c0157ee44e`
		- Check this hasn’t removed any bindings to ports as there's a bug in some versions of WAPs. If this has, recreate the bindings by doing the following:
		- `Install-WebApplicationProxy`
		- CertificateThumbprint: the one you've just imported
		- FederationServiceName: the fed service URL with the issue
		- If you get an error about error connecting to federation services, check the host file.
	- Check command below, it may affect other services and may not need applying:
		- The below command will apply to all services under `Get-WebApplicationProxyApplication`. To find out what certificates they currently use, issue the following command: `Get-WebApplicationProxyApplication | fl`
		```
        Get-WebApplicationProxyApplication | Where {$_.ExternalCertificateThumbprint -eq "e9672a2f11439cab56d6a03b66836f124ecb211e" | Set-WebApplicationProxyApplication -ExternalCertificateThumbprint "0d633ce1650a279384ea418cfc73c84bca620d2c" 
        ```
    - Check whether a fallback certificate (default cert supporting older, non-SNI capable devices e.g. older Android phones) has been configured on the WAP servers.
	 	- Run the following command to view certificate bindings
			`Netsh http show sslcert`
		- If a fallback certificate is configured, it displays as 
			`IP:port : 0.0.0.0:443`
				
		- If the fallback certificate needs updating, make a note of the App ID, then delete & recreate the entry using the new hash. Run the following from an administrative command prompt
        ```
			Netsh http delete sslcert ipport=0.0.0.0:443
			netsh http add sslcert ipport=0.0.0.0:443 certhash=<hash> appid={<app ID>}
        ```

3. Restart WAP and ADFS services

## Testing the certificate has applied successfully

### External test

	1. Goto portal.office.com and type any@domainrenewing.com
	2. If is redirects you are good to go

### Internal test

	1. Goto the following address on both WAP servers and check the certificate https://login.domianname.co.uk/adfs/ls/idpinitiatedsignon


## WAP certificate errors

When renewing the WAP certificate, sometimes there's an issue where on one of the WAPs CONFIG files was empty. The configuration file is located:
#### `This was located in C:\Windows\ADFS\Config`

The resolution is to copy and pastes the configuration file from WAP01 and copied into WAP02. Below is a copy of the missing config file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <configSections>
    <section name="microsoft.identityServer.proxyservice" type="Microsoft.IdentityServer.Management.Proxy.Configuration.ProxyConfiguration, Microsoft.IdentityServer.Management.Proxy, Version=6.3.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35, processorArchitecture=MSIL" />
  </configSections>

  <microsoft.identityServer.proxyservice>
    <congestionControl latencyThresholdInMSec="8000" minCongestionWindowSize="64"
      enabled="true" connectionTimeoutInSec="60" />
    <connectionPool connectionPoolSize="200" scavengeInterval="5" />
    <diagnostics eventLogLevel="15" />
    <host tlsClientPort="49443" httpPort="80" httpsPort="443" name="login.shieldtx.com" />
    <proxy address="" />
    <trust thumbprint="6E79C156A1B26DCAB09146C9F505331492B2E741"
      proxyTrustRenewPeriod="21600" />
  </microsoft.identityServer.proxyservice>
  <!-- <system.serviceModel>
    <diagnostics>
      <messageLogging logEntireMessage="true"
              logMessagesAtServiceLevel="true"
              logMessagesAtTransportLevel="true">
      </messageLogging>
    </diagnostics>
  </system.serviceModel> -->
</configuration>

```
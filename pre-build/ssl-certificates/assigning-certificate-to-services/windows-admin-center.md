---
sidebar_position: 10
---

# Windows Admin Center certificate replacement

## On GUI

1. Open up Control Panel > Programs and Features
2. Click on Windows Admin Center > Change
3. Click Next and Use an SSL Certificate installed on this computer
4. Type in the thumbprint of the certificate (can be found in certlm.msc)

## On Server Core

1. Run the following:
	```
	Powershell
	$WAC_Online = "http://aka.ms/WACDownload"
	$WAC_Installer = "C:\windows\Temp\wac.msi"
	$Port = 443
	Invoke-WebRequest -Uri $WAC_Online -OutFile $WAC_Installer
	msiexec /i $WAC_Installer SME_PORT=$Port SSL_CERTIFICATE_OPTION=generate
	```

2. After you've ran the above follow the GUI guide



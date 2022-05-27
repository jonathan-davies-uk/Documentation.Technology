---
sidebar_position: 9
---

# IBM Domino Server certificate replacement

## Convert your certificate from PFX to PEM

1. Convert PFX to PEM using Openssl
	- Install: http://gnuwin32.sourceforge.net/packages/openssl.htm
	- My openssl is in the following location: `C:\Program Files (x86)\GnuWin32\bin\`
	- Run the following command: 
		` openssl.exe pkcs12 -in elddis-wc.pfx -out elddis1.pem -nodes -chain `

2. Install Certificate on Domino Server
	- Logon to Domino server
	- Copy the PEM to C:\Program Files\IBM\Domino\ 
	- Open CMD prompt as administrator and issue the following commands
	```
	Cd "C:\Program Files\IBM\Domino\"
	kyrtool.exe create -k "C:\Program Files\IBM\Domino\data\keyring1.kyr" -p EnterAPasswordOfYourChoice
	kyrtool.exe import all -k "C:\Program Files\IBM\Domino\data\keyring1.kyr" -i "C:\Program Files\IBM\Domino\elddis1.pem"
	```
	- Restart IBM Domino service

3. Verify the certificate installed is correct:
	```
	kyrtool.exe show certs -k "C:\Program Files\IBM\Domino\data\keyring1.kyr" >kyrcerts.txt
	kyrtool.exe show keys -k "C:\Program Files\IBM\Domino\data\keyring1.kyr" >kyrkeys.txt
	kyrtool.exe show roots -k "C:\Program Files\IBM\Domino\data\keyring1.kyr" >kyrroots.txt
	```

4. Copy the `keyring1.kyr` and `keyring1.sth` files the data folder into all other servers that need it and restart the IBM services on said servers

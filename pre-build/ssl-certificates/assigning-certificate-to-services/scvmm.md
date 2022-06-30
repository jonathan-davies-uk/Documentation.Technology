---
sidebar_position: 11
---

# SCVMM certificate replacement


To renew an expired certificate, find the server with Virtual Machine Manager on and do the following:
	
1. Open certlm.msc and find the old certificate and remove it. If you don't remove it the creation of the new certificate will not work.
2. Open up Virtual Machine Manager powershell as administrator and run the following:
	- ` Get-VMMManagedComputer `

3. The above will list the VM's that are managed by VMM. Take note of the Computer name and then issue the following command:
	```
	$credentials = get-credentials #this should be domain admin e.g. domain.local\waterstons
	Get-VMMManagedComputer -ComputerName "client-server02.domain.local" | Register-SCVMMManagedComputer -Credential $credentials
	```

3. Check the VM you've just issued the certificate too and it will now have an up to date certificate.
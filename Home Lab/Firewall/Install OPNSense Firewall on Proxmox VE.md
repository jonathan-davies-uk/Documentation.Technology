

## 1. Download OPNsense 
### Download OPNsense ISO
1. Download the latest OPNsense image from the official OPNsense mirror https://opnsense.org/download/
2. Using the **Fast Dowbload selector**, choose:
	1. System architecture: amd64
	2. Select the image type: dvd
	3. Mirror Location2: United Kingdom - University of Kent
3. Take note of the SHA256SUM checksum to verify the download in the next step. https://docs.opnsense.org/manual/install.html#download-and-verification 

### Verify OPNsense ISO
1. Open Powershell
2. Browse to your downloads folder with the following command: `cd c:\users\user\downloads` 
3. Verify the downloaded OPNsense ISO file with the following command: `Get-FileHash .\OPNsense-25.7-dvd-amd64.iso.bz2 -Algorithm SHA256`
4. Ensure the output matches the checksum taken note of in the previous step

### Upload OPNsense ISO to Proxmox VE
1. Login to Proxmox VE using a web browser: `https://192.168.0.100:8006`
2. Browse to **Datacenter** > **Promox** > **local (Proxmox)> **ISO Images**
3. Click **Upload**
4. Under **Content**, select **ISO Images** and click `Select file...` to browse and select the OPNsense ISO
5. Select **Upload**
## 2. Create OPNsense Virtual Machine in Proxmox VE

https://pve.proxmox.com/pve-docs/pve-admin-guide.html#chapter_virtual_machines

## 3. Setup Networking Configuration for OPNsense Virtual Machine in Proxmox VE

## 4. Install OPNsense

https://docs.opnsense.org/manual/install.html
https://docs.opnsense.org/manual/virtuals.html
## Install Kali Linux on Raspberry Pi
### Download Kali Linux
1. Download [Kali Linux](https://www.kali.org/get-kali/#kali-arm)
2. Choose Raspberry Pi 3, 4, 400, 5 and 500 (64-bit) installer
3. Await download

### Flash Kali Linux to Micro SD card
1. Download [Raspberry Pi Imager]([Raspberry Pi software – Raspberry Pi](https://www.raspberrypi.com/software/)
2. Select **Download for Windows** and run through the default install process
3. Open Raspberry Pi Imager and select the following:
	1. Raspberry Pi Device: Raspberry Pi 4
	2. Operating System: Kali-Linux.img
	3. Storage: Your-Micro-SD-Card
4. Select Next and you have the option to customise the install with Wifi Passwords, SSH service, localhost name and more
5. Select your preferred option and await verification

### Install Kali Linux on Raspberry Pi
1. Insert Micro SD card into Raspberry Pi 
2. Insert USB C cable and Power On
3. Await boot and login with:
	1. username: **pi**
	2. password: **raspberry**
4. Run the following commands to get up to date:
	```bash
	sudo systemctl enable --now hciuart.service
	sudo systemctl enable --now bluetooth.service
	sudo apt get update
	```

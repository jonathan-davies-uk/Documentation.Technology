---
sidebar_position: 10
---

# The current system is no a EFI system

## The Issue

`18/05/2021 20:02:14 :: The current system is not a EFI system. `

Agent detected an EFI partition, but hasn’t found EFI

## The Resolution

Find your EFI partition that's no in use:
1. Mount | grep efi

Add partition to exclusion:
1. Open /etc/veeam/veeam.ini - can use sudo nano /etc/veeam/veeam.ini
2. Find backup section
3. Add this string
	1. ignoreDevices=/dev/'your EFI device' (for example, /dev/sda15)

Restart Veeam Service
1. service --status-all
2. sudo systemctl restart veeamservice
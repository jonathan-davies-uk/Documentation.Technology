---
sidebar_position: 2
---

# Restore files from a VM

## 1. Download a script to browse and recover files

1. Logon to the [Azure Portal](https://portal.azure.com)
2. Browse **Virtual Machines** > select your VM
3. Under Operations, click **Backup**
4. Select **File Recovery**
5. Select a recovery point
6. **Download script/executable** and take note of the password to run it

## 2. Ensure requirements are met before restore

Ever changing requirements, so here's a link to a list of them:

- https://docs.microsoft.com/en-us/azure/backup/backup-azure-restore-files-from-vm#step-2-ensure-the-machine-meets-the-requirements-before-executing-the-script
- https://docs.microsoft.com/en-us/azure/backup/backup-azure-restore-files-from-vm#step-3-os-requirements-to-successfully-run-the-script
- https://docs.microsoft.com/en-us/azure/backup/backup-azure-restore-files-from-vm#step-4-access-requirements-to-successfully-run-the-script

## 3. Run the script to restore the files

1. Right-click the script and select run with Administrative privileges
2. Enter the password you took note of
3. The script will then tell you that it's mounted a drive on a specific location, for example **E:\Local Disk**
4. Browse to the location and proceed with recovering your files

## 4. Close the connection

1. Go back to the Azure poortal file recovery that you left it on
2. Click **Unmount disks**
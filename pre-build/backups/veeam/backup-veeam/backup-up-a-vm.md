---
sidebar_position: 1
---

# Backing up a VM

## Assumptions

This guides assumes that you've already setup your infrastructure within Veeam, this could be vSphere or Hyper-V as an example and a suitable backup repository. This guide will also run through backing up vSphere VM's.

## Setup the backup job

1. Browse Veeam Backup & Replication
2. Under Home, click Jobs, right-click it and then select Backup > Virtual Machine > VMware vSphere
3. Give the job a name and a sensible description, example: **Daily VM Backups**, "Backing up X VMs, daily"
4. Click Next and under the Virtual Machines section, click Add
5. Select the necessary VMs that you want to backup from the Add objects screen
6. Under the Virtual Machines section, you can exclude the relevant objects you want, this can include the following:
  1. VMs from specific containers
  2. VM templates
  3. Specific disk on VMs
7. Under the Virtual Machines section you can also reorder the VMs that you want to get backed up first. Click on a VM and use the arrows towards the right to do so
8. Click Next and fill out the details under the Storage menu as follows:
  1. Backup proxy: Automatic
  2. Backup repository: Backup Repo - 14TB
  3. Retention Policy: 14 restore points
  4. Check the Keep some periodic full backups longer for archival purposes and configure Long-term retention as such:
    - Keep weekly full backups for: 1 weeks
    - Keep monthly full backups for: 1 months
    - Keep yearly full backups: uncheck
  5. If you want to archive your backup files off to a secondary destination such as tape or another offsite backup repository, then select the Configure secondary destinations for this job

## Setup job with advanced settings

Continuing on from the previous section, this will go through setting the backup job up with advanced settings.

### Backup tab

1. Under Storage, click on Advanced Settings
2. Check the Incremental (recommended) setting
3. Check the Create Synthetic full backups periodically and select Saturday
4. Uncheck the Active full backup

### Maintenance tab

1. Check the Perform backup files health-check and select Monthly on the Last Friday
2. Select remove deleted items after 14 days
3. Select defragment and compact backup filem and select Monthly on the Last Saturday

### Storage tab

1. If your backup repository supports it, Enable inline data deduplication
2. Check exclude swap file blocks
3. Check exclude deleted file blocks
4. Set the compression level to Optimal
5. Set the storage optimization to Local target
6. Check Enable backup file encryption and create a password for the backup job

### Notification tab

1. If you've SNMP setup for the backup server, then check the Send SNMP notifications for this job field
2. Check Send e-mail notifications and put in the relevant recipients
3. Select use custom notifications and check all four boxes for Notify on success, warning, error and supress.
4. Check Set successful backup details to this VM attribute: **Note:**
5. Check Append to the existing attribute's value

### vSphere tab

1. Uncheck Enable VMware Tools quiscence
2. Enable change blocked tracking for all VMs and reset CBT on each successful backup

### Intergration tab

1. Check Enable backup from Storage snapshots
2. Check Limit processed VM count per storage snapshot to: 10
3. Check Failover to standard backup
4. Check Failover to primary snapshot

### Scripts tab

1. Don't enable any scripts for this job
2. Click OK to save and click Next

## Setup backup job - Secondary target

1. We won't be selecting a secondary target for this backup job, though will cover it later on - click Next

## Setup backup job - Specify Guest Processing settings

1. Check Enable application-aware processing 
2. Check Enable guest file indexing
3. Guest interaction proxy: Automatic selection
4. Add Guest OS credentials of the local administrator of the VMs you're adding
5. Click Next

## Setup backup job - Define job schedule

1. Check Run the job automatically, Daily at 21:00
2. Check Retry failed VMs processing: 3 times
3. Set Wait before each retry attempt for: 10 minutes
4. Uncheck Terminate job if it exceeds allowed backup window
5. Select Apply
6. Review the settings you just made and select Finish and Run the job when I finish
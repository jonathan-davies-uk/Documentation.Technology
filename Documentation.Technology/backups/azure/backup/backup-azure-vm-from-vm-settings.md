---
sidebar_position: 1
---

# How to backup an Azure VM from the VM settings

## Setup the backup

1. Logon to the [Azure Portal](https://portal.azure.com)
2. Browse **All services** > Filter > **Virtual Machines**
3. Select the VM that you want to backup
4. From the VM menu select **Backup**
5. In **Recovery Services** vault and do the following:
    1. Create new
    2. Give the vault a name
    3. Ensure the vault is in the same region as the VM
6. Next, **Choose backup policy** and do the following:
    1. DefaultPolicy - this backs up the VM once a day at the time specified, and retains backups in the vault for 30 days.
8. Select **Enable Backup**

## Initiate a backup

1. Browse the VM
2. Select **Backup** under Operations
3. From here you can select **Backup now** or wait until it starts in accordance with the backup schedule set previously
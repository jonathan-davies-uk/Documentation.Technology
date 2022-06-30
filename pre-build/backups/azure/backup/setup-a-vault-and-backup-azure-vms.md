---
sidebar_position: 2
---

# Setup a vault and Backup Azure VMs

## Create the vault

1. Logon to the [Azure Portal](https://portal.azure.com)
2. Search for **Backup center** and browse the **Backup Center dashboard**
3. Under Overview, click on **+Vault**
4. Select **Recovery Services vault** > Continue
5. Fill out the following:
    1. **Subscription**: choose the subscription you want to use
    2. **Resource group**: you can use an existing resource group or create a new one
    3. **Vault name**: something friendly that you can easily identity as a vault
    4. **Region**: select the region for the vault - note this has to be the same as the region of the VMs
6. Click Review + create
7. Click Create

### Modify the storage replication

1. Click on your new vault
2. Browse **Properties** under the Settings section
3. Under **Backup configuration**, select **Update**
4. Choose the storage replication that you'd like, here's the differences:
    1. **Geo-redunant storage (default and recommeneded)**: copies your data three times in a single physical location, and this it copies your data to another single physical location hundreds of miles away from the primary region
    2. **Locally-redundant storage**: replicates your data three times within a single physical location. LRS does not copy that data off to another location
    3. **Zone-redundant storage**: replicates your data across three availability zones within the primary region. ZRS does not copy that data off to another location

## Apply a backup policy

1. Whilst in the Backup Center, click **+Backup** from the Overview tab
    1. Datasource type: **Azure Virtual machines**
    2. Vault: the new vault you created
2. Assign a backup policy, we will be using the **DefaultPolicy**
:::note
The default policy backs up a VM once a daily and the backups are retained for 30 days. Instant recovery snapshots are maintainted for two days.
:::
3. Under **Virtual Machines**, select **Add** and select the VM's you want to backup
4. Click OK
5. Under **Backup**, select **Enable Backup**

Once a backup job is enabled it'll try to do the following:
- The backup extension will be installed whether or not the VM is running
- A backup will run in accordance to your backup schedule

## Verify a Backup job 

1. Browse to **Backup center** > **Backup jobs**
2. From here you can see all previous Backup jobs and current ongoing backups.
---
sidebar_position: 1
---

# Restore Azure VM

## Restore options

There are multiple ways your can restore a VM, and they include:

- **Create a new VM** - creates a VM from a restore point
- **Replace existing** - restore a disk and use it to replace a disk on an existing VM
- **Restore disk** - restores a disk from a VM, which can be used to create a new VM
- **Cross Region** - restore a VM in a second region

## Restoring a VM

1. Logon to the [Azure Portal](https://portal.azure.com)
2. Browse to **Backup center** and click **Restore** from the Overview tab
3. Select **Azure Virtual machine** as a Datasource type and then select a backup instance
4. Choose a VM you want to restore and click **Continue**
5. Select the **Restore point**
6. Select the **Restore Configuration** option you would like, given teh above restore options

### Restoring option: Creating a new VM

Fill out the options as below

- **Restore type**: Create new virtual machine
- **Virtual machine name**: restore-vm-new-name
- **Resource group**: existing-resource-group
- **Virtual network**:  existing-resource-group-vnet
- **Subnet**: default
- **Staging location**: testresourcegroup (StandardLRS)

### Restoring option: Restore disk

Fill out the options as below

- **Restore type**: Create new virtual machine
- **Virtual machine name**: restore-vm-new-name
- **Resource group**: new-resource-group
- **Virtual network**:  new-resource-group-vnet
- **Subnet**: default
- **Staging location**: teststaging (StandardLRS)

### Restoring option: Replace existing disk

Fill out the options as below

- **Restore Configuration**: Replace existing
- **Restore Type**: Replace Disk(s)
- **Staging location**: teststaging (StandardLRS)

### Restoring option: Cross Region restore

1. From the Azure portal browse to **Recovery Service vault** > **Backup items**
2. Select **Secondary Region**
3. From here you can choose to **Create a new VM**, **Restore disk** or **Replace existing disk**
4. For the instructions, just follow the above steps.
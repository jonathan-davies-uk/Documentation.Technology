---
sidebar_position: 2
---

# Restore keys and secrets from an encrypted VM

## 1. Get key and secret from backup

1. Connect to Azure via PowerShell
2. Issue the following commands:

```
#Select the VM
#vault = Get-AzRecoveryServicesVault -Name "restorevault" -ResourceGroupName "resource-group"
$container = Get-AzRecoveryServicesBackupContainer -ContainerType "AzureVM" -Status "Registered" -FriendlyName "Restore-VM" -VaultId $vault.ID
$backupitem = Get-AzRecoveryServicesBackupItem -Container $container -WorkloadType "AzureVM" -VaultId $vault.ID

#Choose a recovery point
$startdate = (Get-Date).AddDays(-28)
$enddate = Get-Date
$recoverypoint = Get-AzRecoveryServicesBackupRecoveryPoint -Item $backupitem -StartDate $startdate.ToUniversalTime() -EndDate $enddate.ToUniversalTime() -VaultId $vault.ID
$recoverypoint[0]

#Restore the disk
$restorejob = Restore-AzRecoveryServicesBackupItem -RecoveryPoint $recoverypoint[0] -StorageAccountName "DestAccount" -StorageAccountResourceGroupName "DestRG" -VaultId $vault.ID
$restorejob

#Restore managed disks
$restore = Get-AzRecoveryServicesBackupJob -Job $restorejob -VaultId $vault.ID
$details = Get-AzRecoveryServicesBackupJobDetail -Job $restorejob -VaultId $vault.ID

#Restore selective disks
$restore = Restore-AzRecoveryServicesBackupItem -RecoveryPoint $recoverypoint[0] -StorageAccountName "DestAccount" -StorageAccountResourceGroupName "DestRG" -TargetResourceGroupName "DestRGforManagedDisks" -VaultId $vault.ID -VaultLocation $vault.Location -RestoreToSecondaryRegion -RestoreOnlyOSDisk

#Cross-zonal restore
$restore = Restore-AzRecoveryServicesBackupItem -RecoveryPoint $recoverypoint[0] -StorageAccountName "DestAccount" -StorageAccountResourceGroupName "DestRG" -VaultId $vault.ID -TargetZoneNumber 3
```

3. For this instance, we'll be using the Restore managed disk, above. Issue the following commands:

```
$properties = $details.properties
$storageAccountName = $properties["Target Storage Account Name"]
$containerName = $properties["Config Blob Container Name"]
$encryptedBlobName = $properties["Encryption Info Blob Name"]

Set-AzCurrentStorageAccount -Name $storageAccountName -ResourceGroupName 'resourcegroup-name'
Get-AzStorageBlobContent -Blob $encryptedBlobName -Container $containerName -Destination 'C:\vmencryption_config.json'
$encryptionObject = Get-Content -Path 'C:\vmencryption_config.json' | ConvertFrom-Json
```

## Restore Key

Issue the following commands:

```
$keyDestination = 'C:\keyDetails.blob'
[io.file]::WriteAllBytes($keyDestination, [System.Convert]::FromBase64String($encryptionObject.OsDiskKeyAndSecretDetails.KeyBackupData))
Restore-AzureKeyVaultKey -VaultName 'target-vault' -InputFile $keyDestination
```

## Restore Secret

Issue the following commands:

```
$secretdata = $encryptionObject.OsDiskKeyAndSecretDetails.SecretData
$Secret = ConvertTo-SecureString -String $secretdata -AsPlainText -Force
$secretname = 'B3284AAA-DAAA-4AAA-B393-60CAA848AAAA'
$Tags = @{'DiskEncryptionKeyEncryptionAlgorithm' = 'RSA-OAEP';'DiskEncryptionKeyFileName' = 'B3284AAA-DAAA-4AAA-B393-60CAA848AAAA.BEK';'DiskEncryptionKeyEncryptionKeyURL' = $encryptionObject.OsDiskKeyAndSecretDetails.KeyUrl;'MachineName' = 'vm-name'}
Set-AzureKeyVaultSecret -VaultName 'target-vault' -Name $secretname -SecretValue $Secret -ContentType 'Wrapped BEK' -Tags $Tags
```

## Create VM for restored disks

From here you can go ahead and create a virtual machine from the restored, encrypted disk.

##
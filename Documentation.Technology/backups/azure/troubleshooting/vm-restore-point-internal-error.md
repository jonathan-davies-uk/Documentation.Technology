---
sidebar_position: 2
---

# VM Restore Point Internal Error

## The issue

`VMRestorePointInternalError`

Antivirus configured in the VM is restricting the execution of backup extension

## The Solution

Exclude the following directories from antivirus configuration:
- `C:\Packages\Plugins\Microsoft.Azure.RecoveryServices.VMSnapshot`
- `C:\WindowsAzure\Logs\Plugins\Microsoft.Azure.RecoveryServices.VMSnapshot`
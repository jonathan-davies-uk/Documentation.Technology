---
sidebar_position: 1
---

# Restore: VM creation failed as VM size selected is not available

## The issue

`UserErrorSkuNotAvailable`

This is because the VM size selected during a restore process in an unsupported size.

## The Solution

You can use the restore disks option whilst restoring, this will allow you to use different disks to create a VM from the list of supported VM sizes.
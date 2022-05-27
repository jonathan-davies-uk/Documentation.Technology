---
sidebar_position: 8
---

# Extension state is not supportive to backup operation

## The issue

`ExtensionStuckInDeletionState`

The current Backup Extension is in an incosistent state.

## The Solution

- Make sure Guest Agent is installed and working correctly
- Browse to Virtual Machine > All Setting > Extensions
    - Select VmSnapshot or VmSnapshotLinux and Uninstall
    - After removing the backup extension, retry the job
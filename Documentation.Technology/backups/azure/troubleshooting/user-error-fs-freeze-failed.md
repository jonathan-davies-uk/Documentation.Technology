---
sidebar_position: 5
---

# User Error FS Freeze Failed

## The issue

`UserErrorFsFreezeFailed`

The backup job failed to freeze mount-points of the VM to take a consistent snapshot.

## The Solution

Run a file system consistency check:
- Unmount the device
- Run a consistency check with the following command: `fsck`
- Remount the device
- Retry backup

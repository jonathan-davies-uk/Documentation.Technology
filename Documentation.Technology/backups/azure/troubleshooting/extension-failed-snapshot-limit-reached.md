---
sidebar_position: 9
---

# Snapshot operation failed as snapshot limit is exceeded for some of the disks attached

## The issue

`ExtensionFailedSnapshotLimitReachedError`

The snapshot failed as the snapshot limit has been reached.

## The Solution

- Remove any disk blob-snapshots 
:::warning
Be careful not to delete disk blobs.
:::
- Got **Azure Site Recovery** enabled?
    - Ensure **isanysnapshotfailed** value to set to false: `/etc/azure/vmbackup.conf`
    - Schedule Azure Site Recovery to run at a different time so it doesn't conflict
- Configure soft-delete retention so any snapshots are less than the maximum size
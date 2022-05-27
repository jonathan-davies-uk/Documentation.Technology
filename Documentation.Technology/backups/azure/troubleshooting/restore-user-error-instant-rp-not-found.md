---
sidebar_position: 4
---

# Restore: failed because there was no Snapshot of the VM

## The issue

`UserErrorInstantRpNotFound`

The recovery point you are trying to restore from was not transferred to the vault and was deleted whilst snapshotting.

## The Solution

Try and restore the VM from a different restore point - the current one maybe corrupt.
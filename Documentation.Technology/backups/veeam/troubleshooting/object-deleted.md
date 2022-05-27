---
sidebar_position: 4
---

# Object Deleted

## The Issue

`Task failed Error: The object has already been deleted or has not been completely created.`

The server may have been recreated, or the host under Virtual Machines no longer recognises the VM.

## The Resolution

1. Go to Virtual Machines
2. Infrastructure > VMware vSphere
3. Right-click all hosts and rescan
4. Re-add the Virtual Machine in the backup job
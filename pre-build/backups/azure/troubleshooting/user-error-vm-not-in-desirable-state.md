---
sidebar_position: 4
---

# VM not in a desirable state

## The issue

`UserErrorVmNotInDesirableState`

The virtual machines that's being backed up is not in a state that allows backups.

## The Solution

For a successful backup, these VM states are supported:
- Running
- Stopped
- Stopped (deallocated)

If the state is mid shutting down - wait for the state to change and then trigger the backup job.
---
sidebar_position: 1
---

# Disk Full

## The issue

Veeam may have failed to delete backups or the space has filled due to VMs getting larger.

## The Solution

1. You cannot delete from Veeam as this will delete all restore points.
2. Navigate to drive that is full
3. Sort by date -  you generally want to remove the oldest backups
4. Before deleting also inform site manager
5. For incrementals:
	1. If you delete the full backup (.vbk) you must delete the following incrementals (.vib) after the latest full
6. For reverse incrementals:
	1.  Remove old incrementals (.vrb) there will always be a full backup (.vbk)
7. You must then Rescan the repository  on Veeam
	1. Backup Infrastructure > Backup Repositories 
	2. Right-click rescan the correct repository
8. If it’s a backup copy, do the above and then delete from Backup Copy
	1. Disable Job in Backup Copy
	2. Backups > Disk (copy)
	3. Right-click the backup job copy and properties 
	4. Right-click the deleted backup copy jobs
9. Click forget unavailable jobs.
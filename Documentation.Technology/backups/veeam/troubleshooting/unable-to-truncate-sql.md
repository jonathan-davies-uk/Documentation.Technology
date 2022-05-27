---
sidebar_position: 5
---

# Unable to Truncate SQL

## The Issue

`Unable to truncate Microsoft SQL Server transaction logs. Details: Failed to process 'TruncateSQLLog' command.`

The backup-job with application-aware processing enabled failed to truncate the SQL logs.

## The Resolution

1. Logon to the server that's got the issue
2. Check the helper log:
	1. \\vmname\c$\ProgramData\Veeam\Backup\VeeamGuestHelper_%date%.log 
	2. Look for the following key words:
		- Truncate
        - Error:

The above will give you an indication as to the exact database it failed to truncate, and generally the reason why.

Reasons could be:
- The Veeam acount used doesn't have the right permissions to truncate the SQL logs
    - Asssign Administrator role on target VM
    - Assign Sysadin role on the target SQL Server

References:
https://helpcenter.veeam.com/docs/backup/vsphere/required_permissions.html?ad=in-text-link&ver=110#performing-guest-processing
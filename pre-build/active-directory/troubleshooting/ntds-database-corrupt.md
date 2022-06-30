---
sidebar_position: 2
---

# NTDS Database Corrupt

## Alarm

NTDS (524) NTDSA: Database C:\Windows\NTDS\ntds.dit: Index DRA_USN_index of table datatable is corrupted (0).

## Explanation

For a Non-Authoritative restore process: This restores the DC back to the restore point chosen and then allows normal replication to occur and update the DC to the latest iteration.

For an Authoritative restore process: First you must go through an Authoritative Restore and then go one step further. Authoritative restores effectively update all objects in the domain, making the newly restored DC the authoritative copy. Each of the other DCs are then updated via standard replication.

References
https://www.veeam.com/blog/active-directory-domain-controller-backup-recovery.html
https://www.dell.com/support/article/us/en/04/sln289101/windows-server-active-directory-database-repair-after-domain-controller-failure?lang=en
https://www.pluralsight.com/blog/tutorials/backup-and-restore-active-directory-on-windows-server-2008

## Solutions

1. Stop the service Active Directory Domain Services
2. Open up a command prompt as administrator
3. Run the following command to check the integrity of AD:
	`ESENTUTL /g C:\windows\NTDS\ntds.dit /!10240 /8 /o`
4. This will confirm the database is corrupt and the time since a last good backup
5. Reboot the server into Directory Services Restore Mode (F8 on boot) - you'll need the DSRM password you created during AD installation
6. Open a cmd prompt and type the following:
	- `Wbadmin get versions`
	- Perform a non-authoritative restore of AD - `wbadmin start systemstaterecovery - version:04/14/2019-02:39`

7. If you want to do an authoritative restore you can do the above command with the -authsysvol key (difference is explained above)
---
sidebar_position: 3
---

# Target Principle Name is Incorrect

## Alarm

Target Principle Name is incorrect
Access is denied across all AD services

## Explanation

If you've recently recovered a VM with AD services and are experiencing the errors above when trying to replicate to the recovered VM, this is because the shared key between all DCs have updated between the time of recovery and the point in time recovery. 

This means the restored DC doesn't have the updated shared keys and requires updating so AD functions properly.

References:
https://support.microsoft.com/en-sg/help/288167/error-message-target-principal-name-is-incorrect-when-manually-replica
https://u-tools.com/help/PlanCleanup.asp

## Solution

1. Find a working DC (preferably not the PDC)
2. Stop and disable the KDC service
3. Restart the DC
4. Open up cmd as administrator and issue the follow command:
	- `netdom resetpwd /server:workingdchere /UserD:domain\domainadminuser /PasswordD:putpasswordhere`
5. Enabled KDC and restart the DC
6. Replicate from the working DC to the restored DC and confirm replication has worked, some commands you can use:
	```
	Repadmin /showrepl
	Repadmin /replsummary
	Repadmin /showvector /latency "CN=Configuration,DC=domain,DC=name"
 	```
7. If replication has worked, replicate to all DC's from DC-02 to update the shared key across all: `Repadmin /syncall /AdeP`
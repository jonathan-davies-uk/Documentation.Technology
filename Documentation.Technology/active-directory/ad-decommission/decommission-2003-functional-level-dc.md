---
sidebar_position: 1
---

# Decommissioning 2003 Functional Level DC

This is for a Domain Controller that has died and cannot DC Promo to remove it.

### Before you start
1. Make sure the DC is not any of the following:
	- Schema master – Forest-wide and one per forest - MMC > AD Schema Master - if it's not there run CMD as admin and register this DLL: regsvr32 schmmgmt.dll
	- Domain naming master – Forest-wide and one per forest - AD Domains and Trusts
	- RID master – Domain-specific and one for each domain - AD Users and Computers
	- PDC – PDC Emulator is domain-specific and one for each domain - AD Users and Computers
	- Infrastructure master – Domain-specific and one for each domain - AD Users and Computers
2. Make sure the functional level of the domain is 2003.
    - Go to AD Users and Computers
	- Right-click > Properties on the Domain in question
		
### Remove all Metadata 
1. Logon to a working DC
2. Run a cmd prompt as admin
3. Type ntdsutil
	- Type **metadata cleanup** and then **connections**
	- Type **connect to server workingservernamehere** - NOTE: the workingservernamehere is a DC that is working fine
	- Type **quit** and you should be back at the Metadata Cleanup menu
	- Type **select operation target** and then **list domains**
	- Type **select domain numberhere** - NOTE: numberhere is the DC you want to remove the server from (you can replicate this to all DCs later)
	- Type **list sites** and then **select site numberhere**
	- Type **list servers in site** and then **select server numberhere**
	- Type **quit** and you should be back at the Metadata Cleanup menu
	- Type **remove selected server**
4. At an elevated command prompt, replicate to all DCs from the good server that you used in step 3)b)
	- Type: `repadmin /syncall workingservernamehere <naming context>`
	- Naming context example: `DC=DOMAIN,DC=NET`

### Clear up DNS entries for the DC getting decommissioned
1. Open up DNS
2. Find every location that the DNS entry is in and remove it. Don't forget
	- To check both Forward and Reverse lookup zones
	- There may be multiple zones the server is located in.
3. Wait for DNS replication

### Testing

1. Wait for DNS and AD replication, there should now be no more error event 1864.
2. You can also try `repadmin /replsummary` and the server should no longer be causing issues
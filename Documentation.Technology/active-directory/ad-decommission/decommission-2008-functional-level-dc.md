---
sidebar_position: 2
---

# Decommissioning 2008 Functional Level DC

This is for a Domain Controller that has died and cannot DC Promo to remove it.

## Before you start

1. Make sure the DC is not any of the following:
	- Schema master – Forest-wide and one per forest.
	- Domain naming master – Forest-wide and one per forest.
	- RID master – Domain-specific and one for each domain.
	- PDC – PDC Emulator is domain-specific and one for each domain.
	- Infrastructure master – Domain-specific and one for each domain.
2. Make sure the functional level of the domain is 2008.
    - Go to AD Users and Computers
	- Right-click > Properties on the Domain in question

## Cleanup metadata through AD Users and Computers
	
1. Logon to a working DC - preferably the PDC
2. Open up AD Users and Computers
3. Expand Domain > Domain Controllers
4. Right-click the DC to decommission and Delete
5. Click yes to confirm deletion
6. Check the box that says This Domain Controller is permanently offline and can no longer be demoted using the Active Directory Domain Services Installation Wizard (DCPROMO) and Delete
7. If the domain controller is global catalog server, in next window click yes to continue with deletion
8. If the domain controller holds any FSMO roles in next window, click ok to move them to the domain controller which is available

## Cleanup the DC from AD Sites and Services

1. Open up AD Sites and Services
2. Expand the Sites and go the server which needs to be removed
3. Right-click Delete and confirm

## Cleanup metadata using NTDSUTIL
1. Logon to a working DC that’s on the same domain
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
	- Naming context example: DC=DOMAIN,DC=NET

## Clear up DNS entries for the DC getting decommissioned

1. Open up DNS
2. Find every location that the DNS entry is in and remove it. Don't forget
    - To check both Forward and Reverse lookup zones
	- There may be multiple zones the server is located in.
3. Wait for DNS replication

## Testing
1. Wait for DNS and AD replication, there should now be no more error event 1864.
2. You can also try `repadmin /replsummary` and the server should no longer be causing issues
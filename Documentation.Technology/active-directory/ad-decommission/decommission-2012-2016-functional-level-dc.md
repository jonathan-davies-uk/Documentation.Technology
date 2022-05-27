---
sidebar_position: 3
---

# Decommissioning 2012, 2012R2 and 2016 Functional Level DC

Supported domain controllers in 2016 functional level domain:
- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

Supported domain controllers in 2012R2 functional level domain:
- Windows Server 2022
- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 R2

Supported domain controllers in 2012 functional level domain:
- Windows Server 2022
- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 R2
- Windows Server 2012 


## Before you start
1. Make sure the DC is not any of the following:
	- Schema master – Forest-wide and one per forest - MMC > AD Schema Master - if it's not there run CMD as admin and register this DLL: regsvr32 schmmgmt.dll
	- Domain naming master – Forest-wide and one per forest - AD Domains and Trusts
	- RID master – Domain-specific and one for each domain - AD Users and Computers
	- PDC – PDC Emulator is domain-specific and one for each domain - AD Users and Computers
	- Infrastructure master – Domain-specific and one for each domain - AD Users and Computers
2. Make sure the functional level of the domain is 2012, 2012R2 or 2016.
    - Go to AD Users and Computers
	- Right-click > Properties on the Domain in question

## Demote the Domain

Issue the following PowerShell commands

- `Uninstall-addsdomaincontroller -credential (get-credential)`
- `Uninstall-windowsfeature AD-Domain-Services`
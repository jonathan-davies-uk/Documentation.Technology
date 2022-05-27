---
sidebar_position: 8
---

# Administrative Share and VIX

## The Issue

```
Processing SERVER Error: Failed to connect to guest agent. Errors:
'Cannot connect to the host's administrative share. Host:  [SERVER.ad.domain.com]. Account: [ad.domain.com\svc.backup].
Win32 error:The network path was not found.
 Code: 53
Cannot connect to the host's administrative share. Host:  [10.3.140.130]. Account: [ad.domain.com\svc.backup].
Win32 error:The network path was not found.
 Code: 53

Connecting to guest OS to VIX failed
Testing admin share accessibility via VIX failed
```

Veeam cannot connect to the share on the server

## The Resolution

1. Try allowing File and Printer Sharing rules through the Windows Firewall
	1. Try accessing: \\servername\c$ and \\servername\admin
	2. Port 139 and 445 need to be open to the Veeam server (inbound)
2. Try disabling UAC
3. Try adding the account used as local administrator to the server
4. Check C: drive disk space

If the server says the firewalls managed by Group Policy, you'll have to modify the group policy and add a new rule in that allows port 139 and 445 through Inbound, you can do this by doing the following:
1. Check which group policy is applied by running gpresult /h gp.html from a command prompt
	1. Open the gp.html
	2. Ctrl + f to find "firewall"
	3. Take a note of the group policy that applying the firewall, as this is the GPO you are going to modify.
2. Find an AD server and open up Group Policy Management
	1. Browse through the hierarchy and find your group policy object
	2. Right-click > Edit the group policy
	3. Locate the following policy and create a new one, like the following screenshot
    ![Firewall](/img/vix.png)
	5. Once you've updated group policy, wait for it to propagate through AD and then log onto the affected server and run a gpupdate /force to force group policy to up date
    6. You should now be able to get to the admin share through: \\ip\admin$ or \\servername\admin$ 

Reference
https://www.veeam.com/kb1230
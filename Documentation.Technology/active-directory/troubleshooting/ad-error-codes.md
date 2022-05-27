---
sidebar_position: 1
---

# Warning and Error Codes

## Troubleshooting Active Directory warning codes

### Warning Event ID: 1220

```
Log: Directory Service
Type: Warning
Event: 1220
Alert Time: 2021-05-16 01:00:29Z
Event Time: 11:59:04 PM 15-May-2021 UTC
Source: ActiveDirectory_DomainService
Category: LDAP Interface
Username: N/A
Computer: SERVER-DC-04.EUROPE.DOMAIN.NET
Description: LDAP over Secure Sockets Layer (SSL) will be unavailable at this time because the server was unable to obtain a certificate.

Additional Data
Error value:
8009030e No credentials are available in the security package
```

#### Explanation

The Warning Event ID 1220 is logged on a domain controller when a client workstation attmepts to make an LDAP over SSL connection to active directory. This normally happens when LDAPS is not enabled on the directory.

https://social.technet.microsoft.com/wiki/contents/articles/2979.event-id-1220-ldap-over-ssl-ldaps.aspx

#### Solution

Give the Domain Controller a domain controller certificate if there is an internal PKI server in place.

### Warning Event ID: 1588

```
Log: Directory Service
Type: Warning
Event: 1588
Alert Time: 2017-09-29 12:19:28Z
Event Time: 11:19:00 AM 29-Sep-2017 UTC
Source: ActiveDirectory_DomainService
Category: Replication
Username: ANONYMOUS LOGON
Computer: DOMAINDC.domain.com
Description: The following deleted object does not have the proper value for the following attribute. 

Object:
DC=DEASSP42\0ACNF:27084bd0-5cad-56af-b118-4572f3a0872e,DC=domain.com,CN=MicrosoftDNS,DC=DomainDnsZones,DC=domain,DC=com
Object GUID:
27084bd0-5cad-41ff-b118-4572f3a0872e 
Attribute:
90001 (name) 

An attempt is usually made to preserve the attribute values of deleted objects, even when incoming changes are more recent. However, in this case, the attribute value of the deleted object was not a proper value. As a result, the incoming attribute change was applied.
```

#### Explanation

There are lingering objects on the current DC.


#### Solution

1. Find out the following fields by colour co-ordinated.
2. The GUID can, open up active directory and go to Domain Controllers
3. Right-click Properties on the DC you want
4. Click NTDS Settings and the GUID will be under DNS Alias. Note it's the first part, without the ._msdcs bit
5. Clear up lingering objects by running this command as administrator in cmd:
	- `REPADMIN /REMOVELINGERINGOBJECTS DOMAINDC.domain.com 0D352E4E-9AV1-43B6-81A5-15D993E3779E DC=domain,DC=com /advisory_mode`
6. Replicate AD with the command:
	`Repadmin /syncall /adep`
7. Check to make sure there are no further warnings or errors in the Directory Service event log



### Warning Event ID: 2088

```
Log: Directory Service
Type: Warning
Event: 2088
Alert Time: 2016-04-27 21:30:06Z
Event Time: 11:29:03 AM 27-Apr-2016 UTC
Source: ActiveDirectory_DomainService
Category: DS RPC Client
Username: ANONYMOUS LOGON
Computer: DC03.cjp.co.uk
Description: Active Directory Domain Services could not use DNS to resolve the IP address of the source domain controller listed below. To maintain the consistency of Security groups, group policy, users and computers and their passwords, Active Directory Domain Services successfully replicated using the NetBIOS or fully qualified computer name of the source domain controller. 

Invalid DNS configuration may be affecting other essential operations on member computers, domain controllers or application servers in this Active Directory Domain Services forest, including logon authentication or access to network resources. 

You should immediately resolve this DNS configuration error so that this domain controller can resolve the IP address of the source domain controller using DNS. 

Alternate server name: 
DCO4.domain.com
Failing DNS host name: 
8bb5d085-9257-46a4-a0e5-3c377fd1545b._msdcs.domain.com
```

#### Explanation 

There was a DNS lookup failure occured when replication was successful.

#### Solution

1. If the source domain controller is no longer functioning or its operating system has been reinstalled with a different computer or object GUID, remove the source domain controllers metadata with ntdsutil.exe - you can find out how to do this under Decomissioning Active Directory
2. Confirm the source domain controller is ADDS services are running and accessible through the following:
    - `net view \\8bb5d085-9257-46a4-a0e5-3c377fd1545b._msdcs.domain.com `
    - `ping 8bb5d085-9257-46a4-a0e5-3c377fd1545b._msdcs.domain.com `

3. Verify the source domain controller is using valid DNS and that the host record and CNAME record are correct. The `dcdiag /test:dns` is useful in this scenario.

### Warning Event ID: 2089

```
Log: Directory Service
Type: Warning
Event: 2089
Alert Time: 2021-04-19 01:12:36Z
Event Time: 12:11:09 AM 19-Apr-2021 UTC
Source: ActiveDirectory_DomainService
Category: Backup
Username: ANONYMOUS LOGON
Computer: DC01.domain.com
Description: This directory partition has not been backed up since at least the following number of days.

Directory partition:
DC=domain,DC=com

'Backup latency interval' (days):
90

It is recommended that you take a backup as often as possible to recover from accidental loss of data. However if you haven't taken a backup since at least the ''''backup latency interval'''' number of days, this message will be logged every day until a backup is taken. You can take a backup of any replica that holds this partition.

By default the 'Backup latency interval' is set to half the 'Tombstone Lifetime Interval'. If you want to change the default 'Backup latency interval', you could do so by adding the following registry key.

'Backup latency interval' (days) registry key:
System\\CurrentControlSet\\Services\\NTDS\\Parameters\\Backup Latency Threshold (days)
```

#### Explanation

Active Directory hasn't backed up in 90 days.

#### Solution

If you're using application aware backups through the likes of Veeam or Backup Exec, ensure it's enabled for the DC in question. It's crucial that you have an up to date backup of AD, should disaster scenario occur.

The following command shows the last backup:
    `repadmin /showbackup`

If your backups do not support application aware, you could do a one off backup using Windows Server Backups.

Cannot backup AD and want to supress the alerts? You can change the threshold if enabling guest processing isn't an option:
1. Open up regedit
2. Locate and then click the following registry subkey:
	- `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters `
3. Right-click Parameters, point to New, and then click DWORD Value. 
4. Type `Backup Latency Threshold (days)`, and then press ENTER. 
5. Right-click `Backup Latency Threshold (days)`, and then click Modify. 
6. In the Value data box, type the number of days to use as a threshold, and then click OK.

## Troubleshooting Active Directory error codes

### Error Event ID: 1864

```
Log: Directory Service
Type: Error
Event: 1864
Alert Time: 2017-04-19 02:51:53Z
Event Time: 01:50:43 AM 19-Apr-2017 UTC
Source: ActiveDirectory_DomainService
Category: Replication
Username: ANONYMOUS LOGON
Computer: dc.domain.com
Description: This is the replication status for the following directory partition on this directory server. 

Directory partition:
DC=domain,DC=com 

This directory server has not recently received replication information from a number of directory servers. The count of directory servers is shown, divided into the following intervals. 

More than 24 hours:
1 
More than a week:
1 
More than one month:
1 
More than two months:
0 
More than a tombstone lifetime:
0 
Tombstone lifetime (days):
60 

Directory servers that do not replicate in a timely manner may encounter errors. They may miss password changes and be unable to authenticate. A DC that has not replicated in a tombstone lifetime may have missed the deletion of some objects, and may be automatically blocked from future replication until it is reconciled. 

To identify the directory servers by name, use the dcdiag.exe tool. 
You can also use the support tool repadmin.exe to display the replication latencies of the directory servers. The command is "repadmin /showvector /latency <partition-dn>".
```

#### Explanation

The domain controller hasn't checked in for the time length displayed and is close to tombstoning.

#### Solution

Find out when DCs have last checked in:
```
repadmin /showvector /latency <FQDN of partion, e.g. CN=Configuration,DC=domain,DC=com>
repadmin /showvector /latency domain.com
repadmin /showvector /latency "CN=Configuration,DC=domain,DC=com"
```

Find out why you cannot communicate to the server
- Decommissioned?
- Routing issue?
- Firewall?
- Server offline?

### Error Event ID: 5774, 5781, 5783

```
Log: System
Type: Error
Event: 5774
Alert Time: 2016-04-26 18:13:38Z
Event Time: 05:12:47 PM 26-Apr-2016 UTC
Source: NETLOGON
Category: None
Username: N/A
Computer: DC-01.ad.domain.com
Description: The dynamic registration of the DNS record '_ldap._tcp.pdc._msdcs.ad.domain.com. 600 IN SRV 0 100 389 DC-01.ad.domain.com.' failed on the following DNS server: 
```

#### Explanation

You're using a third-party DNS server application for DNS updates. Either that or your DNS have failed to resolve itself.

#### Solution

1. Nltest.exe /dsregdns
2. Restart the netlogon service
3. Open cmd as admin and type the following:
	- Net stop netlogon
	- Net start netlogon
4. Check the System event log and make sure the 5774 didn't get regenerated after you restarted the service.
5. Things to check on DNS
	- Dcdiag /test:dns
	- Check Forwarders
	- Check Name Servers
	- Check Root Hints
    - Check DNS records
---
sidebar_position: 7
---

# 7. Update DNS

### Update DNS publically

1. Login to your public DNS registrar
2. Add the follow record
```
Domain: alwaysonvpn.clientname.com 
DNS Type: A 
Record: 215.1.1.6
```
3. Take note of your nameservers of the public DNS registrar

### Update local DNS to point to public record

1. Login to domain controller
2. Open DNS Manager
3. Browse domain controller > clientname.com
4. Right-click clientname.com > New Delegation > Next
5. Delegated domain: alwaysonvpn
6. Enter the following previously noted nameserver FQDNs:
```
ns-1012.awsdns-62.net.
ns-1039.awsdns-01.org.
ns-1700.awsdns-20.co.uk.
ns-314.awsdns-39.com.
```

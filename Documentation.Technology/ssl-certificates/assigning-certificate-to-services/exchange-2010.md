---
sidebar_position: 1
---

# Exchange 2010

## You stupid fool.

What are you doing still using Exchange 2010?! 

Anyways, here's how you replace the certificate...

## Replace a certificate for Exchange 2010

1. Open Microsoft Exchange 2010 Console
2. Browse Server configuration > click on a database
3. Find your certificate that's expiring and click on it
4. Right-click **Import Exchange Certificate...**
5. Import your _.pfx_ file with the relevant password
6. Click next, next > finish
7. Right-click **Assign Services to Certificate...**
8. Assign the same services as before, usually `IMAP, POP, SMTP, IIS`
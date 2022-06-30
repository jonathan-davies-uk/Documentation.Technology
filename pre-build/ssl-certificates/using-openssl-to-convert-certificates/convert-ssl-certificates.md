---
sidebar_position: 1
---

# How to convert an SSL certificate into a different format

## Prerequisites

1. Install [OpenSSL](http://gnuwin32.sourceforge.net/packages/openssl.htm)
2. My OpenSSL is in the following location: `C:\Program Files (x86)\GnuWin32\bin\`

### Convert .PFX to .PEM:

```
openssl pkcs12 -in wc.pfx -out C:\temp\wildcard.pem -nodes
```

### Convert .PFX to .CRT:

```
openssl pkcs12 -in wc.pfx -clcerts -nokeys -out C:\temp\wc.crt`
```

### Convert .PFX to .CER

```
openssl.exe pkcs12 -in .\wildcard.example.MDC.pfx -out example-wc.cer -nodes
```

### Get certificate from a public website

This will return a string, copy the Begin and End certificate string and save as .cer or .crt

```
openssl.exe s_client -connect smtp.office365.com:587 -starttls smtp
openssl.exe s_client -connect smtp.office365.com:443
```

#### Reference:
- https://stackoverflow.com/questions/13732826/convert-pem-to-crt-and-key
- https://www.feistyduck.com/library/openssl-cookbook/online/ch-testing-with-openssl.html
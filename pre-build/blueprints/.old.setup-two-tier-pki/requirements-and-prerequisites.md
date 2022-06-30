---
sidebar_position: 1
---

# Requirements and Prerequisites

## Two Tier PKI Planning

### Assumptions

This blueprint assumes that you already have a domain controller setup, with the relevant users, computers and server objects.

### Servers

The CA servers do not need to have over the top requirements, the follow will suffice:
- Microsoft Server 2016/19/22
- C drive: 60GB
- RAM: 4GB
- 1/2 vCPU's
- 1 NIC each

The following servers that need creating:

- 1 x Offline Root CA - not domain joined
- 1 x Issuing CA (Sub CA) - domain joined

### User setup Permissions 
- Enterprise Admins
- Domain Admins

### Planning diagram

![Two Tier PKI](/img/two-tier-pki.png)

## Certificate terms (glossary)

The certificate terms you see below are terms that will be used throughout this blueprint setup. Make yourself familiar with them, as I'll likely be using the abbreviations. 

### Root Certification Authority (Root CA)

The first Certificate Authority that will be installed is classed as the Root CA. Certificates are based on trusted chains and the Root CA will be the first in the chain. The Root CA is normally offline, to prevent any missuse.

### Subordinate CA (Sub CA)

A Sub CA is usually one level before the Root CA - classed as a "child node".

### Issuing CA

An Issuing CA is normally a Sub CA that issues certificates to users, clients workstations and servers. However, not all Subordinates will be the issuing CA; for example, if you had a 3 tier PKI - the second child node would be the Issuing CA

### Certificate Revocation List (CRL)

The CRL is a simply a list of certificates that have been revoked from the domain, for example: you have a certificate that's expired - this would be revoked and untrusted by the CA if trying to check in. A CRL is hosted on a CDP which tells endpoints where they can go to validate a certificate using the CRL list.

### CRL Distribution Point (CDP)

The CDP contains information about where the location of the CRL is published. This is normally through a web server or Active Directory (using LDAP)

### Authority Information Access (AIA)

The AIA lets you know how to find the issuer of a particular certificate, and it also contains the address for the OCSP responder.

### Online Certificate Status Protocol (OCSP)

OCSP is a new way of obtaining a certificate revocation list, alternative to the CRL that I described above. The main difference is that messages using OCSP are encoded in ASN.1 and communicated over HTTP, using the simple "request/response". This means that it's less burden on your network and client resources. However, given the 21st century, bandwidth normally isn't an issue anymore. I thought it would be useful to cover theterm of OCSP in this terms, however, we'll not be using it in this blueprint.
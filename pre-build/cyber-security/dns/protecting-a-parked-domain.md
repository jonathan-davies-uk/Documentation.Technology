---
sidebar_position: 1
tags:
  - DNS
  - Security
  - Email spoofing
  - SPF
  - DMARC
  - MX
  - DKIM
  - Parked Domain
---

# Protecting a Parked Domain

Got a domain that's **<ins>not being</ins>** used to send emails? You should probably protect that domain from being used to generate spam email.

## What is email spoofing?
Email spoofing is used by unwanted parties in spam and phishing attacks that trick the user into thinking that the email actually came from a person or entity they know or can trust, which can damage trust in your organisation.

---

## How do I protect my Parked Domain from spam email?
The four actions I'm about to set out will inform recipients that no emails should be originating from your domain that is parked (non-sending email domain). If you're domain registrar allows it, implement all four where possible - if not; implement as many as you can to maximise protection. In the examples below, I'll be using **documentation.technology** as my parked domain.

### 1. SPF record

SPF (Sender Policy Framework) record's are a DNS TXT record that holds a list of IP Addresses and Domains authorised to send email from that domain. The following SPF record states that no senders are permitted to send emails to your parked domain.

```
Domain: documentation.technology 
DNS Type: TXT 
Record: "v=spf1 -all"
```

### 2. DMARC protocol

DMARC (Domain-based Message Authentication, Reporting and Conformance) is an email protocol that is designed to give domain owners the ability to protect their domain from email spoofing.  The UK government have an email setup to allow you to receive reports of potential abuse of your domain.

```
Domain: _dmarc.documentation.technology 
DNS Type: TXT 
Record: "v=DMARC1;p=reject;rua=mailto:dmarc-rua@dmarc.service.gov.uk;"
```

### 3. MX record

An MX (Mail Exchanger) record specifies the email server that's responsible for handling messages on behalf of your domain. A null MX record gives you the ability to automatically fail any email that is sent to the domain.

```
Domain: documentation.technology 
DNS Type: MX
Record: "0 ."
```

### 4. DKIM key

DKIM (Domain Keys Indentified Mail) is an email authentication method designed to detect email spoofing. DKIM allows the recipient to check that the email they've received has actually come from the domain it should have. If your email recipients have a rule in place to treat a null DKIM record as suspicious and to revoke/discard it, then the followings record says that no email is signed for your parked domain.

```
Domain: *._domainkey.documentation.technology 
DNS Type: TXT 
Record: "v=DKIM1; p="
```
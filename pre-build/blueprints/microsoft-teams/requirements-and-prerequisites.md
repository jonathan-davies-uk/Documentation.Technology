---
sidebar_position: 1
---

# Requirements and Prerequisites

## Microsoft Teams Planning

This Microsoft Teams blueprint will harness MS Teams Direct Routing. Direct Routing allows you to bring a number from a carrier into Microsoft by harnessing SBC's.

This Microsoft Teams blueprint **will not cover** Microsoft Phone numbers.

### Assumptions

This blueprint assumes that you already have a domain controller setup, with the relevant users that are synced to Microsoft 365 with Azure AD connect. This setup also assumes that you already have a carrier that provides you with phone number range, and that a SIP trunk is already setup to an SBC and from that SBC, direct routing configuration on the SBC has already been setup. This guide will only be running through the Teams setup of Direct Routing. It is already assumed that the network has been prepared with the relevant ports open; a list of the networking requirements can be viewed below.

- SBC FQDN: sbc.domain.com - must be an encrypted SIP trunk bound with a certficiate
- SIP Signalling Port: 5061
- Phone number range: 02074445500 - 02074445539 

### Licenses

At least one of base plan and voice calling options licenses must be assigned to users in order to use Microsoft Teams and then use the Phone System.

#### Base Plan

The base plans licenses will cover the user to be able to install the Microsoft Teams applications, the licenses that include Microsoft Teams include:

- MS 365 Business Basic/Standard/Business Premium
- MS Teams Essenttial (AAD Identity)
- MS 365 Enterprise E1/E3/E5
- Office 365 Enterprise E1/E3/E5
- MS 365 F1/F3
- Office 365 F3

#### Voice calling options

The voice calling options allow the user to make a phone call through MS Teams. Without this license, a user will not be able to make or receive external phone calls. The licenses that include voice calling options include:

- Microsoft Phone System
- Microsoft Teams Phone (without Calling Plan)

### User setup Permissions 

- Teams Administrator or Global Administrator

### Planning diagram

![Two Tier PKI](/img/ms-teams-direct-routing.png)

### Networking Requirements

#### SIP Signalling Ports

| Traffic | From | To | Source Port | Destination Port |
| --- | ---  |--- | ---         | ---              |
| SIP/TLS | 52.112.0.0/14, 52.120.0.0/14 | sbc.domain.com | 1024 - 65535 | 5061
| SIP/TLS | sbc.domain.com | 52.112.0.0/14, 52.120.0.0/14 | any | 5061

#### Media Ports

| Traffic | From | To | Source Port | Destination Port |
| --- | ---  |--- | ---         | ---              |
| UDP/SRTP | 52.112.0.0/14, 52.120.0.0/14 | sbc.domain.com | 3478 - 3481 and 49152 - 53247 | 5061
| UDP/SRTP | sbc.domain.com | 52.112.0.0/14, 52.120.0.0/14 | any | 3478 - 3481 and 49152 - 53247

## Microsoft terms (glossary)

The Microsoft Teams terms you see below are terms that will be used throughout this blueprint setup. Make yourself familiar with them, as I'll likely be using the abbreviations. 

### Microsoft Teams (MS Teams)

Microsoft Teams is a collaboration tool used between teams for the likes of chat, group conversation, phone system, meetings, live events, channels and teams.

### MS Teams Phone System

MS Teams as a Phone System allows you to make external calls and receive external calls into the MS Teams application.

### Teams Admin Center (TAC)

The TAC is predominantly used to setup MS Teams for Direct Routing. It can be accessed from the following URL: https://admin.teams.microsoft.com with a Teams Administrator or Global Administrator account.

### Direct Routing

Direct Routing allows you to connect a supported SBC to MS Teams Phone System. This means you can carry across your own phone range to Microsoft Teams, without purchasing any newer DDI's.

### Session Border Controller (SBC)

An SBC is essentially a firewall for phones. The SBC in this instance will be used to connect a telephony provider to MS Teams through Direct Routing. A SIP trunk will be setup with the PSTN provider and an encrypted SIP trunk will be setup using Direct Routing to MS Teams.

### Voice routes

Voice routes are a bunch of number patterns that tell MS Teams how to route calls to reach the appropriate destination. In this blueprint setup, we'll be creating 7 voice routes:
- UK-London-Local – To London landlines
- UK-London-Mobile – To UK mobiles
- UK-London-Tollfree – To freephone numbers
- UK-London-Premium – To premium rate numbers
- UK-London-National – To UK landlines (including London landlines)
- UK-London-Service – To service numbers
- UK-London-International – To non-UK numbers

### Voice Routing Policies (VRP)

A Voice Routing Policy allows you to tell MS Teams how to route a phone number. In the blueprint setup, we'll be 3 VRP including the following:
- UK-London-Local – This policy includes the Internal, Local, Tollfree and Service routes
- UK-London-National – This policy additionally includes the Mobile and National routes
- UK-London-International – This policy additionally includes the International route


### Dial Plan (DP)

A Dial Plan normalises calls with the MS Teams client. For example, say you're in the UK dialing a UK mobile number a type: 07825382836, this number will be translated into **+44**7825382836, as it recognises is as a UK mobile number. In this blueprint setup, we'll just be creating the one dial plan for London:

- UK-London
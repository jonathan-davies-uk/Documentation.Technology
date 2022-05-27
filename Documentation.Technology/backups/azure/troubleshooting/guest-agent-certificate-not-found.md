---
sidebar_position: 1
---

# Guest agent certificate not found

## The issue

`GuestAgentCertificateNotFound`

Virtual machine guest agent certificate not found.

## The Solution

Restart the following services:
- WindowsAzureGuestAgent.exe: Windows Azure Guest Agent service
- WaAppAgent.exe: RDAgent service
- WindowsAzureNetAgent.exe: Windows Azure Network Agent service
- WindowsAzureTelemetryService.exe: Windows Azure Telemetry Service
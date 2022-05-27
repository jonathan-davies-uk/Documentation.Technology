---
sidebar_position: 2
---

# 1. Connect your SBC

## Setup the SBC in Teams Admin Center

1. Logon to the [Teams Admin Center](https://admin.teams.microsoft.com)
2. Browse Voice > Direct Routing > SBC
3. Click + Add and fill out the settings as follows:
    - SBC FQDN: sbc.domain.com
    - Enabled: On
    - SIP Signalling port: 5061
    - Send SIP Options: On
    - Forward call history: Off
    - Forward P-Asserted-Identity (PAI) header: Off
    - Concurrent call capacity: 10
    - Failover response codes: 408, 503, 504
    - Failover time (seconds): 10
    - SBC supports PIDF/LO for emergency calls: Off
    - Media bypass: None
    - Bypass mode: None
    - Preferred country or region for media traffic: None
    - Location based routing: None
    - Gateway site ID: None
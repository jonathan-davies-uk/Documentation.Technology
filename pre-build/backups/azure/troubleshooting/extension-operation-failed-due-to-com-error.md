---
sidebar_position: 6
---

# Extension operation failed due to a COM+ error

## The issue

- `ExtensionSnapshotFailedCOM`
- `ExtensionInstallationFailedCOM`
- `ExtensionInstallationFailedMDTC`

The backup failed because there was an issue with the COM+ System Application Windows Service.

## The Solution

- Try restarting COM+ System Application service
- Reinstall Distributed Transaction Coordinator service
    - Stop MSTDC service
    - Run the following commands as administrator
    - `msdtc -uninstall`
    - `msdtc -install`
    - Start MSTDC service
- Trigger another backup job.
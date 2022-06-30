---
sidebar_position: 2
---

# Failed to prepare guest for hot backup

## The issue

```
Failed to prepare guest for hot backup. Details: Failed to connect to guest agent. Errors:
'Cannot connect to the host's administrative share. Host:  [SERVER-01.dev.domain.local]. Account: [dev\administrator].
Win32 error:The network path was not found.
 Code: 53
Cannot connect to the host's administrative share. Host:  [172.16.254.1]. Account: [dev\administrator].
Win32 error:The network path was not found.
 Code: 53'

Failed to index guest file system. Veeam Guest Agent is not started  
```

VMware Tools has failed.

## The Solution

1. Restart Vmware Tools
2. Services > Vmware Tools > Restart
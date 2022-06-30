---
sidebar_position: 7
---

# Failed to create change tracking time stamp

## The Issue

`Failed to create change tracking time stamp for virtual disk file C:\ClusterStorage\Volume1\SERVER-WAP01\2012R2Standard-template_9E4D373A-4444-4552-9681-D933248E2632.avhdx  `

Change tracking data has got corrupt for the specified server

## The Resolution

1. Open up Veeam > Tools (top left) > Console > Powershell
2. Issue the following command:
    1. Reset-HvVmChangeTracking -server "Server that hosts the VM" -vmname "SERVER-WAP01 (Server specified above)"
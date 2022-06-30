---
sidebar_position: 11
---

# Tape Drive showing as Standalone

## The Issue

`Tape Drive is showing as standalone when it's in an autoloader`

The cause of this is generally:
- The tape library is not reporting the tape drive serial number.
- The tape library has one or more unpopulated tape drive bays.

## The Resolution

Run the following command to get a dump of the proper tape data:

- `cd "C:\Program Files (x86)\Veeam\Backup Tape"`
- `.\VeeamTapeSvc.exe -dump`

This should return something like below:

```
-<Drives NoDriver="false" SymbolicLink="\\.\Changer0" DeviceName="Changer0">
-<DriveStatus TargetId="0" Lun="0" SerialNumber="11692E305B" Flags="268435528" ExceptionCode="0" PrimaryVolumeID="" AlternateVolumeID="" VendorIdentification="IBM" ProductIdentification="ULT3580-HH8">
<Element ElementType="4" ElementAddress="0"/>
<SrcElementAddress ElementType="0" ElementAddress="0"/>
</DriveStatus>
</Drives>
-<Drive SymbolicLink="\\.\Tape0" DeviceName="Tape0" SerialNumber="11692E305B" Name="IBM ULT3580-HH8">
<Address PortNumber="0" PathId="0" TargetId="3" Lun="0"/>
<BlockSizes MaximumBlockSize="1048576" MinimumBlockSize="1" DefaultBlockSize="65536"/>
</Drive>
-<Drive SymbolicLink="\\.\Tape1" DeviceName="Tape1" SerialNumber="11692E3065" Name="IBM ULT3580-HH8">
<Address PortNumber="0" PathId="0" TargetId="7" Lun="0"/>
<BlockSizes MaximumBlockSize="1048576" MinimumBlockSize="1" DefaultBlockSize="65536"/>
</Drive>
</Devices>
```

Take note of element address and tape numbers. Also take note of the Tape Server name, this can be found in Tape Infrastructure > Tape Servers
Create the following registry key with the information we have found:

```
Key: HKLM -> Software -> Veeam -> Veeam Backup and Replication
Name: TapeDevices
Type: REG_MULTI_SZ
Data: TAPE-NAME 
Changer0=Tape0:0,Tape1:0
```

References:
https://www.veeam.com/kb1842
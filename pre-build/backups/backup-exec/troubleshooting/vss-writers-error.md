---
sidebar_position: 4
---

# Failure querying writer status

## The issue

`Backup fails with error "A failure occured querying the writer status"`

One of the VSS writers will have failed.

## The Solution

### Manually checking

To manually check the VSS writer that has failed, open CMD prompt as administrator and issue the following command: `vssadmin list writers`. Match the service against the below table, and cnce you've found the service, go ahead and restart it.

Got a service failing to start? Have you checked the C:\ drive of the computer to make sure it's not full?

Match this 

| VSS Writer | Service Name | 
| --- | --- |
| ASR Writer | VSS |
| BITS Writer | BITS |
| Certificate Authority | EventSystem |
| COM+ REGDB Writer | VSS |
| Dedup Writer' | ddpvssvc |
| DFS Replication service writer | DFSR |
| DHCP Jet Writer | DHCPServer |
| FRS Writer | NtFrs |
| FSRM writer | srmsvc |
| IIS Config Writer | AppHostSvc |
| IIS Metabase Writer | IISADMIN |
| Microsoft Exchange Replica Writer | MSExchangeRepl |
| Microsoft Exchange Writer | MSExchangeIS |
| Microsoft Hyper-V VSS Writer | vmms |
| MSMQ Writer (MSMQ) | MSMQ |
| MSSearch Service Writer | WSearch |
| NPS VSS Writer | EventSystem |
| NTDS | NTDS |
| OSearch VSS Writer | OSearch |
| OSearch14 VSS Writer | OSearch14 |
| OSearch15 VSS Writer | OSearch15 |
| Registry Writer | VSS |
| Shadow Copy Optimization Writer | VSS |
| SharePoint Services Writer | SPWriter |
| SMS Writer | SMS_SITE_VSS_WRITER |
| SPSearch VSS Writer | SPSearch |
| SPSearch4 VSS Writer | SPSearch4 |
| SqlServerWriter | SQLWriter |
| System Writer | CryptSvc |
| TermServLicensing | TermServLicensing |
| WDS VSS Writer | WDSServer |
| WIDWriter | WIDWriter |
| WINS Jet Writer | WINS |
| WMI Writer | Winmgmt |

### Fancy a script?

```
function Restart-VssWriters {
    $Status = 'Failed', 'Waiting for completion', 'Timed out'
    $vss = VSSAdmin list writers | Select-String -Pattern 'Writer name:' -Context 0, 4
    foreach ($writer in $vss) {
        $obj = @()
        $obj += New-Object PSObject -Property @{
            Name = $writer.Line -replace "^(.*?): " -replace "'"
            State = $writer.Context.PostContext[2] -replace "^(.*?): \[.\]."
            LastError = $writer.Context.PostContext[3] -replace "^(.*?): "
        }

        if($obj.State -like *$Status*) {
            Switch ($obj.Name) {
                'ASR Writer' { $Service = 'VSS' }
                'BITS Writer' { $Service = 'BITS' }
                'Certificate Authority' { $Service = 'EventSystem' }
                'COM+ REGDB Writer' { $Service = 'VSS' }
                'Dedup Writer' { $Service = 'ddpvssvc' }
                'DFS Replication service writer' { $Service = 'DFSR' }
                'DHCP Jet Writer' { $Service = 'DHCPServer' }
                'FRS Writer' { $Service = 'NtFrs' }
                'FSRM writer' { $Service = 'srmsvc' }
                'IIS Config Writer' { $Service = 'AppHostSvc' }
                'IIS Metabase Writer' { $Service = 'IISADMIN' }
                'Microsoft Exchange Replica Writer' { $Service = 'MSExchangeRepl' }
                'Microsoft Exchange Writer' { $Service = 'MSExchangeIS' }
                'Microsoft Hyper-V VSS Writer' { $Service = 'vmms' }
                'MSMQ Writer (MSMQ)' { $Service = 'MSMQ' }
                'MSSearch Service Writer' { $Service = 'WSearch' }
                'NPS VSS Writer' { $Service = 'EventSystem' }
                'NTDS' { $Service = 'NTDS' }
                'OSearch VSS Writer' { $Service = 'OSearch' }
                'OSearch14 VSS Writer' { $Service = 'OSearch14' }
                'OSearch15 VSS Writer' { $Service = 'OSearch15' }
                'Registry Writer' { $Service = 'VSS' }
                'Shadow Copy Optimization Writer' { $Service = 'VSS' }
                'SharePoint Services Writer' { $Service = 'SPWriter' }
                'SMS Writer' { $Service = 'SMS_SITE_VSS_WRITER' }
                'SPSearch VSS Writer' { $Service = 'SPSearch' }
                'SPSearch4 VSS Writer' { $Service = 'SPSearch4' }
                'SqlServerWriter' { $Service = 'SQLWriter' }
                'System Writer' { $Service = 'CryptSvc' }
                'TermServLicensing' { $Service = 'TermServLicensing' }
                'WDS VSS Writer' { $Service = 'WDSServer' }
                'WIDWriter' { $Service = 'WIDWriter' }
                'WINS Jet Writer' { $Service = 'WINS' }
                'WMI Writer' { $Service = 'Winmgmt' }
                Default { $Service = $null }
            } 
            Write-Host "Restarting:" $obj.Name
            Restart-Service -Name $Service -Force
        } else {
            $obj    
        }
    }
}
cls
Restart-VssWriters
```
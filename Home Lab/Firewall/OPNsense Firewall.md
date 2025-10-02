
## Hardware Requirements
OPNsense is compatible with x86-64 bit microprocessor architectures. Below you will find OPNsenses recommendations for hardware specifications.

| Type           | Minimum                                                                 | Reasonable                                                             | Recommended                   |
| -------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------- |
| Processor      | 1 GHz dual core CPU                                                     | 1 GHz dual core CPU                                                    | 1.5 GHz dual core CPU         |
| RAM            | 2 GB                                                                    | 4 GB                                                                   | 8 GB                          |
| Install Method | Serial console or video (vga)                                           | Serial console or video (vga)                                          | Serial console or video (vga) |
| Install target | SD or CF card with a minimum of 4 GB, use nano images for installation. | 40 GB SSD, a minimum of 2 GB memory is needed for the installer to run | 120 GB SSD                    |

## Throughput Recommendations 
Depending on the amount of traffic routing through the OPNsense Firewall, depends on the recommended Hardware Requirements. See the table below of OPNsense thoughput recommendations. 


| Throughput (Mbps) | Hardware Requirements |
| ----------------- | --------------------- |
| 11-150            | Minimum               |
| 151-350           | Reasonable            |
| 350-750+          | Recommended           |
## Supported Hardware
OPNsense is supported by all FreeBSD hadrware. All FreeBSD drivers are included in the OPNsense kernel, and the hardware compatibility is the same.

https://docs.opnsense.org/manual/hardware.html
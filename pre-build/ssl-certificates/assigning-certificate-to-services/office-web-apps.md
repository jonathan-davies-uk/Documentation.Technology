---
sidebar_position: 15
---

# Office Web Apps certificate replacement

1. Import the certificate to the server and take note of the Friendly Name.
2. Change the friendly name under certificates in the following XML file:
3. C:\ProgramData\Microsoft\OfficeWebApps\Data\FarmState\settings.xml
4. Change the line:

 - `<Setting Name="CertificateName" DataType="System.String">Client Wildcard</Setting>`

5. Replace with the certificate Friendly Name you've just imported to the server.
6. Restart the OfficeWebApps service
---
sidebar_position: 8
---

# 8. Configure Windows 10 AOVPN Connections 

## Configure the User Tunnel

User tunnel connects only after a user logs on to the device. User tunnel allows users to access organization resources through VPN servers.

1. Logon to a Windows 10 test machine with a user account that is member of the AOVPN Users AD group - ensure local administrator capabilities
2. Open Settings > Network & Internet > VPN > Add a VPN connection
3. VPN provider: Windows (built-in)
4. Connection name: AOVPN Template
5. Server name: alwaysonvpn.clientname.com
6. VPN type: IKEv2
7. Type of sign-in: Certificate
8. Save
9. Open network connects by running: ncpa.cpl
10. Right-click Template VPN connection > Properties
11. Security tab - VPN is set to IKEv2
12. Security tab - Change Data encryption to Maximum strength encryption (disconnect if server declines)
13. Security tab - Under the Use Extensible Authentication Protocol (EAP) option, select Microsoft: Protected EAP (PEAP) (encryption enabled)
14. Security tab - Properties > FQDN of NPS: NPS FQDN server name

:::caution

The NPS server name you type must match the name in the certificate. If the name does not match, the connection will fail, stating that "The connection was prevented because of a policy configured on your RAS/VPN server."

:::

15. Security tab - Trusted Root CA: select the Root CA that issued the user authentication certificate
16. Security tab - Notifications: select Don’t ask user to authorize new servers or trusted CAs
17. Security tab - Select Authentication Method, select Smart Card or other certificate > Configure
18. Security tab - Select User a certificate on this computer > Advanced
19. Security tab - Check the Certificate Issuer box and Select the Root CA from the list
20. Click OK
21. Security tab - under Connect to these servers, type NPS FQDN server name
22. Security tab - Trusted Root CA: select the Root CA that issued the user authentication certificate
23. Security tab - Check the Don’t prompt user to authorize new servers or trusted certification authorities box
23. Click OK three times

### Test the User Tunnel

1. Open network connects by running: ncpa.cpl
2. Right-click AOVPN Template > Connect

### Create the XML and Powershell configuration files 

1. Open powershell as administrator
2. Issue the script below
3. This will output VPN_Profile.ps1 and VPN_Profile.xml to the desktop


```
$TemplateName = 'AOVPN Template'
 $ProfileName = 'Clientname AlwaysOn VPN User Profile'
 $Servers = 'alwaysonvpn.clientname.com'
 $DnsSuffix = 'clientname.co.uk'
 $DomainName = '.clientname.co.uk'
 $DNSServers = '10.0.0.1,10.0.0.2'
 $TrustedNetwork = 'clientname.co.uk'
 $Connection = Get-VpnConnection -Name $TemplateName
 if(!$Connection)
 {
 $Message = "Unable to get $TemplateName connection profile: $_"
 Write-Host "$Message"
 exit
 }
 $EAPSettings= $Connection.EapConfigXmlStream.InnerXml
 $ProfileXML = @("
 <VPNProfile>
   <DnsSuffix>$DnsSuffix</DnsSuffix>
   <NativeProfile>
 <Servers>$Servers</Servers>
 <NativeProtocolType>IKEv2</NativeProtocolType>
 <Authentication>
   <UserMethod>Eap</UserMethod>
   <Eap>
    <Configuration>
     $EAPSettings
    </Configuration>
   </Eap>
 </Authentication>
 <RoutingPolicyType>SplitTunnel</RoutingPolicyType>
   </NativeProfile>
 <AlwaysOn>true</AlwaysOn>
 <RememberCredentials>true</RememberCredentials>
 <TrustedNetworkDetection>$TrustedNetwork</TrustedNetworkDetection>
   <DomainNameInformation>
 <DomainName>$DomainName</DomainName>
 <DnsServers>$DNSServers</DnsServers>
 </DomainNameInformation>
 </VPNProfile>
 ")
 $ProfileXML | Out-File -FilePath ($env:USERPROFILE + '\desktop\VPN_Profile.xml')
  $Script = @("
   `$ProfileName = '$ProfileName'
   `$ProfileNameEscaped = `$ProfileName -replace ' ', '%20'
   `$ProfileXML = '$ProfileXML'
   `$ProfileXML = `$ProfileXML -replace '<', '&lt;'
   `$ProfileXML = `$ProfileXML -replace '>', '&gt;'
   `$ProfileXML = `$ProfileXML -replace '`"', '&quot;'
   `$nodeCSPURI = `"./Vendor/MSFT/VPNv2`"
   `$namespaceName = `"root\cimv2\mdm\dmmap`"
   `$className = `"MDM_VPNv2_01`"
   try
   {
   `$username = Gwmi -Class Win32_ComputerSystem | select username
   `$objuser = New-Object System.Security.Principal.NTAccount(`$username.username)
   `$sid = `$objuser.Translate([System.Security.Principal.SecurityIdentifier])
   `$SidValue = `$sid.Value
   `$Message = `"User SID is `$SidValue.`"
   Write-Host `"`$Message`"
   }
   catch [Exception]
   {
   `$Message = `"Unable to get user SID. User may be logged on over Remote Desktop: `$_`"
   Write-Host `"`$Message`"
   exit
   }
   `$session = New-CimSession
   `$options = New-Object Microsoft.Management.Infrastructure.Options.CimOperationOptions
   `$options.SetCustomOption(`"PolicyPlatformContext_PrincipalContext_Type`", `"PolicyPlatform_UserContext`", `$false)
   `$options.SetCustomOption(`"PolicyPlatformContext_PrincipalContext_Id`", `"`$SidValue`", `$false)
   try
   {
  `$deleteInstances = `$session.EnumerateInstances(`$namespaceName, `$className, `$options)
  foreach (`$deleteInstance in `$deleteInstances)
  {
      `$InstanceId = `$deleteInstance.InstanceID
      if (`"`$InstanceId`" -eq `"`$ProfileNameEscaped`")
      {
          `$session.DeleteInstance(`$namespaceName, `$deleteInstance, `$options)
          `$Message = `"Removed `$ProfileName profile `$InstanceId`"
          Write-Host `"`$Message`"
      } else {
          `$Message = `"Ignoring existing VPN profile `$InstanceId`"
          Write-Host `"`$Message`"
      }
  }
   }
   catch [Exception]
   {
  `$Message = `"Unable to remove existing outdated instance(s) of `$ProfileName profile: `$_`"
  Write-Host `"`$Message`"
  exit
   }
   try
   {
  `$newInstance = New-Object Microsoft.Management.Infrastructure.CimInstance `$className, `$namespaceName
  `$property = [Microsoft.Management.Infrastructure.CimProperty]::Create(`"ParentID`", `"`$nodeCSPURI`", `"String`", `"Key`")
  `$newInstance.CimInstanceProperties.Add(`$property)
  `$property = [Microsoft.Management.Infrastructure.CimProperty]::Create(`"InstanceID`", `"`$ProfileNameEscaped`", `"String`", `"Key`")
  `$newInstance.CimInstanceProperties.Add(`$property)
  `$property = [Microsoft.Management.Infrastructure.CimProperty]::Create(`"ProfileXML`", `"`$ProfileXML`", `"String`", `"Property`")
  `$newInstance.CimInstanceProperties.Add(`$property)
  `$session.CreateInstance(`$namespaceName, `$newInstance, `$options)
  `$Message = `"Created `$ProfileName profile.`"
  Write-Host `"`$Message`"
   }
   catch [Exception]
   {
  `$Message = `"Unable to create `$ProfileName profile: `$_`"
  Write-Host `"`$Message`"
  exit
   }
   `$Message = `"Script Complete`"
   Write-Host `"`$Message`"
   ")
   $Script | Out-File -FilePath ($env:USERPROFILE + '\desktop\VPN_Profile.ps1')
 $Message = "Successfully created VPN_Profile.xml and VPN_Profile.ps1 on the desktop."
 Write-Host "$Message"
```

### Test the User VPN Profile is successful

1. Open powershell as administrator
2. Run the VPN_Profile.ps1 script
3. To ensure it's successful, issue the following command:
    - `Get-WmiObject -Namespace root\cimv2\mdm\dmmap -Class MDM_VPNv2_01`
5. Successful results can be viewed below
6. Ensure the old and new AOVPN profiles run side by side

```
__GENUS : 2
__CLASS : MDM_VPNv2_01
__SUPERCLASS:
__DYNASTY : MDM_VPNv2_01
__RELPATH : MDM_VPNv2_01.InstanceID="Clientname%20AlwaysOn%20VPN%20User%20Profile",ParentID
  ="./Vendor/MSFT/VPNv2"
__PROPERTY_COUNT: 10
__DERIVATION: {}
__SERVER: WIN01
__NAMESPACE : root\cimv2\mdm\dmmap
__PATH : \\WIN01\root\cimv2\mdm\dmmap:MDM_VPNv2_01.InstanceID="Clientname%20AlwaysOn%20VPN%20User%20Profile",ParentID="./Vendor/MSFT/VPNv2"
AlwaysOn: True
ByPassForLocal :
DnsSuffix : clientname.co.uk
EdpModeId :
InstanceID : Clientname%20AlwaysOn%20VPN%20User%20Profile
LockDown:
ParentID: ./Vendor/MSFT/VPNv2
ProfileXML : <VPNProfile><RememberCredentials>true</RememberCredentials>
  <AlwaysOn>true</AlwaysOn><DnsSuffix>clientname.co.uk</DnsSu
  ffix><TrustedNetworkDetection>clientname.co.uk</TrustedNetw
  orkDetection><NativeProfile><Servers>alwaysonvpn.clientname.com</Servers><RoutingPolicyType>SplitTunnel</RoutingP
  olicyType><NativeProtocolType>Ikev2</NativeProtocolType><Au
  thentication><UserMethod>Eap</UserMethod><MachineMethod>Eap
  </MachineMethod><Eap><Configuration><EapHostConfig xmlns="h
  ttp://www.microsoft.com/provisioning/EapHostConfig"><EapMet
  hod><Type xmlns="https://www.microsoft.com/provisioning/EapC
  ommon">25</Type><VendorId xmlns="https://www.microsoft.com/p
  rovisioning/EapCommon">0</VendorId><VendorType xmlns="http:
  //www.microsoft.com/provisioning/EapCommon">0</VendorType><
  AuthorId xmlns="https://www.microsoft.com/provisioning/EapCo
  mmon">0</AuthorId></EapMethod><Config xmlns="https://www.mic
  rosoft.com/provisioning/EapHostConfig"><Eap xmlns="https://w
  ww.microsoft.com/provisioning/BaseEapConnectionPropertiesV1
  "><Type>25</Type><EapType xmlns="https://www.microsoft.com/p
  rovisioning/MsPeapConnectionPropertiesV1"><ServerValidation
  ><DisableUserPromptForServerValidation>true</DisableUserPro
  mptForServerValidation><ServerNames>NPS</ServerNames><Trust
  edRootCA>FF 07 88 e8 ac 00 32 e4 23 3f 30 f8 db 56 25 e1 2e 
  5b 84 DD </TrustedRootCA></ServerValidation><FastReconne
  ct>true</FastReconnect><InnerEapOptional>false</InnerEapOpt
  ional><Eap xmlns="https://www.microsoft.com/provisioning/Bas
  eEapConnectionPropertiesV1"><Type>13</Type><EapType xmlns="
  https://www.microsoft.com/provisioning/EapTlsConnectionPrope
  rtiesV1"><CredentialsSource><CertificateStore><SimpleCertSe
  lection>true</SimpleCertSelection></CertificateStore></Cred
  entialsSource><ServerValidation><DisableUserPromptForServer
  Validation>true</DisableUserPromptForServerValidation><Serv
  erNames>NPS</ServerNames><TrustedRootCA>FF 07 88 e8 ac 00
  32 e4 23 3f 30 f8 db 56 25 e1 2e 5b 84 DD </TrustedRootCA><
  /ServerValidation><DifferentUsername>false</DifferentUserna
  me><PerformServerValidation xmlns="https://www.microsoft.com
  /provisioning/EapTlsConnectionPropertiesV2">true</PerformSe
  rverValidation><AcceptServerName xmlns="https://www.microsof
  t.com/provisioning/EapTlsConnectionPropertiesV2">true</Acce
  ptServerName></EapType></Eap><EnableQuarantineChecks>false<
  /EnableQuarantineChecks><RequireCryptoBinding>false</Requir
  eCryptoBinding><PeapExtensions><PerformServerValidation xml
  ns="https://www.microsoft.com/provisioning/MsPeapConnectionP
  ropertiesV2">true</PerformServerValidation><AcceptServerNam
  e xmlns="https://www.microsoft.com/provisioning/MsPeapConnec
  tionPropertiesV2">true</AcceptServerName></PeapExtensions><
  /EapType></Eap></Config></EapHostConfig></Configuration></E
  ap></Authentication></NativeProfile><DomainNameInformation>
  <DomainName>.clientname.co.uk</DomainName><DnsServers>10.0.0.1,10.0.0.2</DnsServers><AutoTrigger>true</AutoTrigger></
  DomainNameInformation></VPNProfile>
RememberCredentials : True
TrustedNetworkDetection : clientname.co.uk
PSComputerName : pcnamehere
```

## Configure the Device Tunnel

Device tunnel connects to specified VPN servers before users log on to the device. Pre-login connectivity scenarios and device management purposes use device tunnel.

1. Create the following XML file and save it somewhere 
```
<VPNProfile>
 <AlwaysOn>true</AlwaysOn>
 <DeviceTunnel>true</DeviceTunnel>
 <DnsSuffix>clientname.co.uk</DnsSuffix>
 <RegisterDNS>true</RegisterDNS>
 <TrustedNetworkDetection>clientname.co.uk</TrustedNetworkDetection>
 <NativeProfile>
  <Servers>alwaysonvpn.clientname.com</Servers>
  <RoutingPolicyType>SplitTunnel</RoutingPolicyType>
  <NativeProtocolType>IKEv2</NativeProtocolType>
  <Authentication>
   <MachineMethod>Certificate</MachineMethod>
  </Authentication>
  <DisableClassBasedDefaultRoute>true</DisableClassBasedDefaultRoute>
 </NativeProfile>
 <Route>
  <Address>10.0.0.0</Address>
  <PrefixSize>8</PrefixSize>
 </Route>
 <TrafficFilter>
  <RemoteAddressRanges>10.0.0.0</RemoteAddressRanges>
 </TrafficFilter>
</VPNProfile>
```
2. Open powershell as administrator
3. Run the script below

```
Param(
[Parameter(Mandatory = $True, HelpMessage = 'Enter the path to the ProfileXML file.')]
[string]$xmlFilePath,
[Parameter(Mandatory = $False, HelpMessage = 'Enter a name for the VPN profile.')]
[string]$ProfileName = 'Clientname AlwaysOn VPN Device Profile'
)

$a = Test-Path $xmlFilePath
echo $a

$ProfileXML = Get-Content $xmlFilePath

echo $XML

$ProfileNameEscaped = $ProfileName -replace ' ', '%20'

$Version = 201606090004

$ProfileXML = $ProfileXML -replace '<', '&lt;'
$ProfileXML = $ProfileXML -replace '>', '&gt;'
$ProfileXML = $ProfileXML -replace '"', '&quot;'

$nodeCSPURI = './Vendor/MSFT/VPNv2'
$namespaceName = "root\cimv2\mdm\dmmap"
$className = "MDM_VPNv2_01"

$session = New-CimSession

try
{
$newInstance = New-Object Microsoft.Management.Infrastructure.CimInstance $className, $namespaceName
$property = [Microsoft.Management.Infrastructure.CimProperty]::Create("ParentID", "$nodeCSPURI", 'String', 'Key')
$newInstance.CimInstanceProperties.Add($property)
$property = [Microsoft.Management.Infrastructure.CimProperty]::Create("InstanceID", "$ProfileNameEscaped", 'String', 'Key')
$newInstance.CimInstanceProperties.Add($property)
$property = [Microsoft.Management.Infrastructure.CimProperty]::Create("ProfileXML", "$ProfileXML", 'String', 'Property')
$newInstance.CimInstanceProperties.Add($property)

$session.CreateInstance($namespaceName, $newInstance)
$Message = "Created $ProfileName profile."
Write-Host "$Message"
}
catch [Exception]
{
$Message = "Unable to create $ProfileName profile: $_"
Write-Host "$Message"
exit
}
$Message = "Complete."
Write-Host "$Message"
```

### Test the Device Tunnel

1. Run the following command:
    - `Get-VpnConnection -AllUserConnection`
"use strict";(self.webpackChunkdocumentation_technology=self.webpackChunkdocumentation_technology||[]).push([[402],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,u=f["".concat(c,".").concat(d)]||f[d]||m[d]||r;return n?i.createElement(u,o(o({ref:t},p),{},{components:n})):i.createElement(u,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9732:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return m},default:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:6},c="ADFS and WAP certificate replacement",s={unversionedId:"assigning-certificate-to-services/adfs-wap",id:"assigning-certificate-to-services/adfs-wap",title:"ADFS and WAP certificate replacement",description:"ADFS Certificate replacement",source:"@site/SSL-Certificates/assigning-certificate-to-services/adfs-wap.md",sourceDirName:"assigning-certificate-to-services",slug:"/assigning-certificate-to-services/adfs-wap",permalink:"/SSL-Certificates/assigning-certificate-to-services/adfs-wap",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Exchange Online TLS Connectors",permalink:"/SSL-Certificates/assigning-certificate-to-services/exchange-online"},next:{title:"Apache SSL certificate replacement",permalink:"/SSL-Certificates/assigning-certificate-to-services/apache-ssl"}},p={},m=[{value:"ADFS Certificate replacement",id:"adfs-certificate-replacement",level:2},{value:"WAP Certificate replacement (repeat on each WAP server)",id:"wap-certificate-replacement-repeat-on-each-wap-server",level:2},{value:"Testing the certificate has applied successfully",id:"testing-the-certificate-has-applied-successfully",level:2},{value:"External test",id:"external-test",level:3},{value:"Internal test",id:"internal-test",level:3},{value:"WAP certificate errors",id:"wap-certificate-errors",level:2},{value:"<code>This was located in C:WindowsADFSConfig</code>",id:"this-was-located-in-cwindowsadfsconfig",level:4}],f={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adfs-and-wap-certificate-replacement"},"ADFS and WAP certificate replacement"),(0,r.kt)("h2",{id:"adfs-certificate-replacement"},"ADFS Certificate replacement"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Import certificate to ADFS Server in the Personal store"),(0,r.kt)("li",{parentName:"ol"},"Right-click the certificate in MMC > All Tasks > Manage Private Keys",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add the ADFS service with Full Control and Read permissions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Select the local machine as location"),(0,r.kt)("li",{parentName:"ul"},"Nt service\\adfssrv"),(0,r.kt)("li",{parentName:"ul"},"Nt service\\drs"))))),(0,r.kt)("li",{parentName:"ol"},"Take note of Thumbprint:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Open the Certificate in MMC > Details"),(0,r.kt)("li",{parentName:"ul"},"The Thumbprint can be found at the bottom of Details tab and look something similar to:"),(0,r.kt)("li",{parentName:"ul"},"6eb44ed4a495dec64fe96c1ae5eb43c0157ee44e"))),(0,r.kt)("li",{parentName:"ol"},"Export the private key from MMC"),(0,r.kt)("li",{parentName:"ol"},"Open up ADFS Management",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go to AD FS > Service > Certificates"),(0,r.kt)("li",{parentName:"ul"},"Click Set Service Communications in the right corner"),(0,r.kt)("li",{parentName:"ul"},"Select the new certificate"))),(0,r.kt)("li",{parentName:"ol"},"Open up powershell as admin on the primary ADFS and type following commands:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Set-AdfsCertificate -CertificateType Service-Communications -Thumbprint 6eb44ed4a495dec64fe96c1ae5eb43c0157ee44e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Set-AdfsSslCertificate -Thumbprint 6eb44ed4a495dec64fe96c1ae5eb43c0157ee44e")))),(0,r.kt)("li",{parentName:"ol"},"Restart ADFS Service"),(0,r.kt)("li",{parentName:"ol"},"Open up powershell as admin on the secondary ADFS and type following commands:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Set-AdfsSslCertificate -Thumbprint 6eb44ed4a495dec64fe96c1ae5eb43c0157ee44e")))),(0,r.kt)("li",{parentName:"ol"},"Restart ADFS Service")),(0,r.kt)("h2",{id:"wap-certificate-replacement-repeat-on-each-wap-server"},"WAP Certificate replacement (repeat on each WAP server)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the private key into the WAP Server")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open powershell as admin and type the following commands:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Set-WebApplicationProxySslCertificate \u2013Thumbprint 6eb44ed4a495dec64fe96c1ae5eb43c0157ee44e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Check this hasn\u2019t removed any bindings to ports as there's a bug in some versions of WAPs. If this has, recreate the bindings by doing the following:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Install-WebApplicationProxy")),(0,r.kt)("li",{parentName:"ul"},"CertificateThumbprint: the one you've just imported"),(0,r.kt)("li",{parentName:"ul"},"FederationServiceName: the fed service URL with the issue"),(0,r.kt)("li",{parentName:"ul"},"If you get an error about error connecting to federation services, check the host file."))),(0,r.kt)("li",{parentName:"ul"},"Check command below, it may affect other services and may not need applying:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The below command will apply to all services under ",(0,r.kt)("inlineCode",{parentName:"li"},"Get-WebApplicationProxyApplication"),". To find out what certificates they currently use, issue the following command: ",(0,r.kt)("inlineCode",{parentName:"li"},"Get-WebApplicationProxyApplication | fl"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'  Get-WebApplicationProxyApplication | Where {$_.ExternalCertificateThumbprint -eq "e9672a2f11439cab56d6a03b66836f124ecb211e" | Set-WebApplicationProxyApplication -ExternalCertificateThumbprint "0d633ce1650a279384ea418cfc73c84bca620d2c" \n'))),(0,r.kt)("li",{parentName:"ul"},"Check whether a fallback certificate (default cert supporting older, non-SNI capable devices e.g. older Android phones) has been configured on the WAP servers.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Run the following command to view certificate bindings\n",(0,r.kt)("inlineCode",{parentName:"li"},"Netsh http show sslcert")),(0,r.kt)("li",{parentName:"ul"},"If a fallback certificate is configured, it displays as\n",(0,r.kt)("inlineCode",{parentName:"li"},"IP:port : 0.0.0.0:443")),(0,r.kt)("li",{parentName:"ul"},"If the fallback certificate needs updating, make a note of the App ID, then delete & recreate the entry using the new hash. Run the following from an administrative command prompt",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Netsh http delete sslcert ipport=0.0.0.0:443\nnetsh http add sslcert ipport=0.0.0.0:443 certhash=<hash> appid={<app ID>}\n"))))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart WAP and ADFS services"))),(0,r.kt)("h2",{id:"testing-the-certificate-has-applied-successfully"},"Testing the certificate has applied successfully"),(0,r.kt)("h3",{id:"external-test"},"External test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. Goto portal.office.com and type any@domainrenewing.com\n2. If is redirects you are good to go\n")),(0,r.kt)("h3",{id:"internal-test"},"Internal test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. Goto the following address on both WAP servers and check the certificate https://login.domianname.co.uk/adfs/ls/idpinitiatedsignon\n")),(0,r.kt)("h2",{id:"wap-certificate-errors"},"WAP certificate errors"),(0,r.kt)("p",null,"When renewing the WAP certificate, sometimes there's an issue where on one of the WAPs CONFIG files was empty. The configuration file is located:"),(0,r.kt)("h4",{id:"this-was-located-in-cwindowsadfsconfig"},(0,r.kt)("inlineCode",{parentName:"h4"},"This was located in C:\\Windows\\ADFS\\Config")),(0,r.kt)("p",null,"The resolution is to copy and pastes the configuration file from WAP01 and copied into WAP02. Below is a copy of the missing config file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<configuration>\n  <configSections>\n    <section name="microsoft.identityServer.proxyservice" type="Microsoft.IdentityServer.Management.Proxy.Configuration.ProxyConfiguration, Microsoft.IdentityServer.Management.Proxy, Version=6.3.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35, processorArchitecture=MSIL" />\n  </configSections>\n\n  <microsoft.identityServer.proxyservice>\n    <congestionControl latencyThresholdInMSec="8000" minCongestionWindowSize="64"\n      enabled="true" connectionTimeoutInSec="60" />\n    <connectionPool connectionPoolSize="200" scavengeInterval="5" />\n    <diagnostics eventLogLevel="15" />\n    <host tlsClientPort="49443" httpPort="80" httpsPort="443" name="login.shieldtx.com" />\n    <proxy address="" />\n    <trust thumbprint="6E79C156A1B26DCAB09146C9F505331492B2E741"\n      proxyTrustRenewPeriod="21600" />\n  </microsoft.identityServer.proxyservice>\n  \x3c!-- <system.serviceModel>\n    <diagnostics>\n      <messageLogging logEntireMessage="true"\n              logMessagesAtServiceLevel="true"\n              logMessagesAtTransportLevel="true">\n      </messageLogging>\n    </diagnostics>\n  </system.serviceModel> --\x3e\n</configuration>\n\n')))}d.isMDXComponent=!0}}]);
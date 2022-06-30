"use strict";(self.webpackChunkdocumentation_technology=self.webpackChunkdocumentation_technology||[]).push([[2854],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,h=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(h,c(c({ref:t},u),{},{components:n})):r.createElement(h,c({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1294:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return f},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),c=["components"],o={sidebar_position:2},s="Exchange 2013",l={unversionedId:"assigning-certificate-to-services/exchange-2013",id:"assigning-certificate-to-services/exchange-2013",title:"Exchange 2013",description:"Replace a certificate for Exchange 2013",source:"@site/SSL-Certificates/assigning-certificate-to-services/exchange-2013.md",sourceDirName:"assigning-certificate-to-services",slug:"/assigning-certificate-to-services/exchange-2013",permalink:"/SSL-Certificates/assigning-certificate-to-services/exchange-2013",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Exchange 2010",permalink:"/SSL-Certificates/assigning-certificate-to-services/exchange-2010"},next:{title:"Exchange 2016",permalink:"/SSL-Certificates/assigning-certificate-to-services/exchange-2016"}},u={},f=[{value:"Replace a certificate for Exchange 2013",id:"replace-a-certificate-for-exchange-2013",level:2},{value:"Got a Hyrbid Exchange environment and use TLS send connectors?",id:"got-a-hyrbid-exchange-environment-and-use-tls-send-connectors",level:2},{value:"<code>Get-SendConnector | fl</code>",id:"get-sendconnector--fl",level:4},{value:"<code>Get-SendConnector | fl</code>",id:"get-sendconnector--fl-1",level:4},{value:"<code>Enable-ExchangeCertificate &quot;&lt;insert thumbprint&gt;&quot; -services SMTP</code>",id:"enable-exchangecertificate-insert-thumbprint--services-smtp",level:4},{value:"<code>Get-ReceiveConnector | fl</code>",id:"get-receiveconnector--fl",level:4}],p={toc:f};function d(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exchange-2013"},"Exchange 2013"),(0,a.kt)("h2",{id:"replace-a-certificate-for-exchange-2013"},"Replace a certificate for Exchange 2013"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Access the Exchange Admin Center by opening a web browser and visiting https://localhost/ecp"),(0,a.kt)("li",{parentName:"ol"},"On the left side bar, select Servers > Certificates."),(0,a.kt)("li",{parentName:"ol"},"Import your certificate"),(0,a.kt)("li",{parentName:"ol"},"Select the certificate that you've just imported and click on it > Services"),(0,a.kt)("li",{parentName:"ol"},"Select the services where you want the certificate enabled, e.g: ",(0,a.kt)("inlineCode",{parentName:"li"},"SMTP, IMAP, POP and IIS"))),(0,a.kt)("h2",{id:"got-a-hyrbid-exchange-environment-and-use-tls-send-connectors"},"Got a Hyrbid Exchange environment and use TLS send connectors?"),(0,a.kt)("p",null,"The next steps we are going to do using Exchange powershell."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open up Exchange Management Shell as administrator"),(0,a.kt)("li",{parentName:"ol"},"Check what certificate the send connector is using by issuing the command below: (make note of the send connector name)\n")),(0,a.kt)("h4",{id:"get-sendconnector--fl"},(0,a.kt)("inlineCode",{parentName:"h4"},"Get-SendConnector | fl")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Get the thumbprint of the new certificate that you've just imported:\n",(0,a.kt)("inlineCode",{parentName:"li"},"Get-ExchangeCertificate | fl ")),(0,a.kt)("li",{parentName:"ol"},"Make note of the thumbprint and issue the following commands:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$certificate = Get-ExchangeCertificate -Thumbprint "<insert thumbprint>"\n$tlscertificatename = "<i>$($certificate.Issuer)<s>$($certificate.Subject)"\nSet-SendConnector "Name of Send connector" -TlsCertificateName $tlscertificatename\n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Confirm that the commands you have just run were successful, by issuing the following command:")),(0,a.kt)("h4",{id:"get-sendconnector--fl-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"Get-SendConnector | fl")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Enable the certificate with SMTP services using the command below:")),(0,a.kt)("h4",{id:"enable-exchangecertificate-insert-thumbprint--services-smtp"},(0,a.kt)("inlineCode",{parentName:"h4"},'Enable-ExchangeCertificate "<insert thumbprint>" -services SMTP')),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Repeat the above steps, incase you have any receive connectors that are using TLS:")),(0,a.kt)("h4",{id:"get-receiveconnector--fl"},(0,a.kt)("inlineCode",{parentName:"h4"},"Get-ReceiveConnector | fl")))}d.isMDXComponent=!0}}]);
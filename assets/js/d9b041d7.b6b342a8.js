"use strict";(self.webpackChunkdocumentation_technology=self.webpackChunkdocumentation_technology||[]).push([[292],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=i,y=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3226:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},c="3. Deploy the Certificates",p={unversionedId:"always-on-vpn/deploy-the-certificates",id:"always-on-vpn/deploy-the-certificates",title:"3. Deploy the Certificates",description:"Deploy User, Computer and NPS certificates",source:"@site/blueprints/always-on-vpn/deploy-the-certificates.md",sourceDirName:"always-on-vpn",slug:"/always-on-vpn/deploy-the-certificates",permalink:"/blueprints/always-on-vpn/deploy-the-certificates",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Creating 4 new Certificate Templates",permalink:"/blueprints/always-on-vpn/create-certificate-templates"},next:{title:"4. Test the certificates have issued successfully",permalink:"/blueprints/always-on-vpn/test-the-certificates-have-issued"}},s={},u=[{value:"Deploy User, Computer and NPS certificates",id:"deploy-user-computer-and-nps-certificates",level:3},{value:"Deploy VPN Certificates",id:"deploy-vpn-certificates",level:3}],m={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"3-deploy-the-certificates"},"3. Deploy the Certificates"),(0,a.kt)("h3",{id:"deploy-user-computer-and-nps-certificates"},"Deploy User, Computer and NPS certificates"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Logon to a Domain Controller"),(0,a.kt)("li",{parentName:"ol"},"Open Group policy management"),(0,a.kt)("li",{parentName:"ol"},"Create new group policy object named AOVPN Enable Certificate Auto-enrollment and edit the policy"),(0,a.kt)("li",{parentName:"ol"},"Navigate Computer Configuration > Policies > Windows Settings > Security Settings > Public Key Policies > Certificate Services Client \u2013 Auto-Enrollment"),(0,a.kt)("li",{parentName:"ol"},"Set configuration model to Enabled"),(0,a.kt)("li",{parentName:"ol"},"Check Renew expired certificates and Update certificates"),(0,a.kt)("li",{parentName:"ol"},"Navigate User Configuration > Policies > Windows Settings > Security Settings > Public Key Policies > Certificate Services Client \u2013 Auto-Enrollment"),(0,a.kt)("li",{parentName:"ol"},"Set configuration model to Enabled"),(0,a.kt)("li",{parentName:"ol"},"Check Renew expired certificates and Update certificates"),(0,a.kt)("li",{parentName:"ol"},"Close Group policy editor"),(0,a.kt)("li",{parentName:"ol"},"Under Security Filtering limit the policy to apply to AOVPN Users and AOVPN Computers"),(0,a.kt)("li",{parentName:"ol"},"Link the group policy to the OU's containing computer and user objects"),(0,a.kt)("li",{parentName:"ol"},"clientname.co.uk > Test_NoGP > Users"),(0,a.kt)("li",{parentName:"ol"},"clientname.co.uk > Test_NoGP > Computers")),(0,a.kt)("h3",{id:"deploy-vpn-certificates"},"Deploy VPN Certificates"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Logon to your VPN server"),(0,a.kt)("li",{parentName:"ol"},"Save the following file as vpngateway.inf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[Version]\nSignature="$Windows NT$"\n\n[NewRequest]\nSubject = "CN=alwaysonvpn.clientname.com"\nExportable = FALSE\nKeyLength = 2048\nKeySpec = 1\nKeyUsage = 0xA0\nMachineKeySet = True\nProviderName = "Microsoft RSA SChannel Cryptographic Provider"\nRequestType = PKCS10\n\n[Extensions]\n2.5.29.17 = "{text}"\n_continue_ = "dns=alwaysonvpn.clientname.com&"\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Open CMD as administrator and issue the following commands: ",(0,a.kt)("inlineCode",{parentName:"li"},"certreq -new vpngateway.inf vpngateway.req")),(0,a.kt)("li",{parentName:"ol"},"Copy across to the PKI server"),(0,a.kt)("li",{parentName:"ol"},"Open CMD as administrator and issue the following commands:"),(0,a.kt)("li",{parentName:"ol"},'certreq -attrib "CertificateTemplate:ClientnameVPNServerAuthentication" -submit VPNGateway.req VPNGateway.cer'),(0,a.kt)("li",{parentName:"ol"},"Copy the vpngateway.cer file back to the VPN server"),(0,a.kt)("li",{parentName:"ol"},"Open CMD as administrator and issue the following commands:"),(0,a.kt)("li",{parentName:"ol"},"certreq -accept vpngateway.cer"),(0,a.kt)("li",{parentName:"ol"},"Import the ROOT CA and Internal Issuing CA1 certificates to the Trusted Root Certificate store and Intermediate Certificate store")))}f.isMDXComponent=!0}}]);
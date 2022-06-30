"use strict";(self.webpackChunkdocumentation_technology=self.webpackChunkdocumentation_technology||[]).push([[5556],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3441:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={sidebar_position:6},s="6. Install and Configure NPS Servers",c={unversionedId:"always-on-vpn/install-and-configure-nps-servers",id:"always-on-vpn/install-and-configure-nps-servers",title:"6. Install and Configure NPS Servers",description:"Install NPS",source:"@site/blueprints/always-on-vpn/install-and-configure-nps-servers.md",sourceDirName:"always-on-vpn",slug:"/always-on-vpn/install-and-configure-nps-servers",permalink:"/blueprints/always-on-vpn/install-and-configure-nps-servers",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5. Install and Configure VPN Servers",permalink:"/blueprints/always-on-vpn/install-and-configure-vpn-servers"},next:{title:"7. Update DNS",permalink:"/blueprints/always-on-vpn/update-dns"}},p={},u=[{value:"Install NPS",id:"install-nps",level:3},{value:"Configure NPS",id:"configure-nps",level:3}],f={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"6-install-and-configure-nps-servers"},"6. Install and Configure NPS Servers"),(0,o.kt)("h3",{id:"install-nps"},"Install NPS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Logon to your NPS server"),(0,o.kt)("li",{parentName:"ol"},"Open powershell as administrator and issue the following command:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Install-WindowsFeature NPAS -IncludeManagementTools"))),(0,o.kt)("h3",{id:"configure-nps"},"Configure NPS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open NPS console"),(0,o.kt)("li",{parentName:"ol"},"Right click the NPS Server and select Register in Active Directory"),(0,o.kt)("li",{parentName:"ol"},"Click OK"),(0,o.kt)("li",{parentName:"ol"},"In NPS expand RADIUS Clients and Servers"),(0,o.kt)("li",{parentName:"ol"},"Right-click on RADIUS Clients > New"),(0,o.kt)("li",{parentName:"ol"},"Check the box for Enable this RADIUS Client"),(0,o.kt)("li",{parentName:"ol"},"Friendly name: name of the VPN server"),(0,o.kt)("li",{parentName:"ol"},"IP: 10.0.8.6 (BackDMZ)"),(0,o.kt)("li",{parentName:"ol"},"Shared tab - ensure Manual is checked and enter the Shared Secret from the VPN server"),(0,o.kt)("li",{parentName:"ol"},"In NPS console under Standard Configuration, ensure RADIUS server for Dial-Up or VPN Connections is selected"),(0,o.kt)("li",{parentName:"ol"},"Select Configure VPN or Dial-UP"),(0,o.kt)("li",{parentName:"ol"},"Select Virtual Private Network (VPN) Connects > Next"),(0,o.kt)("li",{parentName:"ol"},"Clear Microsoft Encrypted Authentication version 2 (MS-CHAPv2) check box"),(0,o.kt)("li",{parentName:"ol"},"Check Extensible Authentication Protocol"),(0,o.kt)("li",{parentName:"ol"},"Set Type to Microsoft: Protected EAP (PEAP)"),(0,o.kt)("li",{parentName:"ol"},"Select Configure"),(0,o.kt)("li",{parentName:"ol"},"Remove Secured password (EAP-MSCHAP v2)"),(0,o.kt)("li",{parentName:"ol"},"Add Smart Card or other certificate > Next"),(0,o.kt)("li",{parentName:"ol"},"Under User Groups, select Add > AOVPN Users AD group"),(0,o.kt)("li",{parentName:"ol"},"IP Filters > Next"),(0,o.kt)("li",{parentName:"ol"},"Encryption settings > Next"),(0,o.kt)("li",{parentName:"ol"},"Realm Name > Next > Finish")))}d.isMDXComponent=!0}}]);
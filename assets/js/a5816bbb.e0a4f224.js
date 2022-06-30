"use strict";(self.webpackChunkdocumentation_technology=self.webpackChunkdocumentation_technology||[]).push([[8971],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return f}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),f=i,d=u["".concat(c,".").concat(f)]||u[f]||s[f]||n;return a?r.createElement(d,l(l({ref:t},m),{},{components:a})):r.createElement(d,l({ref:t},m))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3703:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return m},toc:function(){return s},default:function(){return f}});var r=a(7462),i=a(3366),n=(a(7294),a(3905)),l=["components"],o={sidebar_position:2},c="2. Creating 4 new Certificate Templates",p={unversionedId:"always-on-vpn/create-certificate-templates",id:"always-on-vpn/create-certificate-templates",title:"2. Creating 4 new Certificate Templates",description:"Create the VPN server certificate template - IKEv2",source:"@site/blueprints/always-on-vpn/create-certificate-templates.md",sourceDirName:"always-on-vpn",slug:"/always-on-vpn/create-certificate-templates",permalink:"/blueprints/always-on-vpn/create-certificate-templates",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Creating 4 new AD Groups",permalink:"/blueprints/always-on-vpn/creating-ad-groups"},next:{title:"3. Deploy the Certificates",permalink:"/blueprints/always-on-vpn/deploy-the-certificates"}},m={},s=[{value:"Create the VPN server certificate template - IKEv2",id:"create-the-vpn-server-certificate-template---ikev2",level:3},{value:"Create NPS server certificate template",id:"create-nps-server-certificate-template",level:3},{value:"Create User Authentication Certificate template",id:"create-user-authentication-certificate-template",level:3},{value:"Create Computer Authentication Certificate template",id:"create-computer-authentication-certificate-template",level:3},{value:"Publish the newly created certificate templates",id:"publish-the-newly-created-certificate-templates",level:3}],u={toc:s};function f(e){var t=e.components,a=(0,i.Z)(e,l);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"2-creating-4-new-certificate-templates"},"2. Creating 4 new Certificate Templates"),(0,n.kt)("h3",{id:"create-the-vpn-server-certificate-template---ikev2"},"Create the VPN server certificate template - IKEv2"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Logon to your PKI server"),(0,n.kt)("li",{parentName:"ol"},"Open up Certificate Authority > right click Certificate Templates > Manage"),(0,n.kt)("li",{parentName:"ol"},"Right click RAS and IAS Server template and select Duplicate Template"),(0,n.kt)("li",{parentName:"ol"},"General tab - Template display name: Clientname VPN Server Authentication"),(0,n.kt)("li",{parentName:"ol"},"Extensions tab - Select Applications > Edit > Add > IP security IKE intermediate"),(0,n.kt)("li",{parentName:"ol"},"Security tab - Add AOVPN RRAS Servers group and grant it Read and Enroll permissions"),(0,n.kt)("li",{parentName:"ol"},"Security tab - Remove RAS and IAS Servers group"),(0,n.kt)("li",{parentName:"ol"},"Subject name tab - Check Supply in the request "),(0,n.kt)("li",{parentName:"ol"},"Click OK to save")),(0,n.kt)("h3",{id:"create-nps-server-certificate-template"},"Create NPS server certificate template"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Right click RAS and IAS Server template and select Duplicate Template"),(0,n.kt)("li",{parentName:"ol"},"General tab - Template display name: Clientname NPS Server Authentication"),(0,n.kt)("li",{parentName:"ol"},"Security tab - Add AOVPN NPS Servers group and grant it Read, Enroll and Autoenroll permissions"),(0,n.kt)("li",{parentName:"ol"},"Security tab - Remove RAS and IAS Servers group "),(0,n.kt)("li",{parentName:"ol"},"Compatibility tab - select Windows Server 2012 R2 for certificate authority"),(0,n.kt)("li",{parentName:"ol"},"Compatibility tab - select Windows 8.1/Windows Server 2012 R2 for certificate recipient"),(0,n.kt)("li",{parentName:"ol"},"Click OK to save")),(0,n.kt)("h3",{id:"create-user-authentication-certificate-template"},"Create User Authentication Certificate template"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Right-click User and select Duplicate Template"),(0,n.kt)("li",{parentName:"ol"},"General tab - Template display name: Clientname VPN User Authentication"),(0,n.kt)("li",{parentName:"ol"},"General tab - Clear the Publish certificate in Active Directory check box"),(0,n.kt)("li",{parentName:"ol"},"Security tab - Add AOVPN Users group and grant it Read, Enroll and Autoenroll permissions"),(0,n.kt)("li",{parentName:"ol"},"Security tab - Remove the Domain Users group"),(0,n.kt)("li",{parentName:"ol"},"Compatibility tab - select Windows Server 2012 R2 for certificate authority"),(0,n.kt)("li",{parentName:"ol"},"Compatibility tab - select Windows 8.1/Windows Server 2012 R2 for certificate recipient"),(0,n.kt)("li",{parentName:"ol"},"Request Handling tab - Clear the Allow private key to be exported check box"),(0,n.kt)("li",{parentName:"ol"},"Cryptography tab - Change provider category to Key Storage Provider"),(0,n.kt)("li",{parentName:"ol"},"Cryptography tab - Check Requests must use one of the following providers"),(0,n.kt)("li",{parentName:"ol"},"Cryptography tab - Select the Microsoft Platform Crypto Provider check box "),(0,n.kt)("li",{parentName:"ol"},"Subject name tab - Uncheck Include e-mail name in the subject name and E-mail name"),(0,n.kt)("li",{parentName:"ol"},"Click OK to save")),(0,n.kt)("h3",{id:"create-computer-authentication-certificate-template"},"Create Computer Authentication Certificate template"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Right-click Computer template and Duplicate Template"),(0,n.kt)("li",{parentName:"ol"},"General tab - Template display name: Clientname VPN Computer Authentication"),(0,n.kt)("li",{parentName:"ol"},"Compatibility tab - select Windows Server 2012 R2 for certificate authority"),(0,n.kt)("li",{parentName:"ol"},"Compatibility tab - select Windows 8.1/Windows Server 2012 R2 for certificate recipient"),(0,n.kt)("li",{parentName:"ol"},"Security tab - Add AOVPN Computers group and grant it Read, Enroll and Autoenroll permissions"),(0,n.kt)("li",{parentName:"ol"},"Security tab - Remove the Domain Computers group"),(0,n.kt)("li",{parentName:"ol"},"Click OK to save")),(0,n.kt)("h3",{id:"publish-the-newly-created-certificate-templates"},"Publish the newly created certificate templates"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Right-click Certificate Templates > New > Certificate Template to Issue > select:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Clientname VPN Server Authentication"),(0,n.kt)("li",{parentName:"ul"},"Clientname NPS Server Authentication"),(0,n.kt)("li",{parentName:"ul"},"Clientname VPN User Authentication"),(0,n.kt)("li",{parentName:"ul"},"Clientname VPN Computer Authentication")))))}f.isMDXComponent=!0}}]);
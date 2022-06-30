"use strict";(self.webpackChunkdocumentation_technology=self.webpackChunkdocumentation_technology||[]).push([[2756],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7705:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:2},s="1. Connect your SBC",u={unversionedId:"microsoft-teams/setup-your-sbc",id:"microsoft-teams/setup-your-sbc",title:"1. Connect your SBC",description:"Setup the SBC in Teams Admin Center",source:"@site/blueprints/microsoft-teams/setup-your-sbc.md",sourceDirName:"microsoft-teams",slug:"/microsoft-teams/setup-your-sbc",permalink:"/blueprints/microsoft-teams/setup-your-sbc",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Requirements and Prerequisites",permalink:"/blueprints/microsoft-teams/requirements-and-prerequisites"},next:{title:"2. Setup Voice Routes, Voice routing policies and Dial Plans",permalink:"/blueprints/microsoft-teams/setup-voiceroutes-voiceroutingpolicies-dialplans"}},l={},p=[{value:"Setup the SBC in Teams Admin Center",id:"setup-the-sbc-in-teams-admin-center",level:2}],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-connect-your-sbc"},"1. Connect your SBC"),(0,i.kt)("h2",{id:"setup-the-sbc-in-teams-admin-center"},"Setup the SBC in Teams Admin Center"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Logon to the ",(0,i.kt)("a",{parentName:"li",href:"https://admin.teams.microsoft.com"},"Teams Admin Center")),(0,i.kt)("li",{parentName:"ol"},"Browse Voice > Direct Routing > SBC"),(0,i.kt)("li",{parentName:"ol"},"Click + Add and fill out the settings as follows:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"SBC FQDN: sbc.domain.com"),(0,i.kt)("li",{parentName:"ul"},"Enabled: On"),(0,i.kt)("li",{parentName:"ul"},"SIP Signalling port: 5061"),(0,i.kt)("li",{parentName:"ul"},"Send SIP Options: On"),(0,i.kt)("li",{parentName:"ul"},"Forward call history: Off"),(0,i.kt)("li",{parentName:"ul"},"Forward P-Asserted-Identity (PAI) header: Off"),(0,i.kt)("li",{parentName:"ul"},"Concurrent call capacity: 10"),(0,i.kt)("li",{parentName:"ul"},"Failover response codes: 408, 503, 504"),(0,i.kt)("li",{parentName:"ul"},"Failover time (seconds): 10"),(0,i.kt)("li",{parentName:"ul"},"SBC supports PIDF/LO for emergency calls: Off"),(0,i.kt)("li",{parentName:"ul"},"Media bypass: None"),(0,i.kt)("li",{parentName:"ul"},"Bypass mode: None"),(0,i.kt)("li",{parentName:"ul"},"Preferred country or region for media traffic: None"),(0,i.kt)("li",{parentName:"ul"},"Location based routing: None"),(0,i.kt)("li",{parentName:"ul"},"Gateway site ID: None")))))}f.isMDXComponent=!0}}]);
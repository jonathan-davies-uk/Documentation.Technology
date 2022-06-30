"use strict";(self.webpackChunkdocumentation_technology=self.webpackChunkdocumentation_technology||[]).push([[338],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),f=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=f(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=f(r),m=i,g=u["".concat(s,".").concat(m)]||u[m]||l[m]||a;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var f=2;f<a;f++)o[f]=r[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9705:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return f},assets:function(){return p},toc:function(){return l},default:function(){return m}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],c={sidebar_position:15},s="Office Web Apps certificate replacement",f={unversionedId:"assigning-certificate-to-services/office-web-apps",id:"assigning-certificate-to-services/office-web-apps",title:"Office Web Apps certificate replacement",description:"1. Import the certificate to the server and take note of the Friendly Name.",source:"@site/SSL-Certificates/assigning-certificate-to-services/office-web-apps.md",sourceDirName:"assigning-certificate-to-services",slug:"/assigning-certificate-to-services/office-web-apps",permalink:"/SSL-Certificates/assigning-certificate-to-services/office-web-apps",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Citrix Storefront certificate replacement",permalink:"/SSL-Certificates/assigning-certificate-to-services/citrix-storefront"},next:{title:"Openasset certificate replacement",permalink:"/SSL-Certificates/assigning-certificate-to-services/openasset"}},p={},l=[],u={toc:l};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"office-web-apps-certificate-replacement"},"Office Web Apps certificate replacement"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Import the certificate to the server and take note of the Friendly Name."),(0,a.kt)("li",{parentName:"ol"},"Change the friendly name under certificates in the following XML file:"),(0,a.kt)("li",{parentName:"ol"},"C:\\ProgramData\\Microsoft\\OfficeWebApps\\Data\\FarmState\\settings.xml"),(0,a.kt)("li",{parentName:"ol"},"Change the line:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'<Setting Name="CertificateName" DataType="System.String">Client Wildcard</Setting>'))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Replace with the certificate Friendly Name you've just imported to the server."),(0,a.kt)("li",{parentName:"ol"},"Restart the OfficeWebApps service")))}m.isMDXComponent=!0}}]);
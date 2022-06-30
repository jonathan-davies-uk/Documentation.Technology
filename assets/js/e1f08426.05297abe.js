"use strict";(self.webpackChunkdocumentation_technology=self.webpackChunkdocumentation_technology||[]).push([[8839],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4381:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={sidebar_position:11},l="SCVMM certificate replacement",s={unversionedId:"assigning-certificate-to-services/scvmm",id:"assigning-certificate-to-services/scvmm",title:"SCVMM certificate replacement",description:"To renew an expired certificate, find the server with Virtual Machine Manager on and do the following:",source:"@site/SSL-Certificates/assigning-certificate-to-services/scvmm.md",sourceDirName:"assigning-certificate-to-services",slug:"/assigning-certificate-to-services/scvmm",permalink:"/SSL-Certificates/assigning-certificate-to-services/scvmm",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Windows Admin Center certificate replacement",permalink:"/SSL-Certificates/assigning-certificate-to-services/windows-admin-center"},next:{title:"Instant Messaging with Outlook Exchange certificate replacement",permalink:"/SSL-Certificates/assigning-certificate-to-services/instant-messaging-with-outlook-exchange"}},p={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scvmm-certificate-replacement"},"SCVMM certificate replacement"),(0,a.kt)("p",null,"To renew an expired certificate, find the server with Virtual Machine Manager on and do the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open certlm.msc and find the old certificate and remove it. If you don't remove it the creation of the new certificate will not work.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open up Virtual Machine Manager powershell as administrator and run the following:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Get-VMMManagedComputer")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The above will list the VM's that are managed by VMM. Take note of the Computer name and then issue the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'$credentials = get-credentials #this should be domain admin e.g. domain.local\\waterstons\nGet-VMMManagedComputer -ComputerName "client-server02.domain.local" | Register-SCVMMManagedComputer -Credential $credentials\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check the VM you've just issued the certificate too and it will now have an up to date certificate."))))}f.isMDXComponent=!0}}]);
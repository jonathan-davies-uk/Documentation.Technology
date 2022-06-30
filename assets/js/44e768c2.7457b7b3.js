"use strict";(self.webpackChunkdocumentation_technology=self.webpackChunkdocumentation_technology||[]).push([[738],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,b=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},476:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={sidebar_position:4},s="VM not in a desirable state",l={unversionedId:"azure/troubleshooting/user-error-vm-not-in-desirable-state",id:"azure/troubleshooting/user-error-vm-not-in-desirable-state",title:"VM not in a desirable state",description:"The issue",source:"@site/Backups/azure/troubleshooting/user-error-vm-not-in-desirable-state.md",sourceDirName:"azure/troubleshooting",slug:"/azure/troubleshooting/user-error-vm-not-in-desirable-state",permalink:"/Backups/azure/troubleshooting/user-error-vm-not-in-desirable-state",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Restore: failed because there was no Snapshot of the VM",permalink:"/Backups/azure/troubleshooting/restore-user-error-instant-rp-not-found"},next:{title:"User Error FS Freeze Failed",permalink:"/Backups/azure/troubleshooting/user-error-fs-freeze-failed"}},c={},p=[{value:"The issue",id:"the-issue",level:2},{value:"The Solution",id:"the-solution",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vm-not-in-a-desirable-state"},"VM not in a desirable state"),(0,a.kt)("h2",{id:"the-issue"},"The issue"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UserErrorVmNotInDesirableState")),(0,a.kt)("p",null,"The virtual machines that's being backed up is not in a state that allows backups."),(0,a.kt)("h2",{id:"the-solution"},"The Solution"),(0,a.kt)("p",null,"For a successful backup, these VM states are supported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Running"),(0,a.kt)("li",{parentName:"ul"},"Stopped"),(0,a.kt)("li",{parentName:"ul"},"Stopped (deallocated)")),(0,a.kt)("p",null,"If the state is mid shutting down - wait for the state to change and then trigger the backup job."))}d.isMDXComponent=!0}}]);
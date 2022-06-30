"use strict";(self.webpackChunkdocumentation_technology=self.webpackChunkdocumentation_technology||[]).push([[1729],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,b=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return t?n.createElement(b,c(c({ref:r},s),{},{components:t})):n.createElement(b,c({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9947:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return s},toc:function(){return p},default:function(){return d}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),c=["components"],a={sidebar_position:3},u="Error: 34113",l={unversionedId:"backup-exec/troubleshooting/error-34113",id:"backup-exec/troubleshooting/error-34113",title:"Error: 34113",description:"The issue",source:"@site/Backups/backup-exec/troubleshooting/error-34113.md",sourceDirName:"backup-exec/troubleshooting",slug:"/backup-exec/troubleshooting/error-34113",permalink:"/Backups/backup-exec/troubleshooting/error-34113",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Error: E0008234",permalink:"/Backups/backup-exec/troubleshooting/error-E0008234"},next:{title:"Failure querying writer status",permalink:"/Backups/backup-exec/troubleshooting/vss-writers-error"}},s={},p=[{value:"The issue",id:"the-issue",level:2},{value:"The Solution",id:"the-solution",level:2}],f={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"error-34113"},"Error: 34113"),(0,i.kt)("h2",{id:"the-issue"},"The issue"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Log: Application\nType: Error\nEvent: 34113\nAlert Time: 2016-05-25 22:01:55Z\nEvent Time: 09:01:09 PM 25-May-2016 UTC\nSource: Backup Exec\nCategory: None\nUsername: N/A\nComputer: SERVER-BACKUP01.ad.domain.ac.uk\nDescription: Backup Exec Alert: Job Failed\n(Server: "SERVER-BACKUP01") (Job: "SERVER-SHARE01-Full") SERVER-SHARE01-Full -- The job failed with the following error: Backup Exec could not log on to the server with the logon account specified for it. The logon account does not have valid credentials. Ensure that the user name and password are correct in the logon account.\n')),(0,i.kt)("h2",{id:"the-solution"},"The Solution"),(0,i.kt)("p",null,"Edit the job and test the credentials. If they are incorrect, change them."))}d.isMDXComponent=!0}}]);
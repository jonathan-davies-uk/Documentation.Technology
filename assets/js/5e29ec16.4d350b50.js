"use strict";(self.webpackChunkdocumentation_technology=self.webpackChunkdocumentation_technology||[]).push([[8926],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(r),k=a,f=m["".concat(l,".").concat(k)]||m[k]||s[k]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3651:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return s},default:function(){return k}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],u={sidebar_position:1},l="How to backup an Azure VM from the VM settings",c={unversionedId:"azure/backup/backup-azure-vm-from-vm-settings",id:"azure/backup/backup-azure-vm-from-vm-settings",title:"How to backup an Azure VM from the VM settings",description:"Setup the backup",source:"@site/Backups/azure/backup/backup-azure-vm-from-vm-settings.md",sourceDirName:"azure/backup",slug:"/azure/backup/backup-azure-vm-from-vm-settings",permalink:"/Backups/azure/backup/backup-azure-vm-from-vm-settings",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tape Drive showing as Standalone",permalink:"/Backups/veeam/troubleshooting/tape-drive-showing-as-standalone"},next:{title:"Setup a vault and Backup Azure VMs",permalink:"/Backups/azure/backup/setup-a-vault-and-backup-azure-vms"}},p={},s=[{value:"Setup the backup",id:"setup-the-backup",level:2},{value:"Initiate a backup",id:"initiate-a-backup",level:2}],m={toc:s};function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-backup-an-azure-vm-from-the-vm-settings"},"How to backup an Azure VM from the VM settings"),(0,o.kt)("h2",{id:"setup-the-backup"},"Setup the backup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Logon to the ",(0,o.kt)("a",{parentName:"li",href:"https://portal.azure.com"},"Azure Portal")),(0,o.kt)("li",{parentName:"ol"},"Browse ",(0,o.kt)("strong",{parentName:"li"},"All services")," > Filter > ",(0,o.kt)("strong",{parentName:"li"},"Virtual Machines")),(0,o.kt)("li",{parentName:"ol"},"Select the VM that you want to backup"),(0,o.kt)("li",{parentName:"ol"},"From the VM menu select ",(0,o.kt)("strong",{parentName:"li"},"Backup")),(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("strong",{parentName:"li"},"Recovery Services")," vault and do the following:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Create new"),(0,o.kt)("li",{parentName:"ol"},"Give the vault a name"),(0,o.kt)("li",{parentName:"ol"},"Ensure the vault is in the same region as the VM"))),(0,o.kt)("li",{parentName:"ol"},"Next, ",(0,o.kt)("strong",{parentName:"li"},"Choose backup policy")," and do the following:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"DefaultPolicy - this backs up the VM once a day at the time specified, and retains backups in the vault for 30 days."))),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Enable Backup"))),(0,o.kt)("h2",{id:"initiate-a-backup"},"Initiate a backup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Browse the VM"),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Backup")," under Operations"),(0,o.kt)("li",{parentName:"ol"},"From here you can select ",(0,o.kt)("strong",{parentName:"li"},"Backup now")," or wait until it starts in accordance with the backup schedule set previously")))}k.isMDXComponent=!0}}]);
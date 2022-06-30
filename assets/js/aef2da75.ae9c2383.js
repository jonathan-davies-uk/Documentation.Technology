"use strict";(self.webpackChunkdocumentation_technology=self.webpackChunkdocumentation_technology||[]).push([[3087],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),k=o,g=m["".concat(s,".").concat(k)]||m[k]||c[k]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6947:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return k}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},s="Restore Azure VM",u={unversionedId:"azure/restore/restore-azure-vm",id:"azure/restore/restore-azure-vm",title:"Restore Azure VM",description:"Restore options",source:"@site/Backups/azure/restore/restore-azure-vm.md",sourceDirName:"azure/restore",slug:"/azure/restore/restore-azure-vm",permalink:"/Backups/azure/restore/restore-azure-vm",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Setup a vault and Backup Azure VMs",permalink:"/Backups/azure/backup/setup-a-vault-and-backup-azure-vms"},next:{title:"Restore files from a VM",permalink:"/Backups/azure/restore/restore-files-from-vm"}},p={},c=[{value:"Restore options",id:"restore-options",level:2},{value:"Restoring a VM",id:"restoring-a-vm",level:2},{value:"Restoring option: Creating a new VM",id:"restoring-option-creating-a-new-vm",level:3},{value:"Restoring option: Restore disk",id:"restoring-option-restore-disk",level:3},{value:"Restoring option: Replace existing disk",id:"restoring-option-replace-existing-disk",level:3},{value:"Restoring option: Cross Region restore",id:"restoring-option-cross-region-restore",level:3}],m={toc:c};function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"restore-azure-vm"},"Restore Azure VM"),(0,a.kt)("h2",{id:"restore-options"},"Restore options"),(0,a.kt)("p",null,"There are multiple ways your can restore a VM, and they include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Create a new VM")," - creates a VM from a restore point"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Replace existing")," - restore a disk and use it to replace a disk on an existing VM"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Restore disk")," - restores a disk from a VM, which can be used to create a new VM"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cross Region")," - restore a VM in a second region")),(0,a.kt)("h2",{id:"restoring-a-vm"},"Restoring a VM"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Logon to the ",(0,a.kt)("a",{parentName:"li",href:"https://portal.azure.com"},"Azure Portal")),(0,a.kt)("li",{parentName:"ol"},"Browse to ",(0,a.kt)("strong",{parentName:"li"},"Backup center")," and click ",(0,a.kt)("strong",{parentName:"li"},"Restore")," from the Overview tab"),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Azure Virtual machine")," as a Datasource type and then select a backup instance"),(0,a.kt)("li",{parentName:"ol"},"Choose a VM you want to restore and click ",(0,a.kt)("strong",{parentName:"li"},"Continue")),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"Restore point")),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"Restore Configuration")," option you would like, given teh above restore options")),(0,a.kt)("h3",{id:"restoring-option-creating-a-new-vm"},"Restoring option: Creating a new VM"),(0,a.kt)("p",null,"Fill out the options as below"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Restore type"),": Create new virtual machine"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Virtual machine name"),": restore-vm-new-name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Resource group"),": existing-resource-group"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Virtual network"),":  existing-resource-group-vnet"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Subnet"),": default"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Staging location"),": testresourcegroup (StandardLRS)")),(0,a.kt)("h3",{id:"restoring-option-restore-disk"},"Restoring option: Restore disk"),(0,a.kt)("p",null,"Fill out the options as below"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Restore type"),": Create new virtual machine"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Virtual machine name"),": restore-vm-new-name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Resource group"),": new-resource-group"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Virtual network"),":  new-resource-group-vnet"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Subnet"),": default"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Staging location"),": teststaging (StandardLRS)")),(0,a.kt)("h3",{id:"restoring-option-replace-existing-disk"},"Restoring option: Replace existing disk"),(0,a.kt)("p",null,"Fill out the options as below"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Restore Configuration"),": Replace existing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Restore Type"),": Replace Disk(s)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Staging location"),": teststaging (StandardLRS)")),(0,a.kt)("h3",{id:"restoring-option-cross-region-restore"},"Restoring option: Cross Region restore"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the Azure portal browse to ",(0,a.kt)("strong",{parentName:"li"},"Recovery Service vault")," > ",(0,a.kt)("strong",{parentName:"li"},"Backup items")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Secondary Region")),(0,a.kt)("li",{parentName:"ol"},"From here you can choose to ",(0,a.kt)("strong",{parentName:"li"},"Create a new VM"),", ",(0,a.kt)("strong",{parentName:"li"},"Restore disk")," or ",(0,a.kt)("strong",{parentName:"li"},"Replace existing disk")),(0,a.kt)("li",{parentName:"ol"},"For the instructions, just follow the above steps.")))}k.isMDXComponent=!0}}]);
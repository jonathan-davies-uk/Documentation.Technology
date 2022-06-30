"use strict";(self.webpackChunkdocumentation_technology=self.webpackChunkdocumentation_technology||[]).push([[6793],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,u=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(t),f=o,d=m["".concat(s,".").concat(f)]||m[f]||l[f]||u;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=t.length,a=new Array(u);a[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var i=2;i<u;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5757:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},assets:function(){return p},toc:function(){return l},default:function(){return f}});var n=t(7462),o=t(3366),u=(t(7294),t(3905)),a=["components"],c={sidebar_position:2},s="Copy members of one group to another",i={unversionedId:"useful-commands-and-scripts/copy-members-of-one-group",id:"useful-commands-and-scripts/copy-members-of-one-group",title:"Copy members of one group to another",description:"The following script allows you to copy members of one group to another in AD:",source:"@site/active-directory/useful-commands-and-scripts/copy-members-of-one-group.md",sourceDirName:"useful-commands-and-scripts",slug:"/useful-commands-and-scripts/copy-members-of-one-group",permalink:"/active-directory/useful-commands-and-scripts/copy-members-of-one-group",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Useful Powershell One Liners",permalink:"/active-directory/useful-commands-and-scripts/useful-powershell-one-liners"},next:{title:"Set Attribute for AD User",permalink:"/active-directory/useful-commands-and-scripts/set-ad-attribute"}},p={},l=[],m={toc:l};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,u.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"copy-members-of-one-group-to-another"},"Copy members of one group to another"),(0,u.kt)("p",null,"The following script allows you to copy members of one group to another in AD:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'$group = get-adgroupmember -identity "Group Source"\nAdd-adgroupmember -identity "New Group Name" -Members $group\n')),(0,u.kt)("p",null,"OR"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'$groupsource = "Group Source"\n$gtarget = "Group Destination"\n$targetusers = Get-ADGroupMember $grouptarget\n$sourceusers = Get-ADGroupMember $groupsource\n\nforeach ($user in $sourceusers)\n{\n    $test = $true\n    foreach ($tuser in $targetusers){if ($tuser.samaccountname -eq $user.samaccountname){$test = $false}}\n    if ($test){Add-ADGroupMember -Identity $grouptarget -Members $user}\n}\n')))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation_technology=self.webpackChunkdocumentation_technology||[]).push([[5637],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=s(t),f=a,d=l["".concat(u,".").concat(f)]||l[f]||m[f]||o;return t?n.createElement(d,c(c({ref:r},p),{},{components:t})):n.createElement(d,c({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=l;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},6340:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return m},default:function(){return f}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],i={sidebar_position:4},u="Change User Principal Name (UPN)",s={unversionedId:"useful-commands-and-scripts/change-upn",id:"useful-commands-and-scripts/change-upn",title:"Change User Principal Name (UPN)",description:"Change for a specific user",source:"@site/active-directory/useful-commands-and-scripts/change-upn.md",sourceDirName:"useful-commands-and-scripts",slug:"/useful-commands-and-scripts/change-upn",permalink:"/active-directory/useful-commands-and-scripts/change-upn",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Set Attribute for AD User",permalink:"/active-directory/useful-commands-and-scripts/set-ad-attribute"},next:{title:"Get Group Members of User accounts",permalink:"/active-directory/useful-commands-and-scripts/get-group-member-user-accounts"}},p={},m=[{value:"Change for a specific user",id:"change-for-a-specific-user",level:3},{value:"Change for every user",id:"change-for-every-user",level:3},{value:"Backout",id:"backout",level:3}],l={toc:m};function f(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"change-user-principal-name-upn"},"Change User Principal Name (UPN)"),(0,o.kt)("h3",{id:"change-for-a-specific-user"},"Change for a specific user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import-module activedirectory\n$x = Get-ADUser -Filter * -SearchBase "OU=Office 365,OU=User Accounts,DC=ad,DC=domain,DC=co,DC=uk"\n$x | sort SamAccountName | Export-Csv -Path "C:\\temp\\pre-upn.csv" -NoTypeInformation\n#Test for users with the following SIDs\n$wa = $x | ? SID -like "S-1-5-21-996000114-33600580-253070951-2999"\n$wa | % {Set-ADUser $_ -UserPrincipalName ($_.SamAccountName + \'@domain.co.uk\')}\n')),(0,o.kt)("h3",{id:"change-for-every-user"},"Change for every user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$x | % {Set-ADUser $_ -UserPrincipalName ($_.SamAccountName + \'@domain.co.uk\')}\n$y = Get-ADUser -Filter * -SearchBase "OU=Office 365,OU=User Accounts,DC=ad,DC=domain,DC=co,DC=uk"\n$y | sort SamAccountName | Export-Csv -Path "C:\\temp\\post-upn.csv" -NoTypeInformation\n')),(0,o.kt)("h3",{id:"backout"},"Backout"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import-module activedirectory\n$b = Get-ADUser -Filter * -SearchBase "OU=Office 365,OU=User Accounts,DC=ad,DC=domain,DC=co,DC=uk"\n$b | sort SamAccountName | Export-Csv -Path "C:\\temp\\pre-backout-upn.csv" -NoTypeInformation\n$b | % {Set-ADUser $_ -UserPrincipalName ($_.SamAccountName + \'@ad.domain.co.uk\')}\n$ba = Get-ADUser -Filter * -SearchBase "OU=Office 365,OU=User Accounts,DC=ad,DC=domain,DC=co,DC=uk"\n$ba | sort SamAccountName | Export-Csv -Path "C:\\temp\\post-backout-upn.csv" -NoTypeInformation\n')))}f.isMDXComponent=!0}}]);
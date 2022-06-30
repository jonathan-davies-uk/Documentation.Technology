"use strict";(self.webpackChunkdocumentation_technology=self.webpackChunkdocumentation_technology||[]).push([[5570],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},144:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return d},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Useful Powershell One Liners",c={unversionedId:"useful-commands-and-scripts/useful-powershell-one-liners",id:"useful-commands-and-scripts/useful-powershell-one-liners",title:"Useful Powershell One Liners",description:"User object commands",source:"@site/active-directory/useful-commands-and-scripts/useful-powershell-one-liners.md",sourceDirName:"useful-commands-and-scripts",slug:"/useful-commands-and-scripts/useful-powershell-one-liners",permalink:"/active-directory/useful-commands-and-scripts/useful-powershell-one-liners",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"What is Active Directory?",permalink:"/active-directory/what-is-active-directory"},next:{title:"Copy members of one group to another",permalink:"/active-directory/useful-commands-and-scripts/copy-members-of-one-group"}},d={},u=[{value:"User object commands",id:"user-object-commands",level:2},{value:"Find inactive users",id:"find-inactive-users",level:3},{value:"Find the total number of users within a domain",id:"find-the-total-number-of-users-within-a-domain",level:3},{value:"Finding all disabled user objects",id:"finding-all-disabled-user-objects",level:3},{value:"List all Domain Controllers and their IP",id:"list-all-domain-controllers-and-their-ip",level:3},{value:"Add user to an AD Group",id:"add-user-to-an-ad-group",level:3},{value:"Remove user from an AD Group",id:"remove-user-from-an-ad-group",level:3},{value:"Find all users who are locked out",id:"find-all-users-who-are-locked-out",level:3},{value:"Disable a user account",id:"disable-a-user-account",level:3},{value:"Enable a user account",id:"enable-a-user-account",level:3},{value:"Set expiration date for a user account",id:"set-expiration-date-for-a-user-account",level:3},{value:"Computer object commands",id:"computer-object-commands",level:2},{value:"Find all disabled Computer accounts",id:"find-all-disabled-computer-accounts",level:3},{value:"Find Computers by Operating System",id:"find-computers-by-operating-system",level:3},{value:"List all Servers on a Domain",id:"list-all-servers-on-a-domain",level:3},{value:"Find all Domain Controllers in a Domain",id:"find-all-domain-controllers-in-a-domain",level:3},{value:"Get all Computer in a Particular OU on a Domain",id:"get-all-computer-in-a-particular-ou-on-a-domain",level:3},{value:"Recycle Bin",id:"recycle-bin",level:2},{value:"Enable AD Recycle Bin feature",id:"enable-ad-recycle-bin-feature",level:3},{value:"To restore an AD Account from the Recycle Bin",id:"to-restore-an-ad-account-from-the-recycle-bin",level:3},{value:"Forest, Domains and OU&#39;s",id:"forest-domains-and-ous",level:2},{value:"See Forest details",id:"see-forest-details",level:3},{value:"See Domain details",id:"see-domain-details",level:3},{value:"Raise the functional level of the Domain",id:"raise-the-functional-level-of-the-domain",level:3},{value:"Move FSMO roles",id:"move-fsmo-roles",level:3},{value:"See OU details",id:"see-ou-details",level:3},{value:"Create a new OU",id:"create-a-new-ou",level:3}],m={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useful-powershell-one-liners"},"Useful Powershell One Liners"),(0,o.kt)("h2",{id:"user-object-commands"},"User object commands"),(0,o.kt)("h3",{id:"find-inactive-users"},"Find inactive users"),(0,o.kt)("p",null,"This commmand will find inactive users for the last 60 days using powershell."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Search-ADAccount -Accountinactive -TimeSpan 60 -Usersonly | Select name,mail,lastlogondate | Export-CSV "C:\\temo\\Inactive-Users.csv" -NoTypeInformation -Encoding UTF8\n')),(0,o.kt)("h3",{id:"find-the-total-number-of-users-within-a-domain"},"Find the total number of users within a domain"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(Get-ADUser -Filter *).Count\n")),(0,o.kt)("h3",{id:"finding-all-disabled-user-objects"},"Finding all disabled user objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-ADUser -Filter {Enabled -eq $false} | FT samAccountName\n")),(0,o.kt)("h3",{id:"list-all-domain-controllers-and-their-ip"},"List all Domain Controllers and their IP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"for /f %i in ('dsquery server -domain %userdnsdomain% -o rdn') do psexec \\\\%i ipconfig /all\n")),(0,o.kt)("h3",{id:"add-user-to-an-ad-group"},"Add user to an AD Group"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Add-ADGroupMember -identity "<group_name>" -Member "<upn>"\n')),(0,o.kt)("h3",{id:"remove-user-from-an-ad-group"},"Remove user from an AD Group"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Remove-ADGroupMember -identity "<group_name>" -Member "<upn>"\n')),(0,o.kt)("h3",{id:"find-all-users-who-are-locked-out"},"Find all users who are locked out"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Search-ADAccount -LockedOut | select name, samAccountName\n")),(0,o.kt)("h3",{id:"disable-a-user-account"},"Disable a user account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Disable-ADAccount -Identity Spud\n")),(0,o.kt)("h3",{id:"enable-a-user-account"},"Enable a user account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Enable-ADAccount -Identity Spud\n")),(0,o.kt)("h3",{id:"set-expiration-date-for-a-user-account"},"Set expiration date for a user account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Set-ADAccountExpiration -Identity Spud -DateTime "10/05/2022"\n')),(0,o.kt)("h2",{id:"computer-object-commands"},"Computer object commands"),(0,o.kt)("h3",{id:"find-all-disabled-computer-accounts"},"Find all disabled Computer accounts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-ADComputer -Filter {(enabled -eq $false)} -ResultPageSize 2000 -resultSetSize $null -Properties Name,OperatingSystem,SamAccountName,DistinguishedName\n")),(0,o.kt)("h3",{id:"find-computers-by-operating-system"},"Find Computers by Operating System"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-ADComputer -Filter * -Properties OperatingSystem | Select OperatingSystem -unique | Sort OperatingSystem\n")),(0,o.kt)("h3",{id:"list-all-servers-on-a-domain"},"List all Servers on a Domain"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Get-ADComputer -Server "domain.com" -Filter {operatingsystem -like "*server*"} -Properties * | select enabled,name,operatingsystem,canonicalname,lastlogondate | Export-Csv C:\\temp\\computer-list.csv -Append -NoTypeInformation -NoClobber\n')),(0,o.kt)("h3",{id:"find-all-domain-controllers-in-a-domain"},"Find all Domain Controllers in a Domain"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-ADDomainController -Filter * -server <domain> | Select-Object name, domain\n")),(0,o.kt)("h3",{id:"get-all-computer-in-a-particular-ou-on-a-domain"},"Get all Computer in a Particular OU on a Domain"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-ADComputer -server \"domain.com\" -SearchBase 'OU=Computers,OU=London,OU=UK,DC=domain,DC=com' -Filter '*' -Properties * | Select name, ipv4address, operatingsystem, CanonicalName, distinguishedname | Format-Table -AutoSize\n")),(0,o.kt)("h2",{id:"recycle-bin"},"Recycle Bin"),(0,o.kt)("h3",{id:"enable-ad-recycle-bin-feature"},"Enable AD Recycle Bin feature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Enable-ADOptionalFeature 'Recycle Bin Feature' -Scope ForestOrConfigurationSet -Target 'domain.com'\n")),(0,o.kt)("h3",{id:"to-restore-an-ad-account-from-the-recycle-bin"},"To restore an AD Account from the Recycle Bin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-ADObject -Filter 'samaccountname -eq \"Spud\"' -IncludeDeletedObjects | RestoreADObject\n")),(0,o.kt)("h2",{id:"forest-domains-and-ous"},"Forest, Domains and OU's"),(0,o.kt)("h3",{id:"see-forest-details"},"See Forest details"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-ADForest domain.com\n")),(0,o.kt)("h3",{id:"see-domain-details"},"See Domain details"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-ADDomain domain.com\n")),(0,o.kt)("h3",{id:"raise-the-functional-level-of-the-domain"},"Raise the functional level of the Domain"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Raise the functional level of the domain with care. Once you raise the functional level of the domain, some servers may cease to work if you've not upgraded them. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/active-directory-functional-levels"},"View Microsofts article for more details")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Set-ADForestMode -Identity test.local -ForestMode Windows2016Forest\n")),(0,o.kt)("h3",{id:"move-fsmo-roles"},"Move FSMO roles"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'MoveADDirectoryServerOperationMasterRole -Identity "DestinationDC" -OperationMasterRole PDCEmulator,SchemaMaster\n')),(0,o.kt)("h3",{id:"see-ou-details"},"See OU details"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-ADOrganizationalUnit -Identity 'OU=Users,OU=UK,DC=domain,DC=com'\n")),(0,o.kt)("h3",{id:"create-a-new-ou"},"Create a new OU"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"New-ADOrganizationalUnit -Name Users -Path 'OU=USA,DC=domain,DC=com'\n")))}p.isMDXComponent=!0}}]);
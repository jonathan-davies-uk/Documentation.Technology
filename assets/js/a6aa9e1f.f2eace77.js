"use strict";(self.webpackChunkdocumentation_technology=self.webpackChunkdocumentation_technology||[]).push([[3089],{8665:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(3366),n=a(7294),l=a(6010),i=a(2773),m=a(9960),o="sidebar_a9qW",s="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",d="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD",p=a(5999);function h(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=["sidebar","toc","children"];function E(e){var t=e.sidebar,a=e.toc,m=e.children,o=(0,r.Z)(e,v),s=t&&t.items.length>0;return n.createElement(i.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},s&&n.createElement("aside",{className:"col col--3"},n.createElement(h,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&n.createElement("div",{className:"col col--2"},a))))}},7329:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var r=a(7294),n=a(2263),l=a(8665),i=a(8561),m=a(6299),o=a(3725);function s(e){var t=e.metadata,a=e.items,s=e.sidebar,c=(0,n.Z)().siteConfig.title,u=t.blogDescription,d=t.blogTitle,g="/"===t.permalink?c:d;return r.createElement(l.Z,{title:g,description:u,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:s},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(m.Z,{metadata:t}))}},6299:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(5999),l=a(1750);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(l.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&r.createElement(l.Z,{permalink:i,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},8561:function(e,t,a){a.d(t,{Z:function(){return P}});var r=a(7294),n=a(6010),l=a(3905),i=a(5999),m=a(9960),o=a(4996),s=a(3725),c=a(8780),u=a(5119),d=a(6753),g="blogPostTitle_rzP5",p="blogPostData_Zg1s",h="blogPostDetailsFull_h6_j",v=a(62),E="image_o0gy";function b(e){return e.href?r.createElement(m.Z,e):r.createElement(r.Fragment,null,e.children)}function f(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL,m=t.email,o=l||m&&"mailto:"+m||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement("span",{className:"avatar__photo-link avatar__photo"},r.createElement(b,{href:o},r.createElement("img",{className:E,src:i,alt:a}))),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(b,{href:o,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}var _="authorCol_FlmR",N="imageOnlyAuthorRow_trpF",Z="imageOnlyAuthorCol_S2np";function k(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?N:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?Z:_),key:t},r.createElement(f,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function P(e){var t,a,E,b=(E=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return E(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=(0,o.C)().withBaseUrl,_=e.children,N=e.frontMatter,Z=e.assets,P=e.metadata,T=e.truncated,w=e.isBlogPostPage,y=void 0!==w&&w,I=P.date,L=P.formattedDate,C=P.permalink,R=P.tags,M=P.readingTime,A=P.title,D=P.editUrl,U=P.authors,x=null!=(t=Z.image)?t:N.image,B=!y&&T,F=R.length>0,O=y?"h1":"h2";return r.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(O,{className:g,itemProp:"headline"},y?A:r.createElement(m.Z,{itemProp:"url",to:C},A)),r.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:I,itemProp:"datePublished"},L),void 0!==M&&r.createElement(r.Fragment,null," \xb7 ",b(M))),r.createElement(k,{authors:U,assets:Z})),x&&r.createElement("meta",{itemProp:"image",content:f(x,{absolute:!0})}),r.createElement("div",{id:y?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:u.Z},_)),(F||T)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[h]=y,a))},F&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":B})},r.createElement(v.Z,{tags:R})),y&&D&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(d.Z,{editUrl:D})),B&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":F})},r.createElement(m.Z,{to:P.permalink,"aria-label":(0,i.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:A})},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6753:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),n=a(5999),l=a(7462),i=a(3366),m=a(6010),o="iconEdit_dcUD",s=["className"];function c(e){var t=e.className,a=(0,i.Z)(e,s);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(o,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var u=a(3725);function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},r.createElement(c,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),n=a(9960);function l(e){var t=e.permalink,a=e.title,l=e.subLabel;return r.createElement(n.Z,{className:"pagination-nav__link",to:t},l&&r.createElement("div",{className:"pagination-nav__sublabel"},l),r.createElement("div",{className:"pagination-nav__label"},a))}},7774:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(6010),l=a(9960),i="tag_hD8n",m="tagRegular_D6E_",o="tagWithCount_i0QQ";function s(e){var t,a=e.permalink,s=e.name,c=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(i,(t={},t[m]=!c,t[o]=c,t))},s,c&&r.createElement("span",null,c))}},62:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(6010),l=a(5999),i=a(7774),m="tags_XVD_",o="tag_JSN8";function s(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(m,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:o},r.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);
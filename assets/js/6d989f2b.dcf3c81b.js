"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[726],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5747:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(4137)),r=["components"],s={id:"customization",title:"Customization"},l=void 0,c={unversionedId:"acars/customization",id:"acars/customization",title:"Customization",description:"Logo Images",source:"@site/docs/acars/customization.mdx",sourceDirName:"acars",slug:"/acars/customization",permalink:"/acars/customization",editUrl:"https://github.com/phpvms/docs/tree/master/docs/acars/customization.mdx",tags:[],version:"current",frontMatter:{id:"customization",title:"Customization"},sidebar:"docs",previous:{title:"User Guide",permalink:"/acars/user-guide"},next:{title:"Config Maps",permalink:"/acars/configmaps"}},p={},d=[{value:"Logo Images",id:"logo-images",level:2},{value:"Discord Rich Presence",id:"discord-rich-presence",level:2},{value:"1. Create the Application",id:"1-create-the-application",level:3},{value:"2. Add your logos to the art assets",id:"2-add-your-logos-to-the-art-assets",level:3},{value:"3. Set the application ID",id:"3-set-the-application-id",level:3}],u={toc:d};function m(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"logo-images"},"Logo Images"),(0,o.kt)("p",null,"You can add your logo to the splash screen and the dashboard. They will be resized down to fit. Fill in the URLs to your logos. They should be PNG format (transparency is supported):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Splash Screen Banner")," ",(0,o.kt)("em",{parentName:"li"},"Premium License Required")," - This replaces the large phpVMS splash screen. 500x375 recommended for best look, anything larger will be scaled down to the size."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Splash Screen Logo")," - This adds a small logo to the bottom right of the splash screen. This can be combined with the splash screen banner. This will be sized to 150x150"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dashboard Logo")," - This places a logo onto the dashboard, to the right of the user profile. This will be sized to 300x64 max.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(5292).Z,width:"1322",height:"274"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"discord-rich-presence"},"Discord Rich Presence"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This requires the ACARS Premium Addon"))),(0,o.kt)("p",null,'To customize the "Rich Presence" dialog in Discord, you need to create a new Application in Discord. You\'ll then enter the provided ',(0,o.kt)("inlineCode",{parentName:"p"},"Application ID"),' into the admin panel. If you don\'t set this, the default "vmsACARS" application will be used.'),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(1062).Z,width:"594",height:"140"})),(0,o.kt)("h3",{id:"1-create-the-application"},"1. Create the Application"),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"Discord Application Developer site"),', and select "New Application". I suggest using your VA name, it will say something like "Playing (whatever you enter)" (or something like "VA Name ACARS")'),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Default Rich Presence",src:n(7315).Z,width:"1272",height:"483"})),(0,o.kt)("p",null,"Upload your logo and title it appropriately. ",(0,o.kt)("strong",{parentName:"p"},'Make note of the "Application ID" here, this will go into the admin panel.')," "),(0,o.kt)("h3",{id:"2-add-your-logos-to-the-art-assets"},"2. Add your logos to the art assets"),(0,o.kt)("p",null,'Next, go to "Rich Presence" and then "Art Assets". Add your cover image here, and add a new ',(0,o.kt)("strong",{parentName:"p"},"Rich Presence Asset")," titled ",(0,o.kt)("inlineCode",{parentName:"p"},"logo"),". This will be used in the mini box that shows up"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The logo asset added must be titled ",(0,o.kt)("inlineCode",{parentName:"p"},"logo")))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(420).Z,width:"1381",height:"730"})),(0,o.kt)("h3",{id:"3-set-the-application-id"},"3. Set the application ID"),(0,o.kt)("p",null,"Set the application ID in the admin panel."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(4152).Z,width:"1119",height:"103"})))}m.isMDXComponent=!0},4152:function(e,t,n){t.Z=n.p+"assets/images/discord-app-id-e4bb2c9e1180615c2eef39b5ca8bd616.png"},420:function(e,t,n){t.Z=n.p+"assets/images/discord-assets-99f3a63dc244000f752f35d8dfe558f7.png"},7315:function(e,t,n){t.Z=n.p+"assets/images/discord-new-app-f58ce80afb3ac103be37534f89ed67c4.png"},1062:function(e,t,n){t.Z=n.p+"assets/images/discord-1d7c114a4a9633c4fec8bc54e303d143.png"},5292:function(e,t,n){t.Z=n.p+"assets/images/logo-urls-edb8bcd21fce928753dbd6616ed98ca5.png"}}]);
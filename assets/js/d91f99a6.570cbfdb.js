(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[1295],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1056:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={id:"install-server",title:"Installation (Server)"},s={unversionedId:"acars/install-server",id:"acars/install-server",isDocsHomePage:!1,title:"Installation (Server)",description:"1. Module Installation",source:"@site/docs/acars/install-server.md",sourceDirName:"acars",slug:"/acars/install-server",permalink:"/acars/install-server",editUrl:"https://github.com/phpvms/docs/tree/master/docs/acars/install-server.md",version:"current",frontMatter:{id:"install-server",title:"Installation (Server)"},sidebar:"docs",previous:{title:'END-USER LICENSE AGREEMENT ("Agreement")',permalink:"/acars/eula"},next:{title:"Installation (Client)",permalink:"/acars/install-client"}},c=[{value:"1. Module Installation",id:"1-module-installation",children:[]},{value:"2. License Entry",id:"2-license-entry",children:[]}],p={toc:c};function u(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-module-installation"},"1. Module Installation"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The latest ",(0,o.kt)("a",{parentName:"p",href:"http://downloads.phpvms.net/phpvms-7.0.0-dev.tar.gz"},"dev")," versions of phpVMS are currently required"))),(0,o.kt)("p",null,"For the server-side installation, open the ",(0,o.kt)("inlineCode",{parentName:"p"},"Web/v7")," folder and copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"VMSAcars")," into your ",(0,o.kt)("inlineCode",{parentName:"p"},"phpvms/modules")," folder:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1225).Z})),(0,o.kt)("p",null,"Then go to your site's URL to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/update")," folder, and follow through the update. When there are updates (as notified in the ACARS Changelog), you will do the same thing - copy the module folder in and then run the ",(0,o.kt)("inlineCode",{parentName:"p"},"/update")," again."),(0,o.kt)("h2",{id:"2-license-entry"},"2. License Entry"),(0,o.kt)("p",null,"After installation, go to the admin panel, and enter your license key, from your ",(0,o.kt)("a",{parentName:"p",href:"https://vmshost.io"},"https://vmshost.io")," invoice/email:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2110).Z})))}u.isMDXComponent=!0},1225:function(e,t,n){"use strict";t.Z=n.p+"assets/images/copy_module_folder-7eaa03a7007f66c70f70ae1f3f32477b.png"},2110:function(e,t,n){"use strict";t.Z=n.p+"assets/images/module_config-126f5132dc244c948b30dea6be1bb82e.png"}}]);
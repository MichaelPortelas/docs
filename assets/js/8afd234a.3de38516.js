(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[6755],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},138:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=["components"],l={id:"files",title:"Config Files",sidebar_title:"Config Files"},p={unversionedId:"config/files",id:"config/files",isDocsHomePage:!1,title:"Config Files",description:"Admin Panel Settings",source:"@site/docs/config/files.md",sourceDirName:"config",slug:"/config/files",permalink:"/config/files",editUrl:"https://github.com/phpvms/docs/tree/master/docs/config/files.md",version:"current",frontMatter:{id:"files",title:"Config Files",sidebar_title:"Config Files"},sidebar:"docs",previous:{title:"Installation Issues",permalink:"/installation/issues"},next:{title:"Optimizing",permalink:"/config/optimizing"}},s=[{value:"Admin Panel Settings",id:"admin-panel-settings",children:[]},{value:"Configuration Files",id:"configuration-files",children:[{value:"Email",id:"email",children:[]},{value:"Recaptcha",id:"recaptcha",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"admin-panel-settings"},"Admin Panel Settings"),(0,a.kt)("p",null,"A lot of settings can be located in the phpVMS Admin panel, under settings."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration-files"},"Configuration Files"),(0,a.kt)("p",null,"Laravel has a lot of basic configuration in PHP files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/config")," directory. In order to not overwrite these on an update, there is a way to override these in a ",(0,a.kt)("inlineCode",{parentName:"p"},"env.php")," file in the root of your phpVMS install that is generated by the installer. This contains information  such as the database, mail, and select configs from the ",(0,a.kt)("inlineCode",{parentName:"p"},"/config")," directory. This file is used as an override (in the previous version of phpVMS, the ",(0,a.kt)("inlineCode",{parentName:"p"},"local.config.php")," file is the same concept)."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Don't change the files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/config")," directory; instead, edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"env.php")," file instead. These won't be overwritten on an update."))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/configuration#accessing-configuration-values"},"Laravel configuration files")," for additional documentation."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"email"},"Email"),(0,a.kt)("p",null,'I recommend using a 3rd party service for sending email. They usually offer SMTP support, and great logging and analytics. Especially on a shared host, where email is locked down, and a "naughty neighbor" can quickly get the server/IP you\'re emailing from blacklisted.'),(0,a.kt)("p",null,"The services I recommend and use:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.sparkpost.com"},"Sparkpost")," - Free up to 100k messages/month"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.mailgun.com"},"Mailgun")," - Free, up to 10k messages/month")),(0,a.kt)("p",null,"To configure email, in your ",(0,a.kt)("inlineCode",{parentName:"p"},"env.php")," file, you need to configure the following options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="env.php"',title:'"env.php"'},"MAIL_DRIVER=smtp\nMAIL_FROM_NAME='phpVMS No-Reply'\nMAIL_FROM_ADDRESS='no-reply@phpvms.net'\nMAIL_HOST=\nMAIL_PORT=\nMAIL_ENCRYPTION=\nMAIL_USERNAME=\nMAIL_PASSWORD=\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"recaptcha"},"Recaptcha"),(0,a.kt)("p",null,"Recaptcha can be enabled, get the keys ",(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/recaptcha/admin"},"here"),". Then add/change the following to your ",(0,a.kt)("inlineCode",{parentName:"p"},"env.php")," file. The section is there by default, just without the ",(0,a.kt)("inlineCode",{parentName:"p"},"sitekey")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"secret"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="env.php"',title:'"env.php"'},"CAPTCHA_ENABLED=true\nCAPTCHA_SITEKEY='YOUR SITE KEY'\nCAPTCHA_SECRET='YOUR SITE SECRET'\nCAPTCHA_DATATHEME='light'\n")))}u.isMDXComponent=!0}}]);
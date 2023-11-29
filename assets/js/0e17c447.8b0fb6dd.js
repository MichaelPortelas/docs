"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[810],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3535:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(4137));const i={id:"auth",title:"Authentication"},o=void 0,p={unversionedId:"api/auth",id:"api/auth",title:"Authentication",description:"Each user is given an API key (and can regenerate it) when they register. Requests to a phpVMS API will require an X-API-Key header, with this key. Addons can take advantage of this by adding the api.auth middleware to their route group.",source:"@site/docs/api/auth.mdx",sourceDirName:"api",slug:"/api/auth",permalink:"/api/auth",draft:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/api/auth.mdx",tags:[],version:"current",frontMatter:{id:"auth",title:"Authentication"},sidebar:"docs",previous:{title:"Overview",permalink:"/api/overview"},next:{title:"APIs",permalink:"/api/apis"}},c={},l=[{value:"Headers Example",id:"headers-example",level:2},{value:"Sample cURL Request",id:"sample-curl-request",level:4}],s={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Each user is given an API key (and can regenerate it) when they register. Requests to a phpVMS API will require an ",(0,a.kt)("inlineCode",{parentName:"p"},"X-API-Key")," header, with this key. Addons can take advantage of this by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"api.auth")," middleware to their route group."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"headers-example"},"Headers Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"X-API-Key: {user API key}\nContent-type: application/json\n")),(0,a.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$api_key = 'YOUR API KEY';\n$url = \"http://your-site.com/api/user\";\n$headers = [\n    'X-API-Key:' . $api_key,\n    'Content-type:application/json',\n];\n\n$ch = curl_init();\n\ncurl_setopt($ch,CURLOPT_URL,$url);\ncurl_setopt($ch,CURLOPT_RETURNTRANSFER,true);\ncurl_setopt($ch, CURLOPT_HTTPHEADER, $headers);\n\n$json_response = \\json_decode(curl_exec($ch));\ncurl_close($ch);\n\necho $json_response;\n")))}d.isMDXComponent=!0}}]);
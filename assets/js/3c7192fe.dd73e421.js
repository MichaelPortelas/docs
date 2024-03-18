"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[4919],{7441:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=t(4848),i=t(8453);const o={id:"maps",title:"Maps and Layouts"},r=void 0,a={id:"customize/maps",title:"Maps and Layouts",description:"Modification of the Leaflet maps used is possible by editing two templates:",source:"@site/docs/customize/maps.md",sourceDirName:"customize",slug:"/customize/maps",permalink:"/customize/maps",draft:!1,unlisted:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/customize/maps.md",tags:[],version:"current",frontMatter:{id:"maps",title:"Maps and Layouts"},sidebar:"docs",previous:{title:"Theming",permalink:"/customize/theming"},next:{title:"Environment Configuration",permalink:"/developers/environment"}},p={},d=[{value:"Base Map",id:"base-map",level:2},{value:"Providers",id:"providers",level:3}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Modification of the Leaflet maps used is possible by editing two templates:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"pireps/map.blade.php"})," - This is the map that is shown"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"widgets/live_map.blade.php"})," - This is the template for the live flights/ACARS map. This uses Rivets.js to do dynamic databinding to update the map"]}),"\n"]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"base-map",children:"Base Map"}),"\n",(0,n.jsx)(s.h3,{id:"providers",children:"Providers"}),"\n",(0,n.jsxs)(s.p,{children:["The providers uses the ",(0,n.jsx)(s.code,{children:"leafet-providers"})," library. You can use this ",(0,n.jsx)(s.a,{href:"https://leaflet-extras.github.io/leaflet-providers/preview/",children:"link"})," to see a preview of the available base map providers."]}),"\n",(0,n.jsxs)(s.p,{children:["You can modify the base map, like the type of map used, or passing in additional Leaflet options. To change the base map, you can pass in a ",(0,n.jsx)(s.code,{children:"providers"})," object to the ",(0,n.jsx)(s.code,{children:"leafletOptions"})," object:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"phpvms.map.render_live_map({\n  // ...\n    leafletOptions: {\n      scrollWheelZoom: false,\n      providers: {\n          // SET PROVIDERS HERE\n      }\n    }\n  // ...\n});\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Providers are in this format, where the options are used to populate the options for that provider (API keys, other default options as specified in the ",(0,n.jsx)(s.code,{children:"leaflet-providers"}),")"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"providers: {\n  provider-name: { \n    // options\n  }\n}\n"})}),"\n",(0,n.jsx)(s.p,{children:"For example, the default is:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"leafletOptions.providers = {\n  'Esri.WorldStreetMap': {},\n}\n"})})]})}function c(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>a});var n=t(6540);const i={},o=n.createContext(i);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);
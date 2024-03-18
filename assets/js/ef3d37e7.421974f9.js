"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[9329],{730:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=i(4848),n=i(8453);const o={id:"customization",title:"Customization"},r=void 0,c={id:"acars/customization",title:"Customization",description:"Logo Images",source:"@site/docs/acars/customization.md",sourceDirName:"acars",slug:"/acars/customization",permalink:"/acars/customization",draft:!1,unlisted:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/acars/customization.md",tags:[],version:"current",frontMatter:{id:"customization",title:"Customization"},sidebar:"docs",previous:{title:"User Guide",permalink:"/acars/user-guide"},next:{title:"Config Maps",permalink:"/acars/configmaps"}},a={},d=[{value:"Logo Images",id:"logo-images",level:2},{value:"Discord Rich Presence",id:"discord-rich-presence",level:2},{value:"1. Create the Application",id:"1-create-the-application",level:4},{value:"2. Add your logos to the art assets",id:"2-add-your-logos-to-the-art-assets",level:4},{value:"3. Set the application ID",id:"3-set-the-application-id",level:4},{value:"Custom Configs",id:"custom-configs",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"logo-images",children:"Logo Images"}),"\n",(0,t.jsx)(s.p,{children:"You can add your logo to the splash screen and the dashboard. They will be resized down to fit. Fill in the URLs to your logos. They should be PNG format (transparency is supported):"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Splash Screen Banner"})," ",(0,t.jsx)(s.em,{children:"Premium License Required"})," - This replaces the large phpVMS splash screen. 500x375 recommended for best look, anything larger will be scaled down to the size."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Splash Screen Logo"})," - This adds a small logo to the bottom right of the splash screen. This can be combined with the splash screen banner. This will be sized to 150x150"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Dashboard Logo"})," - This places a logo onto the dashboard, to the right of the user profile. This will be sized to 300x64 max."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Dashboard Logo Dark"})," - The logo to use for dark mode. If empty, it'll just use the Dashboard Logo"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:i(4932).A+"",width:"1322",height:"274"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"discord-rich-presence",children:"Discord Rich Presence"}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"This requires the ACARS Premium Addon"})}),"\n",(0,t.jsxs)(s.p,{children:['To customize the "Rich Presence" dialog in Discord, you need to create a new Application in Discord. You\'ll then enter the provided ',(0,t.jsx)(s.code,{children:"Application ID"}),' into the admin panel. If you don\'t set this, the default "vmsACARS" application will be used.']}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:i(9715).A+"",width:"594",height:"140"})}),"\n",(0,t.jsx)(s.h4,{id:"1-create-the-application",children:"1. Create the Application"}),"\n",(0,t.jsxs)(s.p,{children:["Visit ",(0,t.jsx)(s.a,{href:"https://discord.com/developers/applications",children:"Discord Application Developer site"}),', and select "New Application". I suggest using your VA name, it will say something like "Playing (whatever you enter)" (or something like "VA Name ACARS")']}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Default Rich Presence",src:i(1292).A+"",width:"1272",height:"483"})}),"\n",(0,t.jsxs)(s.p,{children:["Upload your logo and title it appropriately. ",(0,t.jsx)(s.strong,{children:'Make note of the "Application ID" here, this will go into the admin panel.'})]}),"\n",(0,t.jsx)(s.h4,{id:"2-add-your-logos-to-the-art-assets",children:"2. Add your logos to the art assets"}),"\n",(0,t.jsxs)(s.p,{children:['Next, go to "Rich Presence" and then "Art Assets". Add your cover image here, and add a new ',(0,t.jsx)(s.strong,{children:"Rich Presence Asset"})," titled ",(0,t.jsx)(s.code,{children:"logo"}),". This will be used in the mini box that shows up"]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["The logo asset added must be titled ",(0,t.jsx)(s.code,{children:"logo"})]})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:i(8337).A+"",width:"1381",height:"730"})}),"\n",(0,t.jsx)(s.h4,{id:"3-set-the-application-id",children:"3. Set the application ID"}),"\n",(0,t.jsx)(s.p,{children:"Set the application ID in the admin panel."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:i(1739).A+"",width:"1119",height:"103"})}),"\n",(0,t.jsx)(s.h2,{id:"custom-configs",children:"Custom Configs"}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"This requires the ACARS Premium Addon"})}),"\n",(0,t.jsx)(s.p,{children:"You can create a zip file and upload your custom configurations. The directory structure should match the following:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"/aircraft_custom/\n  /<Profile Name>/ \n    Place your configs here\n/rules_custom/\n  /<Profile Name>/\n    Place your custom rules here\n"})}),"\n",(0,t.jsxs)(s.p,{children:["This zip will get extracted into the ",(0,t.jsx)(s.code,{children:"configs"})," directory. The ",(0,t.jsx)(s.strong,{children:"profile name"})," can be found by seeing what your profile is - for example, open the json file for your VA in the ",(0,t.jsx)(s.code,{children:"config/profiles"})," folder, and find the ",(0,t.jsx)(s.code,{children:"Name"})," value:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'{\n  "Name": "phpvms.net",\n  "Url": "https://demo.phpvms.net",\n  "Domain": "phpvms.net",\n  ...\n}\n'})})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1739:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/discord-app-id-e4bb2c9e1180615c2eef39b5ca8bd616.png"},8337:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/discord-assets-99f3a63dc244000f752f35d8dfe558f7.png"},1292:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/discord-new-app-f58ce80afb3ac103be37534f89ed67c4.png"},9715:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/discord-1d7c114a4a9633c4fec8bc54e303d143.png"},4932:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/logo-urls-edb8bcd21fce928753dbd6616ed98ca5.png"},8453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>c});var t=i(6540);const n={},o=t.createContext(n);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);
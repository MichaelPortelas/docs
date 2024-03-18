"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[6802],{650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var i=t(4848),s=t(8453);const r={id:"requirements",title:"Requirements"},o=void 0,l={id:"requirements",title:"Requirements",description:"Server Requirements",source:"@site/docs/requirements.md",sourceDirName:".",slug:"/requirements",permalink:"/requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/requirements.md",tags:[],version:"current",frontMatter:{id:"requirements",title:"Requirements"},sidebar:"docs",previous:{title:"Introduction",permalink:"/"},next:{title:"Download",permalink:"/download"}},d={},h=[{value:"Server Requirements",id:"server-requirements",level:2},{value:"Optional",id:"optional",level:5},{value:"Shared Hosting",id:"shared-hosting",level:3},{value:"VPS/Dedicated Hosts",id:"vpsdedicated-hosts",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h5:"h5",hr:"hr",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"server-requirements",children:"Server Requirements"}),"\n",(0,i.jsx)(n.p,{children:"One of the first steps in the installer is to check your server for the proper requirements."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["PHP 8.1+; extensions required (most of these are installed by default):","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"cURL"}),"\n",(0,i.jsx)(n.li,{children:"JSON"}),"\n",(0,i.jsx)(n.li,{children:"fileinfo"}),"\n",(0,i.jsx)(n.li,{children:"mbstring"}),"\n",(0,i.jsx)(n.li,{children:"openssl"}),"\n",(0,i.jsx)(n.li,{children:"pdo"}),"\n",(0,i.jsx)(n.li,{children:"tokenizer"}),"\n",(0,i.jsx)(n.li,{children:"bcmath"}),"\n",(0,i.jsx)(n.li,{children:"intl"}),"\n",(0,i.jsx)(n.li,{children:"zip"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Database:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MySQL 5.7+ (or MySQL variant, including MariaDB and Percona)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"optional",children:"Optional"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://php.net/manual/en/book.apc.php",children:"php-apc"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://redis.io",children:"Redis"})," (for job queuing, various caching and optimizations)"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"shared-hosting",children:"Shared Hosting"}),"\n",(0,i.jsx)(n.p,{children:"While shared hosts are not ideal for numerous reasons (don't use free hosts, you'll have\na really bad time), it's still possible to run phpVMS. Read the"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"vpsdedicated-hosts",children:"VPS/Dedicated Hosts"}),"\n",(0,i.jsxs)(n.p,{children:["If you have control over your server, the combination of nginx/php-fpm will offer you\nthe best performance, over using Apache. It's the combination that I test with.\nIt will also be much more secure, seeing that only the ",(0,i.jsx)(n.code,{children:"/public"})," directory is exposed."]}),"\n",(0,i.jsxs)(n.p,{children:["Pointing the vhost to the ",(0,i.jsx)(n.code,{children:"/public"})," directory is the best way to run on a host that you\ncontrol."]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
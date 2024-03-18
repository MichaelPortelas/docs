"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[5492],{9768:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=s(4848),o=s(8453);const i={id:"environment",title:"Environment Configuration"},r="Development Configuration",a={id:"developers/environment",title:"Environment Configuration",description:"This is for running a local configuration, for running unit-tests, etc.",source:"@site/docs/developers/environment.md",sourceDirName:"developers",slug:"/developers/environment",permalink:"/developers/environment",draft:!1,unlisted:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/developers/environment.md",tags:[],version:"current",frontMatter:{id:"environment",title:"Environment Configuration"},sidebar:"docs",previous:{title:"Maps and Layouts",permalink:"/customize/maps"},next:{title:"Building Assets",permalink:"/developers/building-assets"}},l={},d=[{value:"Creating and Resetting the Environment",id:"creating-and-resetting-the-environment",level:3},{value:"Resetting the Environment",id:"resetting-the-environment",level:4},{value:"Updating",id:"updating",level:2},{value:"Composer Access",id:"composer-access",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"development-configuration",children:"Development Configuration"}),"\n",(0,t.jsx)(n.p,{children:"This is for running a local configuration, for running unit-tests, etc."}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"This is just how I work on phpVMS, to quickly reset the database and test/develop items locally, without having to transfer files anywhere. I mainly use the Docker Compose setup"}),(0,t.jsxs)(n.p,{children:["If you're on Windows, I highly recommend installing WSL with your distro of choice (I use Ubuntu). If you don't have ",(0,t.jsx)(n.code,{children:"make"})," available, open the ",(0,t.jsx)(n.code,{children:"Makefile"})," and look for the commands to run for the individual commands of what you're trying to run."]})]}),"\n",(0,t.jsx)(n.h3,{id:"creating-and-resetting-the-environment",children:"Creating and Resetting the Environment"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"This requires sqlite to be installed on your system"})}),"\n",(0,t.jsx)(n.p,{children:"To quickly setup a running install, you can do this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/nabeelio/phpvms.git phpvms\ncd phpvms\ncomposer update\nphp artisan phpvms:dev-install\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"phpvms:dev-install"})," command creates the two config files: ",(0,t.jsx)(n.code,{children:"config.php"})," and ",(0,t.jsx)(n.code,{children:".env"}),". It will then run the migrations, and install the sample seed data, which is located in ",(0,t.jsx)(n.code,{children:"app/Database/seeds/sample.yml"})]}),"\n",(0,t.jsx)(n.p,{children:"Then to reset the database and reinstall the dev data:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"php artisan phpvms:dev-install --reset-db\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This does require sqlite. If you want to use MySQL, you need to run the phpVMS installer, so it can generate the config files for MySQL (or you can modify the generated ",(0,t.jsx)(n.code,{children:"config.php"}),"), then you can run the above command to reset the database and migrations in MySQL."]}),"\n",(0,t.jsx)(n.h4,{id:"resetting-the-environment",children:"Resetting the Environment"}),"\n",(0,t.jsx)(n.p,{children:"To reset the database/clear cache, use this command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"make reload-db\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can run the ",(0,t.jsx)(n.code,{children:"reload-db"})," command as much as you want. If you log in using the default login (",(0,t.jsx)(n.a,{href:"mailto:admin@phpvms.net",children:"admin@phpvms.net"}),"), this won't log you out, it'll just reload the database with all the sample data (from app/Database/seeds/sample.yml)"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"updating",children:"Updating"}),"\n",(0,t.jsx)(n.p,{children:"extract files and run the migrations:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"php artisan migrate\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"composer-access",children:"Composer Access"}),"\n",(0,t.jsxs)(n.p,{children:["By default, the Makefile calls the system-wide ",(0,t.jsx)(n.code,{children:"composer"}),". If your host requires a certain path or name for composer, add ",(0,t.jsx)(n.code,{children:"COMPOSER="})," to the front of the ",(0,t.jsx)(n.code,{children:"make"})," command, e.g:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"COMPOSER=composer.phar make install\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,t.jsx)(n.p,{children:"A full development environment can be brought up using Docker, without having to install composer/npm locally"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"make docker-test\n\n# **OR** with docker-compose directly\n\ndocker-compose -f docker-compose.yml -f docker-compose.local.yml up\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then go to ",(0,t.jsx)(n.code,{children:"http://localhost"}),". If you're using dnsmasq, the ",(0,t.jsx)(n.code,{children:"app"})," container is listening on ",(0,t.jsx)(n.code,{children:"phpvms.test"}),", or you can add to your ",(0,t.jsx)(n.code,{children:"/etc/hosts"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"127.0.0.1   phpvms.test\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then visit your site at ",(0,t.jsx)(n.code,{children:"http://phpvms.test"}),". This is what I (Nabeel) use for my day-to-day development"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"laravel-valet",children:"Laravel Valet"}),"\n",(0,t.jsxs)(n.p,{children:["If you don't want to use ",(0,t.jsx)(n.code,{children:"docker-compose"}),", easiest way to load locally is to install ",(0,t.jsx)(n.a,{href:"https://laravel.com/docs/5.5/valet",children:"Laravel Valet"})," (if you're running a Mac). Follow the instructions to install; you install it, go to your phpvms directory, and run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"valet link phpvms\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now going to ",(0,t.jsx)(n.code,{children:"http://phpvms.test"})," should work. If you want to use mysql, follow the valet directions on installing mysql (",(0,t.jsx)(n.code,{children:"brew install mysql"}),") and then update the ",(0,t.jsx)(n.code,{children:".env"})," file to point to the mysql."]}),"\n",(0,t.jsxs)(n.p,{children:["The default username and password are ",(0,t.jsx)(n.code,{children:"admin@phpvms.net"})," and ",(0,t.jsx)(n.code,{children:"admin"}),". To see the available users in the development environment, ",(0,t.jsx)(n.a,{href:"https://github.com/nabeelio/phpvms/blob/master/app/Database/seeds/sample.yml#L11",children:"see this file"})]}),"\n",(0,t.jsxs)(n.p,{children:["There is no reason you can't use ",(0,t.jsx)(n.a,{href:"https://www.mamp.info/en",children:"MAMP"})," or ",(0,t.jsx)(n.a,{href:"https://www.apachefriends.org",children:"XAMPP"}),", or if you're feeling fancy, using Docker or configuring any webservers yourself."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
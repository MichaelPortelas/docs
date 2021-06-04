(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[3159],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2968:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=["components"],l={id:"environment",title:"Environment Configuration"},s={unversionedId:"developers/environment",id:"developers/environment",isDocsHomePage:!1,title:"Environment Configuration",description:"Docker Compose",source:"@site/docs/developers/environment.md",sourceDirName:"developers",slug:"/developers/environment",permalink:"/developers/environment",editUrl:"https://github.com/phpvms/docs/tree/master/docs/developers/environment.md",version:"current",frontMatter:{id:"environment",title:"Environment Configuration"},sidebar:"docs",previous:{title:"Maps and Layouts",permalink:"/customize/maps"},next:{title:"Building Assets",permalink:"/developers/building-assets"}},p=[{value:"Docker Compose",id:"docker-compose",children:[]},{value:"Laravel Valet",id:"laravel-valet",children:[]},{value:"Development Configuration",id:"development-configuration",children:[{value:"Creating and Resetting the Environment",id:"creating-and-resetting-the-environment",children:[]}]},{value:"Updating",id:"updating",children:[]},{value:"Composer Access",id:"composer-access",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,r.kt)("p",null,"A full development environment can be brought up using Docker, without having to install composer/npm locally"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make docker-test\n\n# **OR** with docker-compose directly\n\ndocker-compose -f docker-compose.yml -f docker-compose.local.yml up\n")),(0,r.kt)("p",null,"Then go to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost"),". If you're using dnsmasq, the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," container is listening on ",(0,r.kt)("inlineCode",{parentName:"p"},"phpvms.test"),", or you can add to your ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"127.0.0.1   phpvms.test\n")),(0,r.kt)("p",null,"Then visit your site at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost"),". This is what I (Nabeel) use for my day-to-day development"),(0,r.kt)("h2",{id:"laravel-valet"},"Laravel Valet"),(0,r.kt)("p",null,"If you don't want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose"),", easiest way to load locally is to install ",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/5.5/valet"},"Laravel Valet")," (if you're running a Mac). Follow the instructions to install; you install it, go to your phpvms directory, and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"valet link phpvms\n")),(0,r.kt)("p",null,"Now going to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://phpvms.test")," should work. If you want to use mysql, follow the valet directions on installing mysql (",(0,r.kt)("inlineCode",{parentName:"p"},"brew install mysql"),") and then update the ",(0,r.kt)("inlineCode",{parentName:"p"},"env.php")," file to point to the mysql."),(0,r.kt)("p",null,"The default username and password are ",(0,r.kt)("inlineCode",{parentName:"p"},"admin@phpvms.net")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"admin"),". To see the available users in the development environment, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nabeelio/phpvms/blob/master/app/Database/seeds/sample.yml#L11"},"see this file")," "),(0,r.kt)("p",null,"There is no reason you can't use ",(0,r.kt)("a",{parentName:"p",href:"https://www.mamp.info/en"},"MAMP")," or ",(0,r.kt)("a",{parentName:"p",href:"https://www.apachefriends.org"},"XAMPP"),", or if you're feeling fancy, using Docker or configuring any webservers yourself."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"development-configuration"},"Development Configuration"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is just how I work on phpVMS, to quickly reset the database and test/develop items locally, without having to transfer files anywhere."),(0,r.kt)("p",{parentName:"div"},"If you're on Windows, I highly recommend installing WSL with your distro of choice (I use Ubuntu). If you don't have ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," available, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"Makefile")," and look for the commands to run for the individual commands of what you're trying to run."))),(0,r.kt)("h3",{id:"creating-and-resetting-the-environment"},"Creating and Resetting the Environment"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This requires sqlite to be installed on your system"))),(0,r.kt)("p",null,"To quickly setup a running install, you can do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/nabeelio/phpvms.git phpvms\ncd phpvms\ncomposer update\nphp artisan phpvms:dev-install\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"phpvms:dev-install")," command creates the two config files: ",(0,r.kt)("inlineCode",{parentName:"p"},"config.php")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"env.php"),". It will then run the migrations, and install the sample seed data, which is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Database/seeds/sample.yml")),(0,r.kt)("p",null,"Then to reset the database and reinstall the dev data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan phpvms:dev-install --reset-db\n")),(0,r.kt)("p",null,"This does require sqlite. If you want to use MySQL, you need to run the phpVMS installer, so it can generate the config files for MySQL (or you can modify the generated ",(0,r.kt)("inlineCode",{parentName:"p"},"config.php"),"), then you can run the above command to reset the database and migrations in MySQL."),(0,r.kt)("h4",{id:"resetting-the-environment"},"Resetting the Environment"),(0,r.kt)("p",null,"To reset the database/clear cache, use this command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make reload-db\n")),(0,r.kt)("p",null,"You can run the ",(0,r.kt)("inlineCode",{parentName:"p"},"reload-db")," command as much as you want. If you log in using the default login (",(0,r.kt)("a",{parentName:"p",href:"mailto:admin@phpvms.net"},"admin@phpvms.net"),"), this won't log you out, it'll just reload the database with all the sample data (from app/Database/seeds/sample.yml)"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"updating"},"Updating"),(0,r.kt)("p",null,"extract files and run the migrations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan migrate\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"composer-access"},"Composer Access"),(0,r.kt)("p",null,"By default, the Makefile calls the system-wide ",(0,r.kt)("inlineCode",{parentName:"p"},"composer"),". If your host requires a certain path or name for composer, add ",(0,r.kt)("inlineCode",{parentName:"p"},"COMPOSER=")," to the front of the ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," command, e.g:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"COMPOSER=composer.phar make install\n")))}d.isMDXComponent=!0}}]);
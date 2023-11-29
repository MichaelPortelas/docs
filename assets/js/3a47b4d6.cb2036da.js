"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[1608],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=m(n),c=i,d=h["".concat(s,".").concat(c)]||h[c]||u[c]||r;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(7462),i=(n(7294),n(4137));const r={id:"theming",title:"Theming"},o=void 0,l={unversionedId:"customize/theming",id:"customize/theming",title:"Theming",description:"The custom theme system is using laravel-theme, which allows for great flexibility for creating themes, and extending existing ones, or only modifying the templates that you want to change.",source:"@site/docs/customize/theming.mdx",sourceDirName:"customize",slug:"/customize/theming",permalink:"/customize/theming",draft:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/customize/theming.mdx",tags:[],version:"current",frontMatter:{id:"theming",title:"Theming"},sidebar:"docs",previous:{title:"Layouts and Template Basics",permalink:"/customize/layouts"},next:{title:"Maps and Layouts",permalink:"/customize/maps"}},s={},m=[{value:"Creating a theme",id:"creating-a-theme",level:2},{value:"The Quick Way",id:"the-quick-way",level:3},{value:"New Theme from Scratch",id:"new-theme-from-scratch",level:3},{value:"Creating/copying an existing theme",id:"creatingcopying-an-existing-theme",level:4},{value:"Assets in the public folder",id:"assets-in-the-public-folder",level:4},{value:"Packaging a theme to distribute",id:"packaging-a-theme-to-distribute",level:2},{value:"More resources for themes",id:"more-resources-for-themes",level:2}],p={toc:m},h="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The custom theme system is using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/igaster/laravel-theme"},"laravel-theme"),", which allows for great flexibility for creating themes, and extending existing ones, or only modifying the templates that you want to change."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"creating-a-theme"},"Creating a theme"),(0,i.kt)("p",null,"To create a new theme, you can either copy and existing one, or use the command line artisan command to generate one fresh."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"the-quick-way"},"The Quick Way"),(0,i.kt)("p",null,"The quick way to create a new theme is to just copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," theme to a new folder, and edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"theme.json")," file:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy the ",(0,i.kt)("inlineCode",{parentName:"li"},"resources/views/layouts/default")," into a new folder, e.g, ",(0,i.kt)("inlineCode",{parentName:"li"},"resources/views/layouts/mytheme")),(0,i.kt)("li",{parentName:"ol"},"Edit the ",(0,i.kt)("inlineCode",{parentName:"li"},"resources/views/layouts/mytheme/theme.json")," file, and update the ",(0,i.kt)("inlineCode",{parentName:"li"},"name"))),(0,i.kt)("p",null,"If you want to edit only select templates (also recommended), set the ",(0,i.kt)("inlineCode",{parentName:"p"},"extends")," value to ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),". Then you only need to copy over the templates that you modify, instead of all them (this makes it easier to update phpVMS, and you also know what you've modified)."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"new-theme-from-scratch"},"New Theme from Scratch"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"theme:create")," command to bootstrap these steps")),(0,i.kt)("p",null,"Into the root of the ",(0,i.kt)("inlineCode",{parentName:"p"},"resources/views/layouts/")," path, create a new folder, with a ",(0,i.kt)("inlineCode",{parentName:"p"},"theme.json")," file. This JSON file serves as the manifest for your theme"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name"        : "THEME_NAME",\n  "asset-path"  : "ASSET_PATH",\n  "extends"     : "PARENT_THEME"\n}\n')),(0,i.kt)("p",null,"After doing this, copy the files from ",(0,i.kt)("inlineCode",{parentName:"p"},"resources/views/layouts/default")," into the new theme folder. "),(0,i.kt)("h4",{id:"creatingcopying-an-existing-theme"},"Creating/copying an existing theme"),(0,i.kt)("p",null,"Important notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"THEME_NAME")," (REQUIRED) is the name of your theme. Can be any string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ASSET_PATH")," (optional) is relative to public path. You should create this folder too!"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"PARENT_THEME")," (optional) is the name of the parent theme. Set it to ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," if this is a stand-alone theme. If you want to extend an existing theme, place that name there. You can extend the default template and change only the templates you want, by recreating the same structure for the template you want to override."),(0,i.kt)("li",{parentName:"ul"},"You can add any additional configuration into the json file. You may access to your own settings with ",(0,i.kt)("inlineCode",{parentName:"li"},"Theme:getSetting('key')")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"Theme:setSetting('key','value')")," at runtime.")),(0,i.kt)("h4",{id:"assets-in-the-public-folder"},"Assets in the public folder"),(0,i.kt)("p",null,"While ",(0,i.kt)("inlineCode",{parentName:"p"},"laravel-theme")," has a helper for the ",(0,i.kt)("inlineCode",{parentName:"p"},"theme_url"),", in phpVMS, you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"public_asset()")," helper function. Since phpVMS can run on both shared and on its own, the public folder path could be different. The ",(0,i.kt)("inlineCode",{parentName:"p"},"public_asset()")," method takes care of that."),(0,i.kt)("p",null,"It's recommended you create a new folder for your theme, under ",(0,i.kt)("inlineCode",{parentName:"p"},"public/assets")," (or, ",(0,i.kt)("inlineCode",{parentName:"p"},"public_html/assets"),", depending on how you uploaded your files), and then referring to those assets like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"echo public_asset('assets/my-theme/img/someimage.png');\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"packaging-a-theme-to-distribute"},"Packaging a theme to distribute"),(0,i.kt)("p",null,"To distribute a theme, on the command line run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan theme:package <theme name>\n")),(0,i.kt)("p",null,"This will create a distributable theme package in the ",(0,i.kt)("inlineCode",{parentName:"p"},"storage/themes")," path, which can then be distributed."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"more-resources-for-themes"},"More resources for themes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The documentation for ",(0,i.kt)("inlineCode",{parentName:"li"},"laravel-theme")," is great for more detailed tricks: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/igaster/laravel-theme/wiki/5.-Setting-the-active-theme"},"see the documentation here"))))}u.isMDXComponent=!0}}]);
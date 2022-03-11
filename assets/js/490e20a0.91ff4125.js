"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[3024],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,f=h["".concat(p,".").concat(d)]||h[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6840:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],l={id:"help",title:"Getting Help"},p=void 0,u={unversionedId:"help",id:"help",title:"Getting Help",description:"This guide details the requirements for getting help with phpVMS or vmsACARS.",source:"@site/docs/help.mdx",sourceDirName:".",slug:"/help",permalink:"/help",editUrl:"https://github.com/phpvms/docs/tree/master/docs/help.mdx",tags:[],version:"current",frontMatter:{id:"help",title:"Getting Help"},sidebar:"docs",previous:{title:"Config Maps",permalink:"/acars/configmaps"}},s={},m=[{value:"How to ask for help",id:"how-to-ask-for-help",level:2},{value:"Where to get help",id:"where-to-get-help",level:2},{value:"Forums",id:"forums",level:3},{value:"Discord",id:"discord",level:3},{value:"Github",id:"github",level:3},{value:"Information Required",id:"information-required",level:2},{value:"Logs",id:"logs",level:3},{value:"Enable Debug and Debugging",id:"enable-debug-and-debugging",level:2},{value:"Exporting Data for Troubleshooting",id:"exporting-data-for-troubleshooting",level:4},{value:"vmsACARS",id:"vmsacars",level:2}],h={toc:m};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide details the requirements for getting help with phpVMS or vmsACARS."),(0,o.kt)("h2",{id:"how-to-ask-for-help"},"How to ask for help"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Before asking for help, try to reproduce on the ",(0,o.kt)("a",{parentName:"p",href:"https://demo.phpvms.net"},"demo site"),", and with the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," skin"))),(0,o.kt)("p",null,"Without a lot of this information, it will be difficult to provide help."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"where-to-get-help"},"Where to get help"),(0,o.kt)("h3",{id:"forums"},"Forums"),(0,o.kt)("p",null,"The forums are located at ",(0,o.kt)("a",{parentName:"p",href:"https://forum.phpvms.net"},"https://forum.phpvms.net"),". Search in the forums and on Github first for your issue before asking. For 3rd party addons, be sure to post in your own"),(0,o.kt)("h3",{id:"discord"},"Discord"),(0,o.kt)("p",null,"There's also a Discord channel for quick questions. ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/wvAmMnd"},"Invite Code Here")),(0,o.kt)("h3",{id:"github"},"Github"),(0,o.kt)("p",null,"The bug tracker is located on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nabeelio/phpvms/issues"},"Github"),'. To post an issue, you need a Github account, and then select "New Issue". After that, select "Bug Report". There is a small template there that you can use, but try to include as much of the information below:'),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"information-required"},"Information Required"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A clear description of the issue",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"What page stuff happened on"),(0,o.kt)("li",{parentName:"ul"},"Relevent data"))),(0,o.kt)("li",{parentName:"ul"},"Versions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PHP Version")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Database versions")," - MySQL, MariaDB or Percona, or whatever other backend your running"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"phpVMS Version"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"From either the admin panel (bottom left, click on the version for the full version) "),(0,o.kt)("li",{parentName:"ul"},"Running ",(0,o.kt)("inlineCode",{parentName:"li"},"php artisan phpvms:version"),(0,o.kt)("img",{loading:"lazy",src:n(5886).Z,width:"389",height:"143"})))))),(0,o.kt)("li",{parentName:"ul"},"How to reproduce the error ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Include as much detail as possible"),(0,o.kt)("li",{parentName:"ul"},'Include any relevent data - for example, an error with expenses, include how the expenses are configured. See "Exporting Data" below.'))),(0,o.kt)("li",{parentName:"ul"},"Screenshots"),(0,o.kt)("li",{parentName:"ul"},"Type of hosting - shared, VPS, dedicated, etc")),(0,o.kt)("h3",{id:"logs"},"Logs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Laravel logs"),": These are located in ",(0,o.kt)("inlineCode",{parentName:"li"},"storage/logs"),", you must include these. Look through the logs to also ensure that no sensitive information is included inadvertantly"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PHP logs"),": These can be found wherever your PHP error logs are kept, for example, the PHP-FPM logs. Ask your host, if you don't know. They're often found in cPanel, under Error Logs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"HTTP logs"),": These are, for example, your Apache logs. These might be required, depending on the issue. If you're not sure how to get them, ask your host. They're often found in cPanel, under Error Logs."),(0,o.kt)("li",{parentName:"ul"},"Exported data data - see below"),(0,o.kt)("li",{parentName:"ul"},"Any and all other relevent details")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"enable-debug-and-debugging"},"Enable Debug and Debugging"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Look at the logs - they're located in ",(0,o.kt)("inlineCode",{parentName:"li"},"storage/logs")),(0,o.kt)("li",{parentName:"ul"},"Enable debug logging and the Laravel Debug Toolbar, open your ",(0,o.kt)("inlineCode",{parentName:"li"},"env.php"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"APP_DEBUG")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DEBUG_TOOLBAR")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," (if you want the debug toolbar)")))),(0,o.kt)("h4",{id:"exporting-data-for-troubleshooting"},"Exporting Data for Troubleshooting"),(0,o.kt)("p",null,"Sometimes, additional data for troubleshooting is required. To export that data more easily, you can use the artisan YAML exporter, listing the tables to export:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /path/to/phpvms\nphp artisan phpvms:yaml-exporter table1 table2\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"vmsacars"},"vmsACARS"),(0,o.kt)("p",null,"Before asking for help, make sure to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rescan your scenery"),(0,o.kt)("li",{parentName:"ul"},"If crashing, delete the ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," folder, and restart")),(0,o.kt)("p",null,"When asking for help:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Log files (these are in the ",(0,o.kt)("inlineCode",{parentName:"li"},"logs")," folder - zipping and sending the whole folder is best)"),(0,o.kt)("li",{parentName:"ul"},"Other relevent files, e.g, flight plans"),(0,o.kt)("li",{parentName:"ul"},"System setup:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sim you're using"),(0,o.kt)("li",{parentName:"ul"},"Any flight sim hardware running/additional software (some of this has been seen to interfere)")))))}d.isMDXComponent=!0},5886:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAACPCAYAAAAVz8eaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABtXSURBVHhe7d0LfBXVnQfwf0KICY8YIm8hhDeiICoqxRetWqG1Clrb+tiqrUprP65trYJvWbWAj9UtSy3W6taPrqxVTK1F2q0tVYphRUB5JIEkJAFDwiMEyIuQ5O78zj1ncjLMTW5CoHOT39fPOK9z587czPz/55wZ7o0LOYSIOq2CggJJSeun54haFq/HRERETApERNSESYGIiFxMCkRE5GJSICIiF5MCERG5mBSIiMjFpEBERC4mBSIicjEpEBGRi0mBiIhcTApERORiUiAiIheTAhERuZgUiIjIxaRAREQuJgUiInIxKRARkYtJgYiIXEwKRETkClxSwI+M33nnnbJ//369xN8777wjzz33nJ4jIqKOwJYCERG5mBSOs8bGRmloaNBzRETBxqRwnO3bt09efvllqaio0EuIiILruCSFmpoaefXVV+XKK6+UCRMmyAUXXCBPPfXUUYER8wsXLpTJkye7ZfzuJWzZskVuu+02tS1s891335X6+nq9tklOTo7cfffdctZZZ7nbQ1A2cL/iiSeekF27dql1KIP3xj549w3vOXv2bLUtlLnvvvukpKREr41ev3795Nprr5W3336biYGIAq/Dk8KRI0fUDeCEhAR58803ZePGjfLBBx/IkCFDZNGiRVJXV6fK1dbWyrPPPit9+/aVVatWyUcffSTTp0+X3/zmN1JdXa3KwPbt22X+/Ply++23y2effSZvvfWW6o7Btm1r1qyRxx57TG655Rb59NNP1XuOGjVKHnroIdmzZ48uJXLgwAF58cUX5fLLL1fvuXLlSndfQ6GQKoP3fPrpp1VSwLawbZS///77Zffu3apMW6SlpcmsWbPkjTfekPLycr2UiCh4OjwpdO/eXR544AG54YYbpEePHmpZUlKSXH311XL48GFVS4dNmzapBHLjjTeq9fHx8TJx4kS544471HpAkEar4JprrpHzzz9flUHZmTNnqiBtVFZWqoCL90XN3pRDIL7ooovUk0om4Ofm5qrkY8r16tVLlUPyOnjwoCqDfcO+nH322apMt27d5LLLLlPbKi0tVWXaCu/Ts2dPJgUiCrQTdk8B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"}}]);
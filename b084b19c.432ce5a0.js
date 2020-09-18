(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{107:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,h=d["".concat(o,".").concat(u)]||d[u]||b[u]||r;return t?a.a.createElement(h,c(c({ref:n},p),{},{components:t})):a.a.createElement(h,c({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<r;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},57:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var i=t(2),a=t(7),r=(t(0),t(107)),o={id:"optimizing",title:"Optimizing",sidebar_title:"Optimizing"},c={unversionedId:"config/optimizing",id:"config/optimizing",isDocsHomePage:!1,title:"Optimizing",description:"These are just some basic optimizing. For additional optimization information, refer to the Laravel docs",source:"@site/docs/config/optimizing.md",slug:"/config/optimizing",permalink:"/config/optimizing",editUrl:"https://github.com/phpvms/docs/tree/master/docs/config/optimizing.md",version:"current",sidebar:"docs",previous:{title:"Config Files",permalink:"/config/files"},next:{title:"Layouts and Template Basics",permalink:"/customize/layouts"}},l=[{value:"PHP-APC",id:"php-apc",children:[]},{value:"Redis",id:"redis",children:[]},{value:"Environment/Debug Modes",id:"environmentdebug-modes",children:[{value:"Environment",id:"environment",children:[]},{value:"Debug Mode",id:"debug-mode",children:[]}]},{value:"Sessions",id:"sessions",children:[{value:"PHP APC",id:"php-apc-1",children:[]}]},{value:"Caching",id:"caching",children:[{value:"PHP APC",id:"php-apc-2",children:[]},{value:"Redis",id:"redis-1",children:[]}]},{value:"Queue Driver",id:"queue-driver",children:[{value:"Redis",id:"redis-2",children:[]}]}],p={rightToc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"These are just some basic optimizing. For additional optimization information, refer to the Laravel docs"),Object(r.b)("h3",{id:"php-apc"},"PHP-APC"),Object(r.b)("p",null,"Just installing the package is enough to make it available."),Object(r.b)("h3",{id:"redis"},"Redis"),Object(r.b)("p",null,"Installing Redis is one way to enable optimizations. After installing, add to the ",Object(r.b)("inlineCode",{parentName:"p"},"config.php")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-php"}),"  # Same config as in caching, but add to the existing `database` array in the `config.php` file:\n  'database' => [\n    'redis' => [\n        'default' => [\n            'host' => 'localhost',\n            'port' => 6379,\n            'database' => 1,\n        ],\n    ],\n  ],\n")),Object(r.b)("h2",{id:"environmentdebug-modes"},"Environment/Debug Modes"),Object(r.b)("p",null,"These can be changed in the ",Object(r.b)("inlineCode",{parentName:"p"},"env.php")," file"),Object(r.b)("h3",{id:"environment"},"Environment"),Object(r.b)("p",null,"When going live, this should be set to ",Object(r.b)("inlineCode",{parentName:"p"},"production"),". By default, it's ",Object(r.b)("inlineCode",{parentName:"p"},"dev"),". Change this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-php"}),"'app' => [\n    'env' => 'dev',\n],\n")),Object(r.b)("h3",{id:"debug-mode"},"Debug Mode"),Object(r.b)("p",null,"This adjusts the logging level, making it more verbose. The default value is ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", and should be set to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," when you're live/in-production."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-php"}),"'app' => [\n    'debug' => true,\n],\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"sessions"},"Sessions"),Object(r.b)("p",null,"Sessions store the logged in users and other information. By default, they're stored on disk."),Object(r.b)("h3",{id:"php-apc-1"},"PHP APC"),Object(r.b)("p",null,"Sessions can be saved in PHP."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-php"}),"  'session' => [\n    'default' => 'apc',\n  ],\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"caching"},"Caching"),Object(r.b)("h3",{id:"php-apc-2"},"PHP APC"),Object(r.b)("p",null,"This doesn't require any configuration on the server side, however, to enable it, add the following to your ",Object(r.b)("inlineCode",{parentName:"p"},"config.php")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-php"}),"  'cache' => [\n    'default' => 'apc',\n  ],\n")),Object(r.b)("h3",{id:"redis-1"},"Redis"),Object(r.b)("p",null,"Instead of using PHP APC, you can also use Redis for caching; adding to the ",Object(r.b)("inlineCode",{parentName:"p"},"config.php")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-php"}),"  'cache' => [\n    'default' => 'redis',\n  ],\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"queue-driver"},"Queue Driver"),Object(r.b)("p",null,"phpVMS uses asyncronous queues for several tasks, including sending emails and exporting to vaCentral. The default mode is ",Object(r.b)("inlineCode",{parentName:"p"},"sync"),", which means the tasks are done in-line. "),Object(r.b)("h3",{id:"redis-2"},"Redis"),Object(r.b)("p",null,"If you have Redis installed, you can add the following to the ",Object(r.b)("inlineCode",{parentName:"p"},"config.php")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-php"}),"  'queue' => [\n    'default' => 'redis',\n  ],\n  \n  # Same config as in caching, but add to the existing `database` array in the `config.php` file:\n  'database' => [\n    'redis' => [\n        'default' => [\n            'host' => 'localhost',\n            'port' => 6379,\n            'database' => 1,\n        ],\n    ],\n  ],\n")))}s.isMDXComponent=!0}}]);
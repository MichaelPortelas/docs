(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[3111],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return f},kt:function(){return p}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),u=c(r),p=i,d=u["".concat(s,".").concat(p)]||u[p]||h[p]||a;return r?n.createElement(d,l(l({ref:t},f),{},{components:r})):n.createElement(d,l({ref:t},f))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5618:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return h}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),l=["components"],o={id:"flight",title:"Flight Planning"},s={unversionedId:"acars/flight",id:"acars/flight",isDocsHomePage:!1,title:"Flight Planning",description:"Setting up your flight",source:"@site/docs/acars/flight.md",sourceDirName:"acars",slug:"/acars/flight",permalink:"/acars/flight",editUrl:"https://github.com/phpvms/docs/tree/master/docs/acars/flight.md",version:"current",frontMatter:{id:"flight",title:"Flight Planning"},sidebar:"docs",previous:{title:"Installation (Client)",permalink:"/acars/install-client"},next:{title:"Flight Phases",permalink:"/acars/phases"}},c=[{value:"Setting up your flight",id:"setting-up-your-flight",children:[{value:"Entering everything manually",id:"entering-everything-manually",children:[]},{value:"Flight Search or Bids",id:"flight-search-or-bids",children:[]},{value:"Flight Plans",id:"flight-plans",children:[]}]},{value:"Lights and Aircraft Features",id:"lights-and-aircraft-features",children:[]}],f={toc:c};function h(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"setting-up-your-flight"},"Setting up your flight"),(0,a.kt)("p",null,"There are several ways to configure flight:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enter everything manually"),(0,a.kt)("li",{parentName:"ol"},"Load a flight from the flight search")),(0,a.kt)("h3",{id:"entering-everything-manually"},"Entering everything manually"),(0,a.kt)("p",null,"This is simple, just type in everything for your flight, referring to your VA site."),(0,a.kt)("h3",{id:"flight-search-or-bids"},"Flight Search or Bids"),(0,a.kt)("p",null,'To load a flight from the search or bids, in the menu, select flight search. If your VA has search enabled, you can click search. If you click on "Bids", it will show your available bids.'),(0,a.kt)("p",null,'If there is a SimBrief flight plan also loaded with the bid from the site, it will show up as "Yes" in that column.'),(0,a.kt)("h3",{id:"flight-plans"},"Flight Plans"),(0,a.kt)("p",null,"In order for the route map to show all of your waypoints, you need to load a flight plan. vmsACARS does not have/contain any navigation information on its own, it's all loaded from a loaded flight plan. The follow flight plan types are supported:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"FSX/P3D (",(0,a.kt)("inlineCode",{parentName:"li"},".pln"),")"),(0,a.kt)("li",{parentName:"ol"},"X-Plane (",(0,a.kt)("inlineCode",{parentName:"li"},".fms"),") "),(0,a.kt)("li",{parentName:"ol"},"MSFS (",(0,a.kt)("inlineCode",{parentName:"li"},".pln"),") "),(0,a.kt)("li",{parentName:"ol"},"Simbrief (",(0,a.kt)("inlineCode",{parentName:"li"},".xml"),', exported from the SimBrief site or the SimBrief Downloader. There is a "phpVMS" flight plan type that\'s available)')),(0,a.kt)("p",null,"The routes/navpoints are then loaded from the flight plan, along with the TOD (from MSFS/Simbrief), and filed along with your PIREP."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"lights-and-aircraft-features"},"Lights and Aircraft Features"),(0,a.kt)("p",null,"Lights and other features for aircraft may not work on all aircraft, due to the way developers differently implement the on/off switches/flags for these (for example, PMDG implements their lights differently for each aircraft). There is a ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigMap.xml")," file that can be edited (make sure to create backups before updated - enhancements to this coming soon) which uses the aircraft name/title to determine which offsets (for FSUIPC) or data refs (X-Plane) are used to detect those features."))}h.isMDXComponent=!0}}]);
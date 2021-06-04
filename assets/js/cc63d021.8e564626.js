(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[5747],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),h=a,f=c["".concat(u,".").concat(h)]||c[h]||d[h]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3656:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l=["components"],o={id:"phases",title:"Flight Phases"},u={unversionedId:"acars/phases",id:"acars/phases",isDocsHomePage:!1,title:"Flight Phases",description:"Flight Phases",source:"@site/docs/acars/phases.md",sourceDirName:"acars",slug:"/acars/phases",permalink:"/acars/phases",editUrl:"https://github.com/phpvms/docs/tree/master/docs/acars/phases.md",version:"current",frontMatter:{id:"phases",title:"Flight Phases"},sidebar:"docs",previous:{title:"Flight Planning",permalink:"/acars/flight"},next:{title:"Config Maps",permalink:"/acars/configmaps"}},s=[{value:"Flight Phases",id:"flight-phases",children:[{value:"1. Boarding",id:"1-boarding",children:[]},{value:"2. Taxi Out",id:"2-taxi-out",children:[]},{value:"3. Takeoff",id:"3-takeoff",children:[]},{value:"4. Enroute",id:"4-enroute",children:[]},{value:"5. Approach",id:"5-approach",children:[]},{value:"6. Final",id:"6-final",children:[]},{value:"7. Landing",id:"7-landing",children:[]},{value:"8. Taxi In",id:"8-taxi-in",children:[]},{value:"9. Arrived",id:"9-arrived",children:[]}]}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"flight-phases"},"Flight Phases"),(0,i.kt)("p",null,"ACARS defines multiple flight phases, and the transitions between them are detailed below. These rules are attemped to strike a balance between detecting the phases properly for both IFR and VFR flights."),(0,i.kt)("h3",{id:"1-boarding"},"1. Boarding"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You must be on the ground to be able to start a flight. The parking brake should also be on")),(0,i.kt)("h4",{id:"notes"},"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'The players starting position (gate, parking or runway) is attempted to be found. Otherwise, it\'s recorded as "Unknown"')),(0,i.kt)("h3",{id:"2-taxi-out"},"2. Taxi Out"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once the parking brakes are released -or- "),(0,i.kt)("li",{parentName:"ul"},"The ground speed is above 0")),(0,i.kt)("h4",{id:"notes-1"},"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'The "Blocks Off" time is recorded'),(0,i.kt)("li",{parentName:"ul"},'The "Taxi Out" timer is started')),(0,i.kt)("h3",{id:"3-takeoff"},"3. Takeoff"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you're detected to be on a runway, and your ground speed is over 30"),(0,i.kt)("li",{parentName:"ul"},"If you haven't been detected on a runway, your ground speed is over 80 (rolling)"),(0,i.kt)("li",{parentName:"ul"},"You're no longer on the ground")),(0,i.kt)("h3",{id:"4-enroute"},"4. Enroute"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You're 35' AGL or above (to attempt to catch the earlier point)"),(0,i.kt)("li",{parentName:"ul"},"Gear are up (if they are retractable)")),(0,i.kt)("h3",{id:"5-approach"},"5. Approach"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you're at the TOD",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'If a flight plan is loaded and has a "TOD" waypoint (SimBrief, MSFS), that will be used'),(0,i.kt)("li",{parentName:"ul"},"Otherwise, the TOD is calculated using ",(0,i.kt)("a",{parentName:"li",href:"https://www.flyingmag.com/technique/tip-week/calculating-top-descent/"},"this method")," (",(0,i.kt)("inlineCode",{parentName:"li"},"TOD = (Plane Alt - Field Alt) / 3"),")"))),(0,i.kt)("li",{parentName:"ul"},"If you went above 10k' and are now below it")),(0,i.kt)("h3",{id:"6-final"},"6. Final"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Below 3000' AGL"),(0,i.kt)("li",{parentName:"ul"},"Gear are down (if they are retractable)"),(0,i.kt)("li",{parentName:"ul"},"Flaps are down")),(0,i.kt)("h3",{id:"7-landing"},"7. Landing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You're on the ground")),(0,i.kt)("h4",{id:"notes-2"},"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'The "End Flight" button shows up')),(0,i.kt)("h3",{id:"8-taxi-in"},"8. Taxi In"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You're off of the runway and your ground speed is < 30")),(0,i.kt)("h4",{id:"notes-3"},"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'The "End Flight" button shows up')),(0,i.kt)("h3",{id:"9-arrived"},"9. Arrived"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'The "End Flight" button must be clicked to set the flight to arrived'),(0,i.kt)("li",{parentName:"ul"},'Once "End Flight" is clicked, a button to file the PIREP will show')),(0,i.kt)("h4",{id:"notes-4"},"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'The "End Flight" button shows up'),(0,i.kt)("li",{parentName:"ul"},"The parking/gate you're at will be attempted to be figured out")))}d.isMDXComponent=!0}}]);
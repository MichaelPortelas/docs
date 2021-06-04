(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[8565],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(a),h=n,d=f["".concat(o,".").concat(h)]||f[h]||p[h]||i;return a?r.createElement(d,l(l({ref:t},c),{},{components:a})):r.createElement(d,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},9706:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),l=["components"],s={id:"basics",title:"Basics"},o={unversionedId:"concepts/basics",id:"concepts/basics",isDocsHomePage:!1,title:"Basics",description:"phpVMS 7 has a few fundamental differences from the old version, on how schedules and flights are handled.",source:"@site/docs/concepts/basics.md",sourceDirName:"concepts",slug:"/concepts/basics",permalink:"/concepts/basics",editUrl:"https://github.com/phpvms/docs/tree/master/docs/concepts/basics.md",version:"current",frontMatter:{id:"basics",title:"Basics"},sidebar:"docs",previous:{title:"Download",permalink:"/download"},next:{title:"Finances",permalink:"/concepts/finances"}},u=[{value:"Airlines",id:"airlines",children:[]},{value:"Airports",id:"airports",children:[]},{value:"Fares",id:"fares",children:[]},{value:"Subfleets and Aircraft",id:"subfleets-and-aircraft",children:[]},{value:"Flights",id:"flights",children:[{value:"Flight Types",id:"flight-types",children:[]}]}],c={toc:u};function p(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"phpVMS 7 has a few fundamental differences from the old version, on how schedules and flights are handled."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"airlines"},"Airlines"),(0,i.kt)("p",null,"One or more airlines needs to be created. Users choose and airline on registration. "),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"airports"},"Airports"),(0,i.kt)("p",null,"Airports can be added to the system, and optionally selected as hubs. When users register, they select a home hub."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"fares"},"Fares"),(0,i.kt)("p",null,'An unlimited number of fares can be added, and then fares are attached to subfleets, therefor, all of these fares are then applied to any aircraft in that subfleet. These include examples of "First Class", "Economy", etc. You can add as many or as few as you want. Fares include:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Capacity - how many seats this fare class holds"),(0,i.kt)("li",{parentName:"ul"},"Price - the amount a ticket in this fare class costs"),(0,i.kt)("li",{parentName:"ul"},"Cost - the amount it costs for a ticket; this is the amount it costs you to run a single seat")),(0,i.kt)("p",null,"In order to facilitate not needing multiple fares of the same type, but with different capacity/costs/price, when a fare it assigned to a subfleet, those properties can be changed on a per-subfleet basis. "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.expertflyer.com/sessionlessClassList.do"},"ExpertFlyer has a great list of real-world fare classes")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"subfleets-and-aircraft"},"Subfleets and Aircraft"),(0,i.kt)("p",null,'A new feature in phpVMS 7 are subfleets. Subfleets can be thought of as aircraft-groups. Airlines often group aircraft by equipment types; as a real-world example, British Airways has a subfleet for their 767-336ER Rolls-Royce RB211-524H aircraft, of which there are 7, and the aircraft in this subfleet are used for short-haul routes. Fares are aligned for the aircraft in the subfleet; for example, an airline may further divide the 767 short-haul subfleet into one subfleet that has first, business and economy classes (with a name of "767-336ER RR RB211-524H-',(0,i.kt)("strong",{parentName:"p"},"FJY"),'") and another 767 subfleet with only first and economy classes (with a name of 767-336ER RR RB211-524H-',(0,i.kt)("strong",{parentName:"p"},"FY"),")"),(0,i.kt)("p",null,"In phpVMS, you can create as many subfleets as you like, with as many aircraft in those subfleets as you want. At a minimum, one subfleet is required, and there's no restriction on the types of aircraft that can be included. This way, potentially dozens of aircraft don't need to be assigned to the same route."),(0,i.kt)("p",null,"These subfleets, can be assigned to routes and ranks, making it easy to apply multiple aircraft to routes, and then allowing more control over what equipment pilots are allowed to fly. An example would be having a route that has 3 subfleets assigned to it, however, if a pilot is only allowed to fly one of those subfleets (because of their rank), when filing a PIREP, only the aircraft from the allowed subfleet will be shown."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Subfleets have a name, type and a fuel type. The name and type are arbitrary, and just convention to your VA. ",(0,i.kt)("a",{parentName:"li",href:"http://www.aerotransport.org/php/go.php?query=operator&luck=1&where=70913"},"Here's an example for Continental Airlines")),(0,i.kt)("li",{parentName:"ul"},"Any number of aircraft can be assigned"),(0,i.kt)("li",{parentName:"ul"},"Any number of fares can be assigned, and the properties overridden."),(0,i.kt)("li",{parentName:"ul"},"Any number of subfleets can be assigned to a flight")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"flights"},"Flights"),(0,i.kt)("p",null,'Schedules have been renamed to "flights". A flight consists of:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An airline"),(0,i.kt)("li",{parentName:"ul"},"Flight type"),(0,i.kt)("li",{parentName:"ul"},"Flight number"),(0,i.kt)("li",{parentName:"ul"},"Flight Code (optional)"),(0,i.kt)("li",{parentName:"ul"},"Flight Leg (optional)"),(0,i.kt)("li",{parentName:"ul"},"Departure airport"),(0,i.kt)("li",{parentName:"ul"},"Arrival airport"),(0,i.kt)("li",{parentName:"ul"},"Any number of subfleets")),(0,i.kt)("p",null,"Flight numbers do not need to be unique, however, if a duplicate flight number is found, the creation/edit will fail, and a route code or leg must be provided in order for it to work properly."),(0,i.kt)("h3",{id:"flight-types"},"Flight Types"),(0,i.kt)("p",null,"Flight types follow the IATA SSIM service code. The ones highlighted in bold are the most common."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A = Additional Cargo/Mail"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"C = Charter \u2013 Passenger only")),(0,i.kt)("li",{parentName:"ul"},"E = Special VIP Flight (FAA/Government)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"F = Scheduled \u2013 Cargo and/or Mail")),(0,i.kt)("li",{parentName:"ul"},"G = Additional Flights \u2013 Passenger Normal Service"),(0,i.kt)("li",{parentName:"ul"},"H = Charter \u2013 Cargo and/or Mail"),(0,i.kt)("li",{parentName:"ul"},"I = Ambulance Flight"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"J = Scheduled \u2013 Passenger Normal Service")),(0,i.kt)("li",{parentName:"ul"},"K = Training Flights"),(0,i.kt)("li",{parentName:"ul"},"M = Mail Service"),(0,i.kt)("li",{parentName:"ul"},"O = Charter requiring special handling (e.g. migrants, immigrants)"),(0,i.kt)("li",{parentName:"ul"},"P = Positioning Flights \u2013 Non Revenue (ferry/delivery/demo)"),(0,i.kt)("li",{parentName:"ul"},"T = Technical Test"),(0,i.kt)("li",{parentName:"ul"},"W = Military"),(0,i.kt)("li",{parentName:"ul"},"X = Technical Stop")),(0,i.kt)("p",null,"More resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forum.phpvms.net/topic/24329-connecting-flights/"},"Forum Topic - Connecting Flights")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.quora.com/What-is-the-difference-between-Multi-leg-and-Multi-segment-flights"},"Quora - Multi-leg and multi-segment flights"))))}p.isMDXComponent=!0}}]);
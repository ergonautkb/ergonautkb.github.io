"use strict";(self.webpackChunkergonautkeyboards=self.webpackChunkergonautkeyboards||[]).push([[487],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(a),c=n,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?r.createElement(k,i(i({ref:e},s),{},{components:a})):r.createElement(k,i({ref:e},s))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7849:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:2,title:"Build Preparations"},i="Ergonaut One Build Preparations",o={unversionedId:"keyboards/ergonaut-one/build-preparations",id:"keyboards/ergonaut-one/build-preparations",title:"Build Preparations",description:"This guide will help you prepare all the necessary tools and materials for a successful Ergonaut One build.",source:"@site/docs/keyboards/ergonaut-one/build-preparations.md",sourceDirName:"keyboards/ergonaut-one",slug:"/keyboards/ergonaut-one/build-preparations",permalink:"/docs/keyboards/ergonaut-one/build-preparations",draft:!1,editUrl:"https://github.com/ergonautkb/ergonautkb.github.io/tree/main/docs/keyboards/ergonaut-one/build-preparations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Build Preparations"},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/keyboards/ergonaut-one/intro"},next:{title:"Build Guide",permalink:"/docs/keyboards/ergonaut-one/build-guide"}},p={},d=[{value:"PCB",id:"pcb",level:2},{value:"Tools:",id:"tools",level:4},{value:"PCB Manufacturing",id:"pcb-manufacturing",level:4},{value:"BOM",id:"bom",level:4},{value:"Case",id:"case",level:2},{value:"Common information for 3D printed cases",id:"common-information-for-3d-printed-cases",level:3},{value:"Tools:",id:"tools-1",level:4},{value:"BOM",id:"bom-1",level:4},{value:"Printing",id:"printing",level:4},{value:"3D Printed Tilted Case",id:"3d-printed-tilted-case",level:3},{value:"3D Printed Standard Case",id:"3d-printed-standard-case",level:3},{value:"FR4 Sandwich Case",id:"fr4-sandwich-case",level:3}],s={toc:d},u="wrapper";function m(t){let{components:e,...l}=t;return(0,n.kt)(u,(0,r.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ergonaut-one-build-preparations"},"Ergonaut One Build Preparations"),(0,n.kt)("p",null,"This guide will help you prepare all the necessary tools and materials for a successful Ergonaut One build."),(0,n.kt)("h2",{id:"pcb"},"PCB"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"PCB",src:a(1456).Z,width:"997",height:"748"}),"\nPCB is the core component of Ergonaut One."),(0,n.kt)("h4",{id:"tools"},"Tools:"),(0,n.kt)("p",null,"You'd probably need:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Soldering iron;"),(0,n.kt)("li",{parentName:"ul"},"Solder wire;"),(0,n.kt)("li",{parentName:"ul"},"Flux;"),(0,n.kt)("li",{parentName:"ul"},"Tweezers;"),(0,n.kt)("li",{parentName:"ul"},"Isopropyl Alcohol or other suitable solvent for PCB cleaning;"),(0,n.kt)("li",{parentName:"ul"},"Cotton Q-tips or other suitable material for PCB cleaning.")),(0,n.kt)("h4",{id:"pcb-manufacturing"},"PCB Manufacturing"),(0,n.kt)("p",null,"If you are brave enough, you can manufacture PCB yourself.\nBut my suggestion would be to grab a Gerber archive ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ergonautkb/one/tree/main/gerbers/pcb"},"here")," and order PCBs from any capable PCB manufacturer, like:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://jlcpcb.com/"},"JLCPCB"),";"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.pcbway.com/"},"PCBWay"),".")),(0,n.kt)("p",null,"You are free to choose any desirable PCB specification but keep in mind that all cases are modeled with 1.6mm PCB thickness in mind.\nYou'd need two PCBs for one kit."),(0,n.kt)("h4",{id:"bom"},"BOM"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Qty"),(0,n.kt)("th",{parentName:"tr",align:null},"Links"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Seeeduino XIAO nRF52840 Module"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://aliexpress.com/item/1005004459618789.html"},"Aliexpress"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MSK-12C02 SPDT Switch"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://aliexpress.com/item/4000685483225.html"},"Aliexpress"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1N5819 SOD-123 Diode"),(0,n.kt)("td",{parentName:"tr",align:null},"42"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://aliexpress.com/item/1005003194674618.html?sku_id=12000024602962923"},"Aliexpress"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Gateron KS-27 Hot Swap Socket"),(0,n.kt)("td",{parentName:"tr",align:null},"42"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://aliexpress.com/item/1005004128409069.html"},"Aliexpress"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Li-Po Battery 601730 With Protection"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"Source locally")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"[OPTIONAL]")," JST SH1.0 Horizontal 2 Pin PCB Connector"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://aliexpress.com/item/1005005682408443.html?&sku_id=12000033998015849"},"Aliexpress"))))),(0,n.kt)("h2",{id:"case"},"Case"),(0,n.kt)("p",null,"The case is also an essential part of Ergonaut One since it provides proper electrical insulation from the environment and provides reliable mounting plates for the switches."),(0,n.kt)("p",null,"You can choose to use one of three provided variants of the case:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"3D Printed:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#3d-printed-tilted-case"},"Tilted Case")," (Recommended) (The easiest to print)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#3d-printed-standard-case"},"Standard Case")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#fr4-sandwich-case"},"FR4 Sandwich Case"))),(0,n.kt)("h3",{id:"common-information-for-3d-printed-cases"},"Common information for 3D printed cases"),(0,n.kt)("h4",{id:"tools-1"},"Tools:"),(0,n.kt)("p",null,"You'd probably need:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"FDM 3D Printer or a friend with a printer;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[ONLY FOR STANDARD CASE]")," Scalpel or some other cutting tool to remove included supports;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[OPTIONAL]")," Deburring tool.")),(0,n.kt)("h4",{id:"bom-1"},"BOM"),(0,n.kt)("p",null,"You'd need some additional hardware to assemble your case:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Qty"),(0,n.kt)("th",{parentName:"tr",align:null},"Links"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"M2 8mm Flat Countersunk Screw"),(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://aliexpress.com/item/32975242274.html?sku_id=66696774380"},"Aliexpress"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"M2 Hex Nut"),(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://aliexpress.com/item/1005003994209489.html?sku_id=12000027676602569"},"Aliexpress"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Silicone Feet Pads 8mmx2.5mm"),(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://aliexpress.com/item/32750517847.html"},"Aliexpress"))))),(0,n.kt)("h4",{id:"printing"},"Printing"),(0,n.kt)("p",null,"Grab models ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ergonautkb/one/tree/main/cases/3d"},"here"),". Print with the following settings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Layer height: 0.2mm;"),(0,n.kt)("li",{parentName:"ul"},"Extrusion width: 0.4mm;"),(0,n.kt)("li",{parentName:"ul"},"No support structures.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note: Standard Case might require support structures if your printer either has no part cooling or bad part cooling.")),(0,n.kt)("p",null,"Choose your desired case variant (Standard or Tilted) and print four parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Left Top;"),(0,n.kt)("li",{parentName:"ul"},"Right Top (model should be mirrored by X axis in slicer);"),(0,n.kt)("li",{parentName:"ul"},"Left Bottom;"),(0,n.kt)("li",{parentName:"ul"},"Right Bottom (model should be mirrored by X axis in slicer).")),(0,n.kt)("h3",{id:"3d-printed-tilted-case"},"3D Printed Tilted Case"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Front"),(0,n.kt)("th",{parentName:"tr",align:null},"Back"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"3D Printed Tilted Case Front",src:a(9668).Z,width:"1280",height:"1073"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"3D Printed Tilted Case Back",src:a(1989).Z,width:"1280",height:"716"}))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Bottom part placement"),(0,n.kt)("th",{parentName:"tr",align:null},"Top part placement"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"3D Printed Tilted Case Bot",src:a(1357).Z,width:"1280",height:"960"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"3D Printed Tilted Case Top",src:a(6750).Z,width:"1280",height:"960"}))))),(0,n.kt)("h3",{id:"3d-printed-standard-case"},"3D Printed Standard Case"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Front"),(0,n.kt)("th",{parentName:"tr",align:null},"Back"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"3D Printed Standard Case Front",src:a(7112).Z,width:"1280",height:"988"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"3D Printed Standard Case Back",src:a(2374).Z,width:"1280",height:"1159"}))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note: this model contains included bed adhesion-improving supports, which should be removed after print.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Bottom part placement"),(0,n.kt)("th",{parentName:"tr",align:null},"Top part placement"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"3D Printed Standard Case Bot",src:a(8855).Z,width:"1280",height:"960"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"3D Printed Standard Case Top",src:a(6181).Z,width:"1280",height:"960"}))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note: After the print don't forget to remove included supports from the top parts. The image below for a reference:")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"3D Printed Standard Case Supports",src:a(4708).Z,width:"1280",height:"959"})),(0,n.kt)("h3",{id:"fr4-sandwich-case"},"FR4 Sandwich Case"),(0,n.kt)("p",null,"Coming soon..."))}m.isMDXComponent=!0},1456:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/pcb-97ffb1ce7f0a405e785a230f18e10cfe.jpg"},7112:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/standard_1-ab8a27fa7014e51393df93e6a7d60a36.jpg"},2374:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/standard_2-ba1353e2aacf9178a40ef3089cec7a0a.jpg"},8855:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/standard_bot_print-24fb7a2ef6eff24e144e09b19c4c62d6.jpg"},6181:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/standard_top_print-305f6d9e19760a8f0e599fadb5e3ac06.jpg"},4708:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/standard_top_supports-63a7312fe7b59b353000c2bcb93eeff7.jpg"},9668:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/tilted_1-ae420c56e01f97954858d5b19ba690a0.jpg"},1989:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/tilted_2-d7d09bbc3b52fa8c1962294d8c15d0ff.jpg"},1357:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/tilted_bot_print-55000aa5219129021605b18d084d27f6.jpg"},6750:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/tilted_top_print-888f4c4f353e1d09ba067bee67e5ee93.jpg"}}]);
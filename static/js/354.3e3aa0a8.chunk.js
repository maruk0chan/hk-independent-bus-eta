"use strict";(self.webpackChunkhk_independent_bus_eta=self.webpackChunkhk_independent_bus_eta||[]).push([[354],{3077:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ct});var a=n(7313),o=n(7912),i=(n(3331),n(7458)),l=n(4778),s=n(6396),r=n(2135),c=n(8467),d=n(3346),p=n(5296),u=n(6060),x=n(178),g=n(2481),m=n(7829),h=n(9856),j=n(9237),f=n(5919),b=n(7983),Z=n(180),v=n(3560),_=n(7807),k=n(4511),C=n(5823),w=n(6417);const y=()=>{const{t:e,i18n:t}=(0,k.$)(),n=(0,c.TH)(),{selectedRoute:o,colorMode:i,vibrateDuration:l}=(0,a.useContext)(u.ZP),s=(0,c.s0)(),d=(e,t)=>{t.preventDefault(),(0,C.tp)(l),setTimeout((()=>s(e)),0)};return(0,a.useMemo)((()=>(0,w.jsxs)(h.Z,{value:n.pathname.replace(/(.*)\/[0-9]*?$/,"$1"),showLabels:!0,sx:S,children:[(0,w.jsx)(j.Z,{label:e("\u9996\u9801"),component:r.rU,to:"/".concat(t.language),onClick:e=>d("/".concat(t.language),e),value:"/".concat(t.language),icon:(0,w.jsx)(f.Z,{})}),(0,w.jsx)(j.Z,{label:e("\u8eca\u7ad9"),component:r.rU,to:"/".concat(t.language,"/stops"),onClick:e=>d("/".concat(t.language,"/stops"),e),value:"/".concat(t.language,"/stops"),icon:(0,w.jsx)(v.Z,{})}),(0,w.jsx)(j.Z,{label:e("\u641c\u5c0b"),component:r.rU,to:"/".concat(t.language,"/board"),onClick:e=>d("/".concat(t.language,"/board"),e),value:"/".concat(t.language,"/board"),icon:(0,w.jsx)(b.Z,{})}),(0,w.jsx)(j.Z,{label:e("\u898f\u5283"),component:r.rU,to:"/".concat(t.language,"/search"),onClick:e=>d("/".concat(t.language,"/search"),e),value:"/".concat(t.language,"/search"),icon:(0,w.jsx)(Z.Z,{})}),(0,w.jsx)(j.Z,{label:e("\u901a\u544a"),component:r.rU,to:"/".concat(t.language,"/notice"),onClick:e=>d("/".concat(t.language,"/notice"),e),value:"/".concat(t.language,"/notice"),icon:(0,w.jsx)(_.Z,{})})]})),[n.pathname,t.language,i,o,l])},S={background:e=>"dark"===e.palette.mode?e.palette.background.default:e.palette.primary.main,bottom:"0",height:"initial","& .MuiBottomNavigationAction-root":{width:"20%",padding:"6px 0",minWidth:0},"& .MuiBottomNavigationAction-label":{fontSize:"0.875rem"},"& .Mui-selected":{color:e=>"".concat("dark"===e.palette.mode?e.palette.primary.main:e.palette.text.primary," !important")}};var W=n(9289),P=n(1113),I=n(2461),A=n(8119),N=n(7131),T=n(9099),z=n(6534),R=n(9704),D=n(1906),H=n(7474),F=n(282),L=n(647),M=n(2286);const E=()=>{const{searchRoute:e,setSearchRoute:t,db:{routeList:n},colorMode:o,vibrateDuration:i,geoPermission:l,updateGeolocation:s,changeLanguage:d,_colorMode:p,toggleColorMode:x}=(0,a.useContext)(u.ZP),{t:g,i18n:h}=(0,k.$)();let j=(0,c.TH)();const f=(0,c.s0)(),b=(0,M.IM)(),Z=(0,a.useCallback)((()=>{try{if(!0===window.iOSRNWebView)return;navigator.geolocation.getCurrentPosition((e=>{let{coords:{latitude:t,longitude:n}}=e;s({lat:t,lng:n})}))}catch(e){console.log("error in getting location")}}),[s]),v=(0,a.useCallback)((n=>{let{key:a,ctrlKey:o,altKey:i,metaKey:l,target:s}=n;o||i||l||"INPUT"!==s.tagName.toUpperCase()&&"TEXTAREA"!==s.tagName.toUpperCase()&&("Escape"===a?t(""):"Backspace"===a?t(e.slice(0,-1)):1===a.length&&(t(e+a),f("/".concat(h.language,"/board"),{replace:!0})))}),[e,h.language,t]);return(0,a.useEffect)((()=>(window.addEventListener("keydown",v),()=>{window.removeEventListener("keydown",v)})),[v]),(0,a.useMemo)((()=>(0,w.jsxs)(W.Z,{sx:$,children:[(0,w.jsxs)(r.rU,{to:"/".concat(h.language),onClick:e=>{e.preventDefault(),(0,C.tp)(i),f("/".concat(h.language))},rel:"nofollow",children:[(0,w.jsx)(m.Z,{sx:G}),(0,w.jsx)(P.Z,{component:"h1",style:F.Z,children:g("\u5df4\u58eb\u5230\u7ad9\u9810\u5831")})]}),(0,w.jsx)(I.Z,{id:"searchInput",sx:B,type:"text",value:e,placeholder:g("\u8def\u7dda"),onChange:e=>{(e.target.value.toUpperCase()in n||e.target.value in n)&&(document.activeElement.blur(),f("/".concat(h.language,"/route/").concat(e.target.value))),t(e.target.value)},onFocus:()=>{(0,C.tp)(i),"prerendering"!==navigator.userAgent&&(0,C.z4)()&&document.activeElement.blur(),f("/".concat(h.language,"/board"),{replace:!0})}}),(0,w.jsxs)(m.Z,{sx:O,children:[b.slice(0,2).map((e=>(0,w.jsx)(A.Z,{onClick:()=>window.open("https://www.hko.gov.hk/".concat("zh"===h.language?"tc":"en","/detail.htm")),variant:"square",src:M.OS[e],sx:K},e))),"granted"===l&&(0,w.jsx)(N.Z,{"aria-label":"relocate",onClick:()=>Z(),children:(0,w.jsx)(L.Z,{})}),(0,w.jsx)(T.Z,{sx:U,onClick:()=>{return e="zh"===h.language?"en":"zh",(0,C.tp)(i),f(j.pathname.replace("/"+h.language,"/"+e),{replace:!0}),void d(e);var e},id:"lang-selector",variant:"text",disableElevation:!0,disableRipple:!0,children:"zh"!==h.language?"\u7e41":"En"}),(0,w.jsxs)(N.Z,{onClick:()=>{(0,C.tp)(i),x()},children:["system"===p&&(0,w.jsx)(z.Z,{fontSize:"small"}),"light"===p&&(0,w.jsx)(R.Z,{fontSize:"small"}),"dark"===p&&(0,w.jsx)(D.Z,{fontSize:"small"})]}),(0,w.jsx)(N.Z,{component:r.rU,to:"/".concat(h.language,"/settings"),rel:"nofollow",children:(0,w.jsx)(H.Z,{fontSize:"small"})})]})]})),[e,h.language,j.pathname,o,l,i,b])},$={backgroundColor:e=>"dark"===e.palette.mode?e.palette.background.default:e.palette.primary.main,"& a":{textDecoration:"none"},display:"flex",justifyContent:"space-between"},G={backgroundImage:e=>"light"===e.palette.mode?"url(/logo128.png)":"url(/dark-32.jpg)",backgroundSize:"contain",width:32,height:32},B={maxWidth:"100px","& input":{textAlign:"center"},"& input::before":{borderBottom:e=>"1px ".concat(e.palette.text.primary," solid")},"&.Mui-focused":{"::after":{borderBottomColor:e=>{let{palette:t}=e;return"dark"===t.mode?t.primary.main:t.text.primary}}}},O={display:"flex",alignItems:"center"},U={color:e=>e.palette.text.primary,minWidth:"40px",p:1,borderRadius:5,fontWeight:900,textTransform:"none"},K={background:"white",height:24,width:24,m:1},V=()=>{const{t:e}=(0,k.$)(),{analytics:t,toggleAnalytics:n}=(0,a.useContext)(u.ZP),[o,i]=(0,a.useState)(!t&&!Boolean(localStorage.getItem("consent"))&&!(0,C.vS)()),l=(0,a.useCallback)((()=>{n(),i((()=>(localStorage.setItem("consent","yes"),!1)))}),[i,n]),s=(0,a.useCallback)((()=>{i((()=>(localStorage.setItem("consent","no"),!1)))}),[i]);return o?(0,w.jsxs)(m.Z,{sx:q,children:[(0,w.jsx)(P.Z,{variant:"subtitle2",sx:Q,children:e("We'd like to set analytics cookies that help us improve hkbus.app by measuring how you use it.")}),(0,w.jsxs)(m.Z,{sx:Y,children:[(0,w.jsx)(T.Z,{size:"small",variant:"contained",sx:{color:"#000"},onClick:l,children:e("Accept")}),(0,w.jsx)(T.Z,{size:"small",variant:"outlined",color:"error",onClick:s,children:e("Reject")})]})]}):(0,w.jsx)(w.Fragment,{})},q={background:"#333",display:"flex",alignSelf:"flex-end"},Y={display:"flex",alignItems:"center",gap:1,p:1},Q={p:1,color:"#fff"};var X=n(3947),J=n(6330),ee=n(3795),te=n(7943);const ne=e=>{let{name:t,list:n,collectionIdx:o=null}=e;const{t:i}=(0,k.$)(),{collectionDrawerRoute:l,db:{routeList:s},toggleCollectionDialog:r,toggleCollectionEta:c}=(0,a.useContext)(u.ZP);return(0,w.jsxs)(m.Z,{sx:ae,children:[(0,w.jsxs)(m.Z,{sx:{...oe,cursor:null!==o?"pointer":"auto"},onClick:()=>r(o),children:[(0,w.jsx)(A.Z,{children:t.charAt(0)}),(0,w.jsxs)(m.Z,{sx:ie,children:[(0,w.jsx)(P.Z,{variant:"body1",children:t}),(0,w.jsxs)(P.Z,{variant:"caption",children:[i("Number of ETAs: "),n.filter((e=>void 0!==s[e.split("/")[0]])).length]})]})]}),(0,w.jsx)(m.Z,{sx:le,children:(0,w.jsx)(J.Z,{icon:(0,w.jsx)(ee.Z,{}),checkedIcon:(0,w.jsx)(te.Z,{}),checked:n.includes(l),onClick:()=>c(l,o)})})]})},ae={flex:1,display:"flex",justifyContent:"space-between"},oe={display:"flex",alignItems:"center",gap:2,flex:1,"& .MuiAvatar-colorDefault":{color:e=>"dark"===e.palette.mode?e.palette.background.default:"white"}},ie={display:"flex",flexDirection:"column"},le={display:"flex"};var se=n(6555),re=n(2040);const ce=()=>{const{t:e}=(0,k.$)(),{collectionDrawerRoute:t,setCollectionDrawerRoute:n,savedEtas:o,collections:i,addNewCollection:l}=(0,a.useContext)(u.ZP);return(0,w.jsx)(X.ZP,{anchor:"bottom",open:null!==t,onClose:()=>n(null),PaperProps:{sx:de},children:(0,w.jsxs)(m.Z,{sx:pe,children:[(0,w.jsx)(se.Z,{sx:ue}),(0,w.jsx)(m.Z,{sx:xe,children:(0,w.jsx)(ne,{name:e("\u5e38\u7528"),list:o})}),(0,w.jsxs)(m.Z,{sx:ge,children:[(0,w.jsx)(P.Z,{variant:"h6",children:e("Collections")}),(0,w.jsx)(N.Z,{onClick:l,children:(0,w.jsx)(re.Z,{})})]}),(0,w.jsx)(m.Z,{sx:me,children:i.map(((e,t)=>{let{name:n,list:a}=e;return(0,w.jsx)(ne,{name:n,list:a,collectionIdx:t},"collection-".concat(t))}))})]})})},de={borderTopLeftRadius:10,borderTopRightRadius:10},pe={maxHeight:"50vh",minHeight:"30vh",display:"flex",flexDirection:"column",px:2,py:1},ue={alignSelf:"center"},xe={display:"flex",mb:1},ge={display:"flex",justifyContent:"space-between"},me={display:"flex",flexDirection:"column",gap:2,overflow:"scroll"};var he=n(4469),je=n(6467),fe=n(2392),be=n(8485),Ze=n(5280),ve=n(4117),_e=n(7605),ke=n(7327),Ce=n(3208),we=n(9765),ye=n(5904),Se=n(8443),We=n(8790),Pe=n(658),Ie=n.n(Pe);const Ae=()=>{const{t:e}=(0,k.$)(),{collections:t,collectionIdx:n,updateCollectionSchedule:o,addCollectionSchedule:i,removeCollectionSchedule:l}=(0,a.useContext)(u.ZP);return(0,w.jsx)(Ce._,{dateAdapter:ye.y,children:(0,w.jsxs)(m.Z,{sx:Ne,children:[t[n].schedules.map(((t,n)=>(0,w.jsxs)(m.Z,{sx:Te,children:[(0,w.jsx)(N.Z,{size:"small",onClick:()=>l(n),children:(0,w.jsx)(Se.Z,{})}),(0,w.jsx)(fe.Z,{variant:"standard",value:t.day,select:!0,size:"small",onChange:e=>{let{target:{value:t}}=e;return o(n,"day",parseInt(t))},children:Array(7).fill(0).map(((t,a)=>(0,w.jsx)(ke.Z,{value:a,children:e("weekday-".concat(a))},"option-".concat(n,"-").concat(a))))}),(0,w.jsx)(we.d,{sx:{flex:.45},slotProps:{textField:{size:"small",variant:"standard"}},value:Ie()("1991-12-02".concat(t.start.hour,":").concat(t.start.minute)),onChange:e=>o(n,"start",{hour:e.$H,minute:e.$m})}),"-",(0,w.jsx)(we.d,{sx:{flex:.45},slotProps:{textField:{size:"small",variant:"standard"}},value:Ie()("1991-12-02T".concat(t.end.hour,":").concat(t.end.minute)),onChange:e=>o(n,"end",{hour:e.$H,minute:e.$m})})]},"schedule-".concat(n)))),(0,w.jsx)(T.Z,{onClick:()=>i(),children:(0,w.jsx)(We.Z,{})})]})})},Ne={display:"flex",flexDirection:"column",gap:1.5,fontSize:"0.8em !important"},Te={display:"flex",justifyContent:"space-between",alignItems:"center",gap:.5};var ze=n(1757),Re=n(1660);const De=()=>{const{db:{routeList:e},collections:t,collectionIdx:n,setCollectionEtas:o}=(0,a.useContext)(u.ZP),[i,l]=(0,a.useState)(t[n].list.filter((t=>t.split("/")[0]in e))),{t:s}=(0,k.$)(),r=(0,a.useCallback)((e=>{let{destination:t,source:n}=e;if(!t)return;const a=(0,C.HP)(i,n.index,t.index);l(a),o(Array.from(a))}),[i,l,o]);return(0,w.jsx)(ze.Z5,{onDragEnd:r,children:(0,w.jsx)(ze.bK,{droppableId:"saved-eta-list",children:e=>(0,w.jsxs)(m.Z,{ref:e.innerRef,...e.droppableProps,children:[i.length?i.map(((e,t)=>(0,w.jsx)(He,{item:e,index:t},"savedEta-".concat(e)))):(0,w.jsx)(P.Z,{sx:{textAlign:"center",marginTop:5},children:(0,w.jsx)("b",{children:s("\u672a\u6709\u6536\u85cf\u8def\u7dda")})}),e.placeholder]})})})},He=e=>{let{item:t,index:n}=e;return(0,w.jsx)(ze._l,{draggableId:t,index:n,children:e=>(0,w.jsx)(m.Z,{ref:e.innerRef,...e.draggableProps,...e.dragHandleProps,children:(0,w.jsx)(Re.Z,{routeId:t,mode:"order"})})})},Fe=()=>{const{collections:e,collectionIdx:t,toggleCollectionDialog:n,updateCollectionName:o,removeCollection:i}=(0,a.useContext)(u.ZP),{t:l}=(0,k.$)(),[s,r]=(0,a.useState)("routes");return null===t?null:(0,w.jsxs)(he.Z,{open:null!==t,onClose:()=>{n(null)},fullWidth:!0,children:[(0,w.jsxs)(je.Z,{sx:Le,children:[(0,w.jsx)(fe.Z,{id:"collection-input",variant:"standard",value:e[t].name,onChange:e=>{let{target:{value:t}}=e;return o(t)},fullWidth:!0}),(0,w.jsxs)(be.Z,{value:s,onChange:(e,t)=>r(t),sx:Ge,children:[(0,w.jsx)(Ze.Z,{value:"routes",label:l("\u8def\u7dda")}),(0,w.jsx)(Ze.Z,{value:"time",label:l("\u986f\u793a\u6642\u9593")})]}),(0,w.jsxs)(m.Z,{sx:Me,children:["routes"===s&&(0,w.jsx)(De,{}),"time"===s&&(0,w.jsx)(Ae,{})]})]}),(0,w.jsx)(ve.Z,{sx:Ee,children:(0,w.jsx)(N.Z,{onClick:()=>i(t),sx:$e,children:(0,w.jsx)(_e.Z,{})})})]})},Le={display:"flex",flexDirection:"column",gap:1},Me={height:"50vh",pr:1,overflow:"scroll","&::-webkit-scrollbar":{display:"none"}},Ee={display:"flex",justifyContent:"flex-start"},$e={opacity:.3,"&:hover":{opacity:1}},Ge={minHeight:"36px","& .MuiTab-root":{alignItems:"center",justifyContent:"center",paddingTop:0,paddingBottom:0,minHeight:"32px","&.Mui-selected":{color:e=>"dark"===e.palette.mode?e.palette.primary.main:"black"}},"& .MuiTabs-flexContainer":{justifyContent:"center"},"& .MuiTabs-indicator":{backgroundColor:e=>"dark"===e.palette.mode?e.palette.primary.main:"black"}},Be={display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},Oe={display:"flex",flexDirection:"column",flex:1,overflow:"hidden",backgroundColor:e=>e.palette.background.default},Ue=()=>(0,w.jsxs)(x.Z,{maxWidth:"xs",disableGutters:!0,sx:Be,children:[(0,w.jsx)(g.ZP,{}),(0,w.jsx)(E,{}),(0,w.jsxs)(m.Z,{sx:Oe,children:[(0,w.jsx)(V,{}),(0,w.jsx)(c.j3,{})]}),(0,w.jsx)(y,{}),(0,w.jsx)(ce,{}),(0,w.jsx)(Fe,{})]});var Ke=n(5640);const Ve=e=>{let{name:t,delta:n,value:a,id:o}=e;window.gtag?window.gtag("event",t,{value:n,metric_id:o,metric_value:a,metric_delta:n}):console.log("gtag not found")},qe=e=>{e&&e instanceof Function&&n.e(27).then(n.bind(n,4027)).then((t=>{let{getCLS:n,getFID:a,getFCP:o,getLCP:i,getTTFB:l}=t;n(e),a(e),o(e),i(e),l(e)}))},Ye=e=>{let{url:t}=e;return(0,a.useEffect)((()=>{window.location.replace(t)}),[t]),(0,w.jsx)(P.Z,{variant:"body1",children:"Redirecting..."})},Qe=(0,o.ZP)((()=>Promise.all([n.e(317),n.e(657),n.e(781)]).then(n.bind(n,4781)))),Xe=(0,o.ZP)((()=>Promise.all([n.e(422),n.e(657),n.e(418),n.e(393)]).then(n.bind(n,9393)))),Je=(0,o.ZP)((()=>Promise.all([n.e(317),n.e(21)]).then(n.bind(n,6021)))),et=(0,o.ZP)((()=>Promise.all([n.e(317),n.e(73),n.e(516)]).then(n.bind(n,5516)))),tt=(0,o.ZP)((()=>Promise.all([n.e(657),n.e(506),n.e(418),n.e(184),n.e(635)]).then(n.bind(n,1635)))),nt=(0,o.ZP)((()=>Promise.all([n.e(299),n.e(998)]).then(n.bind(n,1998)))),at=(0,o.ZP)((()=>Promise.all([n.e(422),n.e(615),n.e(930)]).then(n.bind(n,4930)))),ot=(0,o.ZP)((()=>n.e(370).then(n.bind(n,3370)))),it=(0,o.ZP)((()=>n.e(481).then(n.bind(n,7481)))),lt=(0,o.ZP)((()=>n.e(92).then(n.bind(n,1092)))),st=(0,o.ZP)((()=>n.e(922).then(n.bind(n,9922)))),rt=(0,o.ZP)((()=>Promise.all([n.e(422),n.e(151)]).then(n.bind(n,1151)))),ct=()=>{const{analytics:e,colorMode:t,fontSize:n}=(0,a.useContext)(u.ZP),{i18n:{language:o}}=(0,k.$)();e&&qe(Ve);const p=(0,a.useMemo)((()=>(0,i.Z)(pt(t,n),[t])),[t,n]);return(0,w.jsx)(l.Z,{injectFirst:!0,children:(0,w.jsx)(s.Z,{theme:p,children:(0,w.jsx)(d.C,{value:dt,children:(0,w.jsx)(r.VK,{children:(0,w.jsx)(Ke.N,{children:(0,w.jsxs)(c.Z5,{children:[(0,w.jsx)(c.AW,{path:"/",element:(0,w.jsx)(c.Fg,{to:"/".concat(o)})}),(0,w.jsxs)(c.AW,{path:"/:lang",element:(0,w.jsx)(Ue,{}),children:[(0,w.jsx)(c.AW,{path:"collections/:collectionName",element:(0,w.jsx)(Qe,{})}),(0,w.jsx)(c.AW,{path:"route/:id",element:(0,w.jsx)(Xe,{})}),(0,w.jsx)(c.AW,{path:"route/:id/:panel",element:(0,w.jsx)(Xe,{})}),(0,w.jsx)(c.AW,{path:"settings",element:(0,w.jsx)(at,{})}),(0,w.jsx)(c.AW,{path:"notice",element:(0,w.jsx)(nt,{})}),(0,w.jsx)(c.AW,{path:"import/:data?",element:(0,w.jsx)(st,{})}),(0,w.jsx)(c.AW,{path:"export",element:(0,w.jsx)(rt,{})}),(0,w.jsx)(c.AW,{path:"board",element:(0,w.jsx)(et,{})}),(0,w.jsx)(c.AW,{path:"stops",element:(0,w.jsx)(Je,{})}),(0,w.jsx)(c.AW,{path:"search",element:(0,w.jsx)(tt,{})}),(0,w.jsx)(c.AW,{path:"privacy",element:(0,w.jsx)(ot,{})}),(0,w.jsx)(c.AW,{path:"terms",element:(0,w.jsx)(it,{})}),(0,w.jsx)(c.AW,{path:"support",element:(0,w.jsx)(lt,{})}),(0,w.jsx)(c.AW,{path:"patreon",element:(0,w.jsx)(Ye,{url:"https://www.patreon.com/hkbus"})}),(0,w.jsx)(c.AW,{path:"",element:(0,w.jsx)(Qe,{})})]})]})})})})})})},dt=(0,p.Z)({key:"hkbus",speedy:!("prerendering"===navigator.userAgent)}),pt=(e,t)=>({typography:{fontFamily:"'Chiron Hei HK WS'",h6:{fontWeight:700},fontSize:t},palette:{mode:e,..."light"===e?{background:{default:"#fedb00"},primary:{main:"#fedb00",contrastText:"rgba(0, 0, 0, 0.12)"},warning:{main:"#3285e3"}}:{background:{default:"#000",contrast:"rgba(255, 255, 255, 0.12)"},primary:{main:"#fedb00"},warning:{main:"#fedb00"}}},elements:{MuiCssBaseline:{styleOverrides:{body:{fontSize:"0.875rem",lineHeight:1.43,scrollbarColor:"#3f3f3f",scrollbarWidth:"thin"}}}}})},5640:(e,t,n)=>{n.d(t,{N:()=>l,Z:()=>s});var a=n(7313),o=n(6417);const i=a.createContext({}),l=e=>{const[t,n]=(0,a.useState)({start:null,end:null}),[l,s]=(0,a.useState)("ready"),[r,c]=(0,a.useState)([]),[d,p]=(0,a.useState)({resultIdx:0,stopIdx:[0,0]});return(0,o.jsx)(i.Provider,{value:{locations:t,setLocations:n,status:l,setStatus:s,result:r,setResult:c,resultIdx:d,setResultIdx:p},children:e.children})},s=i},2286:(e,t,n)=>{n.d(t,{GE:()=>o,IM:()=>i,OS:()=>s});var a=n(7313);const o=()=>{const[e,t]=(0,a.useState)({});return(0,a.useEffect)((()=>{let e=!0;const n=()=>"prerendering"===navigator.userAgent?(t({}),new Promise((e=>e([])))):fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=en").then((e=>e.json())).then((n=>{e&&t(n)})),a=setInterval((()=>{n()}),3e5);return n(),()=>{e=!1,clearInterval(a)}}),[t]),e},i=()=>{const e=o();return Object.values(e).map((e=>{let{code:t}=e;return t})).filter((e=>l.indexOf(e)>=0)).sort(((e,t)=>l.indexOf(e)<l.indexOf(t)?-1:1))},l=["TC10","TC9","TC8SW","TC8NW","TC8SE","TC8NE","WRAINB","WRAINR","TC3","TC1","WRAINA","WL","WTS","WFNTSA","WHOT","WCOLD","WMSGNL"],s={TC10:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/No._10_Hurricane_Signal.png/30px-No._10_Hurricane_Signal.png",TC9:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/No._09_Increasing_Gale_or_Storm_Signal.png/30px-No._09_Increasing_Gale_or_Storm_Signal.png",TC8SW:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/No._8_Southwest_Gale_or_Storm_Signal.png/30px-No._8_Southwest_Gale_or_Storm_Signal.png",TC8NW:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/No._8_Northwest_Gale_or_Storm_Signal.png/30px-No._8_Northwest_Gale_or_Storm_Signal.png",TC8SE:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/No._8_Southeast_Gale_or_Storm_Signal.png/30px-No._8_Southeast_Gale_or_Storm_Signal.png",TC8NE:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/No._8_Northeast_Gale_or_Storm_Signal.png/30px-No._8_Northeast_Gale_or_Storm_Signal.png",WRAINB:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Black_Rainstorm_Signal.png/25px-Black_Rainstorm_Signal.png",WRAINR:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Red_Rainstorm_Signal.png/25px-Red_Rainstorm_Signal.png",TC3:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/No._03_Strong_Wind_Signal.png/30px-No._03_Strong_Wind_Signal.png",TC1:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/No._01_Standby_Signal.png/30px-No._01_Standby_Signal.png",WRAINA:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Amber_Rainstorm_Signal.png/25px-Amber_Rainstorm_Signal.png",WL:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Landslip.gif/25px-Landslip.gif",WTS:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Thunderstorm_Warning.png/25px-Thunderstorm_Warning.png",WFNTSA:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Ntfl.gif/25px-Ntfl.gif",WHOT:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Very_Hot_Weather_Warning.png/25px-Very_Hot_Weather_Warning.png",WCOLD:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cold_Weather_Warning.png/25px-Cold_Weather_Warning.png",WMSGNL:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/HK_Monsoon_Signal.png/25px-HK_Monsoon_Signal.png"}},1660:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7313),o=n(7216),i=n(3213),l=n(1113),s=n(7829),r=n(7131),c=n(9536),d=n(8467),p=n(2135),u=n(5823),x=n(6060),g=n(4511),m=n(9119),h=n(736),j=n(7196),f=n(6417);const b=()=>(0,f.jsx)(j.Z,{sx:{transform:"scaleY(-1)",verticalAlign:"middle",fontSize:"inherit",mr:1}}),Z=()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(j.Z,{sx:{transform:"scaleY(-1)",verticalAlign:"middle",fontSize:"inherit"}}),(0,f.jsx)(j.Z,{sx:{transform:"scaleY(-1)",verticalAlign:"middle",fontSize:"inherit",mr:1}})]}),v=e=>{let{routeId:t,value:n}=e;const{t:o,i18n:r}=(0,g.$)(),{etaFormat:c,annotateScheduled:d}=(0,a.useContext)(x.ZP),p=(0,m.e)(t,Boolean(n)),u=null!==n&&void 0!==n?n:p,j=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e||!e.eta)return"";{var n,a,i,l,p;const u=Math.round((new Date(e.eta).getTime()-(new Date).getTime())/60/1e3);if(!Number.isInteger(u))return e.remark[r.language];const{remark:x}=e,g=(null===x||void 0===x||null===(n=x.zh)||void 0===n?void 0:n.endsWith("\u73ed\u6b21"))||(null===x||void 0===x||null===(a=x.en)||void 0===a?void 0:a.endsWith("Scheduled Bus")),m=null!==(i=(null!==(l=/Platform [\d+] - (\u25ad+)/gm.exec(null!==(p=null===x||void 0===x?void 0:x.en)&&void 0!==p?p:""))&&void 0!==l?l:[])[1])&&void 0!==i?i:"",j=(0,f.jsxs)(s.Z,{component:"span",sx:{fontSize:"exact"!==c?"0.9em":"1rem"},children:[g&&d&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h.Z,{sx:{fontSize:"0.9em"}}),"\xa0"]}),1===m.length&&(0,f.jsx)(b,{}),2===m.length&&(0,f.jsx)(Z,{}),e.eta.slice(11,16)]}),v=(0,f.jsxs)(s.Z,{component:"span",children:["diff"===c&&1===m.length&&(0,f.jsx)(b,{}),"diff"===c&&2===m.length&&(0,f.jsx)(Z,{}),(0,f.jsxs)(s.Z,{component:"span",sx:{...w,color:e=>t?e.palette.warning.main:"inherit"},children:[g&&d&&"diff"===c&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h.Z,{color:"inherit",sx:{fontSize:"0.9rem"}}),"\xa0"]}),u<1?" - ":"".concat(u," ")]}),(0,f.jsx)(s.Z,{component:"span",sx:{fontSize:"0.8em"},children:o("\u5206\u9418")})]});switch(c){case"exact":return j;case"diff":return v;default:return(0,f.jsxs)(f.Fragment,{children:[j,"\u2003",v]})}}};return(0,f.jsx)(i.Z,{primary:(0,f.jsx)(l.Z,{component:"h5",color:"textPrimary",sx:k,children:u?j(u[0],!0):""}),secondary:(0,f.jsxs)(l.Z,{variant:"h6",color:"textSecondary",sx:C,children:[u?j(u[1]):"",(0,f.jsx)("br",{}),u?j(u[2]):""]}),sx:_})},_={textAlign:"right"},k={whiteSpace:"nowrap"},C={fontSize:"0.875rem !important",fontWeight:"400",lineHeight:"1.43",whiteSpace:"nowrap",textAlign:"right"},w={fontSize:"1.1em",fontWeight:"700",color:"#088bce"};var y=n(9530),S=n(8628),W=n(6482);const P=e=>{let{name:t,location:n,fares:o,faresHoliday:i,seq:l}=e;const{t:s}=(0,g.$)(),{geoPermission:r,geolocation:c}=(0,a.useContext)(x.ZP),d=[o&&o[l]?"$"+o[l]:"",i&&i[l]?"$"+i[l]:""].filter((e=>e)).join(", "),{distance:p,unit:m,decimalPlace:h}=(0,u.Qi)(n,c);return"granted"!==r||0===n.lat?(0,f.jsx)(f.Fragment,{children:t+"\u3000"+(d?"("+d+")":"")}):(0,f.jsx)(f.Fragment,{children:t+" - "+p.toFixed(h)+s(m)+"\u3000"+(d?"("+d+")":"")})},I={co:[""],stops:{"":[""]},dest:{zh:"",en:""},bound:"",nlbId:0,fares:[],faresHoliday:[]},A={location:{lat:0,lng:0},name:{zh:"\u6700\u8fd1\u8eca\u7ad9",en:"The nearest stop"}},N=e=>{let{routeId:t,etas:n,mode:m="time",onDelete:h}=e;const{t:j,i18n:{language:b}}=(0,g.$)(),{db:{routeList:Z,stopList:_},vibrateDuration:k}=(0,a.useContext)(x.ZP),[C]=t.split("-"),[w,N]=t.split("/"),{co:F,stops:L,dest:M,fares:E,faresHoliday:$}=Z[w]||I,G=_[T(F,L)[parseInt(N,10)]]||A,B=(0,d.s0)(),O=(0,a.useMemo)((()=>{if(n&&n.length>0){var e,t,a,o;const i=u.iw[parseInt(null!==(e=(null!==(t=/Platform ([\d]+)/gm.exec(null!==(a=null===(o=n[0].remark)||void 0===o?void 0:o.en)&&void 0!==a?a:""))&&void 0!==t?t:[])[1])&&void 0!==e?e:"0",10)];return i?"zh"===b?"".concat(i,"\u6708\u53f0 "):"Platform ".concat(i," "):""}return""}),[n,b]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(o.ZP,{component:"time"===m?p.rU:void 0,to:"/".concat(b,"/route/").concat(w.toLowerCase()),onClick:"time"===m?e=>{e.preventDefault(),(0,u.tp)(k),setTimeout((()=>{B("/".concat(b,"/route/").concat(t.toLowerCase()))}),0)}:e=>{e.preventDefault()},sx:z,children:[(0,f.jsx)(i.Z,{primary:(0,f.jsx)(y.Z,{routeNo:C})}),(0,f.jsx)(i.Z,{primary:(0,f.jsxs)(l.Z,{component:"h3",variant:"h6",color:"textPrimary",sx:D,children:[(0,f.jsxs)("span",{children:[O,j("\u5f80")]}),(0,f.jsx)("b",{children:(0,u.iF)(M[b])})]}),secondary:(0,f.jsx)(P,{name:(0,u.iF)(G.name[b]),location:G.location,fares:E,faresHoliday:$,seq:parseInt(N,10)}),secondaryTypographyProps:{component:"h4",variant:"subtitle2"},sx:R}),"time"===m&&(0,f.jsx)(v,{routeId:t,value:n}),"order"===m&&(0,f.jsx)(s.Z,{sx:H,children:(0,f.jsx)(S.Z,{})}),"delete"===m&&(0,f.jsx)(s.Z,{sx:H,children:(0,f.jsx)(r.Z,{onClick:e=>h&&h(e),children:(0,f.jsx)(W.Z,{})})})]}),(0,f.jsx)(c.Z,{})]})},T=(e,t)=>{for(let n=0;n<e.length;++n)if(e[n]in t)return t[e[n]]},z={display:"grid",gap:e=>e.spacing(1),gridTemplateColumns:"15% 1fr minmax(18%, max-content)",padding:e=>"".concat(e.spacing(.5)," ").concat(e.spacing(1)),color:"rgba(0,0,0,0.87)"},R={overflow:"hidden"},D={display:"flex",alignItems:"baseline","& > span":{fontSize:"0.85rem",marginRight:e=>e.spacing(.5)}},H={color:e=>e.palette.text.primary,flex:1,display:"flex",alignItems:"center",justifyContent:"center"}},9530:(e,t,n)=>{n.d(t,{Z:()=>i});n(7313);var a=n(1113),o=n(6417);const i=e=>{let{routeNo:t,component:n,align:i}=e;const[s,r]=t.match(/[0-9][A-Z]+$/)?[t.slice(0,-1),t.slice(-1)]:[t,""];return(0,o.jsxs)(a.Z,{component:n||"h2",align:i,variant:"caption",color:"textPrimary",sx:l,children:[(0,o.jsx)("span",{children:s}),(0,o.jsx)("span",{children:r})]})},l={lineHeight:"normal",display:"inline","& > span:nth-of-type(1)":{fontSize:"1.5rem",fontFamily:'"Oswald", sans-serif'},"& > span:nth-of-type(2)":{fontSize:"1.2rem",fontFamily:'"Oswald", sans-serif'}}},9119:(e,t,n)=>{n.d(t,{e:()=>s});var a=n(7313),o=n(4511),i=n(4395),l=n(6060);const s=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{db:{routeList:n,stopList:s},isVisible:c,refreshInterval:d}=(0,a.useContext)(l.ZP),[p,u]=e.split("/"),x=n[p]||r,[g,m]=(0,a.useState)(null),{i18n:{language:h}}=(0,o.$)(),j=(0,a.useRef)(!1),f=(0,a.useCallback)((()=>c&&"prerendering"!==navigator.userAgent?(0,i.Gx)({...x,seq:parseInt(u,10),stopList:s,language:h}).then((e=>{j.current&&m(e)})):(m(null),new Promise((e=>e([]))))),[c,h,x,u,s]);return(0,a.useEffect)((()=>{if(t)return;j.current=!0;const e=setInterval((()=>{f()}),d);return f(),()=>{j.current=!1,clearInterval(e)}}),[e,f,d,t]),g},r={co:[""],stops:{"":[""]},dest:{zh:"",en:""},bound:"",nlbId:0,gtfsId:"",fares:[],faresHoliday:[]}}}]);
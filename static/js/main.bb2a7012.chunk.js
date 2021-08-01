(this["webpackJsonpreact-bitbay-orderbook"]=this["webpackJsonpreact-bitbay-orderbook"]||[]).push([[0],{15:function(t,e,n){t.exports={component:"Logo_component__3RLnE",image:"Logo_image__3BiaS"}},16:function(t,e,n){t.exports={component:"ListHead_component__3gzUe",selectWrapper:"ListHead_selectWrapper__33dg9"}},17:function(t,e,n){t.exports={component:"ColumnTitle_component__2z8Uk",bid:"ColumnTitle_bid__1tlcm",ask:"ColumnTitle_ask__OGZL9"}},18:function(t,e,n){t.exports={component:"ListColumn_component__15v4E"}},19:function(t,e,n){t.exports={component:"List_component__3G89F",list:"List_list__1bJoo"}},20:function(t,e,n){t.exports={component:"ListWrapper_component__31mX7",loaderWrapper:"ListWrapper_loaderWrapper__HB-2A"}},24:function(t,e,n){t.exports={component:"Header_component__2CTpz"}},25:function(t,e,n){t.exports={component:"Section_component__34vef"}},7:function(t,e,n){t.exports={component:"ListItem_component__2id-J",bid:"ListItem_bid__1uLDb",ask:"ListItem_ask__18jon",head:"ListItem_head__3ZsJo",table:"ListItem_table__GpSC_",item:"ListItem_item__fXc3Q"}},71:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),c=n(8),r=n.n(c),a=n(5),s=n(6),l={header:{logoAlt:"Bitbay Orderbook",logoSrc:n.p+"static/media/logo.923c3e8e.svg"},contentContainer:{title:"Orderbook"},list:{tickerApiUrl:"https://api.bitbay.net/rest/trading/ticker",orderbookApiUrl:"https://api.bitbay.net/rest/trading/orderbook/",initialOrderbookPair:"BTC-PLN",headItemRate:"RATE",headItemTitle:"head",bidColumnTitle:"bid",askColumnTitle:"ask",componentInitialState:"hidden",componentAnimation:"visible"}},d=n(15),m=n.n(d),j=n(1),b=function(t){var e=t.src,n=t.alt;return Object(j.jsx)("h1",{className:m.a.component,children:Object(j.jsx)("img",{className:m.a.image,src:e,alt:n})})},u=n(24),p=n.n(u),O=function(){var t={src:l.header.logoSrc,alt:l.header.logoAlt};return Object(j.jsx)("header",{className:p.a.component,children:Object(j.jsx)(s.Grid,{children:Object(j.jsx)(s.Row,{children:Object(j.jsx)(s.Col,{xs:!0,children:Object(j.jsx)(b,Object(a.a)({},t))})})})})},h=n(25),x=n.n(h),_=function(t){var e=t.Content;return Object(j.jsx)("section",{className:x.a.component,children:Object(j.jsx)(e,{})})},f=n(9),v=n(26),k=n.n(v),g=n(28),y=n(74),C=n(27),L=function(t){return t.split("-")[0]},A={visible:{opacity:1},hidden:{opacity:0}},I={transition:1},N=n(16),T=n.n(N),S=function(t){var e,n=t.date,i=t.marketCodesArray,o=t.setCurrentOrderbookPair;return Object(j.jsxs)("div",{className:T.a.component,children:[Object(j.jsx)(y.a.div,{className:T.a.selectWrapper,initial:l.list.componentInitialState,animate:l.list.componentAnimation,variants:{visible:{opacity:1,x:0},hidden:{opacity:0,x:-200}},transition:I,children:i&&Object(j.jsx)(C.a,{options:i,defaultValue:i.filter((function(t){return t.value===l.list.initialOrderbookPair})),onChange:function(t){o(t.value)}})}),Object(j.jsx)(y.a.div,{initial:l.list.componentInitialState,animate:l.list.componentAnimation,variants:{visible:{opacity:1,x:0},hidden:{opacity:0,x:200}},transition:I,children:(e=n,new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e))})]})},F=n(7),P=n.n(F),B=function(t){var e=t.rate,n=t.currencyAmount,i=t.cryptoAmount,o=t.title;return Object(j.jsx)("div",{className:[P.a.component,P.a[o]].join(" "),children:Object(j.jsx)("table",{className:P.a.table,children:Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:P.a.item,children:e}),Object(j.jsx)("td",{className:P.a.item,children:i}),Object(j.jsx)("td",{className:P.a.item,children:n})]})})})})},W=n(17),w=n.n(W),G=function(t){var e=t.title;return Object(j.jsx)("h2",{className:[w.a.component,w.a[e]].join(" "),children:e})},R=n(18),U=n.n(R),E=function(t){var e=t.title,n=t.items,i=t.crypto,o=t.currency;return Object(j.jsxs)("div",{className:U.a.component,children:[Object(j.jsx)(G,{title:e}),Object(j.jsxs)("div",{className:U.a.items,children:[Object(j.jsx)(B,{rate:l.list.headItemRate,currencyAmount:o,cryptoAmount:i,title:l.list.headItemTitle}),n&&n.map((function(t,n){var i,o,c=t.ca,r=t.ra,s={title:e,cryptoAmount:c,rate:r,currencyAmount:(i=r,o=c,parseFloat(i*o).toFixed(2))};return Object(j.jsx)(B,Object(a.a)({},s),n)}))]})]})},J=n(19),H=n.n(J),z=["setCurrentOrderbookPair","marketCodesArray","orderBookList"],D=function(t){var e=t.setCurrentOrderbookPair,n=t.marketCodesArray,i=t.orderBookList,o=i.buy,c=i.sell,r=i.timestamp,s=Object(g.a)(t,z),d={date:r,marketCodesArray:n,setCurrentOrderbookPair:e};return Object(j.jsxs)(y.a.div,{className:H.a.component,initial:l.list.componentInitialState,animate:l.list.componentAnimation,variants:A,transition:I,children:[Object(j.jsx)(S,Object(a.a)({},d)),Object(j.jsxs)("div",{className:H.a.list,children:[Object(j.jsx)(E,Object(a.a)({title:l.list.bidColumnTitle,items:o},s)),Object(j.jsx)(E,Object(a.a)({title:l.list.askColumnTitle,items:c},s))]})]})},X=n(20),Z=n.n(X),M=function(){var t=Object(i.useState)([]),e=Object(f.a)(t,2),n=e[0],o=e[1],c=Object(i.useState)({}),r=Object(f.a)(c,2),s=r[0],d=r[1],m=Object(i.useState)("".concat(l.list.initialOrderbookPair)),b=Object(f.a)(m,2),u=b[0],p=b[1];Object(i.useEffect)((function(){fetch("".concat(l.list.tickerApiUrl)).then((function(t){return t.json()})).then((function(t){var e=[];for(var n in t.items)e.push({value:n,label:n});o(e)})).catch((function(t){console.log(t)}));var t=setInterval((function(){fetch(l.list.orderbookApiUrl+u).then((function(t){return t.json()})).then((function(t){d(t)})).catch((function(t){console.log(t)}))}),2e3);return function(){return clearInterval(t)}}),[u]);var O,h,x={currency:(O="".concat(u),O.split("-")[1]),crypto:L("".concat(u)),marketCodesArray:n,setCurrentOrderbookPair:p};return Object(j.jsx)("div",{className:Z.a.component,children:(h=Object(a.a)({},s),0===Object.keys(h).length?Object(j.jsx)("div",{className:Z.a.loaderWrapper,children:Object(j.jsx)(k.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:0})}):Object(j.jsx)(D,Object(a.a)({orderBookList:s},x)))})},Q=function(){return Object(j.jsx)("main",{children:Object(j.jsx)(s.Grid,{children:Object(j.jsx)(s.Row,{children:Object(j.jsx)(s.Col,{xs:!0,children:Object(j.jsx)(_,{Content:M})})})})})},V=function(){return Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)(O,{}),Object(j.jsx)(Q,{})]})},q=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),i(t),o(t),c(t),r(t)}))};n(71);r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root")),q()}},[[72,1,2]]]);
//# sourceMappingURL=main.bb2a7012.chunk.js.map
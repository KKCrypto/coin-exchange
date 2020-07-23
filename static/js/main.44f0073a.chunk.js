(this["webpackJsonpcoin-exchange"]=this["webpackJsonpcoin-exchange"]||[]).push([[0],{27:function(n,e,t){n.exports=t.p+"static/media/logo.5d5d9eef.svg"},31:function(n,e,t){n.exports=t(55)},36:function(n,e,t){},55:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(21),i=t.n(c),o=(t(36),t(29)),l=t(4),u=t.n(l),s=t(8),d=t(7),f=t(1),h=t(2);function m(){var n=Object(f.a)(["\n    // border: 1px solid gray;\n    width: 15%;\n    text-align: center;\n    padding:1vh;\n    padding-right: 1vh;\n    margin: .3vh;\n"]);return m=function(){return n},n}function p(){var n=Object(f.a)(["\n    border: 1px solid gray;\n    width: 15%;\n    text-align: right;\n    padding:1vh;\n    padding-right: 1vh;\n    margin: .3vh;\n"]);return p=function(){return n},n}function v(){var n=Object(f.a)(["\n    border: 1px solid gray;\n    width: 15%;\n    text-align: left;\n    padding:1vh;\n    padding-left: 1vh;\n    margin: .3vh;\n"]);return v=function(){return n},n}function g(){var n=Object(f.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n"]);return g=function(){return n},n}var b=h.a.div(g()),E=h.a.div(v()),j=h.a.div(p()),w=h.a.div(m());function k(n){return r.a.createElement(b,null,r.a.createElement(E,null,n.name),r.a.createElement(E,null,n.ticker),r.a.createElement(j,null,n.percent_change),r.a.createElement(j,null,"$",n.price),n.showBalance?r.a.createElement(j,null,n.balance):r.a.createElement(j,null,"*****"),r.a.createElement(w,null,r.a.createElement("form",{action:"#",method:"POST"},r.a.createElement("button",{onClick:function(e){e.preventDefault(),n.handleRefresh(n.tickerId)}},"Refresh"))))}function x(){var n=Object(f.a)(["\n    width: 16.66%;\n    font-size: 1.5rem;\n    border: 1px solid gray;\n    margin: .3vh;\n"]);return x=function(){return n},n}function y(){var n=Object(f.a)(["\n    display: flex;\n    margin-bottom: 1vh;\n    width: 100%;\n    justify-content: center\n        \n"]);return y=function(){return n},n}function O(){var n=Object(f.a)(["\n\n    margin: 50px auto;\n    display: inline-block;\n    font-size: 1rem;\n    width: 80%\n    \n"]);return O=function(){return n},n}var B=h.a.div(O()),S=h.a.div(y()),C=h.a.div(x());function D(n){return r.a.createElement(B,null,r.a.createElement(S,null,r.a.createElement(C,null,"Name"),r.a.createElement(C,null,"Ticker"),r.a.createElement(C,null,"% 15m"),r.a.createElement(C,null,"Price"),r.a.createElement(C,null,"Balance"),r.a.createElement(C,null,"Actions")),r.a.createElement("div",null,n.coinData.map((function(e){var t=e.key,a=e.name,c=e.ticker,i=e.percent_change,o=e.price,l=e.balance;return r.a.createElement(k,{key:t,handleRefresh:n.handleRefresh,name:a,ticker:c,percent_change:i,showBalance:n.showBalance,balance:l,price:o,tickerId:t})}))))}function R(){var n=Object(f.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2vh;\n    color: white;\n    width: 250px;\n    padding: 1vh 0;\n    background-color: #333;\n    border: 3px solid white;\n    border-radius: 25px;\n    cursor: pointer;\n"]);return R=function(){return n},n}function _(){var n=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 3vh;\n    width: 80%;\n    background-color: #61dafb;\n\n"]);return _=function(){return n},n}function z(){var n=Object(f.a)(["\n    padding: 3vh 0;\n    background-color: #61dafb;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n"]);return z=function(){return n},n}var N=h.a.section(z()),$=h.a.div(_()),q=h.a.div(R());function A(n){var e=n.showBalance?"Hide Balance":"Show Balance",t=r.a.createElement($,null,"Balance: $ *****");return n.showBalance&&(t=r.a.createElement($,null,"Balance: $ ",n.amount)),r.a.createElement(N,null,r.a.createElement($,null,t,r.a.createElement(q,{onClick:n.handleBalanceVisibilityChange},e)))}var I=t(25),P=t(26),U=t(30),F=t(28),J=t(27),T=t.n(J);function V(){var n=Object(f.a)(["\n    font-size: 4rem;\n"]);return V=function(){return n},n}function W(){var n=Object(f.a)(["\n    background-color: #333;\n    min-height: 20vh;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    color: white;ne;\n"]);return W=function(){return n},n}function H(){var n=Object(f.a)(["\n    height: 8rem;\n    pointer-events: none;\n"]);return H=function(){return n},n}var M=h.a.img(H()),G=h.a.header(W()),K=h.a.h1(V()),L=function(n){Object(U.a)(t,n);var e=Object(F.a)(t);function t(){return Object(I.a)(this,t),e.apply(this,arguments)}return Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement(G,{className:"App-header"},r.a.createElement(M,{src:T.a,alt:"React logo"}),r.a.createElement(K,null,"Coin Exchange"))}}]),t}(a.Component),Q=t(6),X=t.n(Q);function Y(){var n=Object(f.a)(["\n\ttext-align: center;\n\tbackground-color: lightgray;\n"]);return Y=function(){return n},n}var Z=h.a.div(Y()),nn=function(n){return parseFloat(Number(n).toFixed(4))};var en=function(n){var e=Object(a.useState)(1e4),t=Object(d.a)(e,2),c=t[0],i=(t[1],Object(a.useState)(!1)),l=Object(d.a)(i,2),f=l[0],h=l[1],m=Object(a.useState)([]),p=Object(d.a)(m,2),v=p[0],g=p[1],b=function(){var n=Object(s.a)(u.a.mark((function n(){var e,t,a,r,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,X.a.get("https://api.coinpaprika.com/v1/coins");case 2:return e=n.sent,t=e.data.slice(0,10).map((function(n){return n.id})),"https://api.coinpaprika.com/v1/tickers/",a=t.map((function(n){return X.a.get("https://api.coinpaprika.com/v1/tickers/"+n)})),n.next=8,Promise.all(a);case 8:r=n.sent,c=r.map((function(n){var e=n.data;return{key:e.id,name:e.name,ticker:e.symbol,percent_change:e.quotes.USD.percent_change_15m,balance:0,price:nn(e.quotes.USD.price)}})),g(c);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(a.useEffect)((function(){0===v.length&&b()}));var E=function(){var n=Object(s.a)(u.a.mark((function n(e){var t,a,r,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.coinpaprika.com/v1/tickers/".concat(e),n.next=3,X.a.get(t);case 3:a=n.sent,r=nn(a.data.quotes.USD.price),c=v.map((function(n){var t=Object(o.a)({},n);return e===n.key&&(t.price=r),t})),g(c);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement(Z,{className:"App"},r.a.createElement(L,null),r.a.createElement(A,{amount:c,showBalance:f,handleBalanceVisibilityChange:function(){h((function(n){return!n}))}}),r.a.createElement(D,{coinData:v,showBalance:f,handleRefresh:E}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(en,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.44f0073a.chunk.js.map
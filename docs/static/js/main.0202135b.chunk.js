(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_tfei","type":"address"},{"internalType":"address","name":"_tdai","type":"address"},{"internalType":"address","name":"_trai","type":"address"},{"internalType":"address","name":"_tusdc","type":"address"},{"internalType":"address","name":"_tusdt","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tdai","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tfei","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trai","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"transferOwnerShip","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tusdc","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tusdt","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawAllOut","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},43:function(e,t,n){},45:function(e,t,n){},48:function(e,t){},58:function(e,t,n){"use strict";n.r(t);var a=n(12),s=n.n(a),i=n(31),r=n.n(i),c=(n(43),n(2)),d=n.n(c),u=n(32),p=n(25),l=(n(45),n(33)),o=n(24),b=n(6),y=l,f=new o.a.providers.Web3Provider(window.ethereum).getSigner(),h=new o.a.Contract("0x60288dec3343db133a8288c70b8e151e52627ee2",y,f);var m=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)("Request"),r=Object(p.a)(i,2),c=r[0],l=r[1],o=function(){var e=Object(u.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),l("Requesting..."),e.next=4,window.ethereum.enable();case 4:return a=e.sent,a[0],e.next=8,h.estimateGas.mint(n);case 8:return e.sent,e.next=11,h.mint(n);case 11:e.sent,l("Request"),alert("Mint success!");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"cargo",children:[Object(b.jsxs)("header",{className:"AppHeader",children:[Object(b.jsx)("div",{className:"logo",children:"YIN"}),Object(b.jsxs)("div",{className:"links",children:[Object(b.jsx)("div",{className:"walletBlock"}),Object(b.jsx)("a",{href:"https://alpha.yin.finance",children:"Alpha Test YIN"})]})]}),Object(b.jsx)("div",{className:"case",children:Object(b.jsxs)("form",{className:"form",onSubmit:o,children:[Object(b.jsx)("p",{children:"Request tokens from YIN Finance Alpha Faucet"}),Object(b.jsxs)("p",{children:["You will get 100 ",Object(b.jsx)("a",{href:"https://rinkeby.etherscan.io/address/0x67751356e2ac7ca20cb991bf3edf7d4a439b7cbe",target:"_blank",children:"tusdt"}),", 100",Object(b.jsx)("a",{href:"https://rinkeby.etherscan.io/address/0x8543a038bef4de734b4bc2235a97f7eaf439625f",target:"_blank",children:"tdai"}),", 100",Object(b.jsx)("a",{href:"https://rinkeby.etherscan.io/address/0x130785fd1f629956d221d7226f4c03e1b692064a",target:"_blank",children:"tfei"}),", 100",Object(b.jsx)("a",{href:"https://rinkeby.etherscan.io/address/0x849cdf076a4cccc724258d88caebfd566e808305",target:"_blank",children:"trai"}),", 100",Object(b.jsx)("a",{href:"https://rinkeby.etherscan.io/address/0x3ad6b1f58e37f17f295edc74200ce140bd3020c3",target:"_blank",children:"tusdc"})," in Rinkeby."]}),Object(b.jsx)("label",{children:Object(b.jsx)("input",{className:"input",type:"text",name:"name",value:n,onChange:function(e){return s(e.target.value)}})}),Object(b.jsx)("button",{className:"button",type:"submit",value:"Confirm",children:c})]})})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),j()}},[[58,1,2]]]);
//# sourceMappingURL=main.0202135b.chunk.js.map
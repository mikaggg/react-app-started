(this["webpackJsonpreact-typescript-test"]=this["webpackJsonpreact-typescript-test"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"variable":{"baseColor":"#ff0000","textColor":"#333","textColor_w":"#fff","bgColor_g":"#eee","textSize":"14px"}}')},20:function(e){e.exports=JSON.parse('{"message":{"text":"\u3053\u3093\u306b\u3061\u306f\u3001\u30ea\u30a2\u30af\u30c8","selector":".hello"}}')},44:function(e,t,n){"use strict";n.r(t);var a,r,c=n(8),s=n(0),i=n.n(s),o=n(24),j=n.n(o),l=n(5),x=n(9),d=Object(x.b)(a||(a=Object(c.a)(["\n    width: 100%;\n    max-width: 1000px;\n    padding: 20px;\n    margin: 0 auto;\n"]))),b=n(12),h=n(13),O=n(1),p=l.data.header.title,u=l.data.header.text,m=b.variable,f="/react-app-started",g=x.c.header(r||(r=Object(c.a)(["\n    ","\n    text-align: center;\n    background: ",";\n    padding: 20px;\n    & h2 {\n        font-size: 2em;\n    }\n    & nav span {\n        padding-right: 0.5em;\n    }\n"])),d,m.bgColor_g);var S,v=function(){return Object(O.jsxs)(g,{children:[Object(O.jsx)("h2",{children:p}),Object(O.jsx)("p",{dangerouslySetInnerHTML:{__html:u}}),Object(O.jsxs)("nav",{children:[Object(O.jsx)("span",{children:"MENU:"}),Object(O.jsx)("span",{children:Object(O.jsx)(h.b,{to:f+"/",children:"Home"})}),Object(O.jsx)("span",{children:Object(O.jsx)(h.b,{to:f+"/other",children:"Other"})})]})]})},_=n(20),C={text:_.message.text,selector:_.message.selector},y=C.text,L=C.selector,M=l.data.inner,T=b.variable,z=x.c.section(S||(S=Object(c.a)(["\n    & h2 {\n        font-size: 1.25em;\n        color: ",";\n    }\n"])),T.baseColor);var H,I=function(){return Object(s.useEffect)((function(){document.querySelector(L).innerHTML=y,console.log("text-> "+y)})),Object(O.jsx)("div",{className:"inner",children:M.map((function(e,t){return Object(O.jsxs)(z,{children:[Object(O.jsx)("h2",{children:e.title}),Object(O.jsx)("p",{dangerouslySetInnerHTML:{__html:e.text}})]},t)}))})},J=n(3),N=l.data.main.title,w=l.data.main.text,F=l.data.other.title,k=l.data.other.text,E="/react-app-started",B=x.c.section(H||(H=Object(c.a)(["\n    ","\n    & h1 {\n        font-size: 1.5em;\n    }\n"])),d);var P,q=function(){return Object(O.jsx)("main",{children:Object(O.jsx)(B,{children:Object(O.jsxs)(J.c,{children:[Object(O.jsxs)(J.a,{exact:!0,path:E+"/",children:[Object(O.jsx)("h1",{children:N}),Object(O.jsx)("p",{dangerouslySetInnerHTML:{__html:w}}),Object(O.jsx)(I,{})]}),Object(O.jsxs)(J.a,{path:E+"/other",children:[Object(O.jsx)("h1",{children:F}),Object(O.jsx)("p",{dangerouslySetInnerHTML:{__html:k}})]})]})})})},A=l.data.footer.text,D=x.c.footer(P||(P=Object(c.a)(["\n    ","\n    text-align: center;\n"])),d);var U=function(){return Object(O.jsx)(D,{children:Object(O.jsx)("p",{dangerouslySetInnerHTML:{__html:A}})})},$=n(21),G=l.data.main.title,K=l.data.main.text,Q=l.data.other.title,R=l.data.other.text,V="/react-app-started";var W,X=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(h.a,{children:[Object(O.jsxs)(J.c,{children:[Object(O.jsx)(J.a,{exact:!0,path:V+"/",children:Object(O.jsx)($.a,{title:G,meta:[{name:"description",content:K}]})}),Object(O.jsx)(J.a,{path:V+"/other",children:Object(O.jsx)($.a,{title:Q,meta:[{name:"description",content:R}]})})]}),Object(O.jsx)(v,{}),Object(O.jsx)(q,{}),Object(O.jsx)(U,{})]})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},Z=b.variable,ee=Object(x.a)(W||(W=Object(c.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    font-size: ",";\n    color: ",";\n    *, *:before, *:after {\n      box-sizing: border-box;\n    }\n    a {\n      color: $base-color;\n    }\n  }\n"])),Z.textSize,Z.textColor);j.a.render(Object(O.jsxs)(i.a.StrictMode,{children:[Object(O.jsx)(ee,{}),Object(O.jsx)(X,{})]}),document.getElementById("root")),Y()},5:function(e){e.exports=JSON.parse('{"data":{"header":{"title":"\u30b8\u30e3\u30f3\u30d7\u7387\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc","text":"\u6587\u5b57\u5217\u30b8\u30e3\u30f3\u30d7\u7387\u3092\u52d5\u7684\u306b\u5909\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059"},"main":{"title":"\u30e1\u30a4\u30f3\u30da\u30fc\u30b8\u3067\u3059","text":"\u30e1\u30a4\u30f3\u30da\u30fc\u30b8\u306e\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3063\u305f\u3089\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002"},"other":{"title":"\u5225\u30da\u30fc\u30b8\u3067\u3059","text":"\u5225\u30da\u30fc\u30b8\u306e\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002"},"inner":[{"title":"CSS\uff08\u6587\u5b57\u8272\uff09","text":"CSS\u3067\u30bf\u30a4\u30c8\u30eb\u306e\u6587\u5b57\u8272\u5909\u66f4\u3002"},{"title":"JS\uff08\u6587\u5b57\u5217\uff09","text":"JS\u3067\u30c6\u30ad\u30b9\u30c8\u306e\u6587\u5b57\u5217\u8ffd\u52a0\u300c<span class=\'hello\'></span>\u300d"}],"footer":{"text":"\xa9\ufe0f jump-rate-generator"}}}')}},[[44,1,2]]]);
//# sourceMappingURL=main.4dd43180.chunk.js.map
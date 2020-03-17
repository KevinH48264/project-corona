(this["webpackJsonpbootcamp-web-starter"]=this["webpackJsonpbootcamp-web-starter"]||[]).push([[0],{57:function(e,t,n){e.exports=n(79)},79:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(17),i=n.n(o),l=n(81),c=n(22),u=n(15),s=n(6),d={colors:{},fonts:{}},m=n(42),p=n(52),f=n(51),h=n(41),b=n(7),g=new f.a({uri:"http://localhost:5000/graphql",credentials:"include"}),v=new b.a((function(e,t){var n=localStorage.getItem("token");return n&&e.setContext({headers:{authorization:n}}),t(e)})),E=Object(h.a)((function(){})),w=new m.a({cache:new p.a,link:b.a.from([E,v,g])}),x=n(30),y=n(8);function j(){var e=Object(y.a)(["\n     @import url('http://fonts.googleapis.com/css?family=Montserrat:light');  \n     font-family: 'Montserrat', sans-serif;\n"]);return j=function(){return e},e}function k(){var e=Object(y.a)(["\n    display: flex;\n    justify-content: center;  \n    width: 100%; \n    background-color: white; \n    /* padding-top: 20px; */\n"]);return k=function(){return e},e}function O(){var e=Object(y.a)(["\n    display: flex; \n    justify-content: center; \n    max-width: 800px; \n    flex-direction: column;\n"]);return O=function(){return e},e}function S(){var e=Object(y.a)(["\n    display: flex;\n    justify-content: center;  \n    width: 100%; \n"]);return S=function(){return e},e}function C(){var e=Object(y.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;  \n    align-items: center;\n    max-width: 800px;\n    padding: 20px;\n    color: white;\n"]);return C=function(){return e},e}function A(){var e=Object(y.a)(["\n    display: flex;\n    justify-content: center;  \n    width: 100%; \n    background-color: #008037; \n    padding-top: 20px;\n    padding-bottom: 0px;\n"]);return A=function(){return e},e}function I(){var e=Object(y.a)(["\n    display: flex; \n    width: 100%; \n    margin-left: auto; \n    margin-right: auto; \n    justify-content: center;\n"]);return I=function(){return e},e}function L(){var e=Object(y.a)(["\n    width: 100%; \n"]);return L=function(){return e},e}function M(){var e=Object(y.a)(["\n    display: flex; \n    justify-content: space-between;\n    width: 50%;\n    max-width: 1140px;\n    padding: 0px 100px 0px 100px;\n    margin-top: 60px;\n"]);return M=function(){return e},e}function T(){var e=Object(y.a)(["\n    display: flex; \n    align-items: center; \n    width: 50%; \n"]);return T=function(){return e},e}function V(){var e=Object(y.a)(["\n    padding: 0px 1vw; \n    font-size: 0.8rem; \n    color: black;\n    text-decoration: none;\n"]);return V=function(){return e},e}function z(){var e=Object(y.a)(["\n    display: flex; \n    flex-wrap: nowrap; \n    width: 100%; \n    max-width: 1140px; \n    justify-content: space-between; \n    align-items: center; \n    padding-right: 20px;\n"]);return z=function(){return e},e}function B(){var e=Object(y.a)(["\n    display: flex; \n    width: 100%; \n    margin-left: auto; \n    margin-right: auto; \n    justify-content: center;\n    position: absolute; \n    top: 0; \n    height: 100px;\n    background-color: white;\n"]);return B=function(){return e},e}function H(){var e=Object(y.a)(["\n    min-height: 40vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n"]);return H=function(){return e},e}function _(){var e=Object(y.a)(["\n    min-height: 90vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n\n"]);return _=function(){return e},e}var F=s.b.div(_()),J=s.b.div(H()),N=s.b.div(B()),P=s.b.div(z()),U=Object(s.b)(c.b)(V()),W=(s.b.div(T()),s.b.div(M()),s.b.div(L()),s.b.div(I()),s.b.div(A())),q=s.b.div(C()),D=s.b.div(S()),G=s.b.div(O()),K=(s.b.div(k()),s.b.div(j())),Q=n(53),R=n(56),X=function(e){var t=e.status,n=e.message,o=e.onValidated,i=Object(r.useState)(""),l=Object(Q.a)(i,2),c=l[0],u=l[1];return a.a.createElement(D,null,a.a.createElement(G,null,"sending"===t&&a.a.createElement("div",{style:{color:"blue"}},"sending..."),"error"===t&&a.a.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:n}}),"success"===t&&a.a.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:n}}),a.a.createElement("input",{style:{fontFamily:"inherit",fontSize:"1rm",width:"200px",borderColor:"black",padding:"10px"},value:c,onChange:function(e){return u(e.target.value)},type:"email",placeholder:"Email Address"}),a.a.createElement("br",null),a.a.createElement("button",{type:"button",style:{fontFamily:"inherit",borderColor:"black",width:"100%",fontSize:"1rm",padding:"10px",color:"white",background:"rgb(0, 50, 0)",cursor:"pointer"},onClick:function(){return o({EMAIL:c}),void u("")}},"Submit")))},Y=function(){return a.a.createElement("div",{style:{width:"75vw",padding:"20px",backgroundColor:""},id:"email"},a.a.createElement(D,null,a.a.createElement("h1",{style:{marginTop:"50px",marginBottom:"0px",color:"black",fontWeight:"300",textAlign:"center"}},"Sign up to join our waitlist!")),a.a.createElement(D,{style:{marginBottom:"30px"}},a.a.createElement("hr",{style:{border:"1.5px solid",borderColor:"rgb(0, 0, 0)",width:"200px"}})),a.a.createElement(D,null,a.a.createElement(G,null,a.a.createElement(R.a,{url:"https://gmail.us19.list-manage.com/subscribe/post?u=05ae8a7dc2c97805cda60ef6d&id=8e172d8d94",render:function(e){var t=e.subscribe,n=e.status,r=e.message;return a.a.createElement(X,{status:n,message:r,onValidated:function(e){return t(e)}})}}))))},Z=function(){return a.a.createElement("div",{id:"about"},a.a.createElement(W,null,a.a.createElement(q,null,a.a.createElement("h1",null,"All the information and resources on the Coronavirus (COVID-19), easily accessible in one place"),a.a.createElement("br",null),a.a.createElement("p",null,"Put together by a team of 20 incredible students from around the United States, Project Corona provides a plethora of information and resources to help you prepare for and navigate the global pandemic. Our iOS and Android apps come loaded with live outbreak trackers, testing center information, breaking news stories from verified sources, live travel information, along with verified information on best practices, knowledge about the virus, educational toolkits, student resources, and crisis contact information."),a.a.createElement("p",null," Co-Founders Satvik Sethi and Will Hunter started this project with the hope that we are able to help a lot of people around the world in finding the information and resources they need to protect themselves and their loved ones from the outbreak. "),a.a.createElement(Y,null))))},$=n(23),ee=function(){return a.a.createElement("div",null,a.a.createElement(N,null,a.a.createElement(P,null,a.a.createElement("img",{style:{width:"100px"},src:"./project-corona-logo.jpg",alt:""}),a.a.createElement("div",{className:"menu"},a.a.createElement(U,{to:"/"},a.a.createElement($.Link,{to:"home",spy:!0,smooth:!0,offset:-50,duration:1e3},"Home")),a.a.createElement(U,{to:"/"},a.a.createElement($.Link,{to:"about",spy:!0,smooth:!0,offset:-50,duration:1e3},"About")),a.a.createElement(U,{to:"/"},a.a.createElement($.Link,{to:"email",spy:!0,smooth:!0,offset:-50,duration:1e3},"Join Us"))))))},te=function(){return a.a.createElement(K,null,a.a.createElement(ee,null),a.a.createElement(x.BrowserView,null,a.a.createElement(F,null,a.a.createElement("img",{style:{width:"100%",paddingTop:"100px"},src:"./project-covid-banner.jpg",alt:""}))),a.a.createElement(x.MobileView,null,a.a.createElement(J,null,a.a.createElement("img",{style:{width:"100%",paddingTop:"100px"},src:"./project-covid-banner.jpg",alt:""}))),a.a.createElement(Z,null))},ne=function(){return a.a.createElement(c.a,null,a.a.createElement(s.a,{theme:d},a.a.createElement(l.a,{client:w},a.a.createElement("div",{className:"App"},a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/",component:te}))))))};i.a.render(a.a.createElement(ne,null),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.30171dde.chunk.js.map
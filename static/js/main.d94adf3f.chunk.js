(this["webpackJsonpbootcamp-web-starter"]=this["webpackJsonpbootcamp-web-starter"]||[]).push([[0],{57:function(e,n,t){e.exports=t(79)},79:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(17),o=t.n(i),l=t(81),c=t(22),u=t(15),s=t(4),m={colors:{},fonts:{}},d=t(42),p=t(52),f=t(51),h=t(41),g=t(8),v=new f.a({uri:"http://localhost:5000/graphql",credentials:"include"}),b=new g.a((function(e,n){var t=localStorage.getItem("token");return t&&e.setContext({headers:{authorization:t}}),n(e)})),E=Object(h.a)((function(){})),y=new d.a({cache:new p.a,link:g.a.from([E,b,v])}),x=t(30),w=t(7);function S(){var e=Object(w.a)(["\n     @import url('//fonts.googleapis.com/css?family=Montserrat:light');  \n     font-family: 'Montserrat', sans-serif;\n"]);return S=function(){return e},e}function j(){var e=Object(w.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n"]);return j=function(){return e},e}function k(){var e=Object(w.a)(["\n    margin: 1vh 1vw;\n    border: solid black 0.5px;\n    display: flex;\n"]);return k=function(){return e},e}function z(){var e=Object(w.a)(["\n    display: flex; \n    justify-content: center; \n    flex-direction: row;\n    max-width: 1140px; \n"]);return z=function(){return e},e}function O(){var e=Object(w.a)(["\n    display: flex;\n    justify-content: center;  \n    width: 100%; \n    background-color: white; \n    flex-direction: column;\n    align-items: center;\n    /* padding-top: 20px; */\n"]);return O=function(){return e},e}function C(){var e=Object(w.a)(["\n    display: flex; \n    justify-content: center; \n    max-width: 800px; \n    flex-direction: column;\n"]);return C=function(){return e},e}function U(){var e=Object(w.a)(["\n    display: flex;\n    justify-content: center;  \n    width: 100%; \n"]);return U=function(){return e},e}function A(){var e=Object(w.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;  \n    align-items: center;\n    max-width: 800px;\n    padding: 20px;\n    color: white;\n"]);return A=function(){return e},e}function W(){var e=Object(w.a)(["\n    display: flex;\n    justify-content: center;  \n    width: 100%; \n    background-color: #008037; \n    padding-top: 20px;\n    padding-bottom: 0px;\n"]);return W=function(){return e},e}function M(){var e=Object(w.a)(["\n    display: flex; \n    width: 100%; \n    margin-left: auto; \n    margin-right: auto; \n    justify-content: center;\n"]);return M=function(){return e},e}function L(){var e=Object(w.a)(["\n    width: 100%; \n"]);return L=function(){return e},e}function T(){var e=Object(w.a)(["\n    display: flex; \n    justify-content: space-between;\n    width: 50%;\n    max-width: 1140px;\n    padding: 0px 100px 0px 100px;\n    margin-top: 60px;\n"]);return T=function(){return e},e}function V(){var e=Object(w.a)(["\n    display: flex; \n    align-items: center; \n    width: 50%; \n"]);return V=function(){return e},e}function F(){var e=Object(w.a)(["\n    padding: 0px 1vw; \n    font-size: 0.8rem; \n    color: black;\n    text-decoration: none;\n"]);return F=function(){return e},e}function D(){var e=Object(w.a)(["\n    display: flex; \n    flex-wrap: nowrap; \n    width: 100%; \n    max-width: 1140px; \n    justify-content: space-between; \n    align-items: center; \n    padding-right: 20px;\n"]);return D=function(){return e},e}function H(){var e=Object(w.a)(["\n    display: flex; \n    width: 100%; \n    margin-left: auto; \n    margin-right: auto; \n    justify-content: center;\n    position: absolute; \n    top: 0; \n    height: 100px;\n    background-color: white;\n"]);return H=function(){return e},e}function I(){var e=Object(w.a)(["\n    display: flex;\n    justify-content: center;\n\n"]);return I=function(){return e},e}var B=s.b.div(I()),P=s.b.div(H()),J=s.b.div(D()),N=Object(s.b)(c.b)(F()),R=(s.b.div(V()),s.b.div(T()),s.b.div(L()),s.b.div(M()),s.b.div(W())),G=s.b.div(A()),_=s.b.div(U()),K=s.b.div(C()),Y=s.b.div(O()),q=s.b.div(z()),Z=s.b.div(k()),Q=s.b.div(j()),X=s.b.div(S()),$=t(53),ee=t(56),ne=function(e){var n=e.status,t=e.message,i=e.onValidated,o=Object(a.useState)(""),l=Object($.a)(o,2),c=l[0],u=l[1];return r.a.createElement(_,null,r.a.createElement(K,null,"sending"===n&&r.a.createElement("div",{style:{color:"blue"}},"sending..."),"error"===n&&r.a.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:t}}),"success"===n&&r.a.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:t}}),r.a.createElement("input",{style:{fontFamily:"inherit",fontSize:"1rm",width:"200px",borderColor:"",outline:"none",padding:"10px"},value:c,onChange:function(e){return u(e.target.value)},type:"email",placeholder:"Email Address"}),r.a.createElement("br",null),r.a.createElement("button",{type:"button",style:{fontFamily:"inherit",border:"none",outline:"none",width:"100%",fontSize:"1rm",padding:"10px",color:"white",background:"rgb(0, 50, 0)",cursor:"pointer"},onClick:function(){return i({EMAIL:c}),void u("")}},"Submit")))},te=function(){return r.a.createElement("div",{style:{width:"75vw",padding:"20px",backgroundColor:""},id:"email"},r.a.createElement(_,null,r.a.createElement("h1",{style:{marginTop:"50px",marginBottom:"30px",color:"white",fontWeight:"300",textAlign:"center"}},"Sign up to join our waitlist!")),r.a.createElement(_,null,r.a.createElement(K,null,r.a.createElement(ee.a,{url:"https://gmail.us19.list-manage.com/subscribe/post?u=05ae8a7dc2c97805cda60ef6d&id=8e172d8d94",render:function(e){var n=e.subscribe,t=e.status,a=e.message;return r.a.createElement(ne,{status:t,message:a,onValidated:function(e){return n(e)}})}}))))},ae=function(){return r.a.createElement("div",{id:"about"},r.a.createElement(R,null,r.a.createElement(G,null,r.a.createElement("h1",null,"All the information and resources on the Coronavirus (COVID-19), easily accessible in one place"),r.a.createElement("br",null),r.a.createElement("p",null,"Put together by a team of 20 incredible students from around the United States, Project Corona provides a plethora of information and resources to help you prepare for and navigate the global pandemic. Our iOS and Android apps come loaded with live outbreak trackers, testing center information, breaking news stories from verified sources, live travel information, along with verified information on best practices, knowledge about the virus, educational toolkits, student resources, and crisis contact information."),r.a.createElement("p",null," Co-Founders Satvik Sethi and Will Hunter started this project with the hope that we are able to help a lot of people around the world in finding the information and resources they need to protect themselves and their loved ones from the outbreak. "),r.a.createElement(te,null))))},re=t(23),ie=function(){return r.a.createElement("div",null,r.a.createElement(P,null,r.a.createElement(J,null,r.a.createElement("img",{style:{width:"100px"},src:"./project-covid-logo.jpg",alt:""}),r.a.createElement("div",{className:"menu"},r.a.createElement(N,{to:"/"},r.a.createElement(re.Link,{to:"home",spy:!0,smooth:!0,offset:-50,duration:1e3},"Home")),r.a.createElement(N,{to:"/"},r.a.createElement(re.Link,{to:"about",spy:!0,smooth:!0,offset:-50,duration:1e3},"About")),r.a.createElement(N,{to:"/"},r.a.createElement(re.Link,{to:"email",spy:!0,smooth:!0,offset:-50,duration:1e3},"Sign Up"))))))},oe=function(e){var n=e.path,t=e.name,a=e.role,i=e.size,o=e.info;return r.a.createElement(Z,{style:{width:["45vw","20vw"][i],borderRadius:"2px",padding:"1%"}},r.a.createElement("img",{style:{width:["15vw","0"][i],paddingRight:"5px",margin:"0px"},src:n,alt:""}),r.a.createElement(Q,null,r.a.createElement("h2",{style:{fontSize:"1.5vw",color:"black",textAlign:"left",padding:"0px",margin:"0px"}},t),r.a.createElement("h3",{style:{fontSize:"1vw",color:"black",padding:"5px 0px",margin:"0px"}},a),r.a.createElement("p",{style:{fontSize:"0.8vw",padding:"0px",margin:"0px",width:"100%"}},o)))},le=function(){return r.a.createElement("div",{id:"team"},r.a.createElement(Y,null,r.a.createElement("h1",{style:{paddingTop:"50px",color:"rgb(0, 0, 0)",fontSize:"7vh",fontWeight:"300",margin:"0px"}},"Our Team")),r.a.createElement(Y,null,r.a.createElement("h1",{style:{paddingTop:"2vh",color:"rgb(0, 0, 0)",fontSize:"4vh",fontWeight:"300",margin:"0px"}},"Founders"),r.a.createElement(q,null,r.a.createElement(oe,{path:"./project-covid-banner.jpg",name:"Satvik Sethi",role:"Founder, Strategy & Branding",info:"Binghamton University, Senior",size:"0"}),r.a.createElement(oe,{path:"./project-covid-banner.jpg",name:"Will Hunter ",role:"Co-Founder, Product Manager",info:"Washington University, St. Louis, Sophomore",size:"0"})),r.a.createElement("h1",{style:{paddingTop:"2vh",color:"rgb(0, 0, 0)",fontSize:"4vh",fontWeight:"300",margin:"0px"}},"Tech Team"),r.a.createElement(q,null,r.a.createElement(oe,{name:"Michael Ginn",role:"Lead Software Engineer",info:"Washington University, St. Louis, Sophomore",size:"1"}),r.a.createElement(oe,{name:"Giorgio Guttilla",role:"Full Stack Developer",info:"Washington University, St. Louis, Junior",size:"1"}),r.a.createElement(oe,{name:"Simar Kapoor",role:"Data Analysis, Machine Learning",info:"Indiana University, Bloomington, Sophomore",size:"1"}),r.a.createElement(oe,{name:"Evan Molyneaux",role:"Full Stack Developer",info:"Washington University, St. Louis, Junior",size:"1"})),r.a.createElement(q,null,r.a.createElement(oe,{name:"Ayush Khandelwal",role:"Full Stack Developer",info:"University of Massachusetts, Amherst, Junior",size:"1"}),r.a.createElement(oe,{name:"Pryce Yebesi",role:"Full Stack Developer",info:"Washington University, St. Louis, Sophomore",size:"1"}),r.a.createElement(oe,{name:"Ajah Chukwuemeka",role:"Full Stack Developer",info:"Working Professional, University of Nigeria",size:"1"}),r.a.createElement(oe,{name:"Adam Jacobowitz",role:"Full Stack Developer",info:"Working Professional, Ohio State University",size:"1"})),r.a.createElement(q,null,r.a.createElement(oe,{name:"Kevin Huang",role:"Web Developer",info:"Harvard University, Freshman",size:"1"})),r.a.createElement("h1",{style:{paddingTop:"2vh",color:"rgb(0, 0, 0)",fontSize:"4vh",fontWeight:"300",margin:"0px",textAlign:"center"}},"Research Volunteers"),r.a.createElement(q,null,r.a.createElement(oe,{name:"Veeraj Shah",role:"Volunteer, Health Literacy",info:"University of Maryland, Junior",size:"1"}),r.a.createElement(oe,{name:"Saydi Akgul",role:"Volunteer, Information Curator",info:"Binghamton University, 2nd Year Masters",size:"1"}),r.a.createElement(oe,{name:"Zahraa Tounsi",role:"Volunteer, Information Curator",info:"Binghamton University, Senior",size:"1"}),r.a.createElement(oe,{name:"Victor Lopez-Carmen",role:"Volunteer, Information Curator",info:"Harvard Medical School",size:"1"})),r.a.createElement(q,null,r.a.createElement(oe,{name:"Brendan Eappen",role:"Volunteer, Information Curator",info:"Harvard Medical School",size:"1"}),r.a.createElement(oe,{name:"Ashwath Narayanan",role:"Volunteer, Resource Curator",info:"George Washington University",size:"1"}),r.a.createElement(oe,{name:"Dan Sudit",role:"Volunteer, Resource Curator",info:"New York University",size:"1"})),r.a.createElement("h1",{style:{paddingTop:"2vh",color:"rgb(0, 0, 0)",fontSize:"4vh",fontWeight:"300",margin:"0px"}},"Social Media"),r.a.createElement(q,null,r.a.createElement(oe,{name:"Parth Devalia ",role:"Twitter Content Curator",info:"University of Warwick",size:"1"}))))},ce=function(){return r.a.createElement(X,null,r.a.createElement(ie,null),r.a.createElement(B,null,r.a.createElement(x.BrowserView,null,r.a.createElement("img",{style:{display:"block",width:"100%",backgroundPosition:"center",backgroundAttachment:"scroll",paddingTop:"100px"},src:"./project-covid-banner.jpg",alt:""})),r.a.createElement(x.MobileView,null,r.a.createElement("img",{style:{display:"block",maxHeight:"30vh",backgroundPosition:"center",backgroundAttachment:"scroll",paddingTop:"100px"},src:"./project-covid-banner.jpg",alt:""}))),r.a.createElement(ae,null),r.a.createElement(le,null))},ue=function(){return r.a.createElement(c.a,null,r.a.createElement(s.a,{theme:m},r.a.createElement(l.a,{client:y},r.a.createElement("div",{className:"App"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:ce}))))))};o.a.render(r.a.createElement(ue,null),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.d94adf3f.chunk.js.map
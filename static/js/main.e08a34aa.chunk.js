(this["webpackJsonpbootcamp-web-starter"]=this["webpackJsonpbootcamp-web-starter"]||[]).push([[0],{57:function(e,n,t){e.exports=t(79)},79:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(17),i=t.n(o),l=t(81),c=t(23),s=t(15),u=t(4),d={colors:{},fonts:{}},m=t(42),p=t(52),f=t(51),h=t(41),g=t(8),v=new f.a({uri:"http://localhost:5000/graphql",credentials:"include"}),b=new g.a((function(e,n){var t=localStorage.getItem("token");return t&&e.setContext({headers:{authorization:t}}),n(e)})),E=Object(h.a)((function(){})),y=new m.a({cache:new p.a,link:g.a.from([E,b,v])}),w=t(30),x=t(7);function j(){var e=Object(x.a)(["\n     @import url('//fonts.googleapis.com/css?family=Montserrat:light');  \n     font-family: 'Montserrat', sans-serif;\n"]);return j=function(){return e},e}function S(){var e=Object(x.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n"]);return S=function(){return e},e}function k(){var e=Object(x.a)(["\n    margin: 1vh 1vw;\n    border: solid black 0.5px;\n    display: flex;\n    align-items: center;\n"]);return k=function(){return e},e}function z(){var e=Object(x.a)(["\n    display: flex; \n    justify-content: center; \n    flex-direction: row;\n    max-width: 1140px; \n"]);return z=function(){return e},e}function O(){var e=Object(x.a)(["\n    display: flex;\n    justify-content: center;  \n    width: 100%; \n    background-color: white; \n    flex-direction: column;\n    align-items: center;\n    /* padding-top: 20px; */\n"]);return O=function(){return e},e}function I(){var e=Object(x.a)(["\n    display: flex; \n    justify-content: center; \n    max-width: 800px; \n    flex-direction: column;\n"]);return I=function(){return e},e}function C(){var e=Object(x.a)(["\n    display: flex;\n    justify-content: center;  \n    width: 100%; \n"]);return C=function(){return e},e}function U(){var e=Object(x.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;  \n    align-items: center;\n    max-width: 800px;\n    padding: 20px;\n    color: white;\n"]);return U=function(){return e},e}function A(){var e=Object(x.a)(["\n    display: flex;\n    justify-content: center;  \n    width: 100%; \n    background-color: #008037; \n    padding-top: 20px;\n    padding-bottom: 0px;\n"]);return A=function(){return e},e}function W(){var e=Object(x.a)(["\n    display: flex; \n    width: 100%; \n    margin-left: auto; \n    margin-right: auto; \n    justify-content: center;\n"]);return W=function(){return e},e}function T(){var e=Object(x.a)(["\n    width: 100%; \n"]);return T=function(){return e},e}function L(){var e=Object(x.a)(["\n    display: flex; \n    justify-content: space-between;\n    width: 50%;\n    max-width: 1140px;\n    padding: 0px 100px 0px 100px;\n    margin-top: 60px;\n"]);return L=function(){return e},e}function V(){var e=Object(x.a)(["\n    display: flex; \n    align-items: center; \n    width: 50%; \n"]);return V=function(){return e},e}function M(){var e=Object(x.a)(["\n    padding: 0px 1vw; \n    font-size: 0.8rem; \n    color: black;\n    text-decoration: none;\n"]);return M=function(){return e},e}function D(){var e=Object(x.a)(["\n    display: flex; \n    flex-wrap: nowrap; \n    width: 100%; \n    max-width: 1140px; \n    justify-content: space-between; \n    align-items: center; \n    padding-right: 20px;\n"]);return D=function(){return e},e}function F(){var e=Object(x.a)(["\n    display: flex; \n    width: 100%; \n    margin-left: auto; \n    margin-right: auto; \n    justify-content: center;\n    position: absolute; \n    top: 0; \n    height: 100px;\n    background-color: white;\n"]);return F=function(){return e},e}function B(){var e=Object(x.a)(["\n\n"]);return B=function(){return e},e}u.b.div(B());var H=u.b.div(F()),P=u.b.div(D()),J=Object(u.b)(c.b)(M()),N=(u.b.div(V()),u.b.div(L()),u.b.div(T()),u.b.div(W()),u.b.div(A())),R=u.b.div(U()),G=u.b.div(C()),_=u.b.div(I()),K=u.b.div(O()),Y=u.b.div(z()),q=u.b.div(k()),X=u.b.div(S()),Z=u.b.div(j()),Q=t(53),$=t(56),ee=function(e){var n=e.status,t=e.message,o=e.onValidated,i=Object(a.useState)(""),l=Object(Q.a)(i,2),c=l[0],s=l[1];return r.a.createElement(G,null,r.a.createElement(_,null,"sending"===n&&r.a.createElement("div",{style:{color:"blue"}},"sending..."),"error"===n&&r.a.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:t}}),"success"===n&&r.a.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:t}}),r.a.createElement("input",{style:{fontFamily:"inherit",fontSize:"1rm",width:"200px",borderColor:"",outline:"none",padding:"10px"},value:c,onChange:function(e){return s(e.target.value)},type:"email",placeholder:"Email Address"}),r.a.createElement("br",null),r.a.createElement("button",{type:"button",style:{fontFamily:"inherit",border:"none",outline:"none",width:"100%",fontSize:"1rm",padding:"10px",color:"white",background:"rgb(0, 50, 0)",cursor:"pointer"},onClick:function(){return o({EMAIL:c}),void s("")}},"Submit")))},ne=function(){return r.a.createElement("div",{style:{width:"75vw",padding:"20px",backgroundColor:""},id:"email"},r.a.createElement(G,null,r.a.createElement("h1",{style:{marginTop:"50px",marginBottom:"30px",color:"white",fontWeight:"300",textAlign:"center"}},"Sign up to join our waitlist!")),r.a.createElement(G,null,r.a.createElement(_,null,r.a.createElement($.a,{url:"https://gmail.us19.list-manage.com/subscribe/post?u=05ae8a7dc2c97805cda60ef6d&id=8e172d8d94",render:function(e){var n=e.subscribe,t=e.status,a=e.message;return r.a.createElement(ee,{status:t,message:a,onValidated:function(e){return n(e)}})}}))))},te=function(){return r.a.createElement("div",{id:"about"},r.a.createElement(N,null,r.a.createElement(R,null,r.a.createElement("h1",null,"All the information and resources on the Coronavirus (COVID-19), easily accessible in one place"),r.a.createElement("br",null),r.a.createElement("p",null,"Put together by a team of 20 incredible students from around the United States, Project Corona provides a plethora of information and resources to help you prepare for and navigate the global pandemic. Our iOS and Android apps come loaded with live outbreak trackers, testing center information, breaking news stories from verified sources, live travel information, along with verified information on best practices, knowledge about the virus, educational toolkits, student resources, and crisis contact information."),r.a.createElement("p",null," Co-Founders Satvik Sethi and Will Hunter started this project with the hope that we are able to help a lot of people around the world in finding the information and resources they need to protect themselves and their loved ones from the outbreak. "),r.a.createElement(ne,null))))},ae=t(19),re=function(){return r.a.createElement("div",null,r.a.createElement(H,null,r.a.createElement(P,null,r.a.createElement("img",{style:{width:"100px"},src:"./project-covid-logo.jpg",alt:""}),r.a.createElement("div",{className:"menu"},r.a.createElement(J,{to:"/"},r.a.createElement(ae.Link,{to:"home",spy:!0,smooth:!0,offset:-50,duration:1e3},"Home")),r.a.createElement(J,{to:"/"},r.a.createElement(ae.Link,{to:"about",spy:!0,smooth:!0,offset:-50,duration:1e3},"About")),r.a.createElement(J,{to:"/"},r.a.createElement(ae.Link,{to:"email",spy:!0,smooth:!0,offset:-50,duration:1e3},"Sign Up")),r.a.createElement(J,{to:"/"},r.a.createElement(ae.Link,{to:"team",spy:!0,smooth:!0,offset:-50,duration:1e3},"Our Team"))))))},oe=function(e){var n=e.path,t=e.name,a=e.role,o=e.size,i=e.info,l=e.desc;return r.a.createElement(q,{style:{width:["80vw","30vw"][o],borderRadius:"2px",padding:"1%"}},r.a.createElement("img",{style:{height:["25vh","0"][o],width:"auto",paddingRight:"5px",margin:"0px"},src:n,alt:""}),r.a.createElement(X,null,r.a.createElement("h2",{style:{fontSize:"1rem",color:"black",textAlign:"left",padding:"0px",margin:"0px"}},t),r.a.createElement("h3",{style:{fontSize:"1rem",color:"black",padding:"5px 0px",margin:"0px"}},a),r.a.createElement("p",{style:{fontSize:"1rem",paddingBottom:"15px",margin:"0px",width:"100%"}},i),r.a.createElement("p",{style:{fontSize:"1rem",paddingTop:"0px",margin:"0px",width:"100%"}},l)))},ie=function(){return r.a.createElement("div",{id:"team"},r.a.createElement(K,null,r.a.createElement("h1",{style:{paddingTop:"50px",color:"rgb(0, 0, 0)",fontSize:"7vh",fontWeight:"300",margin:"0px"}},"Our Team")),r.a.createElement(K,null,r.a.createElement("h1",{style:{paddingTop:"2vh",color:"rgb(0, 0, 0)",fontSize:"4vh",fontWeight:"300",margin:"0px"}},"Founders"),r.a.createElement(Y,null,r.a.createElement(oe,{path:"./satvik.jpg",name:"Satvik Sethi",role:"Founder, Strategy & Branding",info:"Binghamton University, Senior",size:"0",desc:"I founded Project Covid because I was overwhelmed when I tried to find information about COVID-19 online. The information that existed was far too scattered and complicated to understand, and I saw a lot of misinformation being spread. I wanted to create something that conveniently put verified information and resources in one place to help anyone who was as lost and anxious as I was. By using social media, we put together an incredible team of student volunteers passionate about helping the world, without whom this project would simply not be possible. We're on our way to helping the world! Apart from Project Covid, I'm extremely passionate about mental health, emerging technologies, music production, and UI/UX Design."})),r.a.createElement(Y,null,r.a.createElement(oe,{path:"./will.jpg",name:"Will Hunter ",role:"Co-Founder, Product Manager",info:"Washington University, St. Louis, Sophomore",size:"0",desc:"I joined Project Covid because I wanted to try and help the world during my spring break. As that spring break got elongated, I realized how important our app truly was. Working with such a talented group of student developers has made the process incredibly smooth and I could not have a better team. Outside of this project I am interested in groundbreaking startups, Esports, and music production."})),r.a.createElement("h1",{style:{paddingTop:"2vh",color:"rgb(0, 0, 0)",fontSize:"4vh",fontWeight:"300",margin:"0px"}},"Tech Team"),r.a.createElement(Y,null,r.a.createElement(oe,{name:"Michael Ginn",role:"Lead Software Engineer",info:"Washington University, St. Louis, Sophomore",size:"1"}),r.a.createElement(oe,{name:"Giorgio Guttilla",role:"Full Stack Developer",info:"Washington University, St. Louis, Junior",size:"1"}),r.a.createElement(oe,{name:"Simar Kapoor",role:"Data Analysis, Machine Learning",info:"Indiana University, Bloomington, Sophomore",size:"1"})),r.a.createElement(Y,null,r.a.createElement(oe,{name:"Evan Molyneaux",role:"Full Stack Developer",info:"Washington University, St. Louis, Junior",size:"1"}),r.a.createElement(oe,{name:"Ayush Khandelwal",role:"Full Stack Developer",info:"University of Massachusetts, Amherst, Junior",size:"1"}),r.a.createElement(oe,{name:"Pryce Yebesi",role:"Full Stack Developer",info:"Washington University, St. Louis, Sophomore",size:"1"})),r.a.createElement(Y,null,r.a.createElement(oe,{name:"Ajah Chukwuemeka",role:"Full Stack Developer",info:"Working Professional, University of Nigeria",size:"1"}),r.a.createElement(oe,{name:"Adam Jacobowitz",role:"Full Stack Developer",info:"Working Professional, Ohio State University",size:"1"}),r.a.createElement(oe,{name:"Kevin Huang",role:"Web Developer",info:"Harvard University, Freshman",size:"1"})),r.a.createElement("h1",{style:{paddingTop:"2vh",color:"rgb(0, 0, 0)",fontSize:"4vh",fontWeight:"300",margin:"0px",textAlign:"center"}},"Research Volunteers"),r.a.createElement(Y,null,r.a.createElement(oe,{name:"Veeraj Shah",role:"Volunteer, Health Literacy",info:"University of Maryland, Junior",size:"1"}),r.a.createElement(oe,{name:"Saydi Akgul",role:"Volunteer, Information Curator",info:"Binghamton University, 2nd Year Masters",size:"1"}),r.a.createElement(oe,{name:"Zahraa Tounsi",role:"Volunteer, Information Curator",info:"Binghamton University, Senior",size:"1"})),r.a.createElement(Y,null,r.a.createElement(oe,{name:"Victor Lopez-Carmen",role:"Volunteer, Information Curator",info:"Harvard Medical School",size:"1"}),r.a.createElement(oe,{name:"Brendan Eappen",role:"Volunteer, Information Curator",info:"Harvard Medical School",size:"1"}),r.a.createElement(oe,{name:"Ashwath Narayanan",role:"Volunteer, Resource Curator",info:"George Washington University",size:"1"})),r.a.createElement(Y,null,r.a.createElement(oe,{name:"Dan Sudit",role:"Volunteer, Resource Curator",info:"New York University",size:"1"}),r.a.createElement(oe,{name:"Parth Devalia ",role:"Twitter Content Curator",info:"University of Warwick",size:"1"}))))},le=function(){return r.a.createElement(Z,null,r.a.createElement(re,null),r.a.createElement(w.BrowserView,null,r.a.createElement("img",{style:{display:"block",width:"100%",backgroundPosition:"center",backgroundAttachment:"scroll",paddingTop:"100px"},src:"./project-covid-banner.jpg",alt:""})),r.a.createElement(w.MobileView,null,r.a.createElement("img",{style:{overflow:"hidden",maxHeight:"40vh",align:"left",paddingTop:"100px"},src:"./project-covid-banner.jpg",alt:""})),r.a.createElement(te,null),r.a.createElement(ie,null))},ce=function(){return r.a.createElement(c.a,null,r.a.createElement(u.a,{theme:d},r.a.createElement(l.a,{client:y},r.a.createElement("div",{className:"App"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",component:le}))))))};i.a.render(r.a.createElement(ce,null),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.e08a34aa.chunk.js.map
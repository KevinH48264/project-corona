(this["webpackJsonpbootcamp-web-starter"]=this["webpackJsonpbootcamp-web-starter"]||[]).push([[0],{57:function(e,t,n){e.exports=n(79)},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),o=n.n(i),l=n(81),s=n(24),c=n(15),m=n(4),d={colors:{},fonts:{}},u=n(42),p=n(52),h=n(51),g=n(41),f=n(8),y=new h.a({uri:"http://localhost:5000/graphql",credentials:"include"}),v=new f.a((function(e,t){var n=localStorage.getItem("token");return n&&e.setContext({headers:{authorization:n}}),t(e)})),E=Object(g.a)((function(){})),w=new u.a({cache:new p.a,link:f.a.from([E,v,y])}),x=n(19),b=n(7);function S(){var e=Object(b.a)(["\n     @import url('//fonts.googleapis.com/css?family=Montserrat:light');  \n     font-family: 'Montserrat', sans-serif;\n"]);return S=function(){return e},e}function z(){var e=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: left;\n    padding: 1%;\n    text-align: left;\n    max-width: inherit;\n"]);return z=function(){return e},e}function k(){var e=Object(b.a)(["\n    margin: 1vh 1vw;\n    box-shadow:0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n    display: flex;\n    justify-content: center; \n    flex-direction: row;\n    align-items: center;\n"]);return k=function(){return e},e}function j(){var e=Object(b.a)(["\n    display: flex; \n    justify-content: center; \n    flex-direction: row;\n    max-width: 1140px; \n"]);return j=function(){return e},e}function I(){var e=Object(b.a)(["\n    display: flex;\n    justify-content: center;  \n    width: 100%; \n    background-color: white; \n    flex-direction: column;\n    align-items: center;\n    /* padding-top: 20px; */\n"]);return I=function(){return e},e}function A(){var e=Object(b.a)(["\n    display: flex; \n    justify-content: center; \n    max-width: 800px; \n    flex-direction: column;\n"]);return A=function(){return e},e}function U(){var e=Object(b.a)(["\n    display: flex;\n    justify-content: center;  \n    width: 100%; \n"]);return U=function(){return e},e}function W(){var e=Object(b.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;  \n    align-items: center;\n    max-width: 1000px;\n    padding: 20px;\n    color: white;\n"]);return W=function(){return e},e}function C(){var e=Object(b.a)(["\n    display: flex;\n    justify-content: center;  \n    width: 100%; \n    background-color: #008037; \n    border-radius: 0 0 50% 50% / 50px;\n    padding-top: 20px;\n    padding-bottom: 0px;\n"]);return C=function(){return e},e}function O(){var e=Object(b.a)(["\n    display: flex; \n    width: 100%; \n    margin-left: auto; \n    margin-right: auto; \n    justify-content: center;\n"]);return O=function(){return e},e}function L(){var e=Object(b.a)(["\n    width: 100%; \n"]);return L=function(){return e},e}function M(){var e=Object(b.a)(["\n    display: flex; \n    justify-content: space-between;\n    width: 50%;\n    max-width: 1140px;\n    padding: 0px 100px 0px 100px;\n    margin-top: 60px;\n"]);return M=function(){return e},e}function D(){var e=Object(b.a)(["\n    display: flex; \n    align-items: center; \n    width: 50%; \n"]);return D=function(){return e},e}function V(){var e=Object(b.a)(["\n    padding: 0px 1vw; \n    font-size: 0.8rem; \n    color: black;\n    text-decoration: none;\n"]);return V=function(){return e},e}function B(){var e=Object(b.a)(["\n    display: flex; \n    flex-wrap: nowrap; \n    width: 100%; \n    max-width: 1140px; \n    justify-content: space-between; \n    align-items: center; \n    padding-right: 20px;\n"]);return B=function(){return e},e}function F(){var e=Object(b.a)(["\n    display: flex; \n    width: 100%; \n    margin-left: auto; \n    margin-right: auto; \n    justify-content: center;\n    position: absolute; \n    top: 0; \n    height: 100px;\n    background-color: white;\n"]);return F=function(){return e},e}function P(){var e=Object(b.a)(["\n\n"]);return P=function(){return e},e}m.b.div(P());var T=m.b.div(F()),H=m.b.div(B()),Y=Object(m.b)(s.b)(V()),J=(m.b.div(D()),m.b.div(M()),m.b.div(L()),m.b.div(O()),m.b.div(C())),R=m.b.div(W()),G=m.b.div(U()),K=m.b.div(A()),N=m.b.div(I()),_=m.b.div(j()),X=m.b.div(k()),Z=m.b.div(z()),q=m.b.div(S()),Q=n(53),$=n(56),ee=function(e){var t=e.status,n=e.message,i=e.onValidated,o=Object(a.useState)(""),l=Object(Q.a)(o,2),s=l[0],c=l[1];return r.a.createElement(G,null,r.a.createElement(K,null,"sending"===t&&r.a.createElement("div",{style:{color:"blue"}},"sending..."),"error"===t&&r.a.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:n}}),"success"===t&&r.a.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:n}}),r.a.createElement("input",{style:{fontFamily:"inherit",fontSize:"1rm",width:"200px",borderColor:"",outline:"none",padding:"10px"},value:s,onChange:function(e){return c(e.target.value)},type:"email",placeholder:"Email Address"}),r.a.createElement("br",null),r.a.createElement("button",{type:"button",style:{fontFamily:"inherit",border:"none",outline:"none",width:"100%",fontSize:"1rm",padding:"10px",color:"white",background:"rgb(0, 50, 0)",cursor:"pointer"},onClick:function(){return i({EMAIL:s}),void c("")}},"Submit")))},te=function(){return r.a.createElement("div",{style:{width:"75vw",padding:"20px",backgroundColor:""},id:"email"},r.a.createElement(G,null,r.a.createElement("h1",{style:{marginTop:"50px",marginBottom:"30px",color:"white",fontWeight:"300",textAlign:"center"}},"Sign up to join our waitlist!")),r.a.createElement(G,null,r.a.createElement(K,null,r.a.createElement($.a,{url:"https://gmail.us19.list-manage.com/subscribe/post?u=05ae8a7dc2c97805cda60ef6d&id=8e172d8d94",render:function(e){var t=e.subscribe,n=e.status,a=e.message;return r.a.createElement(ee,{status:n,message:a,onValidated:function(e){return t(e)}})}}))))},ne=function(){return r.a.createElement("div",{id:"about"},r.a.createElement(J,null,r.a.createElement(R,null,r.a.createElement("h1",{style:{fontSize:"2.5rem"}},"All the information and resources on the Coronavirus (COVID-19), easily accessible in one place"),r.a.createElement("br",null),r.a.createElement("p",{style:{fontSize:"1.5rem"}},"Put together by a team of 22 incredible students from around the United States, Project Corona provides a plethora of information and resources to help you prepare for and navigate the global pandemic. Our iOS and Android apps come loaded with live outbreak trackers, testing center information, breaking news stories from verified sources, live travel information, along with verified information on best practices, knowledge about the virus, educational toolkits, student resources, and crisis contact information."),r.a.createElement("p",{style:{fontSize:"1.5rem"}}," Co-Founders Satvik Sethi and Will Hunter started this project with the hope that we are able to help a lot of people around the world in finding the information and resources they need to protect themselves and their loved ones from the outbreak. "),r.a.createElement(te,null))))},ae=n(20),re=function(){return r.a.createElement("div",null,r.a.createElement(T,null,r.a.createElement(H,null,r.a.createElement("img",{style:{width:"100px"},src:"./project-covid-logo.jpg",alt:""}),r.a.createElement("div",{className:"menu"},r.a.createElement(Y,{to:"/"},r.a.createElement(ae.Link,{to:"home",spy:!0,smooth:!0,offset:-50,duration:1e3},"Home")),r.a.createElement(Y,{to:"/"},r.a.createElement(ae.Link,{to:"about",spy:!0,smooth:!0,offset:-50,duration:1e3},"About")),r.a.createElement(Y,{to:"/"},r.a.createElement(ae.Link,{to:"email",spy:!0,smooth:!0,offset:-50,duration:1e3},"Sign Up")),r.a.createElement(Y,{to:"/"},r.a.createElement(ae.Link,{to:"team",spy:!0,smooth:!0,offset:-50,duration:1e3},"Our Team")),r.a.createElement("a",{href:"https://twitter.com/projectcovid"},r.a.createElement("img",{style:{height:"1rem",padding:"0px 1vw"},src:"./twitter.png",alt:""}))))))},ie=function(e){var t=e.path,n=e.name,a=e.role,i=e.size,o=e.info,l=e.desc,s=e.year,c=(e.mobile,e.lin),m=e.insta,d=e.twit,u=["80vw","30vw"],p=["1%","0"],h=["left","center"],g=["","none"];return r.a.createElement(X,{style:{maxWidth:u[i],width:u[i],borderRadius:"2px",padding:"1%"}},r.a.createElement("img",{style:{height:["25vh","0"][i],width:"auto",paddingRight:p[i],margin:"0px"},src:t,alt:""}),r.a.createElement(Z,null,r.a.createElement("h2",{style:{alignItems:h[i],textAlign:h[i],fontWeight:"bold",fontSize:"",color:"black",padding:"10px 5px 0px 5px",margin:"0px"}},n,r.a.createElement("a",{href:c,style:{display:g[i]}},r.a.createElement("img",{style:{height:"1.2rem",padding:"0px 10px 0px 20px"},src:"./linkedin.png",alt:""})),r.a.createElement("a",{href:m,style:{display:g[i]}},r.a.createElement("img",{style:{height:"1.2rem",padding:"0px 10px"},src:"./insta.png",alt:""})),r.a.createElement("a",{href:d,style:{display:g[i]}},r.a.createElement("img",{style:{height:"1.2rem",padding:"0px 10px"},src:"./twitter.png",alt:""}))),r.a.createElement("h3",{style:{alignItems:h[i],textAlign:h[i],fontSize:"",color:"grey",padding:"10px 5px 5px 5px",margin:"0px"}},a),r.a.createElement("p",{style:{alignItems:h[i],fontSize:"",color:"grey",textAlign:h[i],paddingLeft:"5px",paddingRight:"5px",margin:"0px",width:"100%"}},o),r.a.createElement("p",{style:{alignItems:h[i],fontSize:"",color:"grey",textAlign:h[i],margin:"0px",paddingLeft:"5px",paddingTop:p[i],width:"100%"}},l),r.a.createElement("p",{style:{alignItems:h[i],fontSize:"",color:"grey",textAlign:h[i],margin:"0px",paddingBottom:"10px",width:"100%"}},s)))},oe=function(){return r.a.createElement("div",{id:"team"},r.a.createElement(N,null,r.a.createElement("h1",{style:{padding:"50px 0px 0px 0px",color:"rgb(0, 0, 0)",fontSize:"7vh",fontWeight:"300",margin:"0px"}},"Our Team")),r.a.createElement(N,null,r.a.createElement("h1",{style:{padding:"6vh 0vh 3vh 0vh",color:"rgb(0, 0, 0)",fontSize:"4vh",fontWeight:"300",margin:"0px"}},"Founders"),r.a.createElement(_,null,r.a.createElement(ie,{path:"./satvik.jpg",name:"Satvik Sethi",role:"Founder, Strategy & Branding",info:"Binghamton University, Senior",lin:"https://www.linkedin.com/in/satviksethi/",insta:"https://www.instagram.com/satviksethi/",twit:"",size:"0",desc:"I founded Project Covid because I was overwhelmed when I tried to find information about COVID-19 online. The information that existed was far too scattered and complicated to understand, and I saw a lot of misinformation being spread. I wanted to create something that conveniently put verified information and resources in one place to help anyone who was as lost and anxious as I was. By using social media, we put together an incredible team of student volunteers passionate about helping the world, without whom this project would simply not be possible. We're on our way to helping the world! Apart from Project Covid, I'm extremely passionate about mental health, emerging technologies, music production, and UI/UX Design."})),r.a.createElement(_,null,r.a.createElement(ie,{path:"./will.jpg",name:"Will Hunter ",role:"Co-Founder, Product Manager",info:"Washington University, St. Louis, Sophomore",lin:"https://www.linkedin.com/in/wlhunter/",insta:"",twit:"",size:"0",desc:"I joined Project Covid because I wanted to try and help the world during my spring break. As that spring break got elongated, I realized how important our app truly was. Working with such a talented group of student developers has made the process incredibly smooth and I could not have a better team. Outside of this project I am interested in groundbreaking startups, Esports, and music production."})),r.a.createElement("h1",{style:{padding:"6vh 0vh 3vh 0vh",color:"rgb(0, 0, 0)",fontSize:"4vh",fontWeight:"300",margin:"0px"}},"Tech Team"),r.a.createElement(_,null,r.a.createElement(ie,{name:"Michael Ginn",role:"Lead Software Engineer",info:"Washington University, St. Louis",year:"Sophomore",size:"1"}),r.a.createElement(ie,{name:"Giorgio Guttilla",role:"Mobile App Developer",info:"Washington University, St. Louis",year:"Junior",size:"1"})),r.a.createElement(_,null,r.a.createElement(ie,{name:"Simar Kapoor",role:"Data Scientist",info:"Indiana University, Bloomington",year:"Sophomore",size:"1"}),r.a.createElement(ie,{name:"Evan Molyneaux",role:"Mobile App Developer",info:"Washington University, St. Louis",year:"Junior",size:"1"})),r.a.createElement(_,null,r.a.createElement(ie,{name:"Adam Jacobowitz",role:"Back End Developer",info:"Ohio State University",year:"Working Professional",size:"1"}),r.a.createElement(ie,{name:"Pryce Yebesi",role:"Mobile App Developer",info:"Washington University, St. Louis",year:"Sophomore",size:"1"})),r.a.createElement(_,null,r.a.createElement(ie,{name:"Ajah Chukwuemeka",role:"Full Stack Developer",info:"University of Nigeria",year:"Working Professional",size:"1"}),r.a.createElement(ie,{name:"Kevin Huang",role:"Front End Developer",info:"Harvard University",year:"First Year",size:"1"})),r.a.createElement(_,null,r.a.createElement(ie,{name:"Ayush Khandelwal",role:"Full Stack Developer",info:"University of Massachusetts, Amherst",year:"Junior",size:"1"}),r.a.createElement(ie,{name:"Katie Lund",role:"Mobile App Developer",info:"Washington University, St. Louis",year:"Sophomore",size:"1"})),r.a.createElement("h1",{style:{padding:"6vh 0vh 3vh 0vh",color:"rgb(0, 0, 0)",fontSize:"4vh",fontWeight:"300",margin:"0px",textAlign:"center"}},"Research Volunteers"),r.a.createElement(_,null,r.a.createElement(ie,{name:"Veeraj Shah",role:"Volunteer, Health Literacy",info:"University of Maryland",year:"Junior",size:"1"}),r.a.createElement(ie,{name:"Saydi Akgul",role:"Volunteer, Information Curator",info:"Binghamton University",year:"2nd Year Masters",size:"1"})),r.a.createElement(_,null,r.a.createElement(ie,{name:"Zahraa Tounsi",role:"Volunteer, Information Curator",info:"Binghamton University",year:"Senior",size:"1"}),r.a.createElement(ie,{name:"Victor Lopez-Carmen",role:"Volunteer, Information Curator",info:"Harvard Medical School",year:"First Year",size:"1"})),r.a.createElement(_,null,r.a.createElement(ie,{name:"Brendan Eappen",role:"Volunteer, Information Curator",info:"Harvard Medical School",year:"First Year",size:"1"}),r.a.createElement(ie,{name:"Ashwath Narayanan",role:"Volunteer, Resource Curator",info:"George Washington University",year:"",size:"1"})),r.a.createElement(_,null,r.a.createElement(ie,{name:"Dan Sudit",role:"Volunteer, Resource Curator",info:"New York University",year:"",size:"1"}),r.a.createElement(ie,{name:"Parth Devalia",role:"Twitter Content Curator",info:"University of Warwick",year:"",size:"1"})),r.a.createElement(_,null,r.a.createElement(ie,{name:"Javier Suarez",role:"Graphic Designer",info:"Binghamton University",year:"Working Professional",size:"1"}))),r.a.createElement("div",{style:{height:"5vh"}}))},le=function(e){var t=e.path,n=e.name,a=e.role,i=e.size,o=e.info,l=e.desc,s=e.year,c=(e.mobile,e.lin),m=e.insta,d=e.twit,u=["80vw","40vw"],p=["10px","0"],h=["left","center"],g=["","none"];return r.a.createElement(X,{style:{display:"flex",flexDirection:"column",maxWidth:u[i],width:u[i],borderRadius:"2px",padding:p[i]}},r.a.createElement("img",{style:{height:["25vh","0"][i],width:"auto",margin:"0px"},src:t,alt:""}),r.a.createElement(Z,null,r.a.createElement("h2",{style:{alignItems:h[i],textAlign:h[i],fontWeight:"bold",fontSize:"1rem",color:"black",padding:"10px 5px 0px 5px",margin:"0px",width:"95%"}},n,r.a.createElement("a",{href:c,style:{display:g[i]}},r.a.createElement("img",{style:{height:"1rem",padding:"0px 1.5vw 0px 3vw"},src:"./linkedin.png",alt:""})),r.a.createElement("a",{href:m,style:{display:g[i]}},r.a.createElement("img",{style:{height:"1rem",padding:"0px 1.5vw"},src:"./insta.png",alt:""})),r.a.createElement("a",{href:d,style:{display:g[i]}},r.a.createElement("img",{style:{height:"1rem",padding:"0px 1.5vw"},src:"./twitter.png",alt:""}))),r.a.createElement("h3",{style:{alignItems:h[i],textAlign:h[i],fontSize:"0.8rem",color:"grey",padding:"10px 5px 5px 5px",margin:"0px"}},a),r.a.createElement("p",{style:{alignItems:h[i],fontSize:"0.8rem",color:"grey",textAlign:h[i],paddingLeft:"5px",paddingRight:"5px",margin:"0px",width:"95%"}},o),r.a.createElement("p",{style:{alignItems:h[i],fontSize:"0.8rem",color:"grey",textAlign:h[i],margin:"0px",width:"98%",paddingLeft:"5px",paddingTop:p[i]}},l),r.a.createElement("p",{style:{alignItems:h[i],fontSize:"0.8rem",color:"grey",textAlign:h[i],margin:"0px",paddingBottom:"10px",width:"100%"}},s)))},se=function(){return r.a.createElement("div",{id:"team"},r.a.createElement(N,null,r.a.createElement("h1",{style:{padding:"50px 0px 0px 0px",color:"rgb(0, 0, 0)",fontSize:"7vh",fontWeight:"300",margin:"0px"}},"Our Team")),r.a.createElement(N,null,r.a.createElement("h1",{style:{padding:"6vh 0vh 3vh 0vh",color:"rgb(0, 0, 0)",fontSize:"4vh",fontWeight:"300",margin:"0px"}},"Founders"),r.a.createElement(_,null,r.a.createElement(le,{path:"./satvik.jpg",name:"Satvik Sethi",role:"Founder, Strategy & Branding",info:"Binghamton University, Senior",lin:"https://www.linkedin.com/in/satviksethi/",insta:"https://www.instagram.com/satviksethi/",twit:"",size:"0",desc:"I founded Project Covid because I was overwhelmed when I tried to find information about COVID-19 online. The information that existed was far too scattered and complicated to understand, and I saw a lot of misinformation being spread. I wanted to create something that conveniently put verified information and resources in one place to help anyone who was as lost and anxious as I was. By using social media, we put together an incredible team of student volunteers passionate about helping the world, without whom this project would simply not be possible. We're on our way to helping the world! Apart from Project Covid, I'm extremely passionate about mental health, emerging technologies, music production, and UI/UX Design."})),r.a.createElement(_,null,r.a.createElement(le,{path:"./will.jpg",name:"Will Hunter ",role:"Co-Founder, Product Manager",info:"Washington University, St. Louis, Sophomore",lin:"https://www.linkedin.com/in/wlhunter/",insta:"",twit:"",size:"0",desc:"I joined Project Covid because I wanted to try and help the world during my spring break. As that spring break got elongated, I realized how important our app truly was. Working with such a talented group of student developers has made the process incredibly smooth and I could not have a better team. Outside of this project I am interested in groundbreaking startups, Esports, and music production."})),r.a.createElement("h1",{style:{padding:"6vh 0vh 3vh 0vh",color:"rgb(0, 0, 0)",fontSize:"4vh",fontWeight:"300",margin:"0px"}},"Tech Team"),r.a.createElement(_,null,r.a.createElement(le,{name:"Michael Ginn",role:"Lead Software Engineer",info:"Washington University, St. Louis",year:"Sophomore",size:"1"}),r.a.createElement(le,{name:"Giorgio Guttilla",role:"Mobile App Developer",info:"Washington University, St. Louis",year:"Junior",size:"1"})),r.a.createElement(_,null,r.a.createElement(le,{name:"Simar Kapoor",role:"Data Scientist",info:"Indiana University, Bloomington",year:"Sophomore",size:"1"}),r.a.createElement(le,{name:"Evan Molyneaux",role:"Mobile App Developer",info:"Washington University, St. Louis",year:"Junior",size:"1"})),r.a.createElement(_,null,r.a.createElement(le,{name:"Adam Jacobowitz",role:"Back End Developer",info:"Ohio State University",year:"Working Professional",size:"1"}),r.a.createElement(le,{name:"Pryce Yebesi",role:"Mobile App Developer",info:"Washington University, St. Louis",year:"Sophomore",size:"1"})),r.a.createElement(_,null,r.a.createElement(le,{name:"Ajah Chukwuemeka",role:"Full Stack Developer",info:"University of Nigeria",year:"Working Professional",size:"1"}),r.a.createElement(le,{name:"Kevin Huang",role:"Front End Developer",info:"Harvard University",year:"First-Year",size:"1"})),r.a.createElement(_,null,r.a.createElement(le,{name:"Ayush Khandelwal",role:"Full Stack Developer",info:"University of Massachusetts, Amherst",year:"Junior",size:"1"}),r.a.createElement(le,{name:"Katie Lund",role:"Mobile App Developer",info:"Washington University, St. Louis",year:"Sophomore",size:"1"})),r.a.createElement("h1",{style:{padding:"6vh 0vh 3vh 0vh",color:"rgb(0, 0, 0)",fontSize:"4vh",fontWeight:"300",margin:"0px",textAlign:"center"}},"Research Volunteers"),r.a.createElement(_,null,r.a.createElement(le,{name:"Veeraj Shah",role:"Volunteer, Health Literacy",info:"University of Maryland",year:"Junior",size:"1"}),r.a.createElement(le,{name:"Saydi Akgul",role:"Volunteer, Information Curator",info:"Binghamton University",year:"2nd Year Masters",size:"1"})),r.a.createElement(_,null,r.a.createElement(le,{name:"Zahraa Tounsi",role:"Volunteer, Information Curator",info:"Binghamton University",year:"Senior",size:"1"}),r.a.createElement(le,{name:"Victor Lopez-Carmen",role:"Volunteer, Information Curator",info:"Harvard Medical School",year:"First-Year",size:"1"})),r.a.createElement(_,null,r.a.createElement(le,{name:"Brendan Eappen",role:"Volunteer, Information Curator",info:"Harvard Medical School",year:"First-Year",size:"1"}),r.a.createElement(le,{name:"Ashwath Narayanan",role:"Volunteer, Resource Curator",info:"George Washington University",year:"First-Year",size:"1"})),r.a.createElement(_,null,r.a.createElement(le,{name:"Dan Sudit",role:"Volunteer, Resource Curator",info:"New York University",year:"First-Year",size:"1"}),r.a.createElement(le,{name:"Parth Devalia",role:"Twitter Content Curator",info:"University of Warwick",year:"First-Year",size:"1"})),r.a.createElement(_,null,r.a.createElement(le,{name:"Javier Suarez",role:"Graphic Designer",info:"Binghamton University",year:"Working Professional",size:"1"}))),r.a.createElement("div",{style:{height:"5vh"}}))},ce=function(){return r.a.createElement(q,null,r.a.createElement(re,null),r.a.createElement(x.BrowserView,null,r.a.createElement("img",{style:{display:"block",width:"100%",backgroundPosition:"center",backgroundAttachment:"scroll",paddingTop:"100px"},src:"./project-covid-banner2.jpg",alt:""})),r.a.createElement(x.MobileView,null,r.a.createElement("img",{style:{overflow:"hidden",maxHeight:"35vh",align:"left",paddingTop:"100px"},src:"./project-covid-banner2.jpg",alt:""})),r.a.createElement(ne,null),r.a.createElement(x.BrowserView,null,r.a.createElement(oe,null)),r.a.createElement(x.MobileView,null,r.a.createElement(se,null)))},me=function(){return r.a.createElement(s.a,null,r.a.createElement(m.a,{theme:d},r.a.createElement(l.a,{client:w},r.a.createElement("div",{className:"App"},r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",component:ce}))))))};o.a.render(r.a.createElement(me,null),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.baff93c8.chunk.js.map
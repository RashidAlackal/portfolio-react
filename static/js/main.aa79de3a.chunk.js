(this["webpackJsonpproject1-app"]=this["webpackJsonpproject1-app"]||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/shopping-cart-html-css.7a5dfe31.png"},44:function(e,t,a){e.exports=a.p+"static/media/cv_html-css.3082fdd4.png"},45:function(e,t,a){e.exports=a.p+"static/media/portfolio-react.fe23680a.png"},50:function(e,t,a){e.exports=a(64)},55:function(e,t,a){},56:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),i=a.n(r),c=(a(55),a(6)),s=a(10),m=a(8),o=a(7),u=a(9),d=a(25),h=a(20),E=a(14),p=a(26),f=a(49),b=(a(56),a(18)),g=a(16);var v=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(E.a,{fluid:!0},l.a.createElement(b.a,{className:"border-top justify-content-between p-3"},l.a.createElement(g.a,{className:"p-0",md:3,sm:12},"I'm Frond-end Developer"),l.a.createElement(g.a,{className:"p=0 d-flex justify-content-end md={3}"}))))},k=a(42);var N=function(e){return l.a.createElement(k.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(E.a,{fluid:!0},l.a.createElement(b.a,{className:"justify-content-center py-5"},l.a.createElement(g.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 fontweight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},S=a(24),j=a(34);var C=function(e){var t=Object(j.b)({opacity:1,from:{opacity:0}});return l.a.createElement(j.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var O=function(e){return l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(C,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},T=a(43),y=a.n(T),x=a(44),w=a.n(x),P=a(45),A=a.n(P),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleCardClick=function(e,t){var n=Object(S.a)(a.state.items);n[e].selected=!n[e].selected,n.forEach((function(t){t.id!==e&&(t.selected=!1)})),a.setState({items:n})},a.makeItems=function(e){return e.map((function(e){return l.a.createElement(O,{item:e,click:function(t){return a.handleCardClick(e.id,t)},key:e.id})}))},a.state={items:[{id:0,title:"Shopping Cart",subTitle:"html,css,bootstrap",imgSrc:y.a,link:"https://",selected:!1},{id:1,title:"Portfolio",subTitle:"html,css,bootstrap",imgSrc:w.a,link:"https://",selected:!1},{id:2,title:"Portfolio",subTitle:"React",imgSrc:A.a,link:"https://",selected:!1}]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,{fluid:!0},l.a.createElement(b.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),t}(l.a.Component);var I=function(e){return l.a.createElement("div",null,l.a.createElement(N,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(F,null))};var L=function(e){return l.a.createElement(E.a,{fluid:!0},l.a.createElement(b.a,{className:"justify-content-center"},l.a.createElement(g.a,{md:8},e.children)))};var R=function(e){return l.a.createElement("div",null,l.a.createElement(N,{className:"hskill",title:e.title}),l.a.createElement(L,null,l.a.createElement("ul",{className:"skill"},l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"BOOTSTRAP"),l.a.createElement("li",null,"ADOBE PHOTOSHOP"),l.a.createElement("li",null,"JAVASCRIPT"),l.a.createElement("li",null,"TYPESCRIPT"),l.a.createElement("li",null,"ANGULAR 8"),l.a.createElement("li",null,"REACT"))))},B=a(23),D=a(13),H=a(46),G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,l=t.name;a.setState(Object(B.a)({},l,n))},a.handleSubmit=function(e){e.preventDefault(),a.setState({disabled:!0})},a.state={name:"",email:"",message:"",disabled:!1,emailsent:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(N,{title:this.props.title}),l.a.createElement(L,null,l.a.createElement(D.a,{onSubmit:this.handleSubmit},l.a.createElement(D.a.Group,null,l.a.createElement(D.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(D.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(D.a.Group,null,l.a.createElement(D.a.Label,{htmlFor:"full-name"},"Email"),l.a.createElement(D.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(D.a.Group,null,l.a.createElement(D.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(D.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(H.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSend&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Send"),!0===this.state.emailSend&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Send"))))}}]),t}(l.a.Component),J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={title:"Fashion Brands",headerLinks:[{title:"Home",path:"/"},{title:"Skill",path:"/skill"},{title:"Contact",path:"/contact"}],home:{title:"I'm RASHID A S ",subTitle:"Front-end Developer",text:"Goal-focused Front-end Developer, completed course in meanstack development. Passionate to learn contribute and grow along with the organisation."},skill:{title:"Skill's"},contact:{title:"Let's Talk"}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement(E.a,{className:"p-0",fluid:!0},l.a.createElement(p.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(p.a.Brand,{className:"head-title"},"Portfolio"),l.a.createElement(p.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(p.a.Collapse,{id:"navbar-toggle"},l.a.createElement(f.a,{className:"ml-auto"},l.a.createElement(d.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(d.b,{className:"nav-link",to:"/skill"},"Skill"),l.a.createElement(d.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(h.a,{path:"/",exact:!0,render:function(){return l.a.createElement(I,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(h.a,{path:"/skill",render:function(){return l.a.createElement(R,{title:e.state.skill.title})}}),l.a.createElement(h.a,{path:"/contact",render:function(){return l.a.createElement(G,{title:e.state.contact.title})}}),l.a.createElement(v,null)))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(63);i.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.aa79de3a.chunk.js.map
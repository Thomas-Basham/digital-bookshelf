(this.webpackJsonpsolution=this.webpackJsonpsolution||[]).push([[0],{104:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(24),s=o.n(r),c=o(64),i=o(22),l=o.n(i),d=o(35),u=o(7),j=o(8),p=o(10),h=o(9),b=o(53),O=o(106),k=o(34),x=o(38),m=o(1),g=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(){return Object(u.a)(this,o),t.apply(this,arguments)}return Object(j.a)(o,[{key:"render",value:function(){return Object(m.jsx)(x.a,{onClick:this.props.onLogin,children:"Login"})}}]),o}(n.Component),f=(o(71),function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(){return Object(u.a)(this,o),t.apply(this,arguments)}return Object(j.a)(o,[{key:"render",value:function(){return Object(m.jsx)(x.a,{onClick:this.props.onLogout,children:"Logout"})}}]),o}(n.Component)),v=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(){return Object(u.a)(this,o),t.apply(this,arguments)}return Object(j.a)(o,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(b.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(m.jsx)(b.a.Brand,{children:"My Favorite Books"}),Object(m.jsx)(O.a,{children:Object(m.jsx)(k.b,{to:"/",className:"nav-link",children:"Home"})}),Object(m.jsx)(O.a,{children:Object(m.jsx)(k.b,{to:"/profile",className:"nav-link",children:"Profile"})})]}),this.props.user?Object(m.jsx)(f,{onLogout:this.props.onLogout}):Object(m.jsx)(g,{onLogin:this.props.onLogin})]})}}]),o}(a.a.Component),y=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(){return Object(u.a)(this,o),t.apply(this,arguments)}return Object(j.a)(o,[{key:"render",value:function(){return Object(m.jsx)(b.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(m.jsx)(b.a.Brand,{children:"Code Fellows"})})}}]),o}(a.a.Component),B=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(){return Object(u.a)(this,o),t.apply(this,arguments)}return Object(j.a)(o,[{key:"render",value:function(){return Object(m.jsx)("p",{children:"Profile page coming soon"})}}]),o}(n.Component),F=o(16),w=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(e){var n;return Object(u.a)(this,o),(n=t.call(this,e)).usernameHandler=function(e){console.log(e.target.value),n.setState({username:e.target.value})},n.emailHandler=function(e){n.setState({email:e.target.value})},n.infoHandler=function(e){e.preventDefault(),n.props.loginFormHandler(n.state.username,n.state.email)},n.state={username:"guest",email:"guest"},n}return Object(j.a)(o,[{key:"render",value:function(){return Object(m.jsxs)(F.a,{children:[Object(m.jsxs)(F.a.Group,{controlId:"username",children:[Object(m.jsx)(F.a.Label,{children:"Username"}),Object(m.jsx)(F.a.Control,{type:"text",placeholder:"Enter Username",onInput:this.usernameHandler})]}),Object(m.jsxs)(F.a.Group,{controlId:"email",children:[Object(m.jsx)(F.a.Label,{children:"Email"}),Object(m.jsx)(F.a.Control,{type:"text",placeholder:"Enter Email",onInput:this.emailHandler})]}),Object(m.jsx)(x.a,{type:"submit",onClick:this.infoHandler,children:"Login"})]})}}]),o}(n.Component),C=o(37),I=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(){var e;Object(u.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleNewBook=function(t){t.preventDefault(),console.log(t.target.title.value);var o={title:t.target.title.value,description:t.target.description.value,status:t.target.status.checked,email:t.target.email.value};e.props.postBook(o)},e}return Object(j.a)(o,[{key:"render",value:function(){return Object(m.jsxs)(C.a,{show:this.props.show,onHide:this.props.addBookRemove,children:[Object(m.jsx)(C.a.Header,{closeButton:!0,children:Object(m.jsx)(C.a.Title,{children:"Add A New Book"})}),Object(m.jsx)(C.a.Body,{children:Object(m.jsxs)(F.a,{onSubmit:this.handleNewBook,children:[Object(m.jsxs)(F.a.Group,{controlId:"title",children:[Object(m.jsx)(F.a.Label,{children:"Book Title"}),Object(m.jsx)(F.a.Control,{type:"text",placeholder:"Book Title"})]}),Object(m.jsxs)(F.a.Group,{controlId:"description",children:[Object(m.jsx)(F.a.Label,{children:"Book Description"}),Object(m.jsx)(F.a.Control,{type:"text",placeholder:"Book Description"})]}),Object(m.jsx)(F.a.Group,{controlId:"status",children:Object(m.jsx)(F.a.Check,{type:"checkbox",label:"Read"})}),Object(m.jsxs)(F.a.Group,{controlId:"email",children:[Object(m.jsx)(F.a.Label,{children:"Your Email"}),Object(m.jsx)(F.a.Control,{type:"email",placeholder:"Your Email"})]}),Object(m.jsx)(x.a,{type:"submit",variant:"dark",children:"Create Book"})]})})]})}}]),o}(a.a.Component),H=(o(80),o(11)),L=o(45),S=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(){var e;Object(u.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleClick=function(){e.props.bookForUpdate(e.props.book),e.props.updateForm()},e}return Object(j.a)(o,[{key:"render",value:function(){return this.props.loggedIn?Object(m.jsx)(x.a,{variant:"dark",onClick:this.handleClick,children:"Update Book"}):""}}]),o}(a.a.Component),U=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(){var e;Object(u.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleDelete=function(){e.props.deleteBook(e.props.id),console.log(e.props.id)},e}return Object(j.a)(o,[{key:"render",value:function(){return this.props.loggedIn?Object(m.jsx)(x.a,{variant:"danger",onClick:this.handleDelete,children:"Delete a Book"}):""}}]),o}(a.a.Component),N=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(){return Object(u.a)(this,o),t.apply(this,arguments)}return Object(j.a)(o,[{key:"render",value:function(){var e=this,t=this.props.books.map((function(e,t){return Object(m.jsxs)(L.a.Item,{children:[Object(m.jsx)("img",{className:"d-block w-100",src:"https://dummyimage.com/800x400.jpg",alt:"First slide"}),Object(m.jsxs)(L.a.Caption,{children:[Object(m.jsx)("h3",{children:e.title}),Object(m.jsx)("p",{children:e.description}),e.status?Object(m.jsx)("p",{children:"Read\ud83e\uddd1\u200d\ud83c\udfeb"}):Object(m.jsx)("p",{children:"Haven't Read yet \ud83d\udeab"}),Object(m.jsx)("p",{children:e.email})]})]},t)})),o=this.props.books.map((function(t,o){return e.props.email===t.email?Object(m.jsxs)("li",{className:"row",children:[Object(m.jsx)("p",{className:"col",children:t.title}),Object(m.jsxs)("div",{children:[Object(m.jsx)(U,{className:"col",deleteBook:e.props.deleteBook,id:t._id,loggedIn:e.props.loggedIn}),Object(m.jsx)(S,{updateForm:e.props.updateForm,loggedIn:e.props.loggedIn,book:t,bookForUpdate:e.props.bookForUpdate})]})]},o):""}));return console.log(this.props.books),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:"My Essential Lifelong Learning & Formation Shelf"}),this.props.books.length>0?Object(m.jsx)(L.a,{children:t}):Object(m.jsx)("h3",{children:"No Books Found :("}),this.props.books.length>0?Object(m.jsxs)("ul",{style:{width:300},children:[Object(m.jsx)("h2",{children:"Manage Books"}),o]}):Object(m.jsx)("h3",{children:"No Books Found :("})]})}}]),o}(a.a.Component),A=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(){return Object(u.a)(this,o),t.apply(this,arguments)}return Object(j.a)(o,[{key:"render",value:function(){return Object(m.jsx)(x.a,{onClick:this.props.addBookHandler,children:"Add Book"})}}]),o}(a.a.Component),_=o(36),D=o.n(_),E=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(){var e;Object(u.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleSubmit=function(t){t.preventDefault();var o={title:t.target.title.value||e.props.book.title,description:t.target.description.value||e.props.book.description,status:t.target.status.checked||e.props.book.status,email:t.target.email.value||e.props.book.email,_id:e.props.book._id,__v:e.props.book.__v};e.props.updateBook(o),e.props.onHide()},e}return Object(j.a)(o,[{key:"render",value:function(){return Object(m.jsxs)(C.a,{show:this.props.show,onHide:this.props.onHide,children:[Object(m.jsx)(C.a.Header,{closeButton:!0,children:Object(m.jsx)(C.a.Title,{children:"Update Book"})}),Object(m.jsx)(C.a.Body,{children:Object(m.jsxs)(F.a,{onSubmit:this.handleSubmit,children:[Object(m.jsxs)(F.a.Group,{controlId:"title",children:[Object(m.jsx)(F.a.Label,{children:"Book Title"}),Object(m.jsx)(F.a.Control,{type:"text"})]}),Object(m.jsxs)(F.a.Group,{controlId:"description",children:[Object(m.jsx)(F.a.Label,{children:"Book Description"}),Object(m.jsx)(F.a.Control,{type:"text"})]}),Object(m.jsx)(F.a.Group,{controlId:"status",children:Object(m.jsx)(F.a.Check,{type:"checkbox",label:"Read"})}),Object(m.jsxs)(F.a.Group,{controlId:"email",children:[Object(m.jsx)(F.a.Label,{children:"Email"}),Object(m.jsx)(F.a.Control,{type:"email"})]}),Object(m.jsx)(x.a,{type:"submit",variant:"dark",children:"Update"})]})})]})}}]),o}(a.a.Component),G=o(43),R=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(e){var n;return Object(u.a)(this,o),(n=t.call(this,e)).loginHandler=function(e){n.setState({user:"user profile",loginForm:!0})},n.logoutHandler=function(){n.setState({user:null,userName:null,email:null}),console.log(n.state)},n.loginFormHandler=function(e,t){e&&t&&n.setState({userName:e,email:t,loginForm:!1,loggedIn:!0})},n.addBookHandler=function(){console.log("hit"),n.setState({showBookForm:!0})},n.addBookRemove=function(){n.setState({showBookForm:!1})},n.getBooks=Object(d.a)(l.a.mark((function e(){var t,o,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.props.auth0.isAuthenticated){e.next=10;break}return e.next=3,n.props.auth0.getIdTokenClaims();case 3:return t=e.sent,o=t.__raw,a={method:"get",baseURL:"http://localhost:3001",url:"/books",headers:{Authorization:"Bearer ".concat(o)}},e.next=8,D()(a);case 8:r=e.sent,console.log(r.data);case 10:case"end":return e.stop()}}),e)}))),n.postBook=function(){var e=Object(d.a)(l.a.mark((function e(t){var o,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o="".concat("http://localhost:3001","/books"),e.next=4,D.a.post(o,t);case 4:a=e.sent,n.setState({books:[].concat(Object(c.a)(n.state.books),[a.data])}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("we have an error:",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),n.deleteBook=function(){var e=Object(d.a)(l.a.mark((function e(t){var o,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o="".concat("http://localhost:3001","/books/").concat(t),e.next=4,D.a.delete(o);case 4:a=n.state.books.filter((function(e){return e._id!==t})),n.setState({books:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("we have an error:",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),n.updateForm=function(){n.setState({showUpdateForm:!0})},n.hideUpdateForm=function(){n.setState({showUpdateForm:!1})},n.updateBook=function(){var e=Object(d.a)(l.a.mark((function e(t){var o,a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=t._id,a="".concat("http://localhost:3001","/books/").concat(o),e.next=5,D.a.put(a,t);case 5:r=e.sent,s=n.state.books.map((function(e){return e._id===t._id?r.data:e})),n.setState({books:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("we have an error:",e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),n.bookForUpdate=function(e){n.setState({book:e})},n.state={books:[],user:null,userName:null,email:null,loginForm:!1,showBookForm:!1,showUpdateForm:!1,loggedIn:!1},n}return Object(j.a)(o,[{key:"componentDidMount",value:function(){this.getBooks()}},{key:"render",value:function(){return console.log(this.state),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Auth0"}),this.props.auth0.isAuthenticated?Object(m.jsx)(f,{}):Object(m.jsx)(g,{}),this.props.auth0.isAuthenticated?Object(m.jsxs)(k.a,{children:[Object(m.jsx)(v,{user:this.state.user,onLogout:this.logoutHandler,onLogin:this.loginHandler}),Object(m.jsx)(N,{email:this.state.email,books:this.state.books,deleteBook:this.deleteBook,loggedIn:this.state.loggedIn,updateForm:this.updateForm,bookForUpdate:this.bookForUpdate}),Object(m.jsx)(I,{show:this.state.showBookForm,addBookRemove:this.addBookRemove,postBook:this.postBook}),Object(m.jsx)(E,{books:this.state.books,show:this.state.showUpdateForm,onHide:this.hideUpdateForm,updateBook:this.updateBook,book:this.state.book}),Object(m.jsx)(A,{addBookHandler:this.addBookHandler}),Object(m.jsxs)(H.c,{children:[Object(m.jsx)(H.a,{exact:!0,path:"/"}),Object(m.jsx)(H.a,{exact:!0,path:"/profile",children:Object(m.jsx)(B,{})})]}),this.state.loginForm?Object(m.jsx)(w,{userName:this.state.userName,loginFormHandler:this.loginFormHandler}):"",this.state.loggedIn?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{children:"Welcome!"}),Object(m.jsxs)("p",{children:["User: ",this.state.userName]}),Object(m.jsxs)("p",{children:["User Email: ",this.state.email]})]}):"",Object(m.jsx)(y,{})]}):Object(m.jsx)("h2",{children:"Please Log In"})]})}}]),o}(a.a.Component),T=Object(G.b)(R);s.a.render(Object(m.jsxs)(G.a,{domain:"dev-374xwfz3.us.auth0.com",clientId:"2keqes6Xy6hrb3l2ZFASVdTaNVTXMLWn",redirectUri:"http://localhost:3000",children:[Object(m.jsx)(T,{}),","]}),document.getElementById("root"))},71:function(e,t,o){}},[[104,1,2]]]);
//# sourceMappingURL=main.3c18b770.chunk.js.map
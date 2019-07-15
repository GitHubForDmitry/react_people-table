(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(21)},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),o=n.n(l),c=n(1),u=n.n(c),i=n(11),m=n(2),s=n(5),p=n(6),d=n(10),f=n(7),b=n(12),h=n(9),E=n(8),y=n.n(E);var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"id:"),r.a.createElement("th",null,"name:"),r.a.createElement("th",null,"sex:"),r.a.createElement("th",null,"born:"),r.a.createElement("th",null,"died:"),r.a.createElement("th",null,"mother:"),r.a.createElement("th",null,"father:"),r.a.createElement("th",null,"age:"),r.a.createElement("th",null,"century:"),r.a.createElement("th",null,"children:"))))},j=function(){var e=Object(m.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"\n  https://mate-academy.github.io/react_people-table/api/people.json\n  ",e.next=3,fetch("\n  https://mate-academy.github.io/react_people-table/api/people.json\n  ");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),v=(n(20),function(e){var t=e.field,n=e.people,a=e.direction,r=Object(h.a)(n);return r.sort(function(e,n){switch(typeof e[t]){case"string":return a*e[t].localeCompare(n[t]);case"number":case"boolean":return a*(e[t]-n[t]);default:return 0}}),r}),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={people:[],direction:1},n.loadData=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,n.setState({people:t.map(function(e,n){return Object(i.a)({},e,{id:n+1,age:e.died-e.born,century:Math.ceil(e.died/100),children:t.filter(function(t){return t.father===e.name||t.mother===e.name}).map(function(e){return e.name}).join(", ")})})});case 4:case"end":return e.stop()}},e)})),n.sortingBy=function(e){n.setState({field:e}),n.setState(function(e){return{people:v(e),direction:1===e.direction?-1:1}})},n.handleSearch=function(e){var t=e.target.value;n.setState(function(e){return{people:e.people.filter(function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())})}})},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this,t=this.state.people,n=t.map(function(e){return r.a.createElement("tr",{key:t+Math.random(),className:y()("person--lived-in-".concat(e.century),{"people__table--col":!0,"person--female":"f"===e.sex,"person--male":"m"===e.sex,"people__table--col-less1650":e.born<1650,"people__table--col-died1800":e.died>1800,"people__table--col-more65":e.age>65,"person--father":t.filter(function(t){return t.father===e.name}).map(function(e){return e.name}).join(" "),"person--mother":t.filter(function(t){return t.mother===e.name}).map(function(e){return e.name}).join(" "),"person--without--parents":t.filter(function(e){return null===(e.mother&&e.father)}).map(function(e){return e.name}).join(" ")})},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.sex),r.a.createElement("td",null,e.born),r.a.createElement("td",null,e.died),r.a.createElement("td",null,e.mother),r.a.createElement("td",null,e.father),r.a.createElement("td",null,e.age),r.a.createElement("td",null,e.century),r.a.createElement("td",null,e.children))});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"people__title"},"People: ",t.length),r.a.createElement("form",{className:"form-horizontal"},r.a.createElement("input",{placeholder:"Search...",onChange:this.handleSearch,className:"form-control mb-4"}),r.a.createElement("button",{type:"button",className:"btn btn-primary mr-2",onClick:function(){return e.sortingBy("name")}},"sort by name"),r.a.createElement("button",{type:"button",className:"btn btn-primary mr-2",onClick:function(){return e.sortingBy("id")}},"sort by ID"),r.a.createElement("button",{type:"button",className:"btn btn-primary mr-2",onClick:function(){return e.sortingBy("born")}},"sort by born"),r.a.createElement("button",{type:"button",className:"btn btn-primary mr-2",onClick:function(){return e.sortingBy("died")}},"sort by died"),r.a.createElement("button",{type:"button",className:"btn btn-primary mr-2",onClick:function(){return e.sortingBy("age")}},"sort by age")),r.a.createElement("table",{className:"PeopleTable table"},r.a.createElement(g,null),r.a.createElement("tbody",{className:"people__table"},n)))}}]),t}(r.a.Component);o.a.render(r.a.createElement(w,{test:123}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.889ca071.chunk.js.map
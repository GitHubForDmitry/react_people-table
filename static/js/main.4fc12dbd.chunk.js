(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),l=n(1),s=n.n(l),u=n(2),i=n(5),m=n(6),p=n(9),h=n(7),f=n(10),d=n(8);var E=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:function(){return e.sort("id")}},"id:"),r.a.createElement("th",{onClick:function(){return e.sort("name")}},"name:"),r.a.createElement("th",{onClick:function(){return e.sort("sex")}},"sex:"),r.a.createElement("th",{onClick:function(){return e.sort("born")}},"born:"),r.a.createElement("th",{onClick:function(){return e.sort("died")}},"died:"),r.a.createElement("th",{onClick:function(){return e.sort("mother")}},"mother:"),r.a.createElement("th",{onClick:function(){return e.sort("father")}},"father:"),r.a.createElement("th",{onClick:function(){return e.sort("age")}},"age:"),r.a.createElement("th",{onClick:function(){return e.sort("century")}},"century:"),r.a.createElement("th",{onClick:function(){return e.sort("children")}},"children:"))))},b=function(){var e=Object(u.a)(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"\n  https://mate-academy.github.io/react_people-table/api/people.json\n  ",e.next=3,fetch("\n  https://mate-academy.github.io/react_people-table/api/people.json\n  ");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),k=(n(18),function(e){var t=e.people;return Object(d.a)(t).reverse()}),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={people:[],direction:1},n.loadData=Object(u.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,n.setState({people:t});case 4:case"end":return e.stop()}},e)})),n.handleClickReverse=function(){n.setState(function(e){return{people:k(e)}})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this.state.people,t=e.map(function(t,n){var a=n+1,c=t.died-t.born,o=Math.ceil(t.died/100),l=e.filter(function(e){return e.father===t.name||e.mother===t.name}).map(function(e){return e.name}).join(", "),s=["people__table--col col"];return"f"===t.sex?s.push("person--female"):s.push("person--male"),t.born<1650&&s.push("people__table--col-less1650"),t.died>1800&&s.push("people__table--col-died1800"),c>65&&s.push("people__table--col-more65"),s.push("person--lived-in-".concat(o)),e.filter(function(e){return e.father===t.name}).map(function(e){return e.name}).join(" ")?s.push("person--father"):e.filter(function(e){return e.mother===t.name}).map(function(e){return e.name}).join(" ")?s.push("person--mother"):s.push("person--without--parents"),r.a.createElement("tbody",{key:e+Math.random(),className:"people__table"},r.a.createElement("tr",{className:s.join(" ")},r.a.createElement("td",{className:s},a),r.a.createElement("td",{className:s},t.name),r.a.createElement("td",{className:s},t.sex),r.a.createElement("td",{className:s},t.born),r.a.createElement("td",{className:s},t.died),r.a.createElement("td",{className:s},t.mother),r.a.createElement("td",{className:s},t.father),r.a.createElement("td",{className:s},c),r.a.createElement("td",{className:s},o),r.a.createElement("td",{className:s},l)))});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"people__title"},"People: ",e.length),r.a.createElement("table",{className:"PeopleTable table"},r.a.createElement(E,{sort:this.handleClickReverse}),t))}}]),t}(r.a.Component);o.a.render(r.a.createElement(v,{test:123}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.4fc12dbd.chunk.js.map
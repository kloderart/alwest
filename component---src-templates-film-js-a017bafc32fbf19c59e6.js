(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ULaD:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("vOnD"),i=function(e){var t=e.children;return r.a.createElement("li",null,t)},c=function(e){var t=e.children,a=e.label;return r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},a)},o=[{key:"year"},{key:"runtime",fn:function(e){return e>60?Math.floor(e/60)+"h. "+e%60+"m.":e+"m"}},{key:"imdb",label:"IMDB",cmp:c},{key:"spotify",label:"BSO",cmp:c},{key:"wikipedia",label:"Wikipedia",cmp:c},{key:"recaudation",fn:function(e){return e.toLocaleString()}},{key:"born"}],m=l.a.ul.withConfig({displayName:"Meta__StyledMeta",componentId:"zkuqw6-0"})(["display:flex;list-style:none;margin:0;li{margin-right:0.5rem;}"]);t.a=function(e){var t=e.frontmatter;return r.a.createElement(m,null,o.filter((function(e){return t[e.key]})).map((function(e){return Object.assign({},e,{result:e.fn?e.fn(t[e.key]):t[e.key]})})).map((function(e,t){return r.a.createElement(i,{key:t},e.cmp?r.a.createElement(e.cmp,{label:e.label},e.result):e.result)})))}},icAD:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return d}));var n=a("q1tI"),r=a.n(n),l=a("ciIH"),i=a.n(l),c=a("L6Je"),o=a("eaZk"),m=a("tNuE"),u=a("ULaD"),f=a("hYuR"),s=a("wcCm");t.default=function(e){var t=e.data.file.childMarkdownRemark,a=t.frontmatter,n=t.html;return r.a.createElement(c.a,null,r.a.createElement(f.a,{title:a.title}),r.a.createElement(s.a,null,r.a.createElement("h2",{style:{marginBottom:0}},a.title),r.a.createElement(u.a,{frontmatter:a}),r.a.createElement(i.a,{fixed:a.poster.childImageSharp.fixed,objectFit:"cover",objectPosition:"50% 50%",alt:a.title,style:{marginBottom:"1rem"}}),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:n}})),a.locations&&a.locations.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("h3",null,"Locations")),r.a.createElement(o.a,{markers:a.locations})),r.a.createElement(s.a,null,a.staff&&a.staff.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Staff"),r.a.createElement(m.a,{size:"small",items:a.staff}))))};var d="1498918281"},tNuE:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("vOnD"),i=a("Wbzz"),c=a("ciIH"),o=a.n(c),m=l.a.div.withConfig({displayName:"Item__StyledItem",componentId:"hsgrm0-0"})(["border-radius:0.5rem;overflow:hidden;height:260px;background-color:black;p{text-align:center;}a{color:white;text-decoration:none;}"]),u=function(e){var t=e.id,a=e.picture,n=e.name;return r.a.createElement(m,null,r.a.createElement(i.Link,{to:"/staff/"+t},r.a.createElement(o.a,{fixed:a.childImageSharp.fixed,objectFit:"cover",objectPosition:"50% 50%",alt:'"'+n+'" Photo'}),r.a.createElement("p",null,n)))};u.defaultProps={name:""};var f=u,s=l.a.div.withConfig({displayName:"Staff__StyledStaff",componentId:"c0mid4-0"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));grid-gap:1rem;justify-items:center;align-items:center;justify-content:space-between;margin-bottom:1rem;"]);t.a=function(e){var t=e.items;return r.a.createElement(s,null,t.filter((function(e){return!!e})).map((function(e){return r.a.createElement(f,Object.assign({},e.frontmatter,{key:e.frontmatter.id}))})))}}}]);
//# sourceMappingURL=component---src-templates-film-js-a017bafc32fbf19c59e6.js.map
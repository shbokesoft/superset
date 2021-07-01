(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{3814:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(4034)).default;t.default=s},3815:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(4035)).default;t.default=s},3816:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(4036)).default;t.default=s},4034:function(e,t){e.exports=function(e){const t={begin:"<",end:">",subLanguage:"xml",relevance:0},a={begin:"\\[.+?\\][\\(\\[].*?[\\)\\]]",returnBegin:!0,contains:[{className:"string",begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0,relevance:0},{className:"link",begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}],relevance:10},n={className:"strong",contains:[],variants:[{begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},s={className:"emphasis",contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{begin:/_(?!_)/,end:/_/,relevance:0}]};n.contains.push(s),s.contains.push(n);var i=[t,a];return n.contains=n.contains.concat(i),s.contains=s.contains.concat(i),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:i=i.concat(n,s)},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:i}]}]},t,{className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},n,s,{className:"quote",begin:"^>\\s+",contains:i,end:"$"},{className:"code",variants:[{begin:"(`{3,})(.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})(.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},{begin:"^[-\\*]{3,}",end:"$"},a,{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}}},4035:function(e,t){function a(...e){return e.map(e=>{return(t=e)?"string"==typeof t?t:t.source:null;var t}).join("")}e.exports=function(e){const t=function(e){const t={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"].join(" ")},n={literal:["true","false","undefined","null"].join(" ")},s=/\[.*?\]/,i=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,r=a("(",/'.*?'/,"|",/".*?"/,"|",s,"|",i,"|",/\.|\//,")+"),c=a("(",s,"|",i,")(?==)"),l={begin:r,lexemes:/[\w.\/]+/},o=e.inherit(l,{keywords:n}),d={begin:/\(/,end:/\)/},u={className:"attr",begin:c,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,o,d]}}},b={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},u,o,d],returnEnd:!0},g=e.inherit(l,{className:"name",keywords:t,starts:e.inherit(b,{end:/\)/})});d.contains=[g];const m=e.inherit(l,{keywords:t,className:"name",starts:e.inherit(b,{end:/}}/})}),h=e.inherit(l,{keywords:t,className:"name"}),p=e.inherit(l,{className:"name",keywords:t,starts:e.inherit(b,{end:/}}/})});return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[m],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[h]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[m]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[h]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[p]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[p]}]}}(e);return t.name="HTMLbars",e.getLanguage("handlebars")&&(t.disableAutodetect=!0),t}},4036:function(e,t){e.exports=function(e){var t={literal:"true false null"},a=[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],n=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],s={end:",",endsWithParent:!0,excludeEnd:!0,contains:n,keywords:t},i={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(s,{begin:/:/})].concat(a),illegal:"\\S"},r={begin:"\\[",end:"\\]",contains:[e.inherit(s)],illegal:"\\S"};return n.push(i,r),a.forEach((function(e){n.push(e)})),{name:"JSON",contains:n,keywords:t,illegal:"\\S"}}},4328:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(18);const s={name:Object(n.e)("Data"),tabs:[{name:"Databases",label:Object(n.e)("Databases"),url:"/databaseview/list/",usesRouter:!0},{name:"Datasets",label:Object(n.e)("Datasets"),url:"/tablemodelview/list/",usesRouter:!0},{name:"Saved queries",label:Object(n.e)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:Object(n.e)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},4416:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(31),s=a.n(n),i=(a(0),a(65)),r=a(18),c=a(1281),l=a.n(c),o=a(3815),d=a.n(o),u=a(3814),b=a.n(u),g=a(3816),m=a.n(g),h=a(998),p=a.n(h),O=a(562),j=a.n(O),f=a(74),y=a(529),v=a(1);j.a.registerLanguage("sql",l.a),j.a.registerLanguage("markdown",b.a),j.a.registerLanguage("html",d.a),j.a.registerLanguage("json",m.a);const _=i.g.div`
  margin-top: -24px;

  &:hover {
    svg {
      visibility: visible;
    }
  }

  svg {
    position: relative;
    top: 40px;
    left: 512px;
    visibility: hidden;
    margin: -4px;
  }
`;function x({addDangerToast:e,addSuccessToast:t,children:a,...n}){return Object(v.d)(_,null,Object(v.d)(f.a,{tabIndex:0,name:"copy",role:"button",onClick:n=>{var s;n.preventDefault(),n.currentTarget.blur(),s=a,Object(y.a)(s).then(()=>{t&&t(Object(r.e)("SQL Copied!"))}).catch(()=>{e&&e(Object(r.e)("Sorry, your browser does not support copying."))})}}),Object(v.d)(j.a,s()({style:p.a},n),a))}},4417:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(52);var n=a(835),s=a.n(n),i=a(0);function r({queries:e,fetchData:t,currentQueryId:a}){const n=s()(e).call(e,e=>e.id===a),[r,c]=Object(i.useState)(n),[l,o]=Object(i.useState)(!1),[d,u]=Object(i.useState)(!1);function b(){o(0===r),u(r===e.length-1)}function g(a){const n=r+(a?-1:1);n>=0&&n<e.length&&(t(e[n].id),c(n),b())}return Object(i.useEffect)(()=>{b()}),{handleKeyPress:function(t){r>=0&&r<e.length&&("ArrowDown"===t.key||"k"===t.key?(t.preventDefault(),g(!1)):"ArrowUp"!==t.key&&"j"!==t.key||(t.preventDefault(),g(!0)))},handleDataChange:g,disablePrevious:l,disableNext:d}}},4760:function(e,t,a){"use strict";a.r(t);a(52);var n,s=a(14),i=a.n(s),r=a(0),c=a.n(r),l=a(65),o=a(18),d=a(134),u=a(12),b=a.n(u),g=a(187),m=a(191),h=a(826),p=a(1399),O=a(233),j=a(4328),f=a(4312),y=a(74),v=a(68),_=a(562),x=a.n(_),w=a(1281),q=a.n(w),k=a(998),S=a.n(k),N=a(177);!function(e){e.id="id",e.changed_on="changed_on",e.database="database",e.database_name="database.database_name",e.schema="schema",e.sql="sql",e.executed_sql="exceuted_sql",e.sql_tables="sql_tables",e.status="status",e.tab_name="tab_name",e.user="user",e.user_first_name="user.first_name",e.start_time="start_time",e.end_time="end_time",e.rows="rows",e.tmp_table_name="tmp_table_name",e.tracking_url="tracking_url"}(n||(n={}));var $=a(163),E=a(7),D=a.n(E),C=a(62),M=a(4416),T=a(4417),L=a(1);const H=l.g.div`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,z=l.g.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-size: ${({theme:e})=>e.typography.sizes.m-1}px;
  padding: 4px 0 24px 0;
`,U=l.g.div`
  margin: 0 0 ${({theme:e})=>6*e.gridUnit}px 0;
`,A=l.g.div`
  display: inline;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  padding: ${({theme:e})=>2*e.gridUnit}px
    ${({theme:e})=>4*e.gridUnit}px;
  margin-right: ${({theme:e})=>4*e.gridUnit}px;
  color: ${({theme:e})=>e.colors.secondary.dark1};

  &.active,
  &:focus,
  &:hover {
    background: ${({theme:e})=>e.colors.secondary.light4};
    border-bottom: none;
    border-radius: ${({theme:e})=>e.borderRadius}px;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  &:hover:not(.active) {
    background: ${({theme:e})=>e.colors.secondary.light5};
  }
`,B=Object(l.g)($.b)`
  .ant-modal-body {
    padding: ${({theme:e})=>6*e.gridUnit}px;
  }

  pre {
    font-size: ${({theme:e})=>e.typography.sizes.xs}px;
    font-weight: ${({theme:e})=>e.typography.weights.normal};
    line-height: ${({theme:e})=>e.typography.sizes.l}px;
    height: 375px;
    border: none;
  }
`;var R=Object(m.a)((function({onHide:e,openInSqlLab:t,queries:a,query:n,fetchData:s,show:i,addDangerToast:c,addSuccessToast:l}){const{handleKeyPress:d,handleDataChange:u,disablePrevious:b,disableNext:g}=Object(T.a)({queries:a,currentQueryId:n.id,fetchData:s}),[m,h]=Object(r.useState)("user"),{id:p,sql:O,executed_sql:j}=n;return Object(L.d)("div",{role:"none",onKeyUp:d},Object(L.d)(B,{onHide:e,show:i,title:Object(o.e)("Query preview"),footer:[Object(L.d)(C.a,{key:"previous-query",disabled:b,onClick:()=>u(!0)},Object(o.e)("Previous")),Object(L.d)(C.a,{key:"next-query",disabled:g,onClick:()=>u(!1)},Object(o.e)("Next")),Object(L.d)(C.a,{key:"open-in-sql-lab",buttonStyle:"primary",onClick:()=>t(p)},Object(o.e)("Open in SQL Lab"))]},Object(L.d)(H,null,Object(o.e)("Tab name")),Object(L.d)(z,null,n.tab_name),Object(L.d)(U,null,Object(L.d)(A,{role:"button",className:D()({active:"user"===m}),onClick:()=>h("user")},Object(o.e)("User query")),Object(L.d)(A,{role:"button",className:D()({active:"executed"===m}),onClick:()=>h("executed")},Object(o.e)("Executed query"))),Object(L.d)(M.a,{addDangerToast:c,addSuccessToast:l,language:"sql"},("user"===m?O:j)||"")))}));const I=Object(l.g)(f.b)`
  table .table-cell {
    vertical-align: top;
  }
`;x.a.registerLanguage("sql",q.a);const Q=Object(l.g)(x.a)`
  height: ${({theme:e})=>26*e.gridUnit}px;
  overflow: hidden !important; /* needed to override inline styles */
  text-overflow: ellipsis;
  white-space: nowrap;
`,P=l.g.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`,F=l.g.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
`,G=Object(l.g)(y.a,{shouldForwardProp:e=>"status"!==e})`
  color: ${({status:e,theme:t})=>"success"===e?t.colors.success.base:"failed"===e?t.colors.error.base:"running"===e?t.colors.primary.base:"offline"===e?t.colors.grayscale.light1:t.colors.grayscale.base};
`;t.default=Object(m.a)((function({addDangerToast:e,addSuccessToast:t}){const{state:{loading:a,resourceCount:s,resourceCollection:l},fetchData:u}=Object(h.h)("query",Object(o.e)("Query history"),e,!1),[m,_]=Object(r.useState)(),x=Object(r.useCallback)(t=>{d.a.get({endpoint:`/api/v1/query/${t}`}).then(({json:e={}})=>{_({...e.result})},Object(g.c)(t=>e(Object(o.e)("There was an issue previewing the selected query. %s",t))))},[e]),w={activeChild:"Query history",...j.a},q=[{id:n.start_time,desc:!0}],k=Object(r.useMemo)(()=>[{Cell:({row:{original:{status:e}}})=>{const t={name:"",label:"",status:""};return"success"===e&&(t.name="check",t.label=Object(o.e)("Success"),t.status="success"),"failed"!==e&&"stopped"!==e||(t.name="x-small",t.label=Object(o.e)("Failed"),t.status="failed"),"running"===e&&(t.name="running",t.label=Object(o.e)("Running"),t.status="running"),"timed_out"===e&&(t.name="offline",t.label=Object(o.e)("Offline"),t.status="offline"),"scheduled"!==e&&"pending"!==e||(t.name="queued",t.label=Object(o.e)("Scheduled"),t.status="queued"),Object(L.d)(v.a,{title:t.label,placement:"bottom"},Object(L.d)("span",null,Object(L.d)(G,{name:t.name,status:t.status})))},accessor:n.status,size:"xs",disableSortBy:!0},{accessor:n.start_time,Header:Object(o.e)("Time"),size:"xl",Cell:({row:{original:{start_time:e,end_time:t}}})=>{const a=b.a.utc(e).local().format(N.c).split(" "),n=Object(L.d)(c.a.Fragment,null,a[0]," ",Object(L.d)("br",null),a[1]);return t?Object(L.d)(v.a,{title:Object(o.e)("Duration: %s",b()(b.a.utc(t-e)).format(N.f)),placement:"bottom"},Object(L.d)("span",null,n)):n}},{accessor:n.tab_name,Header:Object(o.e)("Tab name"),size:"xl"},{accessor:n.database_name,Header:Object(o.e)("Database"),size:"xl"},{accessor:n.database,hidden:!0},{accessor:n.schema,Header:Object(o.e)("Schema"),size:"xl"},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=i()(e).call(e,e=>e.table),a=t.length>0?t.shift():"";return t.length?Object(L.d)(P,null,Object(L.d)("span",null,a),Object(L.d)(O.a,{placement:"right",title:Object(o.e)("TABLES"),trigger:"click",content:Object(L.d)(c.a.Fragment,null,i()(t).call(t,e=>Object(L.d)(F,{key:e},e)))},Object(L.d)("span",{className:"count"},"(+",t.length,")"))):a},accessor:n.sql_tables,Header:Object(o.e)("Tables"),size:"xl",disableSortBy:!0},{accessor:n.user_first_name,Header:Object(o.e)("User"),size:"xl",Cell:({row:{original:{user:e}}})=>e?`${e.first_name} ${e.last_name}`:""},{accessor:n.user,hidden:!0},{accessor:n.rows,Header:Object(o.e)("Rows"),size:"md"},{accessor:n.sql,Header:Object(o.e)("SQL"),Cell:({row:{original:e,id:t}})=>Object(L.d)("div",{tabIndex:0,role:"button",onClick:()=>_(e)},Object(L.d)(Q,{language:"sql",style:S.a},Object(g.o)(e.sql,4)))},{Header:Object(o.e)("Actions"),id:"actions",disableSortBy:!0,Cell:({row:{original:{id:e}}})=>Object(L.d)(v.a,{title:Object(o.e)("Open query in SQL Lab"),placement:"bottom"},Object(L.d)("a",{href:`/superset/sqllab?queryId=${e}`},Object(L.d)(y.a,{name:"full"})))}],[]),$=Object(r.useMemo)(()=>[{Header:Object(o.e)("Database"),id:"database",input:"select",operator:f.a.relationOneMany,unfilteredLabel:"All",fetchSelects:Object(g.e)("query","database",Object(g.c)(t=>e(Object(o.e)("An error occurred while fetching database values: %s",t)))),paginate:!0},{Header:Object(o.e)("State"),id:"status",input:"select",operator:f.a.equals,unfilteredLabel:"All",fetchSelects:Object(g.d)("query","status",Object(g.c)(t=>e(Object(o.e)("An error occurred while fetching schema values: %s",t)))),paginate:!0},{Header:Object(o.e)("User"),id:"user",input:"select",operator:f.a.relationOneMany,unfilteredLabel:"All",fetchSelects:Object(g.e)("query","user",Object(g.c)(t=>e(Object(o.e)("An error occurred while fetching database values: %s",t)))),paginate:!0},{Header:Object(o.e)("Time range"),id:"start_time",input:"datetime_range",operator:f.a.between},{Header:Object(o.e)("Search by query text"),id:"sql",input:"search",operator:f.a.contains}],[e]);return Object(L.d)(c.a.Fragment,null,Object(L.d)(p.a,w),m&&Object(L.d)(R,{onHide:()=>_(void 0),query:m,queries:l,fetchData:x,openInSqlLab:e=>window.location.assign(`/superset/sqllab?queryId=${e}`),show:!0}),Object(L.d)(I,{className:"query-history-list-view",columns:k,count:s,data:l,fetchData:u,filters:$,initialSort:q,loading:a,pageSize:25,highlightRowId:null==m?void 0:m.id}))}))}}]);
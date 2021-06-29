(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{3496:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(68),o=a(74),s=a(1);t.a=({onClick:e,tooltipContent:t})=>{const a=c.a.forwardRef((e,t)=>Object(s.d)(o.a,e));return Object(s.d)(l.a,{title:t},Object(s.d)(a,{role:"button",onClick:e,name:"refresh",css:e=>({cursor:"pointer",color:e.colors.grayscale.base,"&:hover":{color:e.colors.primary.base}})}))}},3821:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(18),o=a(65),s=a(74),i=a(68),r=a(1);t.a=function({certifiedBy:e,details:t,size:a=24}){return Object(r.d)(i.a,{id:"certified-details-tooltip",title:Object(r.d)(c.a.Fragment,null,e&&Object(r.d)("div",null,Object(r.d)("strong",null,Object(l.e)("Certified by %s",e))),Object(r.d)("div",null,t))},Object(r.d)(s.a,{color:o.h.colors.primary.base,height:a,width:a,name:"certified"}))}},3837:function(e,t,a){"use strict";a(52);var n=a(88),c=a.n(n),l=a(14),o=a.n(l),s=a(0),i=a(65),r=a(134),d=a(18),b=a(77),u=a(137),m=a(3838),h=a(3496),p=a(3821),f=a(1405),O=a(1);const j=i.g.p`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin: 20px 0 10px 0;
  text-transform: uppercase;
`,g=i.g.div`
  .fa-refresh {
    padding-left: 9px;
  }

  .refresh-col {
    display: flex;
    align-items: center;
    width: 30px;
    margin-left: ${({theme:e})=>e.gridUnit}px;
  }

  .section {
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
  }

  .select {
    flex-grow: 1;
  }

  .divider {
    border-bottom: 1px solid ${({theme:e})=>e.colors.secondary.light5};
    margin: 15px 0;
  }
`,v=i.g.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  > svg,
  > small {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`;t.a=({database:e,dbId:t,formMode:a=!1,getDbList:n,handleError:l,isDatabaseSelectEnabled:i=!0,onChange:x,onDbChange:y,onSchemaChange:w,onSchemasLoad:C,onTableChange:S,onTablesLoad:$,readOnly:N=!1,schema:I,sqlLabMode:_=!0,tableName:L,tableNameSticky:D=!0})=>{const[R,E]=Object(s.useState)(I),[k,z]=Object(s.useState)(L),[U,q]=Object(s.useState)(!1),[M,T]=Object(s.useState)([]);function A(e,a,n=!1,s="undefined"){const i=a||R,b=e||t;if(b&&i){const e=encodeURIComponent(i),t=encodeURIComponent(s);q(!0),T([]);const a=encodeURI(`/superset/tables/${b}/${e}/${t}/${!!n}/`);return r.a.get({endpoint:a}).then(({json:e})=>{var t;const a=o()(t=e.options).call(t,e=>({value:e.value,schema:e.schema,label:e.label,title:e.title,type:e.type,extra:null==e?void 0:e.extra}));q(!1),T(a),$&&$(e.options)}).catch(()=>{q(!1),T([]),l(Object(d.e)("Error while fetching table list"))})}return q(!1),T([]),c.a.resolve()}function B({dbId:e,schema:t,tableName:a}){z(a),E(t),x&&x({dbId:e,schema:t,tableName:a})}function F(e="undefined"){if(!t||!e){const e=[];return c.a.resolve({options:e})}const a=encodeURIComponent(I||""),n=encodeURIComponent(e);return r.a.get({endpoint:encodeURI(`/superset/tables/${t}/${a}/${n}`)}).then(({json:e})=>{var t;return{options:o()(t=e.options).call(t,e=>({value:e.value,schema:e.schema,label:e.label,title:e.title,type:e.type}))}})}function J(e){if(!e)return void z("");const a=e.schema,n=e.value;D&&B({dbId:t,schema:a,tableName:n}),S&&S(n,a)}function K(e){var t,a;return Object(O.d)(v,{title:e.label},Object(O.d)("small",{className:"text-muted"},Object(O.d)("i",{className:`fa fa-${"view"===e.type?"eye":"table"}`})),(null==(t=e.extra)?void 0:t.certification)&&Object(O.d)(p.a,{certifiedBy:e.extra.certification.certified_by,details:e.extra.certification.details,size:20}),(null==(a=e.extra)?void 0:a.warning_markdown)&&Object(O.d)(f.a,{warningMarkdown:e.extra.warning_markdown,size:20}),e.label)}return Object(s.useEffect)(()=>{t&&I&&A()},[t,I]),Object(O.d)(g,null,Object(O.d)(m.a,{dbId:t,formMode:a,getDbList:n,getTableList:A,handleError:l,onChange:B,onDbChange:N?void 0:y,onSchemaChange:N?void 0:w,onSchemasLoad:C,schema:R,sqlLabMode:_,isDatabaseSelectEnabled:i&&!N,readOnly:N}),!a&&Object(O.d)("div",{className:"divider"}),_&&Object(O.d)("div",{className:"section"},Object(O.d)(u.c,null,Object(d.e)("See table schema")," ",I&&Object(O.d)("small",null,M.length," in",Object(O.d)("i",null,I)))),a&&Object(O.d)(j,null,Object(d.e)("Table")),function(){const n=M;let c=null;if(R&&!a)c=Object(O.d)(b.h,{name:"select-table",isLoading:U,ignoreAccents:!1,placeholder:Object(d.e)("Select table or type table name"),autosize:!1,onChange:J,options:n,value:k,optionRenderer:K,valueRenderer:K,isDisabled:N});else if(a)c=Object(O.d)(b.c,{name:"select-table",isLoading:U,ignoreAccents:!1,placeholder:Object(d.e)("Select table or type table name"),autosize:!1,onChange:J,options:n,value:k,optionRenderer:K});else{let t,a=!1;e&&e.allow_multi_schema_metadata_fetch?t=Object(d.e)("Type to search ..."):(t=Object(d.e)("Select table "),a=!0),c=Object(O.d)(b.b,{name:"async-select-table",placeholder:t,isDisabled:a,autosize:!1,onChange:J,value:k,loadOptions:F,optionRenderer:K})}return function(e,t){return Object(O.d)("div",{className:"section"},Object(O.d)("span",{className:"select"},e),Object(O.d)("span",{className:"refresh-col"},t))}(c,!a&&!N&&Object(O.d)(h.a,{onClick:()=>function(e,a=!1){const n=e?e.value:null;w&&w(n),B({dbId:t,schema:n,tableName:void 0}),A(t,R,a)}({value:I},!0),tooltipContent:Object(d.e)("Force refresh table list")}))}())}},3838:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));a(52);var n=a(39),c=a.n(n),l=a(88),o=a.n(l),s=a(14),i=a.n(s),r=a(0),d=a(65),b=a(134),u=a(18),m=a(178),h=a.n(m),p=a(77),f=a(184),O=a(3496),j=a(1247),g=a(1);const v=d.g.p`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin: 20px 0 10px 0;
  text-transform: uppercase;
`,x=d.g.div`
  .fa-refresh {
    padding-left: 9px;
  }

  .refresh-col {
    display: flex;
    align-items: center;
    width: 30px;
    margin-left: ${({theme:e})=>e.gridUnit}px;
  }

  .section {
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
  }

  .select {
    flex-grow: 1;
  }
`,y=d.g.span`
  display: inline-flex;
  align-items: center;
`;function w({dbId:e,formMode:t=!1,getDbList:a,getTableList:n,handleError:l,isDatabaseSelectEnabled:s=!0,onChange:d,onDbChange:m,onSchemaChange:w,onSchemasLoad:C,readOnly:S=!1,schema:$,sqlLabMode:N=!1}){const[I,_]=Object(r.useState)(e),[L,D]=Object(r.useState)($),[R,E]=Object(r.useState)(!1),[k,z]=Object(r.useState)([]);function U(t,a=!1){const n=t||e;if(n){E(!0);const e=`/api/v1/database/${n}/schemas/?q=${h.a.encode({force:Boolean(a)})}`;return b.a.get({endpoint:e}).then(({json:e})=>{var t;const a=i()(t=e.result).call(t,e=>({value:e,label:e,title:e}));z(a),E(!1),C&&C(a)}).catch(()=>{z([]),E(!1),l(Object(u.e)("Error while fetching schema list"))})}return o.a.resolve()}function q({dbId:e,schema:t}){_(e),D(t),d&&d({dbId:e,schema:t,tableName:void 0})}function M(e){var t;return a&&a(e.result),0===e.result.length&&l(Object(u.e)("It seems you don't have access to any database")),i()(t=e.result).call(t,e=>({...e,label:`${e.backend} ${e.database_name}`}))}function T(e,t=!1){const a=e?e.id:null;z([]),w&&w(null),m&&m(e),U(a,t),q({dbId:a,schema:void 0})}function A(e){return Object(g.d)(y,{title:e.database_name},Object(g.d)(f.a,{type:"default"},e.backend)," ",e.database_name)}function B(e,t){return Object(g.d)("div",{className:"section"},Object(g.d)("span",{className:"select"},e),Object(g.d)("span",{className:"refresh-col"},t))}return Object(r.useEffect)(()=>{I&&U(I)},[I]),Object(g.d)(x,null,t&&Object(g.d)(v,null,Object(u.e)("datasource")),function(){const e=h.a.encode({order_columns:"database_name",order_direction:"asc",page:0,page_size:-1,...t||!N?{}:{filters:[{col:"expose_in_sqllab",opr:"eq",value:!0}]}});return B(Object(g.d)(j.a,{dataEndpoint:`/api/v1/database/?q=${e}`,onChange:e=>T(e),onAsyncError:()=>l(Object(u.e)("Error while fetching database list")),clearable:!1,value:I,valueKey:"id",valueRenderer:e=>Object(g.d)("div",null,Object(g.d)("span",{className:"text-muted m-r-5"},Object(u.e)("Database:")),A(e)),optionRenderer:A,mutator:M,placeholder:Object(u.e)("Select a database"),autoSelect:!0,isDisabled:!s||S}),null)}(),t&&Object(g.d)(v,null,Object(u.e)("schema")),function(){const a=c()(k).call(k,({value:e})=>L===e),l=!t&&!S&&Object(g.d)(O.a,{onClick:()=>T({id:e},!0),tooltipContent:Object(u.e)("Force refresh schema list")});return B(Object(g.d)(p.h,{name:"select-schema",placeholder:Object(u.e)("Select a schema (%s)",k.length),options:k,value:a,valueRenderer:e=>Object(g.d)("div",null,Object(g.d)("span",{className:"text-muted"},Object(u.e)("Schema:"))," ",e.label),isLoading:R,autosize:!1,onChange:e=>function(e,t=!1){const a=e?e.value:null;w&&w(a),D(a),q({dbId:I,schema:a}),n&&n(I,a,t)}(e),isDisabled:S}),l)}())}}}]);
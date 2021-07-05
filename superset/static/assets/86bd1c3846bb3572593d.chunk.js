(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{4350:function(e,t,a){"use strict";a(52);var n=a(14),o=a.n(n),l=a(0),r=a.n(l),i=a(67),s=a(18),d=a(74),c=a(164),b=a(828),h=a(1);Object(i.g)(d.a)`
  margin: auto ${({theme:e})=>2*e.gridUnit}px auto 0;
`;const p=i.g.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
`,u=i.g.div`
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
  padding-top: ${({theme:e})=>2*e.gridUnit}px;

  & > div {
    margin: ${({theme:e})=>e.gridUnit}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .input-container {
    display: flex;
    align-items: center;

    label {
      display: flex;
      margin-right: ${({theme:e})=>2*e.gridUnit}px;
    }

    i {
      margin: 0 ${({theme:e})=>e.gridUnit}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border-style: none;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${({theme:e})=>3*e.gridUnit}px;
    }
  }
`;t.a=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:n,addDangerToast:i,addSuccessToast:d,onModelImport:m,show:g,onHide:O,passwordFields:j=[],setPasswordFields:y=(()=>{})})=>{const[v,f]=Object(l.useState)(!0),[x,_]=Object(l.useState)(null),[w,C]=Object(l.useState)({}),[$,S]=Object(l.useState)(!1),[N,k]=Object(l.useState)(!1),U=Object(l.useRef)(null),E=()=>{_(null),y([]),C({}),S(!1),k(!1),U&&U.current&&(U.current.value="")},{state:{alreadyExists:A,passwordsNeeded:T},importResource:q}=Object(b.g)(e,t,e=>{E(),i(e)});Object(l.useEffect)(()=>{y(T)},[T,y]),Object(l.useEffect)(()=>{S(A.length>0)},[A,S]);const L=e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";k(n.toUpperCase()===Object(s.e)("OVERWRITE"))};return v&&g&&f(!1),Object(h.d)(c.b,{name:"model",className:"import-model-modal",disablePrimaryButton:null===x||$&&!N,onHandledPrimaryAction:()=>{null!==x&&q(x,w,N).then(e=>{e&&(d(Object(s.e)("The import was successful")),E(),m())})},onHide:()=>{f(!0),O(),E()},primaryButtonName:$?Object(s.e)("Overwrite"):Object(s.e)("Import"),primaryButtonType:$?"danger":"primary",width:"750px",show:g,title:Object(h.d)("h4",null,Object(s.e)("Import %s",t))},Object(h.d)(u,null,Object(h.d)("div",{className:"control-label"},Object(h.d)("label",{htmlFor:"modelFile"},Object(s.e)("File"),Object(h.d)("span",{className:"required"},"*"))),Object(h.d)("input",{ref:U,name:"modelFile",id:"modelFile",type:"file",accept:".yaml,.json,.yml,.zip",onChange:e=>{const{files:t}=e.target;_(t&&t[0]||null)}})),0===j.length?null:Object(h.d)(r.a.Fragment,null,Object(h.d)("h5",null,"Database passwords"),Object(h.d)(p,null,a),o()(j).call(j,e=>Object(h.d)(u,{key:`password-for-${e}`},Object(h.d)("div",{className:"control-label"},e,Object(h.d)("span",{className:"required"},"*")),Object(h.d)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:w[e],onChange:t=>C({...w,[e]:t.target.value})})))),$?Object(h.d)(r.a.Fragment,null,Object(h.d)(u,null,Object(h.d)("div",{className:"confirm-overwrite"},n),Object(h.d)("div",{className:"control-label"},Object(s.e)('Type "%s" to confirm',Object(s.e)("OVERWRITE"))),Object(h.d)("input",{id:"overwrite",type:"text",onChange:L}))):null)}},4374:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(18);const o={name:Object(n.e)("Data"),tabs:[{name:"Databases",label:Object(n.e)("Databases"),url:"/databaseview/list/",usesRouter:!0},{name:"Datasets",label:Object(n.e)("Datasets"),url:"/tablemodelview/list/",usesRouter:!0},{name:"Saved queries",label:Object(n.e)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:Object(n.e)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},5249:function(e,t,a){"use strict";a.r(t);a(52);var n,o=a(18),l=a(67),r=a(134),i=a(0),s=a.n(i),d=a(183),c=a.n(d),b=a(50),h=a(828),p=a(188),u=a(192),m=a(1405),g=a(3504),O=a(71),j=a(104),y=a(4337),v=a(4374),f=a(4350),x=a(40),_=a.n(x),w=a(38),C=a.n(w),$=a(87),S=a.n($),N=a(264),k=a.n(N),U=a(257),E=a(20),A=a(164),T=a(62),q=a(136);!function(e){e.SQLALCHEMY_URI="sqlalchemy_form",e.DYNAMIC_FORM="dynamic_form"}(n||(n={}));var L=a(7),z=a.n(L),M=a(74),P=a(1);const D=Object(l.g)(O.a)`
  cursor: pointer;

  path:first-of-type {
    fill: #999999;
  }
`,I={fontSize:"12px",lineHeight:"16px"};function R({tooltip:e,placement:t="right",trigger:a="hover",overlayStyle:n=I,bgColor:o="rgba(0,0,0,0.9)"}){return Object(P.d)(D,{title:e,placement:t,trigger:a,overlayStyle:n,color:o},Object(P.d)(M.a,{name:"info-solid-small"}))}var H=a(4692),Q=a(216),B=a(510);const F=l.g.header`
  border-bottom: ${({theme:e})=>`${.25*e.gridUnit}px solid\n    ${e.colors.grayscale.light2};`}
  padding-left: ${({theme:e})=>4*e.gridUnit}px;
  padding-right: ${({theme:e})=>4*e.gridUnit}px;
  margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  .helper {
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
  }
  h4 {
    color: ${({theme:e})=>e.colors.grayscale.dark2};
    font-weight: bold;
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
  }
`,V=P.c`
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    margin-right: 0;
  }
`,Y=P.c`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
  }
`,J=e=>P.c`
  overflow-y: scroll;
  padding-left: ${4*e.gridUnit}px;
  padding-right: ${4*e.gridUnit}px;
`,W=e=>P.c`
  .ant-modal-header {
    padding: ${4.5*e.gridUnit}px ${4*e.gridUnit}px
      ${4*e.gridUnit}px;
  }

  .ant-modal-close-x .close {
    color: ${e.colors.grayscale.dark1};
    opacity: 1;
  }
  .ant-modal-title > h4 {
    font-weight: bold;
  }
`,X=e=>P.c`
  .required {
    margin-left: ${e.gridUnit/2}px;
    color: ${e.colors.error.base};
  }

  .helper {
    display: block;
    padding: ${e.gridUnit}px 0;
    color: ${e.colors.grayscale.light1};
    font-size: ${e.typography.sizes.s-1}px;
    text-align: left;
  }
`,K=e=>P.c`
  .form-group {
    margin-bottom: ${4*e.gridUnit}px;
    &-w-50 {
      display: inline-block;
      width: ${`calc(50% - ${4*e.gridUnit}px)`};
      & + .form-group-w-50 {
        margin-left: ${8*e.gridUnit}px;
      }
    }
  }
  .control-label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s-1}px;
  }
  .helper {
    color: ${e.colors.grayscale.light1};
    font-size: ${e.typography.sizes.s-1}px;
    margin-top: ${1.5*e.gridUnit}px;
  }
  .ant-tabs-content-holder {
    overflow: auto;
    max-height: 475px;
  }
`,G=e=>P.c`
  label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s-1}px;
    margin-bottom: 0;
  }
`,Z=l.g.div`
  margin-bottom: ${({theme:e})=>6*e.gridUnit}px;
  &.mb-0 {
    margin-bottom: 0;
  }
  &.mb-8 {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .control-label {
    color: ${({theme:e})=>e.colors.grayscale.dark1};
    font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .input-container {
    display: flex;
    align-items: top;

    label {
      display: flex;
      margin-left: ${({theme:e})=>2*e.gridUnit}px;
      margin-top: ${({theme:e})=>.75*e.gridUnit}px;
      font-family: ${({theme:e})=>e.typography.families.sansSerif};
      font-size: ${({theme:e})=>e.typography.sizes.m}px;
    }

    i {
      margin: 0 ${({theme:e})=>e.gridUnit}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border-style: none;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }
  }
  &.expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.25s;
    margin-left: ${({theme:e})=>8*e.gridUnit}px;
    margin-bottom: 0;
    padding: 0;
    .control-label {
      margin-bottom: 0;
    }
    &.open {
      height: ${102}px;
      padding-right: ${({theme:e})=>5*e.gridUnit}px;
    }
  }
`,ee=Object(l.g)(B.d)`
  flex: 1 1 auto;
  border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,te=l.g.div`
  padding-top: ${({theme:e})=>e.gridUnit}px;
  .input-container {
    padding-top: ${({theme:e})=>e.gridUnit}px;
    padding-bottom: ${({theme:e})=>e.gridUnit}px;
  }
  &.expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.25s;
    margin-left: ${({theme:e})=>7*e.gridUnit}px;
    &.open {
      height: ${154}px;
      &.ctas-open {
        height: ${256}px;
      }
    }
  }
`,ae=Object(l.g)(U.c.TabPane)`
  padding-left: ${({theme:e})=>4*e.gridUnit}px;
  padding-right: ${({theme:e})=>4*e.gridUnit}px;
  margin-top: ${({theme:e})=>6*e.gridUnit}px;
`,ne=P.c`
  font-weight: 400;
  text-transform: initial;
`,oe=l.g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  margin: 0 ${({theme:e})=>4*e.gridUnit}px
    ${({theme:e})=>8*e.gridUnit}px;
`,le=l.g.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-weight: bold;
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  padding: ${({theme:e})=>1*e.gridUnit}px 0;
`,re=l.g.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,ie=l.g.div`
  color: ${({theme:e})=>e.colors.grayscale.light1};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
  text-transform: uppercase;
`,se=l.g.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.l}px;
  font-weight: bold;
`;var de=({db:e,onInputChange:t,onTextChange:a,onEditorChange:n})=>{var l;const r=!(null==e||!e.expose_in_sqllab),i=!!(null!=e&&e.allow_ctas||null!=e&&e.allow_cvas);return Object(P.d)(Q.a,{expandIconPosition:"right",accordion:!0,css:e=>(e=>P.c`
  .ant-collapse-header {
    padding-top: ${3.5*e.gridUnit}px;
    padding-bottom: ${2.5*e.gridUnit}px;

    .anticon.ant-collapse-arrow {
      top: calc(50% - ${6}px);
    }
    .helper {
      color: ${e.colors.grayscale.base};
    }
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: ${e.gridUnit}px;
  }
  p.helper {
    margin-bottom: 0;
    padding: 0;
  }
`)(e)},Object(P.d)(Q.a.Panel,{header:Object(P.d)("div",null,Object(P.d)("h4",null,"SQL Lab"),Object(P.d)("p",{className:"helper"},"Configure how this database will function in SQL Lab.")),key:"1"},Object(P.d)(Z,{className:"mb-0"},Object(P.d)("div",{className:"input-container"},Object(P.d)(H.a,{id:"expose_in_sqllab",indeterminate:!1,checked:!(null==e||!e.expose_in_sqllab),onChange:t,labelText:Object(o.e)("Expose in SQL Lab")}),Object(P.d)(R,{tooltip:Object(o.e)("Allow this database to be queried in SQL Lab")})),Object(P.d)(te,{className:z()("expandable",{open:r,"ctas-open":i})},Object(P.d)(Z,{className:"mb-0"},Object(P.d)("div",{className:"input-container"},Object(P.d)(H.a,{id:"allow_ctas",indeterminate:!1,checked:!(null==e||!e.allow_ctas),onChange:t,labelText:Object(o.e)("Allow CREATE TABLE AS")}),Object(P.d)(R,{tooltip:Object(o.e)("Allow creation of new tables based on queries")}))),Object(P.d)(Z,{className:"mb-0"},Object(P.d)("div",{className:"input-container"},Object(P.d)(H.a,{id:"allow_cvas",indeterminate:!1,checked:!(null==e||!e.allow_cvas),onChange:t,labelText:Object(o.e)("Allow CREATE VIEW AS")}),Object(P.d)(R,{tooltip:Object(o.e)("Allow creation of new views based on queries")})),Object(P.d)(Z,{className:z()("expandable",{open:i})},Object(P.d)("div",{className:"control-label"},Object(o.e)("CTAS & CVAS SCHEMA")),Object(P.d)("div",{className:"input-container"},Object(P.d)("input",{type:"text",name:"force_ctas_schema",value:(null==e?void 0:e.force_ctas_schema)||"",placeholder:Object(o.e)("Search or select schema"),onChange:t})),Object(P.d)("div",{className:"helper"},Object(o.e)("When allowing CREATE TABLE AS option in SQL Lab, this option forces the table to be created in this schema.")))),Object(P.d)(Z,{className:"mb-0"},Object(P.d)("div",{className:"input-container"},Object(P.d)(H.a,{id:"allow_dml",indeterminate:!1,checked:!(null==e||!e.allow_dml),onChange:t,labelText:Object(o.e)("Allow DML")}),Object(P.d)(R,{tooltip:Object(o.e)("Allow manipulation of the database using non-SELECT statements such as UPDATE, DELETE, CREATE, etc.")}))),Object(P.d)(Z,null,Object(P.d)("div",{className:"input-container"},Object(P.d)(H.a,{id:"allow_multi_schema_metadata_fetch",indeterminate:!1,checked:!(null==e||!e.allow_multi_schema_metadata_fetch),onChange:t,labelText:Object(o.e)("Allow multi schema metadata fetch")}),Object(P.d)(R,{tooltip:Object(o.e)("Allow SQL Lab to fetch a list of all tables and all views across all database schemas. For large data warehouse with thousands of tables, this can be expensive and put strain on the system.")})))))),Object(P.d)(Q.a.Panel,{header:Object(P.d)("div",null,Object(P.d)("h4",null,"Performance"),Object(P.d)("p",{className:"helper"},"Adjust settings that will impact the performance of this database.")),key:"2"},Object(P.d)(Z,{className:"mb-8"},Object(P.d)("div",{className:"control-label"},Object(o.e)("Chart cache timeout")),Object(P.d)("div",{className:"input-container"},Object(P.d)("input",{type:"number",name:"cache_timeout",value:(null==e?void 0:e.cache_timeout)||"",placeholder:Object(o.e)("Chart cache timeout"),onChange:t})),Object(P.d)("div",{className:"helper"},Object(o.e)("Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires. Note this defaults to the global timeout if undefined."))),Object(P.d)(Z,{className:"mb-0"},Object(P.d)("div",{className:"input-container"},Object(P.d)(H.a,{id:"allow_run_async",indeterminate:!1,checked:!(null==e||!e.allow_run_async),onChange:t,labelText:Object(o.e)("Asynchronous query execution")}),Object(P.d)(R,{tooltip:Object(o.e)("Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.")})))),Object(P.d)(Q.a.Panel,{header:Object(P.d)("div",null,Object(P.d)("h4",null,"Security"),Object(P.d)("p",{className:"helper"},"Add connection information for other systems.")),key:"3"},Object(P.d)(Z,null,Object(P.d)("div",{className:"control-label"},Object(o.e)("Secure extra")),Object(P.d)("div",{className:"input-container"},Object(P.d)(ee,{name:"encrypted_extra",value:(null==e?void 0:e.encrypted_extra)||"",placeholder:Object(o.e)("Secure extra"),onChange:e=>n({json:e,name:"encrypted_extra"}),width:"100%",height:"160px"})),Object(P.d)("div",{className:"helper"},Object(P.d)("div",null,Object(o.e)("JSON string containing additional connection configuration.")),Object(P.d)("div",null,Object(o.e)("This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.")))),Object(P.d)(Z,null,Object(P.d)("div",{className:"control-label"},Object(o.e)("Root certificate")),Object(P.d)("div",{className:"input-container"},Object(P.d)("textarea",{name:"server_cert",value:(null==e?void 0:e.server_cert)||"",placeholder:Object(o.e)("Root certificate"),onChange:a})),Object(P.d)("div",{className:"helper"},Object(o.e)("Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.")))),Object(P.d)(Q.a.Panel,{header:Object(P.d)("div",null,Object(P.d)("h4",null,"Other"),Object(P.d)("p",{className:"helper"},"Additional settings.")),key:"4"},Object(P.d)(Z,{className:"mb-0"},Object(P.d)("div",{className:"input-container"},Object(P.d)(H.a,{id:"impersonate_user",indeterminate:!1,checked:!(null==e||!e.impersonate_user),onChange:t,labelText:Object(o.e)("Impersonate Logged In User (Presto, Trino, Hive, and GSheets)")}),Object(P.d)(R,{tooltip:Object(o.e)("If Presto or Trino, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them. If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.")}))),Object(P.d)(Z,{className:"mb-0"},Object(P.d)("div",{className:"input-container"},Object(P.d)(H.a,{id:"allow_csv_upload",indeterminate:!1,checked:!(null==e||!e.allow_csv_upload),onChange:t,labelText:Object(o.e)("Allow data upload")}),Object(P.d)(R,{tooltip:Object(o.e)("If selected, please set the schemas allowed for data upload in Extra.")}))),Object(P.d)(Z,{className:"extra-container"},Object(P.d)("div",{className:"control-label"},Object(o.e)("Extra")),Object(P.d)("div",{className:"input-container"},Object(P.d)(ee,{name:"extra",value:null!=(l=null==e?void 0:e.extra)?l:'{\n  "metadata_params": {},\n  "engine_params": {},\n  "metadata_cache_timeout": {},\n  "schemas_allowed_for_csv_upload": [] \n}',placeholder:Object(o.e)("Secure extra"),onChange:e=>n({json:e,name:"extra"}),width:"100%",height:"160px"})),Object(P.d)("div",{className:"helper"},Object(P.d)("div",null,Object(o.e)("JSON string containing extra configuration elements.")),Object(P.d)("div",null,Object(o.e)("1. The engine_params object gets unpacked into the sqlalchemy.create_engine call, while the metadata_params gets unpacked into the sqlalchemy.MetaData call.")),Object(P.d)("div",null,Object(o.e)('2. The metadata_cache_timeout is a cache timeout setting in seconds for metadata fetch of this database. Specify it as "metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.')),Object(P.d)("div",null,Object(o.e)('3. The schemas_allowed_for_csv_upload is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as "schemas_allowed_for_csv_upload": ["public", "csv_upload"]. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty.')),Object(P.d)("div",null,Object(o.e)("4. The version field is a string specifying this db's version. This should be used with Presto DBs so that the syntax is correct.")),Object(P.d)("div",null,Object(o.e)("5. The allows_virtual_table_explore field is a boolean specifying whether or not the Explore button in SQL Lab results is shown."))))))};var ce=({db:e,onInputChange:t,testConnection:a,conf:n})=>{var l,r;return Object(P.d)(s.a.Fragment,null,Object(P.d)(Z,null,Object(P.d)("div",{className:"control-label"},Object(o.e)("Display Name"),Object(P.d)("span",{className:"required"},"*")),Object(P.d)("div",{className:"input-container"},Object(P.d)("input",{type:"text",name:"database_name",value:(null==e?void 0:e.database_name)||"",placeholder:Object(o.e)("Name your database"),onChange:t})),Object(P.d)("div",{className:"helper"},Object(o.e)("Pick a name to help you identify this database."))),Object(P.d)(Z,null,Object(P.d)("div",{className:"control-label"},Object(o.e)("SQLAlchemy URI"),Object(P.d)("span",{className:"required"},"*")),Object(P.d)("div",{className:"input-container"},Object(P.d)("input",{type:"text",name:"sqlalchemy_uri",value:(null==e?void 0:e.sqlalchemy_uri)||"",autoComplete:"off",placeholder:Object(o.e)("dialect+driver://username:password@host:port/database"),onChange:t})),Object(P.d)("div",{className:"helper"},Object(o.e)("Refer to the")," ",Object(P.d)("a",{href:null!=(l=null==n?void 0:n.SQLALCHEMY_DOCS_URL)?l:"",target:"_blank",rel:"noopener noreferrer"},null!=(r=null==n?void 0:n.SQLALCHEMY_DISPLAY_TEXT)?r:"")," ",Object(o.e)("for more information on how to structure your URI."))),Object(P.d)(T.a,{onClick:a,cta:!0,buttonStyle:"link",css:e=>(e=>P.c`
  width: 100%;
  border: 1px solid ${e.colors.primary.dark2};
  color: ${e.colors.primary.dark2};
  &:hover,
  &:focus {
    border: 1px solid ${e.colors.primary.dark1};
    color: ${e.colors.primary.dark1};
  }
`)(e)},Object(o.e)("Test connection")))},be=a(49),he=a.n(be),pe=a(14),ue=a.n(pe),me=a(1011);const ge=["host","port","database","username","password","database_name"],Oe={host:({required:e,changeMethods:t,getValidation:a,validationErrors:n})=>Object(P.d)(me.a,{id:"host",name:"host",required:e,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.host,placeholder:"e.g. 127.0.0.1",className:"form-group-w-50",label:"Host",onChange:t.onParametersChange}),port:({required:e,changeMethods:t,getValidation:a,validationErrors:n})=>Object(P.d)(me.a,{id:"port",name:"port",required:e,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.port,placeholder:"e.g. 5432",className:"form-group-w-50",label:"Port",onChange:t.onParametersChange}),database:({required:e,changeMethods:t,getValidation:a,validationErrors:n})=>Object(P.d)(me.a,{id:"database",name:"database",required:e,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.database,placeholder:"e.g. world_population",label:"Database name",onChange:t.onParametersChange,helpText:"Copy the name of the PostgreSQL database you are trying to connect to."}),username:({required:e,changeMethods:t,getValidation:a,validationErrors:n})=>Object(P.d)(me.a,{id:"username",name:"username",required:e,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.username,placeholder:"e.g. Analytics",label:"Username",onChange:t.onParametersChange}),password:({required:e,changeMethods:t,getValidation:a,validationErrors:n})=>Object(P.d)(me.a,{id:"password",name:"password",required:e,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.password,placeholder:"e.g. ********",label:"Password",onChange:t.onParametersChange}),database_name:({required:e,changeMethods:t,getValidation:a,validationErrors:n})=>Object(P.d)(me.a,{id:"database_name",name:"database_name",required:e,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.database_name,placeholder:"",label:"Display Name",onChange:t.onChange,helpText:"Pick a nickname for this database to display as in Superset."})};var je=({dbModel:{name:e,parameters:t},onParametersChange:a,onChange:n,validationErrors:o,getValidation:l})=>{var r;return Object(P.d)(s.a.Fragment,null,Object(P.d)(F,null,Object(P.d)("h4",null,"Enter the required ",e," credentials"),Object(P.d)("p",{className:"helper"},"Need help? Learn more about connecting to ",e,".")),Object(P.d)("div",{css:e=>[J,G(e)]},t&&ue()(r=C()(ge).call(ge,e=>{var a;return _()(a=he()(t.properties)).call(a,e)||"database_name"===e})).call(r,e=>{var r;return Oe[e]({required:_()(r=t.required).call(r,e),changeMethods:{onParametersChange:a,onChange:n},validationErrors:o,getValidation:l,key:e})})))};const ye="https://superset.apache.org/docs/databases/installing-database-drivers";var ve;function fe(e,t){const a={...e||{}};switch(t.type){case ve.inputChange:return"checkbox"===t.payload.type?{...a,[t.payload.name]:t.payload.checked}:{...a,[t.payload.name]:t.payload.value};case ve.parametersChange:return{...a,parameters:{...a.parameters,[t.payload.name]:t.payload.value}};case ve.editorChange:return{...a,[t.payload.name]:t.payload.json};case ve.textChange:return{...a,[t.payload.name]:t.payload.value};case ve.fetched:return{engine:a.engine,configuration_method:a.configuration_method,...t.payload};case ve.dbSelected:case ve.configMethodChange:return{...t.payload};case ve.reset:default:return{}}}!function(e){e[e.configMethodChange=0]="configMethodChange",e[e.dbSelected=1]="dbSelected",e[e.editorChange=2]="editorChange",e[e.fetched=3]="fetched",e[e.inputChange=4]="inputChange",e[e.parametersChange=5]="parametersChange",e[e.reset=6]="reset",e[e.textChange=7]="textChange"}(ve||(ve={}));const xe=[void 0,null,""];var _e=Object(u.a)(({addDangerToast:e,addSuccessToast:t,onDatabaseAdd:a,onHide:l,show:r,databaseId:d})=>{var c,b,p;const[u,m]=Object(i.useReducer)(fe,null),[g,O]=Object(i.useState)("1"),[j,y]=Object(h.c)(),[v,f]=Object(h.e)(),[x,w]=Object(i.useState)(!1),[$,N]=Object(i.useState)(""),L=Object(q.d)(e=>e.common.conf),z=!!d,M=(null==u?void 0:u.configuration_method)===n.SQLALCHEMY_URI,D=z||M,{state:{loading:I,resource:R},fetchResource:H,createResource:Q,updateResource:B}=Object(h.i)("database",Object(o.e)("database"),e),F=()=>{m({type:ve.reset}),w(!1),l()},J=async()=>{const{id:e,...t}=u||{};if(null!=u&&u.id){u.sqlalchemy_uri&&delete t.parameters,await B(u.id,t)&&(a&&a(),F())}else if(u){await Q(t)&&(w(!0),a&&a(),D&&F())}},G=(e,t)=>{m({type:e,payload:t})};Object(i.useEffect)(()=>{r&&(O("1"),y(),m({type:ve.dbSelected,payload:{configuration_method:n.SQLALCHEMY_URI}})),d&&r&&z&&d&&(I||H(d).catch(t=>e(Object(o.e)("Sorry there was an error fetching database information: %s",t.message))))},[r,d]),Object(i.useEffect)(()=>{R&&(m({type:ve.fetched,payload:R}),N(R.database_name))},[R]);const Z=(null==j?void 0:null==(c=j.databases)?void 0:S()(c).call(c,e=>e.engine===(null==u?void 0:u.engine)))||{},ee=!(x||(M?null!=u&&null!=(b=u.database_name)&&k()(b).call(b)&&null!=u&&u.sqlalchemy_uri:null!=Z&&Z.parameters&&!C()(p=Z.parameters.required).call(p,e=>{var t;return _()(xe).call(xe,null==u?void 0:null==(t=u.parameters)?void 0:t[e])}).length));return D?Object(P.d)(A.b,{css:e=>[V,W(e),Y,X(e)],name:"database",disablePrimaryButton:ee,height:"600px",onHandledPrimaryAction:J,onHide:F,primaryButtonName:z?Object(o.e)("Save"):Object(o.e)("Connect"),width:"500px",show:r,title:Object(P.d)("h4",null,z?Object(o.e)("Edit database"):Object(o.e)("Connect a database"))},z?Object(P.d)(oe,null,Object(P.d)(ie,null,null==u?void 0:u.backend),Object(P.d)(se,null,$)):Object(P.d)(oe,null,Object(P.d)(le,null,"Enter Primary Credentials"),Object(P.d)(re,null,"Need help? Learn how to connect your database"," ",Object(P.d)("a",{href:ye,target:"_blank",rel:"noopener noreferrer"},"here"),".")),Object(P.d)("hr",null),Object(P.d)(U.c,{defaultActiveKey:"1",activeKey:g,onTabClick:e=>{O(e)},animated:{inkBar:!0,tabPane:!0}},Object(P.d)(ae,{tab:Object(P.d)("span",null,Object(o.e)("Basic")),key:"1"},M?Object(P.d)(ce,{db:u,onInputChange:({target:e})=>G(ve.inputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),conf:L,testConnection:()=>{var a;if(null==u||!u.sqlalchemy_uri)return void e(Object(o.e)("Please enter a SQLAlchemy URI to test"));const n={sqlalchemy_uri:(null==u?void 0:u.sqlalchemy_uri)||"",database_name:(null==u?void 0:null==(a=u.database_name)?void 0:k()(a).call(a))||void 0,impersonate_user:(null==u?void 0:u.impersonate_user)||void 0,extra:(null==u?void 0:u.extra)||void 0,encrypted_extra:(null==u?void 0:u.encrypted_extra)||void 0,server_cert:(null==u?void 0:u.server_cert)||void 0};Object(h.b)(n,e,t)}}):Object(P.d)("div",null,Object(P.d)("p",null,"TODO: form")),Object(P.d)(E.a,{css:e=>(e=>P.c`
  border: 1px solid ${e.colors.info.base};
  padding: ${4*e.gridUnit}px;
  margin: ${8*e.gridUnit}px 0 0;
  .ant-alert-message {
    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.s+1}px;
    font-weight: bold;
  }
  .ant-alert-description {
    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.s+1}px;
    line-height: ${4*e.gridUnit}px;
    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l+1}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),message:"Additional fields may be required",description:Object(P.d)(s.a.Fragment,null,"Select databases require additional fields to be completed in the Advanced tab to successfully connect the database. Learn what requirements your databases has"," ",Object(P.d)("a",{href:ye,target:"_blank",rel:"noopener noreferrer"},"here"),"."),type:"info",showIcon:!0})),Object(P.d)(U.c.TabPane,{tab:Object(P.d)("span",null,Object(o.e)("Advanced")),key:"2"},Object(P.d)(de,{db:u,onInputChange:({target:e})=>G(ve.inputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>G(ve.textChange,{name:e.name,value:e.value}),onEditorChange:e=>G(ve.editorChange,e)})))):Object(P.d)(A.b,{css:e=>[Y,W(e),X(e),K(e)],name:"database",disablePrimaryButton:ee,height:"600px",onHandledPrimaryAction:J,onHide:F,primaryButtonName:x?Object(o.e)("Finish"):Object(o.e)("Connect"),width:"500px",show:r,title:Object(P.d)("h4",null,Object(o.e)("Connect a database"))},x?Object(P.d)(de,{db:u,onInputChange:({target:e})=>G(ve.inputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>G(ve.textChange,{name:e.name,value:e.value}),onEditorChange:e=>G(ve.editorChange,e)}):Object(P.d)(s.a.Fragment,null,Object(P.d)(je,{dbModel:Z,onParametersChange:({target:e})=>G(ve.parametersChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onChange:({target:e})=>G(ve.textChange,{name:e.name,value:e.value}),getValidation:()=>f(u),validationErrors:v}),Object(P.d)(T.a,{buttonStyle:"link",onClick:()=>m({type:ve.configMethodChange,payload:{configuration_method:n.SQLALCHEMY_URI}}),css:ne},"Connect this database with a SQLAlchemy URI string instead")))});const we=Object(o.e)('The passwords for the databases below are needed in order to import them. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),Ce=Object(o.e)("You are importing one or more databases that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),$e=Object(l.g)(j.a.Check)`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
`,Se=Object(l.g)(j.a.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
`,Ne=l.g.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function ke({value:e}){return e?Object(P.d)($e,null):Object(P.d)(Se,null)}t.default=Object(u.a)((function({addDangerToast:e,addSuccessToast:t}){const{state:{loading:a,resourceCount:n,resourceCollection:l},hasPerm:d,fetchData:u,refreshData:x}=Object(h.h)("database",Object(o.e)("database"),e),[_,w]=Object(i.useState)(!1),[C,$]=Object(i.useState)(null),[S,N]=Object(i.useState)(null),[k,U]=Object(i.useState)(!1),[E,A]=Object(i.useState)([]),T=()=>{U(!0)};function q({database:e=null,modalOpen:t=!1}={}){N(e),w(t)}const L=d("can_write"),z=d("can_write"),M=d("can_write"),D=d("can_read")&&Object(b.c)(b.a.VERSIONED_EXPORT),I={activeChild:"Databases",...v.a};L&&(I.buttons=[{"data-test":"btn-create-database",name:Object(P.d)(s.a.Fragment,null,Object(P.d)("i",{className:"fa fa-plus"})," ",Object(o.e)("Database")," "),buttonStyle:"primary",onClick:()=>{q({modalOpen:!0})}}],Object(b.c)(b.a.VERSIONED_EXPORT)&&I.buttons.push({name:Object(P.d)(O.a,{id:"import-tooltip",title:Object(o.e)("Import databases"),placement:"bottomRight"},Object(P.d)(j.a.Import,null)),buttonStyle:"link",onClick:T}));const R=Object(i.useMemo)(()=>[{accessor:"database_name",Header:Object(o.e)("Database")},{accessor:"backend",Header:Object(o.e)("Backend"),size:"lg",disableSortBy:!0},{accessor:"allow_run_async",Header:Object(P.d)(O.a,{id:"allow-run-async-header-tooltip",title:Object(o.e)("Asynchronous query execution"),placement:"top"},Object(P.d)("span",null,Object(o.e)("AQE"))),Cell:({row:{original:{allow_run_async:e}}})=>Object(P.d)(ke,{value:e}),size:"sm"},{accessor:"allow_dml",Header:Object(P.d)(O.a,{id:"allow-dml-header-tooltip",title:Object(o.e)("Allow data manipulation language"),placement:"top"},Object(P.d)("span",null,Object(o.e)("DML"))),Cell:({row:{original:{allow_dml:e}}})=>Object(P.d)(ke,{value:e}),size:"sm"},{accessor:"allow_csv_upload",Header:Object(o.e)("CSV upload"),Cell:({row:{original:{allow_csv_upload:e}}})=>Object(P.d)(ke,{value:e}),size:"md"},{accessor:"expose_in_sqllab",Header:Object(o.e)("Expose in SQL Lab"),Cell:({row:{original:{expose_in_sqllab:e}}})=>Object(P.d)(ke,{value:e}),size:"md"},{accessor:"created_by",disableSortBy:!0,Header:Object(o.e)("Created by"),Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>e,Header:Object(o.e)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>z||M||D?Object(P.d)(Ne,{className:"actions"},M&&Object(P.d)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return t=e,r.a.get({endpoint:`/api/v1/database/${t.id}/related_objects/`}).then(({json:e={}})=>{$({...t,chart_count:e.charts.count,dashboard_count:e.dashboards.count})}).catch(Object(p.c)(e=>Object(o.e)("An error occurred while fetching database related data: %s",e)));var t}},Object(P.d)(O.a,{id:"delete-action-tooltip",title:Object(o.e)("Delete database"),placement:"bottom"},Object(P.d)(j.a.Trash,null))),D&&Object(P.d)(O.a,{id:"export-action-tooltip",title:Object(o.e)("Export"),placement:"bottom"},Object(P.d)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return t=e,window.location.assign(`/api/v1/database/export/?q=${c.a.encode([t.id])}`);var t}},Object(P.d)(j.a.Share,null))),z&&Object(P.d)(O.a,{id:"edit-action-tooltip",title:Object(o.e)("Edit"),placement:"bottom"},Object(P.d)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>q({database:e,modalOpen:!0})},Object(P.d)(j.a.EditAlt,null)))):null,Header:Object(o.e)("Actions"),id:"actions",hidden:!z&&!M,disableSortBy:!0}],[M,z,D]),H=Object(i.useMemo)(()=>[{Header:Object(o.e)("Expose in SQL Lab"),id:"expose_in_sqllab",input:"select",operator:y.a.equals,unfilteredLabel:"All",selects:[{label:"Yes",value:!0},{label:"No",value:!1}]},{Header:Object(P.d)(O.a,{id:"allow-run-async-filter-header-tooltip",title:Object(o.e)("Asynchronous query execution"),placement:"top"},Object(P.d)("span",null,Object(o.e)("AQE"))),id:"allow_run_async",input:"select",operator:y.a.equals,unfilteredLabel:"All",selects:[{label:"Yes",value:!0},{label:"No",value:!1}]},{Header:Object(o.e)("Search"),id:"database_name",input:"search",operator:y.a.contains}],[]);return Object(P.d)(s.a.Fragment,null,Object(P.d)(m.a,I),Object(P.d)(_e,{databaseId:null==S?void 0:S.id,show:_,onHide:q,onDatabaseAdd:()=>{x()}}),C&&Object(P.d)(g.a,{description:Object(o.e)("The database %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the database will break those objects.",C.database_name,C.chart_count,C.dashboard_count),onConfirm:()=>{C&&function({id:a,database_name:n}){r.a.delete({endpoint:`/api/v1/database/${a}`}).then(()=>{x(),t(Object(o.e)("Deleted: %s",n)),$(null)},Object(p.c)(t=>e(Object(o.e)("There was an issue deleting %s: %s",n,t))))}(C)},onHide:()=>$(null),open:!0,title:Object(o.e)("Delete Database?")}),Object(P.d)(y.b,{className:"database-list-view",columns:R,count:n,data:l,fetchData:u,filters:H,initialSort:[{id:"changed_on_delta_humanized",desc:!0}],loading:a,pageSize:25}),Object(P.d)(f.a,{resourceName:"database",resourceLabel:Object(o.e)("database"),passwordsNeededMessage:we,confirmOverwriteMessage:Ce,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{U(!1),x()},show:k,onHide:()=>{U(!1)},passwordFields:E,setPasswordFields:A}))}))}}]);
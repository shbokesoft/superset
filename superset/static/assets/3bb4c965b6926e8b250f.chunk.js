(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{4343:function(e,t,a){"use strict";a.d(t,"a",(function(){return Pe})),a.d(t,"b",(function(){return Ee}));var l=a(12),n=a.n(l),o=a(19),i=a.n(o),r=a(53),c=a.n(r),s=a(32),d=a.n(s),g=a(68),u=a(18),p=a(0),b=a.n(p),h=a(21),m=a(336);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var v=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M83.195 1.366L103 24v38a4 4 0 01-4 4H20a4 4 0 01-4-4V24L35.805 1.366A4 4 0 0138.815 0h41.37a4 4 0 013.01 1.366zM101 26v36a2 2 0 01-2 2H20a2 2 0 01-2-2V26h17.25A4.75 4.75 0 0140 30.75a6.75 6.75 0 006.75 6.75h25.5A6.75 6.75 0 0079 30.75 4.75 4.75 0 0183.75 26H101zm-.658-2L81.69 2.683A2 2 0 0080.185 2h-41.37a2 2 0 00-1.505.683L18.657 24H35.25A6.75 6.75 0 0142 30.75a4.75 4.75 0 004.75 4.75h25.5A4.75 4.75 0 0077 30.75 6.75 6.75 0 0183.75 24h16.592z",fill:"#D1D1D1"}),O=p.createElement("path",{d:"M16 53.29C6.074 55.7 0 58.94 0 62.5 0 69.956 26.64 76 59.5 76S119 69.956 119 62.5c0-3.56-6.074-6.799-16-9.21V62a4 4 0 01-4 4H20a4 4 0 01-4-4v-8.71z",fill:"#F2F2F2"});function x(e){return p.createElement("svg",f({width:119,height:76,fill:"none"},e),v,O)}a.p;var j=a(7),y=a.n(j),w=a(63),S=a(76),C=a(4698),k=a(874),$=(a(43),a(1));const F=g.g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(459px, 1fr));
  grid-gap: ${({theme:e})=>8*e.gridUnit}px;
`,R=g.g.div`
  border: 2px solid transparent;
  &.card-selected {
    border: 2px solid ${({theme:e})=>e.colors.primary.base};
  }
  &.bulk-select {
    cursor: pointer;
  }
`;function I({bulkSelectEnabled:e,loading:t,prepareRow:a,renderCard:l,rows:o}){var i;return l?Object($.d)(F,null,t&&0===o.length&&n()(i=[...new Array(25)]).call(i,(e,a)=>Object($.d)("div",{key:a},l({loading:t}))),o.length>0&&n()(o).call(o,n=>l?(a(n),Object($.d)(R,{className:y()({"card-selected":e&&n.isSelected,"bulk-select":e}),key:n.id,onClick:t=>{return a=t,l=n.toggleRowSelected,void(e&&(a.preventDefault(),a.stopPropagation(),l()));var a,l},role:"none"},l({...n.original,loading:t}))):null)):null}var P=a(819);const E=g.g.div`
  position: relative;
`,M=g.g.input`
  width: 200px;
  height: ${({theme:e})=>8*e.gridUnit}px;
  background-image: none;
  border: 1px solid ${({theme:e})=>e.colors.secondary.light2};
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  padding: 4px 28px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    outline: none;
  }
`,_="\n  position: absolute;\n  z-index: 2;\n  display: block;\n  cursor: pointer;\n",z=Object(g.g)(S.a)`
  ${_};
  top: 4px;
  left: 2px;
`,T=Object(g.g)(S.a)`
  ${_};
  right: 0px;
  top: 4px;
`;function V({onChange:e,onClear:t,onSubmit:a,placeholder:l="Search",name:n,value:o}){return Object($.d)(E,null,Object($.d)(z,{role:"button",name:"search",onClick:()=>a()}),Object($.d)(M,{onKeyDown:e=>{"Enter"===e.key&&a()},onBlur:()=>a(),placeholder:l,onChange:e,value:o,name:n}),o&&Object($.d)(T,{role:"button",name:"cancel-x",onClick:()=>t()}))}const U=g.g.div`
  display: inline-flex;
  margin-right: 2em;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  align-items: center;
`,A=g.g.label`
  font-weight: bold;
  margin: 0 0.4em 0 0;
`;function N({Header:e,name:t,initialValue:a,onSubmit:l}){const[n,o]=Object(p.useState)(a||""),i=()=>{o(""),l("")};return Object($.d)(U,null,Object($.d)(V,{placeholder:e,name:t,value:n,onChange:e=>{o(e.currentTarget.value),""===e.currentTarget.value&&i()},onSubmit:()=>{n&&l(n)},onClear:i}))}var B=a(86),L=a.n(B),D=a(79),H=a(42),W=a.n(H),q=a(929),G=a.n(q),J=a(67),K=a.n(J),X=a(34),Q=a.n(X),Y=a(64),Z=a.n(Y),ee=a(196),te=a.n(ee),ae=a(485),le=a(4031),ne=a(183),oe=a.n(ne);const ie={encode:e=>void 0===e?void 0:oe.a.encode(e),decode:e=>void 0===e||Z()(e)?void 0:oe.a.decode(e)};class re extends Error{constructor(){super(...arguments),this.name="ListViewError"}}function ce(e,t){return n()(e).call(e,({id:e,urlDisplay:a,operator:l})=>({id:e,urlDisplay:a,operator:l,value:t[a||e]}))}function se(e,t){var a;const l=[],n={};return i()(a=W()(e)).call(a,t=>{const a={id:t,value:e[t]};n[t]=a,l.push(a)}),i()(t).call(t,e=>{const t=e.urlDisplay||e.id,a=n[t];a&&(a.operator=e.operator,a.id=e.id)}),l}function de({fetchData:e,columns:t,data:a,count:l,initialPageSize:o,initialFilters:r=[],initialSort:c=[],bulkSelectMode:s=!1,bulkSelectColumnConfig:d,renderCard:g=!1,defaultViewMode:u="card"}){const[b,h]=Object(le.d)({filters:ie,pageIndex:le.a,sortColumn:le.c,sortOrder:le.c,viewMode:le.c}),m=Object(p.useMemo)(()=>b.sortColumn&&b.sortOrder?[{id:b.sortColumn,desc:"desc"===b.sortOrder}]:c,[b.sortColumn,b.sortOrder]),f={filters:b.filters?se(b.filters,r):[],pageIndex:b.pageIndex||0,pageSize:o,sortBy:m},[v,O]=Object(p.useState)(b.viewMode||(g?u:"table")),x=Object(p.useMemo)(()=>{const e=n()(t).call(t,e=>({...e,filter:"exact"}));return s?[d,...e]:e},[s,t]),{getTableProps:j,getTableBodyProps:y,headerGroups:w,rows:S,prepareRow:C,canPreviousPage:k,canNextPage:$,pageCount:F,gotoPage:R,setAllFilters:I,selectedFlatRows:P,toggleAllRowsSelected:E,state:{pageIndex:M,pageSize:_,sortBy:z,filters:T}}=Object(ae.useTable)({columns:x,count:l,data:a,disableFilters:!0,disableSortRemove:!0,initialState:f,manualFilters:!0,manualPagination:!0,manualSortBy:!0,autoResetFilters:!1,pageCount:Math.ceil(l/o)},ae.useFilters,ae.useSortBy,ae.usePagination,ae.useRowState,ae.useRowSelect),[V,U]=Object(p.useState)(b.filters&&r.length?ce(r,b.filters):[]);Object(p.useEffect)(()=>{r.length&&U(ce(r,b.filters?b.filters:{}))},[r]),Object(p.useEffect)(()=>{const t={};i()(V).call(V,e=>{if(void 0!==e.value&&("string"!=typeof e.value||e.value.length>0)){const a=e.urlDisplay||e.id;t[a]=e.value}});const a={filters:W()(t).length?t:void 0,pageIndex:M};z[0]&&(a.sortColumn=z[0].id,a.sortOrder=z[0].desc?"desc":"asc"),g&&(a.viewMode=v);const l=void 0!==b.pageIndex&&a.pageIndex!==b.pageIndex?"push":"replace";h(a,l),e({pageIndex:M,pageSize:_,sortBy:z,filters:T})},[e,M,_,z,T]),Object(p.useEffect)(()=>{te()(f.pageIndex,M)||R(f.pageIndex)},[b]);return{canNextPage:$,canPreviousPage:k,getTableBodyProps:y,getTableProps:j,gotoPage:R,headerGroups:w,pageCount:F,prepareRow:C,rows:S,selectedFlatRows:P,setAllFilters:I,state:{pageIndex:M,pageSize:_,sortBy:z,filters:T,internalFilters:V,viewMode:v},toggleAllRowsSelected:E,applyFilterValue:(e,t)=>{U(a=>{if(a[e].value===t)return a;const l={...a[e],value:t},o=function(e,t,a){const l=L()(e).call(e,(e,a)=>t===a);return[...K()(e).call(e,0,t),{...l,...a},...K()(e).call(e,t+1)]}(a,e,l);var i,r,c;return I((i=o,G()(r=n()(c=Q()(i).call(i,e=>!(void 0===e.value||Z()(e.value)&&!e.value.length))).call(c,({value:e,operator:t,id:a})=>"between"===t&&Z()(e)?[{value:e[0],operator:"gt",id:a},{value:e[1],operator:"lt",id:a}]:{value:e,operator:t,id:a})).call(r))),R(0),o})},setViewMode:O}}const ge={container:(e,{getValue:t})=>({...e,minWidth:`${Math.min(12,Math.max(5,3+t()[0].label.length/2))}em`}),control:e=>({...e,borderWidth:0,boxShadow:"none",cursor:"pointer",backgroundColor:"transparent"})};var ue=Object(P.e)((function({Header:e,emptyLabel:t="None",fetchSelects:a,initialValue:l,onSelect:n,paginate:o=!1,selects:i=[],theme:r}){const c={spacing:{baseUnit:2,fontSize:r.typography.sizes.s,minWidth:"5em"}},s={label:t,value:"CLEAR_SELECT_FILTER_VALUE"},d=[s,...i];let g=s;if(!a){const e=L()(d).call(d,e=>e.value===l);e&&(g=e)}const[u,b]=Object(p.useState)(g),h=e=>{null!==e&&(n("CLEAR_SELECT_FILTER_VALUE"===e.value?void 0:e.value),b(e))};return Object($.d)(U,null,Object($.d)(A,null,e,":"),a?Object($.d)(D.g,{defaultOptions:!0,themeConfig:c,stylesConfig:ge,value:u,onChange:h,loadOptions:async(e,t,{page:n})=>{let i=e||n>0?[]:[s],r=o;if(a){const t=await a(e,n);t.length||(r=!1),i=[...i,...t];const o=L()(i).call(i,e=>e.value===l);o&&b(o)}return{options:i,hasMore:r,additional:{page:n+1}}},placeholder:t,clearable:!1,additional:{page:0}}):Object($.d)(D.h,{themeConfig:c,stylesConfig:ge,value:u,options:d,onChange:h,clearable:!1}))})),pe=a(13),be=a.n(pe),he=a(1403);const me=Object(g.g)(he.b)`
  padding: 0 11px;
  transform: translateX(-7px);
`,fe=Object(g.g)(U)`
  margin-right: 1em;
`;function ve({Header:e,initialValue:t,onSubmit:a}){const[l,n]=Object(p.useState)(null!=t?t:null),o=Object(p.useMemo)(()=>!l||Z()(l)&&!l.length?null:[be()(l[0]),be()(l[1])],[l]);return Object($.d)(fe,null,Object($.d)(A,null,e,":"),Object($.d)(me,{showTime:!0,bordered:!1,value:o,onChange:e=>{var t,l,o,i;if(!e)return n(null),void a([]);const r=[null!=(t=null==(l=e[0])?void 0:l.valueOf())?t:0,null!=(o=null==(i=e[1])?void 0:i.valueOf())?o:0];n(r),a(r)}}))}const Oe=g.g.div`
  display: inline-block;
`;var xe=Object(P.e)((function({filters:e,internalFilters:t=[],updateFilterValue:a}){return Object($.d)(Oe,null,n()(e).call(e,({Header:e,fetchSelects:l,id:n,input:o,paginate:i,selects:r,unfilteredLabel:c},s)=>{const d=t[s]&&t[s].value;return"select"===o?Object($.d)(ue,{Header:e,emptyLabel:c,fetchSelects:l,initialValue:d,key:n,name:n,onSelect:e=>a(s,e),paginate:i,selects:r}):"search"===o&&"string"==typeof e?Object($.d)(N,{Header:e,initialValue:d,key:n,name:n,onSubmit:e=>a(s,e)}):"datetime_range"===o?Object($.d)(ve,{Header:e,initialValue:d,key:n,name:n,onSubmit:e=>a(s,e)}):null}))}));const je=g.g.label`
  font-weight: bold;
  line-height: 27px;
  margin: 0 0.4em 0 0;
`,ye=g.g.div`
  display: inline-flex;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  padding-top: ${({theme:e})=>e.gridUnit}px;
  text-align: left;
`;const we=Object(P.e)((function({onChange:e,options:t,selectStyles:a,theme:l,value:n}){const o={spacing:{baseUnit:1,fontSize:l.typography.sizes.s,minWidth:"5em"}};return Object($.d)(D.h,{clearable:!1,onChange:e,options:t,stylesConfig:a,themeConfig:o,value:n})})),Se=({initialSort:e,onChange:t,options:a,pageIndex:l,pageSize:n})=>{const o=e&&L()(a).call(a,({id:t})=>t===e[0].id),[i,r]=Object(p.useState)(o||a[0]);return Object($.d)(ye,null,Object($.d)(je,null,Object(u.e)("Sort:")),Object($.d)(we,{onChange:e=>(e=>{r(e);const a=[{id:e.id,desc:e.desc}];t({pageIndex:l,pageSize:n,sortBy:a,filters:[]})})(e),options:a,selectStyles:ge,value:i}))},Ce=g.g.div`
  text-align: center;

  .superset-list-view {
    text-align: left;
    border-radius: 4px 0;
    margin: 0 ${({theme:e})=>4*e.gridUnit}px;

    .header {
      display: flex;
      padding-bottom: ${({theme:e})=>4*e.gridUnit}px;

      .header-left {
        display: flex;
        flex: 5;
      }
      .header-right {
        flex: 1;
        text-align: right;
      }
    }

    .body.empty table {
      margin-bottom: 0;
    }

    .body {
      overflow-x: auto;
    }

    .ant-empty {
      .ant-empty-image {
        height: auto;
      }
    }
  }

  .pagination-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  }

  .row-count-container {
    margin-top: ${({theme:e})=>2*e.gridUnit}px;
    color: ${({theme:e})=>e.colors.grayscale.base};
  }
`,ke=Object(g.g)(m.a)`
  border-radius: 0;
  margin-bottom: 0;
  color: #3d3d3d;
  background-color: ${({theme:e})=>e.colors.primary.light4};

  .selectedCopy {
    display: inline-block;
    padding: ${({theme:e})=>2*e.gridUnit}px 0;
  }

  .deselect-all {
    color: #1985a0;
    margin-left: ${({theme:e})=>4*e.gridUnit}px;
  }

  .divider {
    margin: ${({theme:{gridUnit:e}})=>`${2*-e}px 0 ${2*-e}px ${4*e}px`};
    width: 1px;
    height: ${({theme:e})=>8*e.gridUnit}px;
    box-shadow: inset -1px 0px 0px #dadada;
    display: inline-flex;
    vertical-align: middle;
    position: relative;
  }

  .ant-alert-close-icon {
    margin-top: ${({theme:e})=>1.5*e.gridUnit}px;
  }
`,$e={Cell:({row:e})=>Object($.d)(C.a,d()({},e.getToggleRowSelectedProps(),{id:e.id})),Header:({getToggleAllRowsSelectedProps:e})=>Object($.d)(C.a,d()({},e(),{id:"header-toggle-all"})),id:"selection",size:"sm"},Fe=g.g.div`
  padding-right: ${({theme:e})=>4*e.gridUnit}px;
  display: inline-block;

  .toggle-button {
    display: inline-block;
    border-radius: ${({theme:e})=>e.gridUnit/2}px;
    padding: ${({theme:e})=>e.gridUnit}px;
    padding-bottom: 0;

    &:first-of-type {
      margin-right: ${({theme:e})=>2*e.gridUnit}px;
    }
  }

  .active {
    background-color: ${({theme:e})=>e.colors.grayscale.base};
    svg {
      color: ${({theme:e})=>e.colors.grayscale.light5};
    }
  }
`,Re=g.g.div`
  padding: ${({theme:e})=>40*e.gridUnit}px 0;

  &.table {
    background: ${({theme:e})=>e.colors.grayscale.light5};
  }
`,Ie=({mode:e,setMode:t})=>Object($.d)(Fe,null,Object($.d)("div",{role:"button",tabIndex:0,onClick:e=>{e.currentTarget.blur(),t("card")},className:y()("toggle-button",{active:"card"===e})},Object($.d)(S.a,{name:"card-view"})),Object($.d)("div",{role:"button",tabIndex:0,onClick:e=>{e.currentTarget.blur(),t("table")},className:y()("toggle-button",{active:"table"===e})},Object($.d)(S.a,{name:"list-view"})));var Pe,Ee=function({columns:e,data:t,count:a,pageSize:l,fetchData:o,loading:r,initialSort:s=[],className:d="",filters:g=[],bulkActions:m=[],bulkSelectEnabled:f=!1,disableBulkSelect:v=(()=>{}),renderBulkSelectCopy:O=(e=>Object(u.e)("%s Selected",e.length)),renderCard:j,cardSortSelectOptions:y,defaultViewMode:S="card",highlightRowId:C,emptyState:F={}}){const{getTableProps:R,getTableBodyProps:P,headerGroups:E,rows:M,prepareRow:_,pageCount:z=1,gotoPage:T,applyFilterValue:V,selectedFlatRows:U,toggleAllRowsSelected:A,setViewMode:N,state:{pageIndex:B,pageSize:L,internalFilters:D,viewMode:H}}=de({bulkSelectColumnConfig:$e,bulkSelectMode:f&&Boolean(m.length),columns:e,count:a,data:t,fetchData:o,initialPageSize:l,initialSort:s,initialFilters:g,renderCard:Boolean(j),defaultViewMode:S}),W=Boolean(g.length);if(W){const t=c()(e).call(e,(e,t)=>({...e,[t.id||t.accessor]:!0}),{});i()(g).call(g,e=>{if(!t[e.id])throw new re(`Invalid filter config, ${e.id} is not present in columns`)})}const q=Boolean(j);return Object(p.useEffect)(()=>{f||A(!1)},[f,A]),Object($.d)(Ce,null,Object($.d)("div",{className:`superset-list-view ${d}`},Object($.d)("div",{className:"header"},Object($.d)("div",{className:"header-left"},q&&Object($.d)(Ie,{mode:H,setMode:N}),W&&Object($.d)(xe,{filters:g,internalFilters:D,updateFilterValue:V})),Object($.d)("div",{className:"header-right"},"card"===H&&y&&Object($.d)(Se,{initialSort:s,onChange:o,options:y,pageIndex:B,pageSize:L}))),Object($.d)("div",{className:`body ${0===M.length?"empty":""}`},f&&Object($.d)(ke,{type:"info",closable:!0,showIcon:!1,onClose:v,message:Object($.d)(b.a.Fragment,null,Object($.d)("div",{className:"selectedCopy"},O(U)),Boolean(U.length)&&Object($.d)(b.a.Fragment,null,Object($.d)("span",{role:"button",tabIndex:0,className:"deselect-all",onClick:()=>A(!1)},Object(u.e)("Deselect all")),Object($.d)("div",{className:"divider"}),n()(m).call(m,e=>Object($.d)(w.a,{key:e.key,buttonStyle:e.type,cta:!0,onClick:()=>e.onSelect(n()(U).call(U,e=>e.original))},e.name))))}),"card"===H&&Object($.d)(I,{bulkSelectEnabled:f,prepareRow:_,renderCard:j,rows:M,loading:r}),"table"===H&&Object($.d)(k.b,{getTableProps:R,getTableBodyProps:P,prepareRow:_,headerGroups:E,rows:M,columns:e,loading:r,highlightRowId:C}),!r&&0===M.length&&Object($.d)(Re,{className:H},Object($.d)(h.j,{image:Object($.d)(x,null),description:F.message||Object(u.e)("No Data")},F.slot||null)))),M.length>0&&Object($.d)("div",{className:"pagination-container"},Object($.d)(k.a,{totalPages:z||0,currentPage:z?B+1:0,onChange:e=>T(e-1),hideFirstAndLastPageLinks:!0}),Object($.d)("div",{className:"row-count-container"},!r&&Object(u.e)("%s-%s of %s",L*B+(M.length&&1),L*B+M.length,a))))};!function(e){e.startsWith="sw",e.endsWith="ew",e.contains="ct",e.equals="eq",e.notStartsWith="nsw",e.notEndsWith="new",e.notContains="nct",e.notEquals="neq",e.greaterThan="gt",e.lessThan="lt",e.relationManyMany="rel_m_m",e.relationOneMany="rel_o_m",e.titleOrSlug="title_or_slug",e.nameOrDescription="name_or_description",e.allText="all_text",e.chartAllText="chart_all_text",e.datasetIsNullOrEmpty="dataset_is_null_or_empty",e.between="between",e.dashboardIsFav="dashboard_is_favorite",e.chartIsFav="chart_is_favorite"}(Pe||(Pe={}))},4698:function(e,t,a){"use strict";var l=a(0),n=a.n(l),o=a(68),i=a(76),r=a(1);const c=o.g.label`
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0;
`,s=Object(o.g)(i.a)`
  color: ${({theme:e})=>e.colors.primary.dark1};
  cursor: pointer;
`,d=o.g.input`
  &[type='checkbox'] {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    left: 3px;
    margin: 0;
    top: 4px;
  }
`,g=o.g.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
`,u=n.a.forwardRef(({indeterminate:e,id:t,checked:a,onChange:l,title:o="",labelText:u=""},p)=>{const b=n.a.useRef(),h=p||b;return n.a.useEffect(()=>{h.current.indeterminate=e},[h,e]),Object(r.d)(n.a.Fragment,null,Object(r.d)(g,null,e&&Object(r.d)(s,{name:"checkbox-half"}),!e&&a&&Object(r.d)(s,{name:"checkbox-on"}),!e&&!a&&Object(r.d)(i.a,{name:"checkbox-off"}),Object(r.d)(d,{name:t,id:t,type:"checkbox",ref:h,checked:a,onChange:l})),Object(r.d)(c,{title:o,htmlFor:t},u))});t.a=u}}]);
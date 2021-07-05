(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{4350:function(e,t,a){"use strict";a(52);var s=a(14),n=a.n(s),r=a(0),l=a.n(r),c=a(67),o=a(18),i=a(74),d=a(164),b=a(828),u=a(1);Object(c.g)(i.a)`
  margin: auto ${({theme:e})=>2*e.gridUnit}px auto 0;
`;const p=c.g.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
`,O=c.g.div`
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
`;t.a=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:s,addDangerToast:c,addSuccessToast:i,onModelImport:h,show:m,onHide:j,passwordFields:g=[],setPasswordFields:y=(()=>{})})=>{const[w,f]=Object(r.useState)(!0),[v,S]=Object(r.useState)(null),[x,_]=Object(r.useState)({}),[C,k]=Object(r.useState)(!1),[D,N]=Object(r.useState)(!1),$=Object(r.useRef)(null),H=()=>{S(null),y([]),_({}),k(!1),N(!1),$&&$.current&&($.current.value="")},{state:{alreadyExists:T,passwordsNeeded:A},importResource:E}=Object(b.g)(e,t,e=>{H(),c(e)});Object(r.useEffect)(()=>{y(A)},[A,y]),Object(r.useEffect)(()=>{k(T.length>0)},[T,k]);const B=e=>{var t,a;const s=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";N(s.toUpperCase()===Object(o.e)("OVERWRITE"))};return w&&m&&f(!1),Object(u.d)(d.b,{name:"model",className:"import-model-modal",disablePrimaryButton:null===v||C&&!D,onHandledPrimaryAction:()=>{null!==v&&E(v,x,D).then(e=>{e&&(i(Object(o.e)("The import was successful")),H(),h())})},onHide:()=>{f(!0),j(),H()},primaryButtonName:C?Object(o.e)("Overwrite"):Object(o.e)("Import"),primaryButtonType:C?"danger":"primary",width:"750px",show:m,title:Object(u.d)("h4",null,Object(o.e)("Import %s",t))},Object(u.d)(O,null,Object(u.d)("div",{className:"control-label"},Object(u.d)("label",{htmlFor:"modelFile"},Object(o.e)("File"),Object(u.d)("span",{className:"required"},"*"))),Object(u.d)("input",{ref:$,name:"modelFile",id:"modelFile",type:"file",accept:".yaml,.json,.yml,.zip",onChange:e=>{const{files:t}=e.target;S(t&&t[0]||null)}})),0===g.length?null:Object(u.d)(l.a.Fragment,null,Object(u.d)("h5",null,"Database passwords"),Object(u.d)(p,null,a),n()(g).call(g,e=>Object(u.d)(O,{key:`password-for-${e}`},Object(u.d)("div",{className:"control-label"},e,Object(u.d)("span",{className:"required"},"*")),Object(u.d)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:x[e],onChange:t=>_({...x,[e]:t.target.value})})))),C?Object(u.d)(l.a.Fragment,null,Object(u.d)(O,null,Object(u.d)("div",{className:"confirm-overwrite"},s),Object(u.d)("div",{className:"control-label"},Object(o.e)('Type "%s" to confirm',Object(o.e)("OVERWRITE"))),Object(u.d)("input",{id:"overwrite",type:"text",onChange:B}))):null)}},4374:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a(18);const n={name:Object(s.e)("Data"),tabs:[{name:"Databases",label:Object(s.e)("Databases"),url:"/databaseview/list/",usesRouter:!0},{name:"Datasets",label:Object(s.e)("Datasets"),url:"/tablemodelview/list/",usesRouter:!0},{name:"Saved queries",label:Object(s.e)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:Object(s.e)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},5273:function(e,t,a){"use strict";a.r(t);a(52);var s=a(69),n=a.n(s),r=a(66),l=a.n(r),c=a(14),o=a.n(c),i=a(18),d=a(67),b=a(134),u=a(0),p=a.n(u),O=a(183),h=a.n(O),m=a(188),j=a(828),g=a(3503),y=a(3366),w=a(3504),f=a(4337),v=a(1405),S=a(4374),x=a(192),_=a(71),C=a(104),k=a(3507),D=a(3822),N=a(4350),$=a(50),H=a(1414),T=a(930),A=a.n(T),E=a(997),B=a.n(E),I=a(164),z=a(3826),M=a(1);const P=d.g.div`
  padding-bottom: 340px;
  width: 65%;
`;var R=Object(x.a)(({addDangerToast:e,addSuccessToast:t,onDatasetAdd:a,onHide:s,show:n})=>{const[r,l]=Object(u.useState)(""),[c,o]=Object(u.useState)(""),[d,b]=Object(u.useState)(0),[p,O]=Object(u.useState)(!0),{createResource:h}=Object(j.i)("dataset",Object(i.e)("dataset"),e);return Object(M.d)(I.b,{disablePrimaryButton:p,onHandledPrimaryAction:()=>{const e={database:d,...r?{schema:r}:{},table_name:c};h(e).then(e=>{e&&(a&&a({id:e.id,...e}),t(Object(i.e)("The dataset has been saved")),s())})},onHide:s,primaryButtonName:Object(i.e)("Add"),show:n,title:Object(i.e)("Add dataset")},Object(M.d)(P,null,Object(M.d)(z.a,{clearable:!1,dbId:d,formMode:!0,handleError:e,onChange:({dbId:e,schema:t,tableName:a})=>{b(e),O(A()(e)||B()(a)),l(t),o(a)},schema:r,tableName:c})))});const U=Object(i.e)('The passwords for the databases below are needed in order to import them together with the datasets. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),F=Object(i.e)("You are importing one or more datasets that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),q=d.g.div`
  align-items: center;
  display: flex;

  > svg {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,V=d.g.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;t.default=Object(x.a)(({addDangerToast:e,addSuccessToast:t,user:a})=>{const{state:{loading:s,resourceCount:r,resourceCollection:c,bulkSelectEnabled:d},hasPerm:O,fetchData:x,toggleBulkSelect:T,refreshData:A}=Object(j.h)("dataset",Object(i.e)("dataset"),e),[E,B]=Object(u.useState)(!1),[I,z]=Object(u.useState)(null),[P,L]=Object(u.useState)(null),[J,Q]=Object(u.useState)(!1),[W,X]=Object(u.useState)([]),Y=()=>{Q(!0)},G=O("can_write"),K=O("can_write"),Z=O("can_write"),ee=O("can_read"),te=[{id:"changed_on_delta_humanized",desc:!0}],ae=Object(u.useCallback)(({id:t})=>{b.a.get({endpoint:`/api/v1/dataset/${t}`}).then(({json:e={}})=>{var t;const a=o()(t=e.result.owners).call(t,e=>e.id);L({...e.result,owners:a})}).catch(()=>{e(Object(i.e)("An error occurred while fetching dataset related data"))})},[e]),se=Object(u.useMemo)(()=>[{Cell:({row:{original:{kind:e}}})=>"physical"===e?Object(M.d)(_.a,{id:"physical-dataset-tooltip",title:Object(i.e)("Physical dataset")},Object(M.d)(C.a.DatasetPhysical,null)):Object(M.d)(_.a,{id:"virtual-dataset-tooltip",title:Object(i.e)("Virtual dataset")},Object(M.d)(C.a.DatasetVirtual,null)),accessor:"kind_icon",disableSortBy:!0,size:"xs"},{Cell:({row:{original:{extra:e,table_name:t,explore_url:a}}})=>{const s=Object(M.d)("a",{href:a},t);try{const t=JSON.parse(e);return Object(M.d)(q,null,(null==t?void 0:t.certification)&&Object(M.d)(D.a,{certifiedBy:t.certification.certified_by,details:t.certification.details}),(null==t?void 0:t.warning_markdown)&&Object(M.d)(H.a,{warningMarkdown:t.warning_markdown}),s)}catch{return s}},Header:Object(i.e)("Name"),accessor:"table_name"},{Cell:({row:{original:{kind:e}}})=>{var t;return(null==(t=e[0])?void 0:t.toUpperCase())+l()(e).call(e,1)},Header:Object(i.e)("Type"),accessor:"kind",disableSortBy:!0,size:"md"},{Header:Object(i.e)("Database"),accessor:"database.database_name",size:"lg"},{Header:Object(i.e)("Schema"),accessor:"schema",size:"lg"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>Object(M.d)("span",{className:"no-wrap"},e),Header:Object(i.e)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:{changed_by_name:e}}})=>e,Header:Object(i.e)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{accessor:"database",disableSortBy:!0,hidden:!0},{Cell:({row:{original:{owners:e=[]}}})=>Object(M.d)(k.a,{users:e}),Header:Object(i.e)("Owners"),id:"owners",disableSortBy:!0,size:"lg"},{accessor:"sql",hidden:!0,disableSortBy:!0},{Cell:({row:{original:e}})=>G||K||ee?Object(M.d)(V,{className:"actions"},K&&Object(M.d)(_.a,{id:"delete-action-tooltip",title:Object(i.e)("Delete"),placement:"bottom"},Object(M.d)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return t=e,b.a.get({endpoint:`/api/v1/dataset/${t.id}/related_objects`}).then(({json:e={}})=>{z({...t,chart_count:e.charts.count,dashboard_count:e.dashboards.count})}).catch(Object(m.c)(e=>Object(i.e)("An error occurred while fetching dataset related data: %s",e)));var t}},Object(M.d)(C.a.Trash,null))),ee&&Object(M.d)(_.a,{id:"export-action-tooltip",title:Object(i.e)("Export"),placement:"bottom"},Object(M.d)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>ce([e])},Object(M.d)(C.a.Share,null))),G&&Object(M.d)(_.a,{id:"edit-action-tooltip",title:Object(i.e)("Edit"),placement:"bottom"},Object(M.d)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>ae(e)},Object(M.d)(C.a.EditAlt,null)))):null,Header:Object(i.e)("Actions"),id:"actions",hidden:!G&&!K,disableSortBy:!0}],[G,K,ee,ae]),ne=Object(u.useMemo)(()=>[{Header:Object(i.e)("Owner"),id:"owners",input:"select",operator:f.a.relationManyMany,unfilteredLabel:"All",fetchSelects:Object(m.e)("dataset","owners",Object(m.c)(e=>Object(i.e)("An error occurred while fetching dataset owner values: %s",e)),a.userId),paginate:!0},{Header:Object(i.e)("Database"),id:"database",input:"select",operator:f.a.relationOneMany,unfilteredLabel:"All",fetchSelects:Object(m.e)("dataset","database",Object(m.c)(e=>Object(i.e)("An error occurred while fetching datasets: %s",e))),paginate:!0},{Header:Object(i.e)("Schema"),id:"schema",input:"select",operator:f.a.equals,unfilteredLabel:"All",fetchSelects:Object(m.d)("dataset","schema",Object(m.c)(e=>Object(i.e)("An error occurred while fetching schema values: %s",e))),paginate:!0},{Header:Object(i.e)("Type"),id:"sql",input:"select",operator:f.a.datasetIsNullOrEmpty,unfilteredLabel:"All",selects:[{label:"Virtual",value:!1},{label:"Physical",value:!0}]},{Header:Object(i.e)("Search"),id:"table_name",input:"search",operator:f.a.contains}],[]),re={activeChild:"Datasets",...S.a},le=[];(K||ee)&&le.push({name:Object(i.e)("Bulk select"),onClick:T,buttonStyle:"secondary"}),Z&&le.push({name:Object(M.d)(p.a.Fragment,null,Object(M.d)("i",{className:"fa fa-plus"})," ",Object(i.e)("Dataset")," "),onClick:()=>B(!0),buttonStyle:"primary"}),Object($.c)($.a.VERSIONED_EXPORT)&&le.push({name:Object(M.d)(_.a,{id:"import-tooltip",title:Object(i.e)("Import datasets"),placement:"bottomRight"},Object(M.d)(C.a.Import,null)),buttonStyle:"link",onClick:Y}),re.buttons=le;const ce=e=>window.location.assign(`/api/v1/dataset/export/?q=${h.a.encode(o()(e).call(e,({id:e})=>e))}`);return Object(M.d)(p.a.Fragment,null,Object(M.d)(v.a,re),Object(M.d)(R,{show:E,onHide:()=>B(!1),onDatasetAdd:A}),I&&Object(M.d)(w.a,{description:Object(i.e)("The dataset %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the dataset will break those objects.",I.table_name,I.chart_count,I.dashboard_count),onConfirm:()=>{I&&(({id:a,table_name:s})=>{b.a.delete({endpoint:`/api/v1/dataset/${a}`}).then(()=>{A(),z(null),t(Object(i.e)("Deleted: %s",s))},Object(m.c)(t=>e(Object(i.e)("There was an issue deleting %s: %s",s,t))))})(I)},onHide:()=>{z(null)},open:!0,title:Object(i.e)("Delete Dataset?")}),P&&Object(M.d)(y.a,{datasource:P,onDatasourceSave:A,onHide:()=>{L(null)},show:!0}),Object(M.d)(g.a,{title:Object(i.e)("Please confirm"),description:Object(i.e)("Are you sure you want to delete the selected datasets?"),onConfirm:a=>{b.a.delete({endpoint:`/api/v1/dataset/?q=${h.a.encode(o()(a).call(a,({id:e})=>e))}`}).then(({json:e={}})=>{A(),t(e.message)},Object(m.c)(t=>e(Object(i.e)("There was an issue deleting the selected datasets: %s",t))))}},e=>{const t=[];return K&&t.push({key:"delete",name:Object(i.e)("Delete"),onSelect:e,type:"danger"}),ee&&t.push({key:"export",name:Object(i.e)("Export"),type:"primary",onSelect:ce}),Object(M.d)(f.b,{className:"dataset-list-view",columns:se,data:c,count:r,pageSize:25,fetchData:x,filters:ne,loading:s,initialSort:te,bulkActions:t,bulkSelectEnabled:d,disableBulkSelect:T,renderBulkSelectCopy:e=>{const{virtualCount:t,physicalCount:a}=n()(e).call(e,(e,t)=>("physical"===t.original.kind?e.physicalCount+=1:"virtual"===t.original.kind&&(e.virtualCount+=1),e),{virtualCount:0,physicalCount:0});return e.length?t&&!a?Object(i.e)("%s Selected (Virtual)",e.length,t):a&&!t?Object(i.e)("%s Selected (Physical)",e.length,a):Object(i.e)("%s Selected (%s Physical, %s Virtual)",e.length,a,t):Object(i.e)("0 Selected")}})}),Object(M.d)(N.a,{resourceName:"dataset",resourceLabel:Object(i.e)("dataset"),passwordsNeededMessage:U,confirmOverwriteMessage:F,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{Q(!1),A()},show:J,onHide:()=>{Q(!1)},passwordFields:W,setPasswordFields:X}))})}}]);
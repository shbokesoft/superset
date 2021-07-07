(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{4356:function(e,t,a){"use strict";a(43);var r=a(12),l=a.n(r),c=a(0),n=a.n(c),o=a(68),i=a(18),s=a(76),d=a(167),u=a(834),b=a(1);Object(o.g)(s.a)`
  margin: auto ${({theme:e})=>2*e.gridUnit}px auto 0;
`;const p=o.g.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
`,m=o.g.div`
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
`;t.a=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:r,addDangerToast:o,addSuccessToast:s,onModelImport:h,show:O,onHide:j,passwordFields:g=[],setPasswordFields:f=(()=>{})})=>{const[y,v]=Object(c.useState)(!0),[w,_]=Object(c.useState)(null),[x,S]=Object(c.useState)({}),[C,E]=Object(c.useState)(!1),[I,N]=Object(c.useState)(!1),T=Object(c.useRef)(null),k=()=>{_(null),f([]),S({}),E(!1),N(!1),T&&T.current&&(T.current.value="")},{state:{alreadyExists:$,passwordsNeeded:z},importResource:A}=Object(u.g)(e,t,e=>{k(),o(e)});Object(c.useEffect)(()=>{f(z)},[z,f]),Object(c.useEffect)(()=>{E($.length>0)},[$,E]);const H=e=>{var t,a;const r=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";N(r.toUpperCase()===Object(i.e)("OVERWRITE"))};return y&&O&&v(!1),Object(b.d)(d.b,{name:"model",className:"import-model-modal",disablePrimaryButton:null===w||C&&!I,onHandledPrimaryAction:()=>{null!==w&&A(w,x,I).then(e=>{e&&(s(Object(i.e)("The import was successful")),k(),h())})},onHide:()=>{v(!0),j(),k()},primaryButtonName:C?Object(i.e)("Overwrite"):Object(i.e)("Import"),primaryButtonType:C?"danger":"primary",width:"750px",show:O,title:Object(b.d)("h4",null,Object(i.e)("Import %s",t))},Object(b.d)(m,null,Object(b.d)("div",{className:"control-label"},Object(b.d)("label",{htmlFor:"modelFile"},Object(i.e)("File"),Object(b.d)("span",{className:"required"},"*"))),Object(b.d)("input",{ref:T,name:"modelFile",id:"modelFile",type:"file",accept:".yaml,.json,.yml,.zip",onChange:e=>{const{files:t}=e.target;_(t&&t[0]||null)}})),0===g.length?null:Object(b.d)(n.a.Fragment,null,Object(b.d)("h5",null,"Database passwords"),Object(b.d)(p,null,a),l()(g).call(g,e=>Object(b.d)(m,{key:`password-for-${e}`},Object(b.d)("div",{className:"control-label"},e,Object(b.d)("span",{className:"required"},"*")),Object(b.d)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:x[e],onChange:t=>S({...x,[e]:t.target.value})})))),C?Object(b.d)(n.a.Fragment,null,Object(b.d)(m,null,Object(b.d)("div",{className:"confirm-overwrite"},r),Object(b.d)("div",{className:"control-label"},Object(i.e)('Type "%s" to confirm',Object(i.e)("OVERWRITE"))),Object(b.d)("input",{id:"overwrite",type:"text",onChange:H}))):null)}},4469:function(e,t,a){var r=a(1009),l=a(3542),c=a(4544),n=a(1010),o=a(4545),i=a(1006);e.exports=function(e,t,a){var s=-1,d=l,u=e.length,b=!0,p=[],m=p;if(a)b=!1,d=c;else if(u>=200){var h=t?null:o(e);if(h)return i(h);b=!1,d=n,m=new r}else m=t?[]:p;e:for(;++s<u;){var O=e[s],j=t?t(O):O;if(O=a||0!==O?O:0,b&&j==j){for(var g=m.length;g--;)if(m[g]===j)continue e;t&&m.push(j),p.push(O)}else d(m,j,a)||(m!==p&&m.push(j),p.push(O))}return p}},4544:function(e,t){e.exports=function(e,t,a){for(var r=-1,l=null==e?0:e.length;++r<l;)if(a(t,e[r]))return!0;return!1}},4545:function(e,t,a){var r=a(1011),l=a(3541),c=a(1006),n=r&&1/c(new r([,-0]))[1]==1/0?function(e){return new r(e)}:l;e.exports=n},5158:function(e,t,a){var r=a(340),l=a(4469);e.exports=function(e,t){return e&&e.length?l(e,r(t,2)):[]}},5246:function(e,t,a){"use strict";a.r(t);a(43);var r=a(275),l=a.n(r),c=a(34),n=a.n(c),o=a(260),i=a.n(o),s=a(12),d=a.n(s),u=a(5158),b=a.n(u),p=a(18),m=a(309),h=a(135),O=a(68),j=a(0),g=a.n(j),f=a(183),y=a.n(f),v=a(51),w=a(190),_=a(834),x=a(3523),S=a(1411),C=a(1687),E=a(4343),I=a(410),N=a(194),T=a(3509),k=a(4356),$=a(72),z=a(104),A=a(978),H=a(4006),F=a(1);const D=Object(p.e)('The passwords for the databases below are needed in order to import them together with the charts. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),M=Object(p.e)("You are importing one or more charts that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),U=Object(m.a)(),R=O.g.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;t.default=Object(N.a)((function(e){var t,a,r;const{addDangerToast:c,addSuccessToast:o}=e,{state:{loading:s,resourceCount:u,resourceCollection:m,bulkSelectEnabled:O},setResourceCollection:f,hasPerm:N,fetchData:B,toggleBulkSelect:L,refreshData:P}=Object(_.h)("chart",Object(p.e)("chart"),c),V=Object(j.useMemo)(()=>d()(m).call(m,e=>e.id),[m]),[q,W]=Object(_.f)("chart",V,c),{sliceCurrentlyEditing:J,handleChartUpdated:X,openChartEditModal:Y,closeChartEditModal:G}=Object(_.d)(f,m),[K,Q]=Object(j.useState)(!1),[Z,ee]=Object(j.useState)([]),te=()=>{Q(!0)},ae=N("can_write"),re=N("can_write"),le=N("can_write"),ce=N("can_read")&&Object(v.c)(v.a.VERSIONED_EXPORT),ne=[{id:"changed_on_delta_humanized",desc:!0}],oe=Object(j.useMemo)(()=>[...e.user.userId?[{Cell:({row:{original:{id:e}}})=>Object(F.d)(C.a,{itemId:e,saveFaveStar:q,isStarred:W[e]}),Header:"",id:"id",disableSortBy:!0,size:"xs"}]:[],{Cell:({row:{original:{url:e,slice_name:t}}})=>Object(F.d)("a",{href:e},t),Header:Object(p.e)("Chart"),accessor:"slice_name"},{Cell:({row:{original:{viz_type:e}}})=>{var t;return(null==(t=U.get(e))?void 0:t.name)||e},Header:Object(p.e)("Visualization type"),accessor:"viz_type",size:"xxl"},{Cell:({row:{original:{datasource_name_text:e,datasource_url:t}}})=>Object(F.d)("a",{href:t},e),Header:Object(p.e)("Dataset"),accessor:"datasource_id",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{changed_by_name:e,changed_by_url:t}}})=>Object(F.d)("a",{href:t},e),Header:Object(p.e)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>Object(F.d)("span",{className:"no-wrap"},e),Header:Object(p.e)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{accessor:"owners",hidden:!0,disableSortBy:!0},{Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",Header:Object(p.e)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:({row:{original:e}})=>re||le||ce?Object(F.d)(R,{className:"actions"},le&&Object(F.d)(x.a,{title:Object(p.e)("Please confirm"),description:Object(F.d)(g.a.Fragment,null,Object(p.e)("Are you sure you want to delete")," ",Object(F.d)("b",null,e.slice_name),"?"),onConfirm:()=>Object(w.l)(e,o,c,P)},e=>Object(F.d)($.a,{id:"delete-action-tooltip",title:Object(p.e)("Delete"),placement:"bottom"},Object(F.d)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},Object(F.d)(z.a.Trash,null)))),ce&&Object(F.d)($.a,{id:"export-action-tooltip",title:Object(p.e)("Export"),placement:"bottom"},Object(F.d)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>Object(w.i)([e])},Object(F.d)(z.a.Share,null))),re&&Object(F.d)($.a,{id:"edit-action-tooltip",title:Object(p.e)("Edit"),placement:"bottom"},Object(F.d)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>Y(e)},Object(F.d)(z.a.EditAlt,null)))):null,Header:Object(p.e)("Actions"),id:"actions",disableSortBy:!0,hidden:!re&&!le}],[re,le,ce,...e.user.userId?[W]:[]]),ie={Header:Object(p.e)("Favorite"),id:"id",urlDisplay:"favorite",input:"select",operator:E.a.chartIsFav,unfilteredLabel:Object(p.e)("Any"),selects:[{label:Object(p.e)("Yes"),value:!0},{label:Object(p.e)("No"),value:!1}]},se=[{Header:Object(p.e)("Owner"),id:"owners",input:"select",operator:E.a.relationManyMany,unfilteredLabel:Object(p.e)("All"),fetchSelects:Object(w.e)("chart","owners",Object(w.c)(e=>c(Object(p.e)("An error occurred while fetching chart owners values: %s",e))),e.user.userId),paginate:!0},{Header:Object(p.e)("Created by"),id:"created_by",input:"select",operator:E.a.relationOneMany,unfilteredLabel:Object(p.e)("All"),fetchSelects:Object(w.e)("chart","created_by",Object(w.c)(e=>c(Object(p.e)("An error occurred while fetching chart created by values: %s",e))),e.user.userId),paginate:!0},{Header:Object(p.e)("Viz type"),id:"viz_type",input:"select",operator:E.a.equals,unfilteredLabel:Object(p.e)("All"),selects:i()(t=d()(a=n()(r=l()(U).call(U)).call(r,e=>{var t;return Object(A.e)((null==(t=U.get(e))?void 0:t.behaviors)||[])})).call(a,e=>{var t;return{label:(null==(t=U.get(e))?void 0:t.name)||e,value:e}})).call(t,(e,t)=>e.label&&t.label?e.label>t.label?1:e.label<t.label?-1:0:0)},{Header:Object(p.e)("Dataset"),id:"datasource_id",input:"select",operator:E.a.equals,unfilteredLabel:Object(p.e)("All"),fetchSelects:(de=Object(w.c)(e=>c(Object(p.e)("An error occurred while fetching chart dataset values: %s",e))),async(e="",t,a)=>{const r=e?{filters:[{col:"table_name",opr:"sw",value:e}]}:{};try{var l;const e=y.a.encode({columns:["datasource_name","datasource_id"],keys:["none"],order_column:"table_name",order_direction:"asc",...t?{page:t}:{},...a?{page_size:a}:{},...r}),{json:c={}}=await h.a.get({endpoint:`/api/v1/dataset/?q=${e}`}),n=null==c?void 0:null==(l=c.result)?void 0:d()(l).call(l,({table_name:e,id:t})=>({label:e,value:t}));return b()(n,"value")}catch(e){de(e)}return[]}),paginate:!1},...e.user.userId?[ie]:[],{Header:Object(p.e)("Search"),id:"slice_name",input:"search",operator:E.a.chartAllText}];var de;const ue=[{desc:!1,id:"slice_name",label:Object(p.e)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:Object(p.e)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:Object(p.e)("Least recently modified"),value:"least_recently_modified"}];function be(t){const{userId:a}=e.user,r=Object(I.a)(a.toString(),null);return Object(F.d)(H.a,{chart:t,showThumbnails:r?r.thumbnails:Object(v.c)(v.a.THUMBNAILS),hasPerm:N,openChartEditModal:Y,bulkSelectEnabled:O,addDangerToast:c,addSuccessToast:o,refreshData:P,loading:s,favoriteStatus:W[t.id],saveFavoriteStatus:q})}const pe=[];return(le||ce)&&pe.push({name:Object(p.e)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:L}),ae&&pe.push({name:Object(F.d)(g.a.Fragment,null,Object(F.d)("i",{className:"fa fa-plus"})," ",Object(p.e)("Chart")),buttonStyle:"primary",onClick:()=>{window.location.assign("/chart/add")}}),Object(v.c)(v.a.VERSIONED_EXPORT)&&pe.push({name:Object(F.d)($.a,{id:"import-tooltip",title:Object(p.e)("Import charts"),placement:"bottomRight"},Object(F.d)(z.a.Import,null)),buttonStyle:"link",onClick:te}),Object(F.d)(g.a.Fragment,null,Object(F.d)(S.a,{name:Object(p.e)("Charts"),buttons:pe}),J&&Object(F.d)(T.a,{onHide:G,onSave:X,show:!0,slice:J}),Object(F.d)(x.a,{title:Object(p.e)("Please confirm"),description:Object(p.e)("Are you sure you want to delete the selected charts?"),onConfirm:function(e){h.a.delete({endpoint:`/api/v1/chart/?q=${y.a.encode(d()(e).call(e,({id:e})=>e))}`}).then(({json:e={}})=>{P(),o(e.message)},Object(w.c)(e=>c(Object(p.e)("There was an issue deleting the selected charts: %s",e))))}},e=>{const t=[];return le&&t.push({key:"delete",name:Object(p.e)("Delete"),type:"danger",onSelect:e}),ce&&t.push({key:"export",name:Object(p.e)("Export"),type:"primary",onSelect:w.i}),Object(F.d)(E.b,{bulkActions:t,bulkSelectEnabled:O,cardSortSelectOptions:ue,className:"chart-list-view",columns:oe,count:u,data:m,disableBulkSelect:L,fetchData:B,filters:se,initialSort:ne,loading:s,pageSize:25,renderCard:be,defaultViewMode:Object(v.c)(v.a.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"})}),Object(F.d)(k.a,{resourceName:"chart",resourceLabel:Object(p.e)("chart"),passwordsNeededMessage:D,confirmOverwriteMessage:M,addDangerToast:c,addSuccessToast:o,onModelImport:()=>{Q(!1),P()},show:K,onHide:()=>{Q(!1)},passwordFields:Z,setPasswordFields:ee}))}))}}]);
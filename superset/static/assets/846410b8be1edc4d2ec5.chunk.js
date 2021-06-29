(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{4320:function(e,t,a){"use strict";a(52);var r=a(14),o=a.n(r),d=a(0),l=a.n(d),s=a(65),c=a(18),n=a(74),i=a(163),b=a(826),u=a(1);Object(s.g)(n.a)`
  margin: auto ${({theme:e})=>2*e.gridUnit}px auto 0;
`;const O=s.g.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
`,h=s.g.div`
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
`;t.a=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:r,addDangerToast:s,addSuccessToast:n,onModelImport:p,show:j,onHide:m,passwordFields:g=[],setPasswordFields:f=(()=>{})})=>{const[y,w]=Object(d.useState)(!0),[S,v]=Object(d.useState)(null),[x,_]=Object(d.useState)({}),[C,I]=Object(d.useState)(!1),[E,T]=Object(d.useState)(!1),D=Object(d.useRef)(null),N=()=>{v(null),f([]),_({}),I(!1),T(!1),D&&D.current&&(D.current.value="")},{state:{alreadyExists:$,passwordsNeeded:k},importResource:F}=Object(b.g)(e,t,e=>{N(),s(e)});Object(d.useEffect)(()=>{f(k)},[k,f]),Object(d.useEffect)(()=>{I($.length>0)},[$,I]);const H=e=>{var t,a;const r=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";T(r.toUpperCase()===Object(c.e)("OVERWRITE"))};return y&&j&&w(!1),Object(u.d)(i.b,{name:"model",className:"import-model-modal",disablePrimaryButton:null===S||C&&!E,onHandledPrimaryAction:()=>{null!==S&&F(S,x,E).then(e=>{e&&(n(Object(c.e)("The import was successful")),N(),p())})},onHide:()=>{w(!0),m(),N()},primaryButtonName:C?Object(c.e)("Overwrite"):Object(c.e)("Import"),primaryButtonType:C?"danger":"primary",width:"750px",show:j,title:Object(u.d)("h4",null,Object(c.e)("Import %s",t))},Object(u.d)(h,null,Object(u.d)("div",{className:"control-label"},Object(u.d)("label",{htmlFor:"modelFile"},Object(c.e)("File"),Object(u.d)("span",{className:"required"},"*"))),Object(u.d)("input",{ref:D,name:"modelFile",id:"modelFile",type:"file",accept:".yaml,.json,.yml,.zip",onChange:e=>{const{files:t}=e.target;v(t&&t[0]||null)}})),0===g.length?null:Object(u.d)(l.a.Fragment,null,Object(u.d)("h5",null,"Database passwords"),Object(u.d)(O,null,a),o()(g).call(g,e=>Object(u.d)(h,{key:`password-for-${e}`},Object(u.d)("div",{className:"control-label"},e,Object(u.d)("span",{className:"required"},"*")),Object(u.d)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:x[e],onChange:t=>_({...x,[e]:t.target.value})})))),C?Object(u.d)(l.a.Fragment,null,Object(u.d)(h,null,Object(u.d)("div",{className:"confirm-overwrite"},r),Object(u.d)("div",{className:"control-label"},Object(c.e)('Type "%s" to confirm',Object(c.e)("OVERWRITE"))),Object(u.d)("input",{id:"overwrite",type:"text",onChange:H}))):null)}},4771:function(e,t,a){"use strict";a.r(t);a(52);var r,o=a(14),d=a.n(o),l=a(18),s=a(65),c=a(134),n=a(0),i=a.n(n),b=a(556),u=a(178),O=a.n(u),h=a(49),p=a(187),j=a(826),m=a(3493),g=a(1401),f=a(4313),y=a(402),w=a(191),S=a(3497),v=a(103),x=a(1689),_=a(3982),C=a(68),I=a(4320),E=a(4003);!function(e){e.PUBLISHED="published",e.DRAFT="draft"}(r||(r={}));var T=a(1);const D=Object(l.e)('The passwords for the databases below are needed in order to import them together with the dashboards. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),N=Object(l.e)("You are importing one or more dashboards that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),$=s.g.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;t.default=Object(w.a)((function(e){const{addDangerToast:t,addSuccessToast:a}=e,{state:{loading:o,resourceCount:s,resourceCollection:u,bulkSelectEnabled:w},setResourceCollection:k,hasPerm:F,fetchData:H,toggleBulkSelect:A,refreshData:z}=Object(j.h)("dashboard",Object(l.e)("dashboard"),t),M=Object(n.useMemo)(()=>d()(u).call(u,e=>e.id),[u]),[U,P]=Object(j.f)("dashboard",M,t),[B,R]=Object(n.useState)(null),[L,V]=Object(n.useState)(!1),[q,W]=Object(n.useState)([]),J=()=>{V(!0)},Y=F("can_write"),X=F("can_write"),G=F("can_write"),K=F("can_read"),Q=[{id:"changed_on_delta_humanized",desc:!0}];function Z(e){R(e)}function ee(e){return c.a.get({endpoint:`/api/v1/dashboard/${e.id}`}).then(({json:e={}})=>{k(d()(u).call(u,t=>t.id===e.id?e.result:t))},Object(p.c)(e=>t(Object(l.e)("An error occurred while fetching dashboards: %s",e))))}const te=Object(n.useMemo)(()=>[...e.user.userId?[{Cell:({row:{original:{id:e}}})=>Object(T.d)(x.a,{itemId:e,saveFaveStar:U,isStarred:P[e]}),Header:"",id:"id",disableSortBy:!0,size:"xs"}]:[],{Cell:({row:{original:{url:e,dashboard_title:t}}})=>Object(T.d)(b.b,{to:e},t),Header:Object(l.e)("Title"),accessor:"dashboard_title"},{Cell:({row:{original:{changed_by_name:e,changed_by_url:t}}})=>Object(T.d)("a",{href:t},e),Header:Object(l.e)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{Cell:({row:{original:{status:e}}})=>e===r.PUBLISHED?Object(l.e)("Published"):Object(l.e)("Draft"),Header:Object(l.e)("Status"),accessor:"published",size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>Object(T.d)("span",{className:"no-wrap"},e),Header:Object(l.e)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",Header:Object(l.e)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{owners:e=[]}}})=>Object(T.d)(S.a,{users:e}),Header:Object(l.e)("Owners"),accessor:"owners",disableSortBy:!0,size:"xl"},{Cell:({row:{original:e}})=>Object(T.d)($,{className:"actions"},G&&Object(T.d)(m.a,{title:Object(l.e)("Please confirm"),description:Object(T.d)(i.a.Fragment,null,Object(l.e)("Are you sure you want to delete")," ",Object(T.d)("b",null,e.dashboard_title),"?"),onConfirm:()=>Object(p.m)(e,z,a,t)},e=>Object(T.d)(C.a,{id:"delete-action-tooltip",title:Object(l.e)("Delete"),placement:"bottom"},Object(T.d)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},Object(T.d)(v.a.Trash,null)))),K&&Object(T.d)(C.a,{id:"export-action-tooltip",title:Object(l.e)("Export"),placement:"bottom"},Object(T.d)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>Object(p.j)([e])},Object(T.d)(v.a.Share,null))),X&&Object(T.d)(C.a,{id:"edit-action-tooltip",title:Object(l.e)("Edit"),placement:"bottom"},Object(T.d)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>Z(e)},Object(T.d)(v.a.EditAlt,null)))),Header:Object(l.e)("Actions"),id:"actions",hidden:!X&&!G&&!K,disableSortBy:!0}],[X,G,K,...e.user.userId?[P]:[]]),ae={Header:Object(l.e)("Favorite"),id:"id",urlDisplay:"favorite",input:"select",operator:f.a.dashboardIsFav,unfilteredLabel:Object(l.e)("Any"),selects:[{label:Object(l.e)("Yes"),value:!0},{label:Object(l.e)("No"),value:!1}]},re=[{Header:Object(l.e)("Owner"),id:"owners",input:"select",operator:f.a.relationManyMany,unfilteredLabel:Object(l.e)("All"),fetchSelects:Object(p.e)("dashboard","owners",Object(p.c)(e=>t(Object(l.e)("An error occurred while fetching dashboard owner values: %s",e))),e.user.userId),paginate:!0},{Header:Object(l.e)("Created by"),id:"created_by",input:"select",operator:f.a.relationOneMany,unfilteredLabel:Object(l.e)("All"),fetchSelects:Object(p.e)("dashboard","created_by",Object(p.c)(e=>t(Object(l.e)("An error occurred while fetching dashboard created by values: %s",e))),e.user.userId),paginate:!0},{Header:Object(l.e)("Status"),id:"published",input:"select",operator:f.a.equals,unfilteredLabel:Object(l.e)("Any"),selects:[{label:Object(l.e)("Published"),value:!0},{label:Object(l.e)("Draft"),value:!1}]},...e.user.userId?[ae]:[],{Header:Object(l.e)("Search"),id:"dashboard_title",input:"search",operator:f.a.titleOrSlug}],oe=[{desc:!1,id:"dashboard_title",label:Object(l.e)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:Object(l.e)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:Object(l.e)("Least recently modified"),value:"least_recently_modified"}];function de(r){const{userId:d}=e.user,l=Object(y.a)(d.toString(),null);return Object(T.d)(E.a,{dashboard:r,hasPerm:F,bulkSelectEnabled:w,refreshData:z,showThumbnails:l?l.thumbnails:Object(h.c)(h.a.THUMBNAILS),loading:o,addDangerToast:t,addSuccessToast:a,openDashboardEditModal:Z,saveFavoriteStatus:U,favoriteStatus:P[r.id]})}const le=[];return(G||K)&&le.push({name:Object(l.e)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:A}),Y&&le.push({name:Object(T.d)(i.a.Fragment,null,Object(T.d)("i",{className:"fa fa-plus"})," ",Object(l.e)("Dashboard")),buttonStyle:"primary",onClick:()=>{window.location.assign("/dashboard/new")}}),Object(h.c)(h.a.VERSIONED_EXPORT)&&le.push({name:Object(T.d)(C.a,{id:"import-tooltip",title:Object(l.e)("Import dashboards"),placement:"bottomRight"},Object(T.d)(v.a.Import,null)),buttonStyle:"link",onClick:J}),Object(T.d)(i.a.Fragment,null,Object(T.d)(g.a,{name:Object(l.e)("Dashboards"),buttons:le}),Object(T.d)(m.a,{title:Object(l.e)("Please confirm"),description:Object(l.e)("Are you sure you want to delete the selected dashboards?"),onConfirm:function(e){return c.a.delete({endpoint:`/api/v1/dashboard/?q=${O.a.encode(d()(e).call(e,({id:e})=>e))}`}).then(({json:e={}})=>{z(),a(e.message)},Object(p.c)(e=>t(Object(l.e)("There was an issue deleting the selected dashboards: ",e))))}},e=>{const t=[];return G&&t.push({key:"delete",name:Object(l.e)("Delete"),type:"danger",onSelect:e}),K&&t.push({key:"export",name:Object(l.e)("Export"),type:"primary",onSelect:p.j}),Object(T.d)(i.a.Fragment,null,B&&Object(T.d)(_.a,{dashboardId:B.id,show:!0,onHide:()=>R(null),onSubmit:ee}),Object(T.d)(f.b,{bulkActions:t,bulkSelectEnabled:w,cardSortSelectOptions:oe,className:"dashboard-list-view",columns:te,count:s,data:u,disableBulkSelect:A,fetchData:H,filters:re,initialSort:Q,loading:o,pageSize:25,renderCard:de,defaultViewMode:Object(h.c)(h.a.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"}))}),Object(T.d)(I.a,{resourceName:"dashboard",resourceLabel:Object(l.e)("dashboard"),passwordsNeededMessage:D,confirmOverwriteMessage:N,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{V(!1),z()},show:L,onHide:()=>{V(!1)},passwordFields:q,setPasswordFields:W}))}))}}]);
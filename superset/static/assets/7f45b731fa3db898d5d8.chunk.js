(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{4355:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var l=a(12),n=a.n(l),c=(a(0),a(68)),s=a(72),i=a(104),o=a(1);const d=c.g.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${({theme:e})=>e.colors.primary.base};
      }
    }
  }
`,r=c.g.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function b({actions:e}){return Object(o.d)(d,{className:"actions"},n()(e).call(e,(e,t)=>{const a=i.a[e.icon];return e.tooltip?Object(o.d)(s.a,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},Object(o.d)(r,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},Object(o.d)(a,null))):Object(o.d)(r,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},Object(o.d)(a,null))}))}},5277:function(e,t,a){"use strict";a.r(t);a(43);var l=a(34),n=a.n(l),c=a(12),s=a.n(c),i=a(0),o=a.n(i),d=a(18),r=a(135),b=a(183),m=a.n(b),u=a(13),p=a.n(u),j=a(834),O=a(190),h=a(194),g=a(1411),_=a(3524),f=a(72),S=a(3523),y=a(4355),w=a(4343),C=a(68),x=a(76),$=a(167),v=a(515),k=a(1);const D=C.g.div`
  margin: ${({theme:e})=>2*e.gridUnit}px auto
    ${({theme:e})=>4*e.gridUnit}px auto;
`,T=Object(C.g)(v.b)`
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({theme:e})=>e.colors.secondary.light2};
`,H=Object(C.g)(x.a)`
  margin: auto ${({theme:e})=>2*e.gridUnit}px auto 0;
`,N=C.g.div`
  margin-bottom: ${({theme:e})=>10*e.gridUnit}px;

  .control-label {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .required {
    margin-left: ${({theme:e})=>e.gridUnit/2}px;
    color: ${({theme:e})=>e.colors.error.base};
  }

  input[type='text'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;
    width: 50%;
  }
`;var A=Object(h.a)(({addDangerToast:e,onCssTemplateAdd:t,onHide:a,show:l,cssTemplate:n=null})=>{const[c,s]=Object(i.useState)(!0),[o,r]=Object(i.useState)(null),[b,m]=Object(i.useState)(!0),u=null!==n,{state:{loading:p,resource:O},fetchResource:h,createResource:g,updateResource:_}=Object(j.i)("css_template",Object(d.e)("css_template"),e),f=()=>{m(!0),a()};return Object(i.useEffect)(()=>{if(u&&(!o||!o.id||n&&n.id!==o.id||b&&l)){if(n&&null!==n.id&&!p){const e=n.id||0;h(e)}}else!u&&(!o||o.id||b&&l)&&r({template_name:"",css:""})},[n]),Object(i.useEffect)(()=>{O&&r(O)},[O]),Object(i.useEffect)(()=>{o&&o.template_name.length&&o.css&&o.css.length?s(!1):s(!0)},[o?o.template_name:"",o?o.css:""]),b&&l&&m(!1),Object(k.d)($.b,{disablePrimaryButton:c,onHandledPrimaryAction:()=>{if(u){if(o&&o.id){const e=o.id;delete o.id,delete o.created_by,_(e,o).then(e=>{e&&(t&&t(),f())})}}else o&&g(o).then(e=>{e&&(t&&t(),f())})},onHide:f,primaryButtonName:u?Object(d.e)("Save"):Object(d.e)("Add"),show:l,width:"55%",title:Object(k.d)("h4",null,u?Object(k.d)(H,{name:"edit-alt"}):Object(k.d)(H,{name:"plus-large"}),u?Object(d.e)("Edit CSS template properties"):Object(d.e)("Add CSS template"))},Object(k.d)(D,null,Object(k.d)("h4",null,Object(d.e)("Basic information"))),Object(k.d)(N,null,Object(k.d)("div",{className:"control-label"},Object(d.e)("CSS template name"),Object(k.d)("span",{className:"required"},"*")),Object(k.d)("input",{name:"template_name",onChange:e=>{const{target:t}=e,a={...o,template_name:o?o.template_name:"",css:o?o.css:""};a[t.name]=t.value,r(a)},type:"text",value:null==o?void 0:o.template_name})),Object(k.d)(N,null,Object(k.d)("div",{className:"control-label"},Object(d.e)("css"),Object(k.d)("span",{className:"required"},"*")),Object(k.d)(T,{onChange:e=>{const t={...o,template_name:o?o.template_name:"",css:e};r(t)},value:null==o?void 0:o.css,width:"100%"})))});t.default=Object(h.a)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:l,resourceCount:c,resourceCollection:b,bulkSelectEnabled:u},hasPerm:h,fetchData:C,refreshData:x,toggleBulkSelect:$}=Object(j.h)("css_template",Object(d.e)("CSS templates"),e),[v,D]=Object(i.useState)(!1),[T,H]=Object(i.useState)(null),N=h("can_write"),B=h("can_write"),U=h("can_write"),[E,z]=Object(i.useState)(null),M=[{id:"template_name",desc:!0}],q=Object(i.useMemo)(()=>[{accessor:"template_name",Header:Object(d.e)("Name")},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>{let a="null";return t&&(a=`${t.first_name} ${t.last_name}`),Object(k.d)(f.a,{id:"allow-run-async-header-tooltip",title:Object(d.e)("Last modified by %s",a),placement:"right"},Object(k.d)("span",null,e))},Header:Object(d.e)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl",disableSortBy:!0},{Cell:({row:{original:{created_on:e}}})=>{const t=new Date(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return p()(a).fromNow()},Header:Object(d.e)("Created on"),accessor:"created_on",size:"xl",disableSortBy:!0},{accessor:"created_by",disableSortBy:!0,Header:Object(d.e)("Created by"),Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",size:"xl"},{Cell:({row:{original:e}})=>{var t;const a=n()(t=[B?{label:"edit-action",tooltip:Object(d.e)("Edit template"),placement:"bottom",icon:"Edit",onClick:()=>(H(e),void D(!0))}:null,U?{label:"delete-action",tooltip:Object(d.e)("Delete template"),placement:"bottom",icon:"Trash",onClick:()=>z(e)}:null]).call(t,e=>!!e);return Object(k.d)(y.a,{actions:a})},Header:Object(d.e)("Actions"),id:"actions",disableSortBy:!0,hidden:!B&&!U,size:"xl"}],[U,N]),P={name:Object(d.e)("CSS templates")},R=[];N&&R.push({name:Object(k.d)(o.a.Fragment,null,Object(k.d)("i",{className:"fa fa-plus"})," ",Object(d.e)("CSS template")),buttonStyle:"primary",onClick:()=>{H(null),D(!0)}}),U&&R.push({name:Object(d.e)("Bulk select"),onClick:$,buttonStyle:"secondary"}),P.buttons=R;const F=Object(i.useMemo)(()=>[{Header:Object(d.e)("Created by"),id:"created_by",input:"select",operator:w.a.relationOneMany,unfilteredLabel:"All",fetchSelects:Object(O.e)("css_template","created_by",Object(O.c)(e=>Object(d.e)("An error occurred while fetching dataset datasource values: %s",e)),a.userId),paginate:!0},{Header:Object(d.e)("Search"),id:"template_name",input:"search",operator:w.a.contains}],[]);return Object(k.d)(o.a.Fragment,null,Object(k.d)(g.a,P),Object(k.d)(A,{addDangerToast:e,cssTemplate:T,onCssTemplateAdd:()=>x(),onHide:()=>D(!1),show:v}),E&&Object(k.d)(_.a,{description:Object(d.e)("This action will permanently delete the template."),onConfirm:()=>{E&&(({id:a,template_name:l})=>{r.a.delete({endpoint:`/api/v1/css_template/${a}`}).then(()=>{x(),z(null),t(Object(d.e)("Deleted: %s",l))},Object(O.c)(t=>e(Object(d.e)("There was an issue deleting %s: %s",l,t))))})(E)},onHide:()=>z(null),open:!0,title:Object(d.e)("Delete Template?")}),Object(k.d)(S.a,{title:Object(d.e)("Please confirm"),description:Object(d.e)("Are you sure you want to delete the selected templates?"),onConfirm:a=>{r.a.delete({endpoint:`/api/v1/css_template/?q=${m.a.encode(s()(a).call(a,({id:e})=>e))}`}).then(({json:e={}})=>{x(),t(e.message)},Object(O.c)(t=>e(Object(d.e)("There was an issue deleting the selected templates: %s",t))))}},e=>{const t=U?[{key:"delete",name:Object(d.e)("Delete"),onSelect:e,type:"danger"}]:[];return Object(k.d)(w.b,{className:"css-templates-list-view",columns:q,count:c,data:b,fetchData:C,filters:F,initialSort:M,loading:l,pageSize:25,bulkActions:t,bulkSelectEnabled:u,disableBulkSelect:$})}))}))}}]);
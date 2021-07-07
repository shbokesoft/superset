(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{4355:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var a=n(12),o=n.n(a),l=(n(0),n(68)),c=n(72),d=n(104),i=n(1);const r=l.g.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${({theme:t})=>t.colors.primary.base};
      }
    }
  }
`,s=l.g.span`
  color: ${({theme:t})=>t.colors.grayscale.base};
`;function b({actions:t}){return Object(i.d)(r,{className:"actions"},o()(t).call(t,(t,e)=>{const n=d.a[t.icon];return t.tooltip?Object(i.d)(c.a,{id:`${t.label}-tooltip`,title:t.tooltip,placement:t.placement,key:e},Object(i.d)(s,{role:"button",tabIndex:0,className:"action-button",onClick:t.onClick},Object(i.d)(n,null))):Object(i.d)(s,{role:"button",tabIndex:0,className:"action-button",onClick:t.onClick,key:e},Object(i.d)(n,null))}))}},5276:function(t,e,n){"use strict";n.r(e);n(43);var a=n(12),o=n.n(a),l=n(0),c=n.n(l),d=n(575),i=n(563),r=n(18),s=n(135),b=n(68),u=n(13),m=n.n(u),j=n(183),O=n.n(j),h=n(4355),g=n(63),p=n(3523),_=n(3524),f=n(4343),y=n(1411),w=n(103),x=n(194),v=n(834),$=n(190),k=n(1403),S=n(76),C=n(167),D=n(515),A=n(1);const H=b.g.div`
  margin: ${({theme:t})=>2*t.gridUnit}px auto
    ${({theme:t})=>4*t.gridUnit}px auto;
`,N=Object(b.g)(D.d)`
  border-radius: ${({theme:t})=>t.borderRadius}px;
  border: 1px solid ${({theme:t})=>t.colors.secondary.light2};
`,Y=Object(b.g)(S.a)`
  margin: auto ${({theme:t})=>2*t.gridUnit}px auto 0;
`,E=b.g.div`
  margin-bottom: ${({theme:t})=>5*t.gridUnit}px;

  .control-label {
    margin-bottom: ${({theme:t})=>2*t.gridUnit}px;
  }

  .required {
    margin-left: ${({theme:t})=>t.gridUnit/2}px;
    color: ${({theme:t})=>t.colors.error.base};
  }

  textarea {
    flex: 1 1 auto;
    height: ${({theme:t})=>17*t.gridUnit}px;
    resize: none;
    width: 100%;
  }

  textarea,
  input[type='text'] {
    padding: ${({theme:t})=>1.5*t.gridUnit}px
      ${({theme:t})=>2*t.gridUnit}px;
    border: 1px solid ${({theme:t})=>t.colors.grayscale.light2};
    border-radius: ${({theme:t})=>t.gridUnit}px;
  }

  input[type='text'] {
    width: 65%;
  }
`;var U=Object(x.a)(({addDangerToast:t,annnotationLayerId:e,annotation:n=null,onAnnotationAdd:a,onHide:o,show:c})=>{var d,i;const[s,b]=Object(l.useState)(!0),[u,j]=Object(l.useState)(null),[O,h]=Object(l.useState)(!0),g=null!==n,{state:{loading:p,resource:_},fetchResource:f,createResource:y,updateResource:w}=Object(v.i)(`annotation_layer/${e}/annotation`,Object(r.e)("annotation"),t),x=()=>{j({short_descr:"",start_dttm:"",end_dttm:"",json_metadata:"",long_descr:""})},$=()=>{h(!0),x(),o()},S=t=>{const{target:e}=t,n={...u,end_dttm:u?u.end_dttm:"",short_descr:u?u.short_descr:"",start_dttm:u?u.start_dttm:""};n[e.name]=e.value,j(n)};return Object(l.useEffect)(()=>{if(g&&(!u||!u.id||n&&n.id!==u.id||O&&c)){if(n&&null!==n.id&&!p){const t=n.id||0;f(t)}}else!g&&(!u||u.id||O&&c)&&x()},[n]),Object(l.useEffect)(()=>{_&&j(_)},[_]),Object(l.useEffect)(()=>{u&&u.short_descr.length&&u.start_dttm.length&&u.end_dttm.length?b(!1):b(!0)},[u?u.short_descr:"",u?u.start_dttm:"",u?u.end_dttm:""]),O&&c&&h(!1),Object(A.d)(C.b,{disablePrimaryButton:s,onHandledPrimaryAction:()=>{if(g){if(u&&u.id){const t=u.id;delete u.id,delete u.created_by,delete u.changed_by,delete u.changed_on_delta_humanized,delete u.layer,w(t,u).then(t=>{t&&(a&&a(),$())})}}else u&&y(u).then(t=>{t&&(a&&a(),$())})},onHide:$,primaryButtonName:g?Object(r.e)("Save"):Object(r.e)("Add"),show:c,width:"55%",title:Object(A.d)("h4",null,g?Object(A.d)(Y,{name:"edit-alt"}):Object(A.d)(Y,{name:"plus-large"}),g?Object(r.e)("Edit annotation"):Object(r.e)("Add annotation"))},Object(A.d)(H,null,Object(A.d)("h4",null,Object(r.e)("Basic information"))),Object(A.d)(E,null,Object(A.d)("div",{className:"control-label"},Object(r.e)("Annotation name"),Object(A.d)("span",{className:"required"},"*")),Object(A.d)("input",{name:"short_descr",onChange:S,type:"text",value:null==u?void 0:u.short_descr})),Object(A.d)(E,null,Object(A.d)("div",{className:"control-label"},Object(r.e)("date"),Object(A.d)("span",{className:"required"},"*")),Object(A.d)(k.b,{format:"YYYY-MM-DD HH:mm",onChange:(t,e)=>{const n={...u,end_dttm:u&&e[1].length?m()(e[1]).format("YYYY-MM-DD HH:mm"):"",short_descr:u?u.short_descr:"",start_dttm:u&&e[0].length?m()(e[0]).format("YYYY-MM-DD HH:mm"):""};j(n)},showTime:{format:"hh:mm a"},use12Hours:!0,value:null!=u&&null!=(d=u.start_dttm)&&d.length||null!=u&&null!=(i=u.end_dttm)&&i.length?[m()(u.start_dttm),m()(u.end_dttm)]:null})),Object(A.d)(H,null,Object(A.d)("h4",null,Object(r.e)("Additional information"))),Object(A.d)(E,null,Object(A.d)("div",{className:"control-label"},Object(r.e)("description")),Object(A.d)("textarea",{name:"long_descr",value:u?u.long_descr:"",placeholder:Object(r.e)("Description (this can be seen in the list)"),onChange:S})),Object(A.d)(E,null,Object(A.d)("div",{className:"control-label"},Object(r.e)("JSON metadata")),Object(A.d)(N,{onChange:t=>{const e={...u,end_dttm:u?u.end_dttm:"",json_metadata:t,short_descr:u?u.short_descr:"",start_dttm:u?u.start_dttm:""};j(e)},value:u&&u.json_metadata?u.json_metadata:"",width:"100%",height:"120px"})))});e.default=Object(x.a)((function({addDangerToast:t,addSuccessToast:e}){const{annotationLayerId:n}=Object(d.g)(),{state:{loading:a,resourceCount:u,resourceCollection:j,bulkSelectEnabled:x},fetchData:k,refreshData:S,toggleBulkSelect:C}=Object(v.h)(`annotation_layer/${n}/annotation`,Object(r.e)("annotation"),t,!1),[D,H]=Object(l.useState)(!1),[N,Y]=Object(l.useState)(""),[E,B]=Object(l.useState)(null),[T,M]=Object(l.useState)(null),L=t=>{B(t),H(!0)},I=Object(l.useCallback)((async function(){try{const t=await s.a.get({endpoint:`/api/v1/annotation_layer/${n}`});Y(t.json.result.name)}catch(e){await Object(w.a)(e).then(({error:e})=>{t(e.error||e.statusText||e)})}}),[n]);Object(l.useEffect)(()=>{I()},[I]);const q=[{id:"short_descr",desc:!0}],z=Object(l.useMemo)(()=>[{accessor:"short_descr",Header:Object(r.e)("Label")},{accessor:"long_descr",Header:Object(r.e)("Description")},{Cell:({row:{original:{start_dttm:t}}})=>m()(new Date(t)).format("ll"),Header:Object(r.e)("Start"),accessor:"start_dttm"},{Cell:({row:{original:{end_dttm:t}}})=>m()(new Date(t)).format("ll"),Header:Object(r.e)("End"),accessor:"end_dttm"},{Cell:({row:{original:t}})=>{const e=[{label:"edit-action",tooltip:Object(r.e)("Edit annotation"),placement:"bottom",icon:"Edit",onClick:()=>L(t)},{label:"delete-action",tooltip:Object(r.e)("Delete annotation"),placement:"bottom",icon:"Trash",onClick:()=>M(t)}];return Object(A.d)(h.a,{actions:e})},Header:Object(r.e)("Actions"),id:"actions",disableSortBy:!0}],[!0,!0]),R=[];R.push({name:Object(A.d)(c.a.Fragment,null,Object(A.d)("i",{className:"fa fa-plus"})," ",Object(r.e)("Annotation")),buttonStyle:"primary",onClick:()=>{L(null)}}),R.push({name:Object(r.e)("Bulk select"),onClick:C,buttonStyle:"secondary","data-test":"annotation-bulk-select"});const F=b.g.div`
    display: flex;
    flex-direction: row;

    a,
    Link {
      margin-left: 16px;
      font-size: 12px;
      font-weight: normal;
      text-decoration: underline;
    }
  `;let J=!0;try{Object(d.f)()}catch(t){J=!1}const P=Object(A.d)(g.a,{buttonStyle:"primary",onClick:()=>{L(null)}},Object(A.d)(c.a.Fragment,null,Object(A.d)("i",{className:"fa fa-plus"})," ",Object(r.e)("Annotation"))),G={message:Object(r.e)("No annotation yet"),slot:P};return Object(A.d)(c.a.Fragment,null,Object(A.d)(y.a,{name:Object(A.d)(F,null,Object(A.d)("span",null,Object(r.e)(`Annotation Layer ${N}`)),Object(A.d)("span",null,J?Object(A.d)(i.b,{to:"/annotationlayermodelview/list/"},"Back to all"):Object(A.d)("a",{href:"/annotationlayermodelview/list/"},"Back to all"))),buttons:R}),Object(A.d)(U,{addDangerToast:t,annotation:E,show:D,onAnnotationAdd:()=>S(),annnotationLayerId:n,onHide:()=>H(!1)}),T&&Object(A.d)(_.a,{description:Object(r.e)(`Are you sure you want to delete ${null==T?void 0:T.short_descr}?`),onConfirm:()=>{T&&(({id:a,short_descr:o})=>{s.a.delete({endpoint:`/api/v1/annotation_layer/${n}/annotation/${a}`}).then(()=>{S(),M(null),e(Object(r.e)("Deleted: %s",o))},Object($.c)(e=>t(Object(r.e)("There was an issue deleting %s: %s",o,e))))})(T)},onHide:()=>M(null),open:!0,title:Object(r.e)("Delete Annotation?")}),Object(A.d)(p.a,{title:Object(r.e)("Please confirm"),description:Object(r.e)("Are you sure you want to delete the selected annotations?"),onConfirm:a=>{s.a.delete({endpoint:`/api/v1/annotation_layer/${n}/annotation/?q=${O.a.encode(o()(a).call(a,({id:t})=>t))}`}).then(({json:t={}})=>{S(),e(t.message)},Object($.c)(e=>t(Object(r.e)("There was an issue deleting the selected annotations: %s",e))))}},t=>{const e=[{key:"delete",name:Object(r.e)("Delete"),onSelect:t,type:"danger"}];return Object(A.d)(f.b,{className:"annotations-list-view",bulkActions:e,bulkSelectEnabled:x,columns:z,count:u,data:j,disableBulkSelect:C,emptyState:G,fetchData:k,initialSort:q,loading:a,pageSize:25})}))}))}}]);
import{r as f}from"./chunks/index.75a97c46.js";var n={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=f.exports,u=Symbol.for("react.element"),x=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,a=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function _(r,e,i){var t,o={},p=null,l=null;i!==void 0&&(p=""+i),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(l=e.ref);for(t in e)m.call(e,t)&&!d.hasOwnProperty(t)&&(o[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)o[t]===void 0&&(o[t]=e[t]);return{$$typeof:u,type:r,key:p,ref:l,props:o,_owner:a.current}}s.Fragment=x;s.jsx=_;s.jsxs=_;(function(r){r.exports=s})(n);const h=()=>{const[r,e]=f.exports.useState(0);return n.exports.jsxs("section",{children:[n.exports.jsxs("h1",{children:["hello ",r]}),n.exports.jsx("button",{onClick:()=>e(r+1),children:"Click me"})]})};export{h as Home};

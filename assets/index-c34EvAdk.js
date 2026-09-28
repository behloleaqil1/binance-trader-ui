(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Qf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lc={exports:{}},yr={},oc={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp=C,pp=Symbol.for("react.element"),mp=Symbol.for("react.fragment"),vp=Object.prototype.hasOwnProperty,gp=fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yp={key:!0,ref:!0,__self:!0,__source:!0};function vc(e,t,n){var i,s={},r=null,l=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(l=t.ref);for(i in t)vp.call(t,i)&&!yp.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)s[i]===void 0&&(s[i]=t[i]);return{$$typeof:pp,type:e,key:r,ref:l,props:s,_owner:gp.current}}yr.Fragment=mp;yr.jsx=vc;yr.jsxs=vc;lc.exports=yr;var u=lc.exports,gc={exports:{}},Pt={},yc={exports:{}},wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
`+Ar+e}var Ur=!1;function Hr(e,t){if(!e||Ur)return"";Ur=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var i=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){i=h}e.call(t.prototype)}else{try{throw Error()}catch(h){i=h}e()}}catch(h){if(h&&i&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),r=i.stack.split(`
`),l=s.length-1,o=r.length-1;1<=l&&0<=o&&s[l]!==r[o];)o--;for(;1<=l&&0<=o;l--,o--)if(s[l]!==r[o]){if(l!==1||o!==1)do if(l--,o--,0>o||s[l]!==r[o]){var a=`
Error generating stack: `+r.message+`
 * @license
 * TradingView Lightweight Charts™ v4.2.1
 * Copyright (c) 2024 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0

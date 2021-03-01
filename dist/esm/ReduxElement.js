import{_ as t,s as e}from"./configureStore-0fd459a4.js";import{L as s,c as a,h as n}from"./lit-element-d3cdb051.js";import"./index-af66def3.js";import"./value.js";import"./utilities.js";import"./types.js";import"./initialState.js";
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const r=t=>e=>class extends e{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=t.subscribe((()=>this.stateChanged(t.getState()))),this.stateChanged(t.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(t){}};var c,i;class o extends(r(e)(s)){static get styles(){return a(c||(c=t([""])))}static get properties(){return{counter:{type:Number}}}stateChanged(t){this.counter=t.count.value}render(){return n(i||(i=t(["\n      <slot></slot>\n      <span>","</span>\n    "])),this.counter)}}export{o as ReduxElement};

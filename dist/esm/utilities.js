var t=(t,e)=>function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,a=arguments.length>1?arguments[1]:void 0;return!0===e.hasOwnProperty(a.type)?e[a.type](r,a):r},e=()=>{try{var t=localStorage.getItem("redux-element-state");if(null===t)return;return JSON.parse(t)}catch(t){return}},r=t=>{try{var e=JSON.stringify(t);localStorage.setItem("redux-element-state",e)}catch(t){}};export{t as createReducer,e as loadState,r as saveState};

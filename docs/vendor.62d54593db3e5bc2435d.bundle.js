!function(e){var t={};function n(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(l,a,function(t){return e[t]}.bind(null,a));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}({2:function(e,t){const n=document.querySelector("#name"),l=document.querySelector("#phone"),a=document.querySelector("#email"),i=document.querySelector("#name + .form__label"),r=document.querySelector("#phone + .form__label"),s=document.querySelector("#email + .form__label");n.addEventListener("blur",(function(){/^[A-Za-z]{1,30}$/.test(n.value)?(i.textContent="Full Name",i.classList.remove("invalid"),n.classList.remove("invalid")):(i.textContent="Please enter valid name",i.classList.add("invalid"),n.classList.add("invalid"));""===n.value&&(i.textContent="Full Name",i.classList.remove("invalid"),n.classList.remove("invalid"))})),l.addEventListener("blur",(function(){/^((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/.test(l.value)&&/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/.test(l.value)?(r.textContent="Phone Number",r.classList.remove("invalid"),l.classList.remove("invalid")):(r.textContent="Please enter valid UK phone number",r.classList.add("invalid"),l.classList.add("invalid"));""===l.value&&(r.textContent="Phone Number",r.classList.remove("invalid"),l.classList.remove("invalid"))})),a.addEventListener("blur",(function(){/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/.test(a.value)?(s.textContent="E-mail",s.classList.remove("invalid"),a.classList.remove("invalid")):(s.textContent="Please enter valid e-mail address",s.classList.add("invalid"),a.classList.add("invalid"));""===a.value&&(s.textContent="E-mail",s.classList.remove("invalid"),a.classList.remove("invalid"))}))}});
(()=>{"use strict";const e={projectCreation:()=>{const e=document.querySelector("#project-btn"),t=document.querySelector("#new-project"),r=()=>JSON.parse(localStorage.getItem("projects"));e.addEventListener("click",(()=>{(e=>{if(null===e.value||""===e.value)return alert("Please fill the required fields"),!0})(t)||((e=>{const o=(e=>({name:e}))(e),n=r();var a;n.push(o),a=n,localStorage.setItem("projects",JSON.stringify(a)),t.value=""})(t.value),(()=>{const e=r().map((e=>`<p>${e.name}</p>`)).join("\n");document.querySelector("#projects-container").innerHTML=e})())}))},displayProjects};e(),window.addEventListener("load",(()=>{null===JSON.parse(localStorage.getItem("projects"))&&localStorage.setItem("projects",JSON.stringify(new Array)),e()}))})();
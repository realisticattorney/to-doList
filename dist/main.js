(()=>{"use strict";const e=e=>{if(0===e.length)return void(document.querySelector("#tasks-container").innerHTML="<h2>No tasks created</h2>");const t=e.map(((e,t)=>`<div class='singleTask'>\n      <h3>${e.name}</h3>\n      <input class='task-input editing' value=${e.name}>\n      <p>${e.desc}</p>\n      <input class='task-input editing' value=${e.desc}>\n      <p>${e.priority}</p>\n      <input class='task-input editing' value=${e.priority}>\n      <p>${e.date}</p>\n      <input class='task-input editing' type='date' value=${e.date}>\n\n      <button id='edit-btn' type='button' onClick='editTask()'>Edit</button>\n      \n      <button class='task-input editing' type='button'>Save</button>\n\n      <button class='task-input editing' type='button' onClick='deleteTask(${t})'>Delete</button>\n    </div>`)).join("\n");document.querySelector("#tasks-container").innerHTML=t},t=()=>{const t=document.querySelectorAll(".projectBtn");for(let n=0;n<t.length;n+=1)t[n].addEventListener("click",(()=>{const o=JSON.parse(localStorage.getItem("tasks")).filter((e=>{if(e.project==t[n].innerText)return e}));e(o)}))},n=()=>JSON.parse(localStorage.getItem("tasks")),o=e=>{localStorage.setItem("tasks",JSON.stringify(e))},a=()=>JSON.parse(localStorage.getItem("projects")),c=e=>{if(null===e.value||""===e.value)return alert("Please fill the required fields"),!0},l=document.querySelector("#project-btn"),r=document.querySelector("#new-project"),i=()=>{const e=a().map((e=>`<button class='projectBtn' >${e.name}</button>`)).join("\n");document.querySelector("#projects-container").innerHTML=e},s=()=>{const e=JSON.parse(localStorage.getItem("projects")),t=document.querySelector("#task-project"),n=e.map((e=>`<option id='${e.name}'>${e.name}</option>`));t.innerHTML=n},d=document.querySelector("#task-name"),u=document.querySelector("#task-desc"),p=document.querySelector("#task-date"),m=document.querySelector("#task-priority"),v=document.querySelector("#task-project"),y=document.querySelector("#task-btn"),g=(e,t,n,o,a)=>({name:e,desc:t,date:n,priority:o,project:a}),S=()=>{const e=n().map((e=>`<div class='singleTask'>\n      <h3>${e.name}</h3>\n    </div>`)).join("\n");document.querySelector("#tasks-container").innerHTML=e,k()},k=()=>{const e=document.querySelectorAll(".singleTask");for(let t=0;t<e.length;t+=1){const n=document.createElement("button");n.innerText="Edit",n.type="button",n.addEventListener("click",(()=>{h(t)})),e[t].appendChild(n)}},h=e=>{const t=n(),c=a(),l=document.querySelector("#content"),r=document.createElement("div");r.classList.add("modal"),r.id="taskModal";const i=document.createElement("div");i.classList.add("modalContent");const s=document.createElement("span");s.classList.add("close"),s.innerText="X";const d=document.createElement("input");d.value=t[e].name,d.id="editingName";const u=document.createElement("input");u.value=t[e].desc,u.id="editingDesc";const p=document.createElement("input");p.type="date",p.value=t[e].date,p.id="editingDate";const m=document.createElement("select"),v=document.createElement("option");v.innerText="Normal";const y=document.createElement("option");y.innerText="Urgent";const g=document.createElement("option");g.innerText="Later",m.append(v,y,g),m.value=t[e].priority,m.id="editingPriority";const k=document.createElement("select");for(let e=0;e<c.length;e+=1){const t=document.createElement("option");t.innerText=c[e].name,k.append(t)}k.value=t[e].project,k.id="editingProject",i.appendChild(k),i.appendChild(m),i.appendChild(p),i.appendChild(u),i.appendChild(d),i.appendChild(s),r.appendChild(i),l.appendChild(r);const h=document.querySelector(".modal");h.style.display="block",s.onclick=()=>{h.style.display="none",r.remove()};const q=document.createElement("button");q.type="button",q.innerText="Delete",i.appendChild(q),q.addEventListener("click",(()=>{(e=>{const t=n();t.splice(e,1),o(t),S()})(e),r.remove()}));const b=document.createElement("button");b.type="button",b.innerText="Save",i.appendChild(b),b.addEventListener("click",(()=>{E(e),r.remove()}))},E=e=>{const t=document.querySelector("#editingName"),a=document.querySelector("#editingDesc"),c=document.querySelector("#editingDate"),l=document.querySelector("#editingPriority"),r=document.querySelector("#editingProject"),i=g(t.value,a.value,c.value,l.value,r.value),s=n();s[e]=i,o(s),S()};window.addEventListener("load",(()=>{null===JSON.parse(localStorage.getItem("projects"))&&localStorage.setItem("projects",JSON.stringify([{name:"Inbox"}])),null===JSON.parse(localStorage.getItem("tasks"))&&localStorage.setItem("tasks",JSON.stringify(new Array)),i(),S(),s(),l.addEventListener("click",(()=>{c(r)||((e=>{const t=(e=>({name:e}))(e),n=a();var o;n.push(t),o=n,localStorage.setItem("projects",JSON.stringify(o)),r.value=""})(r.value),i(),s(),t())})),y.addEventListener("click",(()=>{c(d)||(((e,t,a,c,l)=>{const r=g(e,t,a,c,l),i=n();i.push(r),o(i),d.value="",u.value="",p.value="",m.value=""})(d.value,u.value,p.value,m.value,v.value),S())})),t()}))})();
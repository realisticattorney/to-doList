(()=>{"use strict";const e=["Today","Next 7 days","Past tasks"];(()=>{const t=document.querySelector("#content"),n=document.createElement("div"),i=document.createElement("sidenav");i.className="sidenav";const o=document.createElement("ul");e.map((e=>{const t=document.createElement("li"),n=document.createElement("a");return n.innerHTML=e,n.id=e.toLocaleLowerCase(),n.href="#",t.appendChild(n),o.appendChild(t),!0})),n.appendChild(o),i.appendChild(n),t.appendChild(i)})(),new function(e){this.title=title,this.description=description,this.dueDate=dueDate,this.priority=priority}("create prototype","a bunch of properties into a function constructor",Date.now(),1)})();
(()=>{"use strict";const e=(e,t)=>{const n=document.createElement("button");n.setAttribute("id",e),n.classList.add("navBtn");const d=document.createElement("span");return d.textContent=t,n.appendChild(d),n},t=()=>{(()=>{const e=document.getElementById("main"),t=document.getElementById("inner");e.removeChild(t);const n=document.createElement("div");n.setAttribute("id","inner"),e.appendChild(n)})(),(()=>{const e=document.getElementById("inner"),t=document.createElement("div");t.classList.add("covid");const n=document.createElement("h2");n.setAttribute("id","covidHeader"),n.textContent="Covid-19 Restrictions";const d=document.createElement("p");d.setAttribute("id","covidText"),d.textContent="Due to the ongoing pandemic, indoor dining is temporarily closed. We are still offering our pick-up and drive-thru services. Masks must be worn when inside the building.",e.appendChild(t),t.appendChild(n),t.appendChild(d)})(),(()=>{const e=document.getElementById("inner"),t=document.createElement("div");t.classList.add("about");const n=document.createElement("h2");n.setAttribute("id","aboutHeader"),n.textContent="About";const d=document.createElement("p");d.setAttribute("id","aboutText"),d.textContent="This restaurant contains all the best foods from lorem ipsum.",e.appendChild(t),t.appendChild(n),t.appendChild(d)})(),document.querySelectorAll(".navBtn").forEach((e=>{e.classList.remove("activeBtn")})),document.getElementById("homeBtn").classList.add("activeBtn")},n=(e,t,n,d,c)=>{const o=document.createElement("div");o.classList.add("item");const i=document.createElement("img");i.setAttribute("src",e),i.setAttribute("alt",t);const a=document.createElement("div");a.classList.add("card-description");const s=document.createElement("h2");s.textContent=n;const m=document.createElement("h2");m.textContent=d;const l=document.createElement("p");return l.textContent=c,o.appendChild(i),o.appendChild(a),a.appendChild(s),a.appendChild(m),a.appendChild(l),o},d=((()=>{const t=document.getElementById("content"),n=((e,t)=>{const n=document.createElement("header");n.setAttribute("id","header");const d=document.createElement("h1");return d.textContent="My Favourite Restaurant",n.appendChild(d),n})(),d=(t=>{const n=document.createElement("nav");n.setAttribute("id","navBar");const d=e("homeBtn","Home"),c=e("menuBtn","Menu"),o=e("contactBtn","Contact");return n.appendChild(d),n.appendChild(c),n.appendChild(o),n})(),c=(e=>{const t=document.createElement("main");t.setAttribute("id","main");const n=document.createElement("div");return n.setAttribute("id","inner"),t.appendChild(n),t})(),o=((e,t)=>{const n=document.createElement("footer");n.setAttribute("id","footer");const d=document.createElement("span");return d.textContent="Made by Phlames",n.appendChild(d),n})();t.appendChild(n),t.appendChild(d),t.appendChild(c),t.appendChild(o)})(),t(),document.getElementById("homeBtn")),c=document.getElementById("menuBtn"),o=document.getElementById("contactBtn");d.addEventListener("click",t),c.addEventListener("click",(()=>{(()=>{const e=document.getElementById("main"),t=document.getElementById("inner");e.removeChild(t);const n=document.createElement("div");n.setAttribute("id","inner"),e.appendChild(n)})(),(()=>{const e=document.getElementById("inner");e.classList.add("grid-layout");const t=n("../images/pexels-photo-1625235.jpeg","Picture of Ice Cream","Ice Cream","$10","Delicious Ice Cream");e.appendChild(t);const d=n("../images/pexels-photo-3702434.jpeg","Picture of Soup","Soup","$6","Delicious Soup");e.appendChild(d);const c=n("../images/pexels-photo-1583884.jpeg","Picture of Fries","Fries","$7","Delicious Fries");e.appendChild(c);const o=n("../images/pexels-photo-6513591.jpeg","Picture of Steak","Steak","$21","Delicious Steak");e.appendChild(o);const i=n("../images/pexels-photo-4809149.jpeg","Picture of Burger","Burger","$11","Delicious Burger");e.appendChild(i)})(),document.querySelectorAll(".navBtn").forEach((e=>{e.classList.remove("activeBtn")})),document.getElementById("menuBtn").classList.add("activeBtn")})),o.addEventListener("click",(()=>{(()=>{const e=document.getElementById("main"),t=document.getElementById("inner");e.removeChild(t);const n=document.createElement("div");n.setAttribute("id","inner"),e.appendChild(n)})(),(()=>{const e=document.getElementById("inner"),t=document.createElement("div");t.classList.add("contact");const n=document.createElement("h2");n.setAttribute("id","contactHeader"),n.textContent="Contact";const d=document.createElement("p");d.setAttribute("style","white-space: pre;"),d.setAttribute("id","contactText"),d.textContent="Please contact us at the following: \r\n",d.textContent+="Phone: 403-123-4567 \r\n",d.textContent+="Address: 123 Commerce Ave SE \r\n",e.appendChild(t),t.appendChild(n),t.appendChild(d)})(),(()=>{const e=document.getElementById("inner"),t=document.createElement("div");t.classList.add("contactForm");const n=document.createElement("h1");n.setAttribute("id","formHeader"),n.textContent="Send us an email!";const d=document.createElement("form");d.setAttribute("class","form");const c=document.createElement("label");c.textContent="Name:",d.appendChild(c);const o=document.createElement("input");d.appendChild(o);const i=document.createElement("label");i.textContent="Email:",d.appendChild(i);const a=document.createElement("input");d.appendChild(a);const s=document.createElement("label");s.textContent="comment:",d.appendChild(s);const m=document.createElement("input");m.setAttribute("id","commentField"),d.appendChild(m);const l=document.createElement("button");l.setAttribute("id","submitButton"),l.textContent="Submit",d.appendChild(l),t.appendChild(n),t.appendChild(d),e.appendChild(t)})(),document.querySelectorAll(".navBtn").forEach((e=>{e.classList.remove("activeBtn")})),document.getElementById("contactBtn").classList.add("activeBtn")}))})();
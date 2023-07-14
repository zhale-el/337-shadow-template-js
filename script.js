const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="./site-users.css">
<h2>zhale</h2>
<hr/>

`;

class siteUser extends HTMLElement {
  constructor() {
    super();
    console.log("ساخته شد", this);
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("site-users", siteUser);

// This is where the custom component is defined
try {
  fetch("FloatingDropdown/template.html", { mode: "cors" })
    .then((stream) => stream.text())
    .then((text) => define(text));
} catch (error) {
  console.error(
    "[FloatingDropdown > index.js] unable to define FloatingDropdown element.\n",
    error
  );
}

/**
 * Sets up the custom component as defined in the FloatingDropdown template
 *
 * @param {string} html the outerHTML attribute of the floating dropdown element defined in `index.html`
 */
function define(html) {
  class FloatingDropdown extends HTMLElement {
    constructor() {
      self = super();
    }

    connectedCallback() {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const template = doc.getElementById("floating-dropdown");
      //Custom element
      const dropdown = template.content.cloneNode(true);

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(dropdown);

      // Apply external styles to the shadow dom
      const styles = document.createElement("link");
      styles.setAttribute("rel", "stylesheet");
      styles.setAttribute("href", "FloatingDropdown/styles.css");

      shadowRoot.appendChild(styles);
    }
  }
  customElements.define("floating-dropdown", FloatingDropdown);
}

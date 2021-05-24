class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer class="footer">
         <p>Copyright © 2021 - Kulinaria Apps</p>
        </footer>
        `;
  }
}

customElements.define('footer-bar', FooterBar);

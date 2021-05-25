class DrawerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav id="drawer" class="nav">
    <h2 class="nav__title">Kulinaria</h2>
    <div class="line"></div>

    <ul class="nav__list">
      <li class="nav__item">
        <a href="#/">home</a>
      </li>
      <li class="nav__item">
        <a href="./detail.html">favorite</a>
      </li>
      <li class="nav__item">
        <a
          href="https://github.com/auliamnaufal"
          target="_blank"
          rel="noreferrer"
          >about us</a
        >
      </li>
    </ul>
  </nav>
          `;
  }
}

customElements.define('drawer-bar', DrawerBar);

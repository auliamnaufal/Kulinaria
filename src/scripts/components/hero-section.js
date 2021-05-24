class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero__content">
                <h1 class="hero__content--title">Kulinaria</h1>
                <p class="hero__content--text">a place where you found cheerfulness</p>
                <button class="hero__content--btn">Read More</button>
            </div>
        </div>
        `;
  }
}

customElements.define('hero-section', HeroSection);

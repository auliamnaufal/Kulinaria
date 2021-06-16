class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
        <picture>
                <source media="(max-width: 600px)" srcset="./public/images/hero-image_2.jpg">
                <img 
                    src='./public/images/hero-image_2.jpg' 
                    alt="Hero image"></img>
            
            </picture>
            <div class="hero__content">
                <h1 class="hero__content--title">Kulinaria</h1>
                <p class="hero__content--text">Tempat di mana Anda menemukan keceriaan</p>
                <button class="hero__content--btn">Baca selengkapnya</button>
            </div>
        </div>
        `;
  }
}

customElements.define('hero-section', HeroSection);

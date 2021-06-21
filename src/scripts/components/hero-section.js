class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <picture class="hero--img">
              <source media="(max-width: 600px)" type="image/webp" srcset="./public/images/hero-image_2-small.webp">
              <source media="(max-width: 600px)" type="image/jpeg" srcset="./public/images/hero-image_2-small.jpg">
              <source media="(min-width: 601px)" type="image/webp" srcset="./public/images/hero-image_2-large.webp">
              <source media="(min-width: 601px)" type="image/jpg" srcset="./public/images/hero-image_2-large.jpg">
              <img src="./public/images/hero-image_2-large.jpg" alt="hero image">
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

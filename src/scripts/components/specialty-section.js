class SpecialtySection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="specialty">
            <div class="specialty__content">
                <h2 class="specialty__content--title">spesialisasi kami</h2>
                <div class="gallery">
                    <div class="gallery__item">
                        <i class="fas fa-user-check icon"></i>
                        <p class="gallery__item--title">Koki Terbaik</p>
                    </div>

                    <div class="gallery__item">
                        <i class="fas fa-home icon"></i>
                        <p class="gallery__item--title" tabindex="0">Tempat Yang Nyaman</p>
                    </div>

                    <div class="gallery__item">
                        <i class="fas fa-carrot icon"></i>
                        <p class="gallery__item--title">Makanan Organik</p>
                    </div>
                </div>
            </div>
        </section>
        `;
  }
}

customElements.define('specialty-section', SpecialtySection);

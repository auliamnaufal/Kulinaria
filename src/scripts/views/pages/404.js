const Page404 = {
  async render() {
    return `
          <h2 class="error">Page Not Found (404)</h2>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Page404;

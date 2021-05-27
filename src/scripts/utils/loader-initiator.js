const Preloader = {
  init(loader) {
    this._loader = loader;
  },

  displayPreloader() {
    this._loader.innerHTML = this._loadSpinner();
  },

  removePreloader() {
    this._loader.innerHTML = '';
  },

  _loadSpinner() {
    return `  
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-dashed spinner" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#222831" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
      <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
      <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
      <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
      <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
      <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
      <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
      <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
      </svg>
      `;
  },
};

export default Preloader;

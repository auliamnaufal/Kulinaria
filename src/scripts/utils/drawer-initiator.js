const DrawerInitiator = {
    init({ button, drawer, content }) {
      button.addEventListener('click', (event) => {
        this._toggleDrawer(event, drawer, button);
      });
  
      content.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer, button);
      });
    },
  
    _toggleDrawer(event, drawer, button) {
        drawer.classList.toggle("open");
        button.classList.toggle("n-activate");
        button.classList.toggle("activate");
        event.stopPropagation();
    },
  
    _closeDrawer(event, drawer, button) {
        drawer.classList.remove("open");
        button.classList.remove("n-activate");
        button.classList.add("activate");
        event.stopPropagation();
    },
  };
  
  export default DrawerInitiator;
  
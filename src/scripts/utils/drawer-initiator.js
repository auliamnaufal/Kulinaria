const DrawerInitiator = {
  init({
    button,
    drawer,
    content,
    drawerHomeLink,
    drawerFavoriteLink,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });

    drawerHomeLink.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });

    drawerFavoriteLink.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });
  },

  _toggleDrawer(event, drawer, button) {
    drawer.classList.toggle('open');
    button.classList.toggle('n-activate');
    button.classList.toggle('activate');
    console.log('open drawer');
    event.stopPropagation();
  },

  _closeDrawer(event, drawer, button) {
    drawer.classList.remove('open');
    button.classList.remove('n-activate');
    button.classList.add('activate');
    console.log('Close Drawer');
    event.stopPropagation();
  },
};

export default DrawerInitiator;

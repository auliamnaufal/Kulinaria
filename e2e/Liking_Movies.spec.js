Feature('Liking Movies');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty saved movies', ({ I }) => {
  I.seeElement('.favorite__header');
  I.see('Kamu Tidak Memiliki Restoran Favorit, bisa Tambah Disini', '.nofavorite');
});

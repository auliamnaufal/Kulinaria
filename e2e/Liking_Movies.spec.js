Feature('Liking Movies');
const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty saved movies', ({ I }) => {
  I.seeElement('.favorite__header');
  I.see('Kamu Tidak Memiliki Restoran Favorit, bisa Tambah Disini', '.nofavorite');
});

Scenario('Saving restaurant', async ({ I }) => {
  I.see('Kamu Tidak Memiliki Restoran Favorit, bisa Tambah Disini', '.nofavorite');

  I.amOnPage('#/');
  I.seeElement('.skeleton');
  I.seeElement('.item');

  const firstResto = locate('.restaurant__item--title a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');
  const savedRestoName = await I.grabTextFrom('.restaurant__item--title a');

  assert.strictEqual(firstRestoName, savedRestoName);
});

Scenario('Unsave restaurant', async ({ I }) => {
  I.see('Kamu Tidak Memiliki Restoran Favorit, bisa Tambah Disini', '.nofavorite');

  I.amOnPage('#/');
  I.seeElement('.skeleton');
  I.seeElement('.item');

  const firstResto = locate('.restaurant__item--title a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');
  const savedRestoName = await I.grabTextFrom('.restaurant__item--title a');

  assert.strictEqual(firstRestoName, savedRestoName);

  I.click(firstResto);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.see('Kamu Tidak Memiliki Restoran Favorit, bisa Tambah Disini', '.nofavorite');
});

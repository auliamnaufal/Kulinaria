Feature('Adding user review');
const assert = require('assert');

Scenario('User Restaurant Review', async ({ I }) => {
  I.amOnPage('#/');
  I.seeElement('.specialty');

  I.seeElement('.skeleton');
  I.seeElement('.item');

  I.click(locate('.restaurant__item--title a').first());

  I.seeElement('.form');

  const userReview = 'mantap mantul oke siap mantap';
  I.fillField('#name', 'Naufal Aulia');

  I.fillField('#reviews', userReview);
  I.click('#submit');

  I.see(userReview, '.review__item__review q');

  const lastReview = locate('.review__item__review q').last();
  const lastReviewText = await I.grabTextFrom(lastReview);

  assert.strictEqual(userReview, lastReviewText);
});

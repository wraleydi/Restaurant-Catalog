// eslint-disable-next-line no-undef
Feature('Add Review Restaurant');

// eslint-disable-next-line no-undef
Scenario('Add Review From Restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.see('Catalog', '.title-catalog');
  I.seeElement('.card');
  I.seeElement('.restaurant_detail a');

  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.restaurant_detail a').first();

  I.click(firstRestaurant);

  const reviewName = 'budi jo';
  const reviewText = 'wah enakk';

  I.seeElement('#reviewName');
  I.fillField('#reviewName', reviewName);

  I.seeElement('#reviewText');
  I.fillField('#reviewText', reviewText);

  I.click('button[type="submit"]');

  I.seeInPopup('Ulasan berhasil ditambahkan!');
  I.acceptPopup();

  I.see(reviewName, '.review:last-child .review_name');

  I.see(reviewText, '.review:last-child .review_text');
});

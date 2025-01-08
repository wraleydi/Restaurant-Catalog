const assert = require('assert');

Feature('Liking Restaurants');

Scenario('liking one restaurant from catalog', async ({ I }) => {
  
    I.amOnPage('/');
    I.see('Catalog', '.title-catalog')
    I.seeElement('.card')
  
    I.seeElement('.restaurant_detail a');
    const firstRestaurant = locate('.restaurant_detail a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/favorite');
    I.seeElement('.card');
    const likedRestaurantTitle  = await I.grabTextFrom('.restaurant_detail a');
  
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  });
  

const assert = require('assert');

Feature('Liking and Unliking Restaurants');

Scenario('liking one restaurant from catalog', async ({ I }) => {
    I.amOnPage('/');
    I.see('Catalog', '.title-catalog');
    I.seeElement('.card');
  
    I.seeElement('.restaurant_detail a');
    const firstRestaurant = locate('.restaurant_detail a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);
  
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.wait(2);
    I.amOnPage('/#/favorite');
    I.seeElement('.card');
    const likedRestaurantTitle = await I.grabTextFrom('.restaurant_detail a');
  
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking restaurant from favorite', async ({ I }) => {
    I.amOnPage('/#/favorite');
    I.see('Your Favorite Restaurant', '.title-catalog');
    
    I.seeElement('.restaurant_detail a');
    const firstRestaurant = locate('.restaurant_detail a').first();
    const titleRestaurant = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton .fa.fa-heart');
    I.click('#likeButton .fa.fa-heart');
  
    I.amOnPage('/#/favorite');
    const isRestaurantPresent = await I.grabTextFromAll('.card .title_restaurant');
    I.assertNotInclude(isRestaurantPresent, titleRestaurant, 'Restaurant should be removed from favorites');
});

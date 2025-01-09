const assert = require('assert');

Feature('Liking and Unliking Restaurants');

Scenario('Liking and Unliking restaurant from favorite', async ({ I }) => {
    I.amOnPage('/');
    I.see('Catalog', '.title-catalog');
    I.seeElement('.card');
    I.seeElement('.restaurant_detail a');

    const firstRestaurant = locate('.restaurant_detail a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');

    const visibleRestaurants = await I.grabNumberOfVisibleElements('.restaurant_detail a');
    if (visibleRestaurants > 0) {
        const likedRestaurantTitle = await I.grabTextFrom('.restaurant_detail a');
        assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

        I.click('.restaurant_detail a');
        I.seeElement('#likeButton');
        I.click('#likeButton');

        I.amOnPage('/#/favorite');
        const updatedRestaurants = await I.grabNumberOfVisibleElements('.restaurant_detail a');
        assert.strictEqual(updatedRestaurants, 0, 'No restaurants should remain in favorites');
    } else {
        I.see('No Favorite Restaurant', '.message_text');
    }
});



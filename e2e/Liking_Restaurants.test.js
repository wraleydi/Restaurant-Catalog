import { strictEqual } from "assert";

// eslint-disable-next-line no-undef
Feature("Liking and Unliking Restaurants");

// eslint-disable-next-line no-undef
Scenario("Liking and Unliking restaurant from favorite", async ({ I }) => {
  I.amOnPage("/");
  I.see("Catalog", ".title-catalog");
  I.seeElement(".card__content");

  // eslint-disable-next-line no-undef
  const firstRestaurant = locate(".card__content").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");

  const visibleRestaurants =
    await I.grabNumberOfVisibleElements(".card__content");
  if (visibleRestaurants > 0) {
    const likedRestaurantTitle = await I.grabTextFrom(".card__content");
    strictEqual(firstRestaurantTitle, likedRestaurantTitle);

    I.click(".card__content");
    I.seeElement("#likeButton");
    I.click("#likeButton");

    I.amOnPage("/#/favorite");
    const updatedRestaurants =
      await I.grabNumberOfVisibleElements(".card__content");
    strictEqual(
      updatedRestaurants,
      0,
      "No restaurants should remain in favorites"
    );
  } else {
    I.see("No Favorite Restaurant", ".message_text");
  }
});

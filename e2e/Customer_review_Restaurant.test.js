// eslint-disable-next-line no-undef
Feature("Add Review Restaurant");

// eslint-disable-next-line no-undef
Scenario("Add Review From Restaurant", async ({ I }) => {
  I.amOnPage("/");
  I.see("Catalog", ".title-catalog");
  I.seeElement(".card .card__content");

  // eslint-disable-next-line no-undef
  const firstRestaurant = locate(".card__content").first();

  I.click(firstRestaurant);

  const reviewName = "budi jo";
  const reviewText = "wah enakk";

  I.seeElement("#reviewName");
  I.fillField("#reviewName", reviewName);

  I.seeElement("#reviewText");
  I.fillField("#reviewText", reviewText);

  I.click('button[type="submit"]');

  I.seeElement(".alert.alert-success");
  I.see("Successfully added review", ".alert.alert-success .text-alert");

  I.click(".alert.alert-success .btn-close");

  I.dontSeeElement(".alert.alert-success");

  I.see(reviewName, ".review_item .review_name");

  I.see(reviewText, ".review_item .review_text");
});

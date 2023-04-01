/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Posting restaurant review', async ({ I }) => {
  const reviewText = 'Awww Keren Restorannya rawrr~';

  I.seeElement('.readMore a');
  I.click(locate('.readMore a').first());

  I.seeElement('.fillReviewRestaurant .writeReview');
  I.fillField('.fillNama', 'This is E2E testing');
  I.fillField('.fillReview', reviewText);
  I.click('.buttonSubmit');

  const lastReview = locate('.review-body').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(reviewText, lastReviewText.trim());
});

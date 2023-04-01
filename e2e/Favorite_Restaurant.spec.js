/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable no-undef */

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty favorite restaurant', ({ I }) => {
  I.seeElement('.contentFavorite');
  I.see('There are no restaurants listed in favorites', '.titleContentEmpty');
});

Scenario('favorite restaurant and unfavorite restaurant', async ({ I }) => {
  I.see('There are no restaurants listed in favorites', '.titleContentEmpty');

  I.amOnPage('/');
  pause();

  I.seeElement('.readMore a');
  I.click(locate('.readMore a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.listItem');

  I.seeElement('.readMore a');
  I.click(locate('.readMore a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.contentFavorite');
  I.see('There are no restaurants listed in favorites', '.titleContentEmpty');
});

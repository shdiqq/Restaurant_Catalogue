/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable no-undef */
Feature('Search Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Searching restaurant with query', async ({ I }) => {
  const querySearch = 'Cafe';

  I.seeElement('.content .searchBar');
  I.click('.content .searchBar input');

  I.fillField('.content .searchBar input', querySearch);
  I.click('.content .searchBar #buttonSearch');

  I.seeElement('.content .listRestaurant .listItem');
});

Scenario('Searching restaurant with query', async ({ I }) => {
  const querySearch = 'Empty';

  I.seeElement('.content .searchBar');
  I.click('.content .searchBar input');

  I.fillField('.content .searchBar input', querySearch);
  I.click('.content .searchBar #buttonSearch');

  I.seeElement('.content .notFound ');
  I.see('Nothing found for search Empty', '.content .notFound .titleContentEmpty');
});

Scenario('Searching restaurant without query', async ({ I }) => {
  I.seeElement('.content .searchBar');
  I.click('.content .searchBar input');

  I.fillField('.content .searchBar input', '');
  I.click('.content .searchBar #buttonSearch');

  I.seeElement('.content .listRestaurant .listItem');
});

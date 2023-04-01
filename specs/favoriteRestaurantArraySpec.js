/* eslint-disable no-return-assign */
/* eslint-disable no-undef */

import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

let favoriteRestaurant = [];

const favoriteRestaurantArray = {

  getFavoriteRestaurant(id) {
    if (!id) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return favoriteRestaurant.find((Restaurant) => Restaurant.id === id);
  },

  getAllFavoriteRestaurants() {
    return favoriteRestaurant;
  },

  putFavoriteRestaurant(Restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!Restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getFavoriteRestaurant(Restaurant.id)) {
      return;
    }

    favoriteRestaurant.push(Restaurant);
  },

  deleteFavoriteRestaurant(id) {
    favoriteRestaurant = favoriteRestaurant.filter((Restaurant) => Restaurant.id !== id);
  },

};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurant = []);

  itActsAsFavoriteRestaurantModel(favoriteRestaurantArray);
});

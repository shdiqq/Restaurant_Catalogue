/* eslint-disable no-undef */

import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/restaurant-db-favorite';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllFavoriteRestaurants()).forEach(async (restaurantData) => {
      await FavoriteRestaurantIdb.deleteFavoriteRestaurant(restaurantData.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});

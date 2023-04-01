/* eslint-disable no-undef */

const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putFavoriteRestaurant({ id: 1 });
    favoriteRestaurant.putFavoriteRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getFavoriteRestaurant(1))
      .toEqual({ id: 1 });
    expect(await favoriteRestaurant.getFavoriteRestaurant(2))
      .toEqual({ id: 2 });
    expect(await favoriteRestaurant.getFavoriteRestaurant(3))
      .toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putFavoriteRestaurant({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAllFavoriteRestaurants())
      .toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurant.putFavoriteRestaurant({ id: 1 });
    favoriteRestaurant.putFavoriteRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getAllFavoriteRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.putFavoriteRestaurant({ id: 1 });
    favoriteRestaurant.putFavoriteRestaurant({ id: 2 });
    favoriteRestaurant.putFavoriteRestaurant({ id: 3 });

    await favoriteRestaurant.deleteFavoriteRestaurant(1);

    expect(await favoriteRestaurant.getAllFavoriteRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.putFavoriteRestaurant({ id: 1 });
    favoriteRestaurant.putFavoriteRestaurant({ id: 2 });
    favoriteRestaurant.putFavoriteRestaurant({ id: 3 });

    await favoriteRestaurant.deleteFavoriteRestaurant(4);

    expect(await favoriteRestaurant.getAllFavoriteRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestaurantModel };

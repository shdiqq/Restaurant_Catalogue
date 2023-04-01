import FavoriteRestaurantIdb from '../../data/restaurant-db-favorite';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
      <section class="content">
        <div class="contentFavorite">
          <h1 class="titleContent">Favorite Restaurant</h1>
          <div class="listEmptyFavoriteRestaurant"></div>
          <div class="listRestaurant"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const menumob = document.querySelector('.menumob');
    const logomob = document.querySelector('.menumob .contentmob .logomob');
    const iconHamburger = document.querySelector('.menumob .contentmob .iconmenu');
    const navdesk = document.querySelector('.navdesk');
    const navitemsdesk = document.querySelectorAll('.navdesk .contentdesk .navlistdesk .navitemsdesk a');
    const logodesk = document.querySelector('.navdesk .contentdesk .logodesk');
    navdesk.classList.add('sticky');
    logodesk.classList.add('sticky');
    menumob.classList.add('sticky');
    iconHamburger.classList.add('sticky');
    logomob.classList.add('sticky');
    for (let i = 0; i < navitemsdesk.length; i += 1) {
      navitemsdesk[i].classList.add('sticky');
    }
    window.onscroll = () => {
      if (window.scrollY >= 0) {
        navdesk.classList.add('sticky');
        logodesk.classList.add('sticky');
        menumob.classList.add('sticky');
        iconHamburger.classList.add('sticky');
        logomob.classList.add('sticky');
        for (let i = 0; i < navitemsdesk.length; i += 1) {
          navitemsdesk[i].classList.add('sticky');
        }
      }
    };

    const restaurants = await FavoriteRestaurantIdb.getAllFavoriteRestaurants();
    if (restaurants.length === 0) {
      const emptyRestaurantContainer = document.querySelector('.listEmptyFavoriteRestaurant');
      const emptyFavorite = `
      <h5 class="titleContentEmpty">There are no restaurants listed in favorites</h5>
    `;
      emptyRestaurantContainer.innerHTML += emptyFavorite;
    } else {
      restaurants.forEach((data) => {
        let listRating = '';
        let listEmptyRating = '';
        const ratingFloor = Math.floor(data.rating);
        for (let i = 0; i < ratingFloor; i += 1) {
          listRating += `
            <div class="fa fa-star checked"></div>
          `;
        }
        for (let i = 0; i < 5 - ratingFloor; i += 1) {
          listEmptyRating += ` 
            <div class="fa fa-star"></div>
          `;
        }
        const restaurantsContainer = document.querySelector('.listRestaurant');
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(
          data,
          listRating,
          listEmptyRating,
        );
      });
    }
  },
};

export default Favorites;

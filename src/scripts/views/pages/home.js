import TheRestaurantDbSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section>
        <div class="hero">
          <div class="heroinner">
            <h1 class="herotitle">Restaurant Catalogue</h1>
            <p class="herosubtitle">Cari dan Temukan Restoran yang Sedang Kamu Cari!</p>
          </div>
        </div>
        <div class="content">
          <h1 class="titleContent">Eksplorasi Restoran</h1>
          <form class="searchBar">
            <input type="text" name"" id="searchRestaurant" placeholder="Pencarian">
            <i class="fa-solid fa-magnifying-glass" id="buttonSearch"></i>
          </form>
          <div class="notFound"> </div>
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
    const logodesk = document.querySelector('.navdesk .contentdesk .logodesk');
    const navitemsdesk = document.querySelectorAll('.navdesk .contentdesk .navlistdesk .navitemsdesk a');
    const heroinner = document.querySelector('.hero .heroinner');

    navdesk.classList.remove('sticky');
    logodesk.classList.remove('sticky');
    menumob.classList.remove('sticky');
    iconHamburger.classList.remove('sticky');
    logomob.classList.remove('sticky');
    heroinner.classList.remove('muncul');
    for (let i = 0; i < navitemsdesk.length; i += 1) {
      navitemsdesk[i].classList.remove('sticky');
    }

    window.onscroll = () => {
      if (window.scrollY > 30) {
        navdesk.classList.add('sticky');
        logodesk.classList.add('sticky');
        menumob.classList.add('sticky');
        iconHamburger.classList.add('sticky');
        logomob.classList.add('sticky');
        heroinner.classList.add('muncul');

        for (let i = 0; i < navitemsdesk.length; i += 1) {
          navitemsdesk[i].classList.add('sticky');
        }
      } else {
        navdesk.classList.remove('sticky');
        logodesk.classList.remove('sticky');
        menumob.classList.remove('sticky');
        iconHamburger.classList.remove('sticky');
        logomob.classList.remove('sticky');
        heroinner.classList.remove('muncul');

        for (let i = 0; i < navitemsdesk.length; i += 1) {
          navitemsdesk[i].classList.remove('sticky');
        }
      }
    };

    let restaurant = await TheRestaurantDbSource.getListRestaurant();
    const notFound = document.querySelector('.notFound');
    const restaurantsContainer = document.querySelector('.listRestaurant');

    restaurant.restaurants.forEach((data) => {
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
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(
        data,
        listRating,
        listEmptyRating,
      );
    });

    const buttonSearch = document.querySelector('#buttonSearch');
    buttonSearch.addEventListener('click', async () => {
      const query = document.getElementById('searchRestaurant').value;
      notFound.innerHTML = '';
      restaurantsContainer.innerHTML = '';
      if (query !== '') {
        restaurant = await TheRestaurantDbSource.getSearch(query);
        if (restaurant.founded === 0) {
          const notFoundMessage = `
            <h5 class="titleContentEmpty">Nothing found for search ${query}</h5>
            `;
          notFound.innerHTML += notFoundMessage;
        } else {
          restaurant.restaurants.forEach((data) => {
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
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(
              data,
              listRating,
              listEmptyRating,
            );
          });
        }
      } else {
        restaurant = await TheRestaurantDbSource.getListRestaurant();
        restaurant.restaurants.forEach((data) => {
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
          restaurantsContainer.innerHTML += createRestaurantItemTemplate(
            data,
            listRating,
            listEmptyRating,
          );
        });
      }
    });
  },
};

export default Home;

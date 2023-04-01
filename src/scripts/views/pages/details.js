import TheRestaurantDbSource from '../../data/restaurant-source';
import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/restaurant-db-favorite';

const Details = {
  async render() {
    return `
      <section id="content" class="content">
        <div class="resaurantDetail">
          <h1 class="titleContent"></h1>
          <div class="detailContent"></div>
          <div id="likeButtonContainer"></div>
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

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    let dataDetail = '';
    let listCategory = '';
    let listMakanan = '';
    let listMinuman = '';
    let listReview = '';
    let listRating = '';
    let listEmptyRating = '';
    const detailRestaurant = await TheRestaurantDbSource.getDetailRestaurant(url.id);
    detailRestaurant.restaurant.categories.forEach((data) => {
      listCategory += `
        <div class="tagCategory">${data.name}</div>
      `;
    });
    detailRestaurant.restaurant.menus.foods.forEach((data) => {
      listMakanan += `
        ${data.name},
      `;
    });
    detailRestaurant.restaurant.menus.drinks.forEach((data) => {
      listMinuman += `
        ${data.name},
      `;
    });
    detailRestaurant.restaurant.customerReviews.forEach((data) => {
      listReview += `
        <div class="reviewCard">
          <p><b>${data.name}</b> - ${data.date}</p>
          <p class="review-body">${data.review}</p>
        </div>
      `;
    });
    const ratingFloor = Math.floor(detailRestaurant.restaurant.rating);
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
    dataDetail += `
      <div class="containerFirst">
        <div class="containerFirstLeft">
          <div class="restaurantImageAndCity">
            <img class="restaurantImage lazyload" loading="lazy" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + detailRestaurant.restaurant.pictureId}" alt="${detailRestaurant.restaurant.name}" title="${detailRestaurant.restaurant.name}">
            <div class="restaurantCity">${detailRestaurant.restaurant.city}</div>
          </div>
          <div class="restaurantRating">
            <span class="rating">${detailRestaurant.restaurant.rating}/5</span>
            ${listRating}
            ${listEmptyRating}
          </div>
        </div>

        <div class="containerFirstRight">
          <div class="restaurantLocation">
            <h3>Alamat</h3>
            <p>${detailRestaurant.restaurant.address}</p>
          </div>
          <div class="restaurantMakanan">
            <h3>Makanan</h3>
            <div>${listMakanan}</div>
          </div>
          <div class="restaurantMinuman">
            <h3>Minuman</h3>
            <div>${listMinuman}</div>
          </div>
          <div class="restaurantCategory">
            <h3>Menu</h3>
            <div class="listCategory">${listCategory}</div>
          </div>
        </div>
      </div>

      <div class="containerSecond">
        <div class="restaurantDescription">
          <h2>Decription</h2>
          <div>${detailRestaurant.restaurant.description}</div>
        </div>
        <div class="restaurantReview">
          <h2>Review</h2>
          <div class="fillReviewRestaurant">
            <p>Isi review kamu disini!</p>
            <div class="writeReview">
              <div class="itemFill">
                <input class="fillNama" type=”text” id=”nama” required="required">
                <span> Nama </span>
              </div>
              <div class="itemFill">
                <input class="fillReview" type=”text” id=”review” required="required">
                <span> Review </span>
              </div>
              <div class="itemFill">
                <button class="buttonSubmit"> Submit </button>
              </div>
            </div>
          </div>
          <div class="aboutReviewRestaurant">
            <p>Apa kata mereka yang sudah pernah berkunjung ke sini?</p>
            <div class="listReview">${listReview}</div>
          </div>
        </div>
      </div>
    `;
    document.querySelector('.titleContent').innerHTML = detailRestaurant.restaurant.name;
    document.querySelector('.detailContent').innerHTML = dataDetail;

    document.querySelector('.buttonSubmit').addEventListener('click', async () => {
      const nama = document.querySelector('.fillNama').value;
      const review = document.querySelector('.fillReview').value;
      await TheRestaurantDbSource.sendReview(url.id, nama, review);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: detailRestaurant.restaurant.id,
        name: detailRestaurant.restaurant.name,
        description: detailRestaurant.restaurant.description,
        rating: detailRestaurant.restaurant.rating,
        pictureId: detailRestaurant.restaurant.pictureId,
        city: detailRestaurant.restaurant.city,
      },
    });
  },
};

export default Details;

import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant, listRating, listEmptyRating) => `
  <div class="listItem">
    <img class="pictureId lazyload" loading="lazy" src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
    <div class="rating">
      <span>${restaurant.rating}/5</span>
      ${listRating}
      ${listEmptyRating}
    </div>
    <div class="city">${restaurant.city}</div>
    <div class="contentDescription">
      <h1 class="name">${restaurant.name}</h1>
      <div class="description">${restaurant.description.slice(0, 150)}...</div>
    </div>
    <div class="readMore">
      <a href="/#/detail/${restaurant.id}" id="btn">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2" id="Layer_2"><path d="M19,26a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L26.59,16l-8.3-8.29a1,1,0,0,1,1.42-1.42l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,19,26Z"/><path d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"/></g><g id="frame"><rect fill="none" height="32" width="32"/></g></svg>
        Read More
      </a>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

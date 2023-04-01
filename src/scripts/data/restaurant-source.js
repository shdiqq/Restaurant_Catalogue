import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async getListRestaurant() {
    const response = await fetch(API_ENDPOINT.GET_LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson;
  }

  static async getDetailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.GET_DETAIL_RESTAURANT(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async getSearch(query) {
    const response = await fetch(API_ENDPOINT.GET_SEARCH(query));
    return response.json();
  }

  static async sendReview(param1, param2, param3) {
    console.log(param1);
    console.log(param2);
    console.log(param3);

    const contentReview = {
      id: param1,
      name: param2,
      review: param3,
    };

    console.log(JSON.stringify(contentReview));

    await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(contentReview),
    })
      .then((response) => {
        console.log(response);
        // eslint-disable-next-line no-alert
        alert('Berhasil mengirim review!');
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default TheRestaurantDbSource;

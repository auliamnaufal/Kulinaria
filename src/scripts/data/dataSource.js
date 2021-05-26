import API_ENDPOINT from '../globals/api-endpoint';

class KulinariaDataSource {
  static async listResto() {
    try {
      const response = await fetch(API_ENDPOINT.CATALOUGE);
      if (response.status !== 200) {
        return response.status;
      }
      return response.json();
    } catch (error) {
      return error;
    }
  }

  static async detailResto(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      if (response.status !== 200) {
        return response.status;
      }
      return response.json();
    } catch (error) {
      return error;
    }
  }

  static async addReview({ id, name, review }) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify({ id, name, review }),
    });
    return response.json();
  }
}

export default KulinariaDataSource;

const BASE_URL = 'https://restaurant-api.dicoding.dev';

const getListRestaurant = async () => {
  try {
    const response = await fetch(`${BASE_URL}/list`);
    const data = await response.json();
    return data.restaurants;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

async function getDetailRestaurant(id) {
  try {
    const response = await fetch(`${BASE_URL}/detail/${id}`);
    const data = await response.json();
    return data.restaurant;
  } catch (error) {
    console.error('Error fetching restaurant details:', error.message);
    throw error;
  }
}

export { getListRestaurant, getDetailRestaurant };

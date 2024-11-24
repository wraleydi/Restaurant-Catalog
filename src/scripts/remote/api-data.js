const BASE_URL = 'https://restaurant-api.dicoding.dev';

const getListRestaurant = async () => {
  try {
    const response = await fetch(`${BASE_URL}/list`);
    const data = await response.json();
    return data.restaurants;
  } catch (error) {
    responseMessage('Gagal memuat, cek internet Anda', error.message);
    console.error('Error:', error.message);
  }
};

async function getDetailRestaurant(id) {
  try {
    console.log(`Fetching restaurant details for ID: ${id}`);
    const response = await fetch(`${BASE_URL}/detail/${id}`);
    const data = await response.json();
    console.log('Response Data:', data);
    return data.restaurant;
  } catch (error) {
    console.error('Error fetching restaurant details:', error.message);
    throw error;
  }
}

export { getListRestaurant, getDetailRestaurant };

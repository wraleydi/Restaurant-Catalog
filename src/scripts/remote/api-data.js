const BASE_URL = 'https://restaurant-api.dicoding.dev';

const getListRestaurant = async () => {
  try {
    const response = await fetch(`${BASE_URL}/list`);
    const data = await response.json();
    return data.restaurants;
  } catch (error) {
    responseMessage('gagal memuat cek internet anda');
  }
};

async function getDetailRestaurant(id) {
  console.log(`Fetching restaurant details for ID: ${id}`);
  const response = await fetch(
    `https://restaurant-api.dicoding.dev/detail/${id}`
  );
  const data = await response.json();
  console.log('Response Data:', data);
  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch restaurant details');
  }
  return data.restaurant;
}

export { getListRestaurant, getDetailRestaurant };

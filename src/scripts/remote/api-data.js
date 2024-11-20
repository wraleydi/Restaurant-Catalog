const BASE_URL = 'https://restaurant-api.dicoding.dev'

const getListRestaurant = async () => {
  try {
    const response = await fetch(`${BASE_URL}/list`)
    return await response.json()
  } catch (error) {
    responseMessage('gagal memuat cek internet anda')
  }
}

export {getListRestaurant}

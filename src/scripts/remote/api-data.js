export const restaurantApi = async () => {
  try {
    const response = await fetch('/data/DATA.json');
    const data = await response.json();
    return data.restaurants;
  } catch (error) {
    console.log('error fetch data', error);
  }
};

const BASE_URL = "https://restaurant-api.dicoding.dev";

const getListRestaurant = async () => {
  try {
    const response = await fetch(`${BASE_URL}/list`);
    const data = await response.json();
    return data.restaurants;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

const getDetailRestaurant = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/detail/${id}`);
    const data = await response.json();
    return data.restaurant;
  } catch (error) {
    console.error("Error fetching restaurant details:", error.message);
    throw error;
  }
};

const addReviewRestaurant = async (newReview) => {
  try {
    const response = await fetch(`${BASE_URL}/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      console.error("Error response:", errorDetails);
      throw new Error(`Failed to submit review: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error submitting review:", error);
    throw error;
  }
};

const getSearchRestaurant = async (query) => {
  try {
    console.log(
      `Request API: ${BASE_URL}/search?q=${encodeURIComponent(query)}`
    );
    const response = await fetch(
      `${BASE_URL}/search?q=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    console.log("Response API:", data); // Debugging
    console.log("Data Restaurants:", data.restaurants);
    return data.restaurants;
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

export {
  getListRestaurant,
  getDetailRestaurant,
  addReviewRestaurant,
  getSearchRestaurant,
};

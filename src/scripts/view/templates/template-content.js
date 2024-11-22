const templateDetail = (restaurant) => {
    const imgApi = `https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`;
    return `
        <h2>${restaurant.name}</h2>
        <img src="${imgApi}" alt="${restaurant.name}">
        <p><strong>City:</strong> ${restaurant.city}</p>
        <p><strong>⭐Rating:</strong> ${restaurant.rating}</p>
    `;
};


export {
    templateDetail,
}
const SearchInitiator = {
    async init({ restaurantsContainer, searchElement }) {
        this._restaurantsContainer = restaurantsContainer;
        this._searchElement = searchElement;
    },
};

export default SearchInitiator;
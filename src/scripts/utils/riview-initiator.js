import { addReviewRestaurant } from '../remote/api-data';

const reviewInitiator = {
  async init({ reviewContainer, form, nameInput, reviewInput }) {
    this._reviewContainer = reviewContainer;
    this._form = form;
    this._nameInput = nameInput;
    this._reviewInput = reviewInput;

    this._addSubmitListener();
  },

  _addSubmitListener() {
    this._form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = this._nameInput.value;
      const review = this._reviewInput.value;

      const restaurantId = this._reviewContainer.dataset.id;

      const newReview = {
        id: restaurantId,
        name: name,
        review: review,
      };

      try {
        const updatedReviews = await addReviewRestaurant(newReview);

        // Menampilkan review terbaru
        const reviewContainer = this._reviewContainer;
        reviewContainer.innerHTML = updatedReviews.customerReviews
          .map((review) => `
            <div class="review">
              <p><strong>${review.name}</strong></p>
              <p>"${review.review}"</p>
            </div>
          `)
          .join('');

        this._form.reset();
        alert('Ulasan berhasil ditambahkan!');
      } catch (error) {
        console.error('Failed to submit review:', error);
        alert('Gagal mengirim ulasan. Coba lagi nanti.');
      }
    });
  }
};

export default reviewInitiator;

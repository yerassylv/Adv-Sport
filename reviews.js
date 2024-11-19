const reviewForm = document.getElementById('review-form');
const reviewsContainer = document.getElementById('reviews-container');

function addReview(name, activity, review, rating) {
  const reviewCard = document.createElement('div');
  reviewCard.classList.add('review-card');
  reviewCard.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Activity:</strong> ${activity}</p>
    <p>${review}</p>
    <p><strong>Rating:</strong> ${'⭐'.repeat(rating)}</p>
  `;
 
  reviewsContainer.appendChild(reviewCard);
}


reviewForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const activity = document.getElementById('activity').value;
  const review = document.getElementById('review').value;
  const rating = parseInt(document.getElementById('rating').value);


  addReview(name, activity, review, rating);


  reviewForm.reset();
});

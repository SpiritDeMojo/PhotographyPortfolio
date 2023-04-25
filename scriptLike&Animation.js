$(document).ready(function () {
  let scrollPosition = 0;
  let scrollSpeed = 0.1; // Adjust the scroll speed for a smoother look

  // Scrolling function for all cards
  function continuousScrolling() {
    const cardRows = document.querySelectorAll('.card-row');
    const cardGroups = document.querySelectorAll('.card-group');
    const cardGroupWidths = Array.from(cardGroups).map(group => group.clientWidth);

    cardRows.forEach((cardRow, index) => {
      scrollPosition -= scrollSpeed;

      if (scrollPosition <= -cardGroupWidths[index]) {
        scrollPosition = 0;
      }

      cardRow.style.transform = `translateX(${scrollPosition}px)`;
    });

    requestAnimationFrame(continuousScrolling);
  }

  // Cloning function for all cards
  function cloneCardGroup() {
    const cardRows = document.querySelectorAll('.card-row');
    const cardGroups = document.querySelectorAll('.card-group');

    cardGroups.forEach((cardGroup, index) => {
      const clonedCardGroup = cardGroup.cloneNode(true);
      cardRows[index].appendChild(clonedCardGroup);
    });
  }

  function pauseScrolling() {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
      card.addEventListener('mouseenter', function () {
        // Pause the animation by setting scrollSpeed to 0
        scrollSpeed = 0;
      });

      card.addEventListener('mouseleave', function () {
        // Resume the animation by resetting scrollSpeed
        scrollSpeed = 0.1;
      });
    });
  }

  // Event delegation for like buttons
  document.querySelector('body').addEventListener('click', function (event) {
    if (event.target.closest('.like-button')) {
      const likeButton = event.target.closest('.like-button');
      const likeCountElement = likeButton.querySelector('.like-count');
      const likeId = likeButton.getAttribute('data-like-id');
      let likeCount = parseInt(likeCountElement.textContent, 10);

      if (localStorage.getItem(likeId)) {
        localStorage.setItem(likeId, 'liked');
        likeCount++;
      } else {

        localStorage.setItem(likeId, 'liked');
        likeCount++;
      }

      likeCountElement.textContent = likeCount;
    }
  });

  // Display the like count for each card
  const likeCountElements = document.querySelectorAll('.like-count');
  likeCountElements.forEach((likeCountElement) => {
    const likeId = likeCountElement.closest('.like-button').getAttribute('data-like-id');
    let likeCount = parseInt(likeCountElement.textContent, 10);

    if (localStorage.getItem(likeId)) {
      likeCount++;
    }

    likeCountElement.textContent = likeCount;
  });

  // Clone the card group and start the animation
  cloneCardGroup();
  requestAnimationFrame(continuousScrolling);
  pauseScrolling();
});

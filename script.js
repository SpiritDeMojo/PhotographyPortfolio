//Capstone Project IV

$(document).ready(function () {
  // Function to get saved images from localStorage
  function getSavedImages() {
    // Get the saved images from localStorage and parse the JSON data
    const savedImages = JSON.parse(localStorage.getItem("savedImages"));
    // Return the parsed data or an empty array if not present
    return savedImages !== null ? savedImages : [];
  }

  // Function to save an image for later
  function saveForLater(src, caption, id) {
    // Get the current saved images from localStorage
    const savedImages = getSavedImages();

    // Create a new object for the image to be saved
    const newSavedImage = {
      src: src,
      caption: caption,
      id: id,
    };

    // Add the new image object to the saved images array
    savedImages.push(newSavedImage);
    // Update the localStorage with the new saved images array
    localStorage.setItem("savedImages", JSON.stringify(savedImages));

    // Get the total number of saved images
    const totalSavedImages = savedImages.length;
    // alert when image is saved also show total saved images count
    alert(`Image saved for later! You have ${totalSavedImages} images saved.`);
  }

  // Expose the saveForLater function globally so that it can be accessed
  // in the HTML file when the save button is clicked
  window.saveForLater = saveForLater;
});
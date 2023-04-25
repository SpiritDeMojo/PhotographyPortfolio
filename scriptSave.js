$(document).ready(function() {
    // Function to get saved images from localStorage
    function getSavedImages() {
        const savedImages = localStorage.getItem("savedImages");
        // Return the parsed JSON data or an empty array if not present
        return savedImages ? JSON.parse(savedImages) : [];
    }

    // Function to delete a saved item by its ID
    function deleteSavedItem(id) {
        const savedImages = getSavedImages();

        const filteredImages = savedImages.filter((image) => image.id !== id);
        localStorage.setItem("savedImages", JSON.stringify(filteredImages));
        displaySavedItems();
    }

    // Function to display the saved items
    function displaySavedItems() {
        const savedItemsContainer = document.getElementById("saved-items");
        savedItemsContainer.innerHTML = "";

        // Get the saved images from localStorage
        const savedImages = getSavedImages();

        savedImages.forEach((item) => {
            savedItemsContainer.innerHTML += `
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="card h-100">
                    <img src="${item.src}" class="card-img-top" alt="${item.caption}" />
                    <div class="card-body">
                      <h4 class="card-title">${item.caption}</h4>
                      <button onclick="deleteSavedItem('${item.id}')" class="btn btn-danger">Delete</button>
                    </div>
                  </div>
                </div>`;
        });
    }

    // Call the function to display the saved items
    displaySavedItems();

    // Expose the deleteSavedItem function globally
    window.deleteSavedItem = deleteSavedItem;
});
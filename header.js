window.onload = function() {
  // Fetch the header content from the header.html file
  fetch('header.html')
    .then(response => response.text())  // Get the content as text
    .then(data => {
      // Insert the header content into the page
      document.getElementById('header-container').innerHTML = data;
    })
    .catch(error => {
      console.error("Error loading header:", error);
    });
};

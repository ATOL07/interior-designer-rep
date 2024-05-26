
document.addEventListener('DOMContentLoaded', function() {

    // Function to update the package details
    function updatePackage(container, isIncrement) {
        const priceElement = container.querySelector('.price');

        const roomsElement = container.querySelector('.rooms');
        const basePrice = parseInt(priceElement.textContent.replace('$', '')) / parseInt(roomsElement.textContent.split(' ')[0]);
  
        // Getting the current room count
        let roomCount = parseInt(roomsElement.textContent.split(' ')[0]);
  
        // Increment or decrement the room count based on the button clicked
        roomCount = isIncrement ? roomCount + 1 : roomCount - 1;
        // Ensure the room count does not go below 1
        if (roomCount < 1) roomCount = 1;
  
        // Calculating the new price 
        const newPrice = basePrice * roomCount;
  
        // Update the price element with the new price
        priceElement.textContent = `$${newPrice}`;
        // Update the rooms element with the new room count
        roomsElement.textContent = `${roomCount} room${roomCount > 1 ? 's' : ''}`;
    }
  
    //  and add event listeners
    document.querySelectorAll('.package').forEach(function(packageElement) {
        // the increment
        packageElement.querySelector('.increment').addEventListener('click', function() {
            updatePackage(packageElement, true); // Update package with increment
        });
  
        //  the decrement button
        packageElement.querySelector('.decrement').addEventListener('click', function() {
            updatePackage(packageElement, false); // Update package with decrement
        });
  

        packageElement.querySelector('.signup-button').addEventListener('click', function() {
            // Getting the room count text from the rooms element
            const roomCountText = packageElement.querySelector('.rooms').textContent;
            //  for displaying the thank you message
            const thanksElement = packageElement.querySelector('.thanksShowing');
            // Update the thank you message
            thanksElement.textContent = `Thank you for choosing ${roomCountText}`;
            // Make the thank you message visible
            thanksElement.style.display = 'block';
            //  sign-up button to indicate it was clicked and the color will change
            this.classList.add('button-clicked');
        });
    });
  });
  
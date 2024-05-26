//
document.addEventListener('DOMContentLoaded', function() {
  function updatePackage(container, isIncrement) {
      const priceElement = container.querySelector('.price');
      const roomsElement = container.querySelector('.rooms');
      const basePrice = parseInt(priceElement.textContent.replace('$', '')) / parseInt(roomsElement.textContent.split(' ')[0]);

      let roomCount = parseInt(roomsElement.textContent.split(' ')[0]);

      roomCount = isIncrement ? roomCount + 1 : roomCount - 1;
      if (roomCount < 1) roomCount = 1; 

      const newPrice = basePrice * roomCount;

      priceElement.textContent = `$${newPrice}`;               
      roomsElement.textContent = `${roomCount} room${roomCount > 1 ? 's' : ''}`;
  }

  
  document.querySelectorAll('.package').forEach(function(packageElement) {
      packageElement.querySelector('.increment').addEventListener('click', function() {
          updatePackage(packageElement, true); 
      });

      packageElement.querySelector('.decrement').addEventListener('click', function() {
          updatePackage(packageElement, false); 
          
          
      });

      
      packageElement.querySelector('.signup-button').addEventListener('click', function() {
          const roomCountText = packageElement.querySelector('.rooms').textContent;
          const thanksElement = packageElement.querySelector('.thanksShowing'); 
          thanksElement.textContent = `Thank you for choosing ${roomCountText}`; 
          thanksElement.style.display = 'block';  
          this.classList.add('button-clicked');  
      });
  });
});



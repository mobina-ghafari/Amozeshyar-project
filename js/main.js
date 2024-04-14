


const menucolor = document.querySelectorAll('.menu-color');

menucolor.forEach(menucolor => {
    menucolor.addEventListener('click', () => {
        menucolor.classList.toggle('my-menu-after-click');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
  
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
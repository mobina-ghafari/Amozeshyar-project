


const menucolor = document.querySelectorAll('.menu-color');

menucolor.forEach(menucolor => {
    menucolor.addEventListener('click', () => {
        menucolor.classList.toggle('my-menu-after-click');
    });
});
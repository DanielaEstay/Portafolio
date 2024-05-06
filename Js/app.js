const gris = document.querySelector(".gris");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu(){
    menubar.classlist.toggleMenu("menu_opened");
}

openMenuBtn.addEventListener("click, toggleMenu");
closeMenuBtn.addEventListener("click, toggleMenu");

//form

$( '.js-input' ).keyup(function() {
    if( $(this).val() ) {
        $(this).addClass('not-empty');
    } else {
        $(this).removeClass('not-empty');
    }
});
/* function for toggle switch in menu bar for small devices */

document.getElementById('menu_icon').onclick = function () {
    this.classList.toggle('opened');
    this.setAttribute('aria-expanded', this.classList.contains('opened'));

    var side_menu_bar = document.getElementById('side_menu_bar');
    side_menu_bar.classList.toggle('aside_open');
    side_menu_bar.classList.toggle('aside_close');
}

//animation onscroll for elements
window.onscroll = function (e) {
        var header = document.getElementsByTagName('header')[0];
        if (window.scrollY !== 0 ){
             header.style.background = " var(--secondary_bg)";
             header.style.boxShadow = ' 0px 8px 18px -6px rgba(82, 82, 83, 0.12), 0px 12px 42px -4px rgba(59, 60, 61, 0.12)';
            }
        else{
            header.style.background = "transparent";
            header.style.boxShadow = ' none';

        }
   }
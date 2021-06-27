document.getElementById('menu_icon').onclick = function () {
    this.classList.toggle('opened');
    this.setAttribute('aria-expanded', this.classList.contains('opened'));

    var side_menu_bar = document.getElementById('side_menu_bar');
    side_menu_bar.classList.toggle('aside_open');
    side_menu_bar.classList.toggle('aside_close');
}
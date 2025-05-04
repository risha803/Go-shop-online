const btmMenu = $('.header__btn-menu');
const btnClose = $('.header__btn-menu-close');
const modalMenu = $('.modal-menu');
const overlay = $('.overlay');

const modalBtn = $('.header__button');
const modalWindow = $('.modal');
const closeWindow = $('.modal__btn-close');

$(document).ready(function() {
  const btmMenu = $('.header__btn-menu');
  const modalMenu = $('.modal-menu');

  btmMenu.click(function(event) {
    event.preventDefault();

    if (modalMenu.is(':visible')) {
      modalMenu.hide(300);
      $(this).removeClass('header__btn-menu-close');
    } else {
      modalMenu.show(300);
      $(this).addClass('header__btn-menu-close');
    }
  });

  $(document).click(function(event) {
    if (!$(event.target).closest(modalMenu).length && !$(event.target).is(btmMenu)) {
      modalMenu.hide(300);
      btmMenu.removeClass('header__btn-menu-close');
    }
  });
});

modalBtn.click(function() {
  overlay.show();
  modalWindow.show();
});

$(document).mousedown(function(e) {
  if (!modalWindow.is(e.target) && modalWindow.has(e.target).length === 0) {
    overlay.hide();
    modalWindow.hide();
  }
});

closeWindow.click(function() {
  overlay.hide();
  modalWindow.hide(300);
});
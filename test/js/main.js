const burger = document.querySelector('.burger'),
  menu = document.querySelector('.header__nav'),
  close = document.querySelector('.close');

burger.addEventListener('click', () => {
  menu.classList.remove('close');
  menu.classList.add('open');
})
close.addEventListener('click', () => {
  menu.classList.add('close');
})

const promoBtn = document.querySelector('.promo-item'),
  promoItem = document.querySelector('.promo-help');

promoBtn.addEventListener('mouseover', () => {
  promoItem.classList.add('active-d')
})

promoBtn.addEventListener('mouseleave', () => {
  promoItem.classList.remove('active-d')
})


promoBtn.addEventListener('click', () => {
  promoItem.classList.toggle('active')
})

const modal = document.querySelector('.modal'),
  overlay = document.querySelector('.overlay'),
  closeModal = document.querySelector('.close__modal'),
  headerBtn = document.querySelector('.header__btn'),
  mainBtn = document.querySelector('.main__btn'),
  modalBtn = document.querySelector('.modal__btn'),
  modalOk = document.querySelector('.modal__ok'),
  closeModalOk = document.querySelector('.close__modal-ok');

headerBtn.addEventListener('click', () => {
  event.preventDefault()
  modal.classList.add('active-modal');
  overlay.style.visibility = 'visible';
})
mainBtn.addEventListener('click', () => {
  event.preventDefault()
  modal.classList.add('active-modal');
  overlay.style.visibility = 'visible';
})
closeModal.addEventListener('click', () => {
  event.preventDefault()
  modal.classList.remove('active-modal');
  overlay.style.visibility = 'hidden';
})
modalBtn.addEventListener('click', () => {
  event.preventDefault()
  modalOk.classList.add('active-ok')
  modal.classList.remove('active-modal')
})
closeModalOk.addEventListener('click', () => {
  event.preventDefault()
  modalOk.classList.remove('active-ok');
  overlay.style.visibility = 'hidden';
})
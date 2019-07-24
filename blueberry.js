const contact = document.querySelector('.contact');
const contactForm = document.querySelector('.contact-form');
const exit = document.querySelector('.exit');

contact.addEventListener('click', (event) => {
  if ( event.target.tagName === 'BUTTON' ) {
    contactForm.style.display = 'block';
  }
});

exit.addEventListener('click', (event) => {
  contactForm.style.display = 'none';
});

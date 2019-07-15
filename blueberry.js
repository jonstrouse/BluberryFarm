const contact = document.querySelector('.contact');
const contactForm = document.querySelector('.contact-form');

contactForm.style.display = 'none';

contact.addEventListener('click', (event) => {
  contactForm.style.display = 'initial';
  console.log(event);

});

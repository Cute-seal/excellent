document.addEventListener('DOMContentLoaded', function() {
    const bookButton = document.querySelector('.btn-book');

    bookButton.addEventListener('click', function() {
        alert('Функционал бронирования в разработке.');
    });
    const reviewButton = document.querySelector('.btn-review');
    reviewButton.addEventListener('click', function() {
         alert('Функционал написания отзыва в разработке.');
    });
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
         alert('Ваше сообщение отправлено!');
        contactForm.reset()
    });
});
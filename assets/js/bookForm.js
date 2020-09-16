// Contactform for booking in book.html

window.onload = function bookForm() {
  document
    .getElementById("book-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("gmail", "template_LSdUcTdf", this);
      document.getElementById("book-form").reset();
      alert("Ditt meddelande har skickats!");
    });
};


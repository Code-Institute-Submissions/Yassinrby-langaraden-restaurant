emailjs.sendForm('gmail', 'template_LSdUcTdf', '#book-form')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
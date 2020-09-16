// Contactforms in index.html and contact.html

window.onload = function() {
	document.getElementById('myForm').addEventListener('submit', function(event) {
		event.preventDefault();
		// generate the contact number value
		emailjs.sendForm('gmail', 'kontakt', this);
		document.getElementById('myForm').reset();
		alert('Ditt meddelande har skickats!');
	});

};
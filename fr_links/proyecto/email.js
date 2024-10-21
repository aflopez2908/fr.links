// Asegúrate de reemplazar 'YOUR_USER_ID' con tu User ID de EmailJS
emailjs.init('q2cFmtW1VRV-aAfII');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    emailjs.sendForm('service_1ew9brn', 'mitemplate', this)
        .then(function() {
            alert('Mensaje enviado con éxito!');
        }, function(error) {
            alert('Error al enviar el mensaje: ' + JSON.stringify(error));
        });
});

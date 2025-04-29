import emailjs from 'emailjs-com';
import { useRef } from 'react';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_odmyaif',       // <-- pon aquí tu Service ID
      'template_4jwijnt',      // <-- pon aquí tu Template ID
      form.current,
      'alPjfTZtD8yKZdOsI'        // <-- pon aquí tu Public Key
    ).then(
      (result) => {
        alert("Mensaje enviado correctamente 👌");
        console.log(result.text);
        form.current.reset();
      },
      (error) => {
        alert("Error al enviar mensaje 😓");
        console.log(error.text);
      }
    );
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Contacto</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-8 max-w-lg mx-auto space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Tu nombre"
            className="w-full p-4 border rounded-lg"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Tu correo electrónico"
            className="w-full p-4 border rounded-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            className="w-full p-4 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

  
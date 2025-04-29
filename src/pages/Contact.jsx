import emailjs from 'emailjs-com';
import { useRef } from 'react';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_odmyaif',
      'template_4jwijnt',
      form.current,
      'alPjfTZtD8yKZdOsI'
    ).then(
      () => {
        alert("Mensaje enviado correctamente 👌");
        form.current.reset();
      },
      () => {
        alert("Error al enviar mensaje 😓");
      }
    );
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Contáctame
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="user_name" className="block mb-2 text-gray-700 font-medium">
              Nombre
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre completo"
            />
          </div>
          <div>
            <label htmlFor="user_email" className="block mb-2 text-gray-700 font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tucorreo@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 block mx-auto"
          >
            Enviar
          </button>
        </form>

        {/* Botón de WhatsApp */}
        <div className="mt-6 text-center">
          <a
            href="https://wa.me/51999999999?text=Hola%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300"
          >
            📱 Contactar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
function About() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagen (puedes reemplazar la URL luego) */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/300" // reemplaza esto por tu foto luego
            alt="Perfil"
            className="rounded-full shadow-lg w-64 h-64 object-cover"
          />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Sobre mí
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Soy un desarrollador web apasionado por crear soluciones digitales.
            Me encanta aprender nuevas tecnologías y aplicar mi conocimiento para
            ayudar a las empresas a mejorar su presencia en línea. Me considero
            una persona creativa, autodidacta y siempre busco desafíos que me
            permitan crecer profesionalmente.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

  
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Asegúrate de tener instalado lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-900">
          BrownDevs
        </Link>

        {/* Menú en pantallas grandes (desktop) */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Inicio</Link>
          <Link to="/projects" className="text-gray-600 hover:text-blue-600 transition">Proyectos</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">Sobre mí</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">Contacto</Link>
        </div>

        {/* Botón del menú hamburguesa SOLO para móviles */}
        <div className="md:hidden relative">
          <button
            className="text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menú desplegable en móviles */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-50">
              <Link to="/" className="block px-4 py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Inicio</Link>
              <Link to="/projects" className="block px-4 py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Proyectos</Link>
              <Link to="/about" className="block px-4 py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Sobre mí</Link>
              <Link to="/contact" className="block px-4 py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contacto</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
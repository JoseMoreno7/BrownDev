import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-900">
          José Moreno
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
            Inicio
          </Link>
          <Link to="/projects" className="text-gray-600 hover:text-blue-600 transition">
            Proyectos
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">
            Sobre mí
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}
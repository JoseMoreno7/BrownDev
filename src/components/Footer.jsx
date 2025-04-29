export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} José Moreno. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href="#" className="hover:text-blue-400 transition">GitHub</a>
          <a href="#" className="hover:text-blue-400 transition">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
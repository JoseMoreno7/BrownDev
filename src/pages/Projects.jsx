import { useEffect, useState } from 'react';

function Projects() {
  const [repos, setRepos] = useState([]);
  const GITHUB_USERNAME = 'JoseMoreno7'; // Reemplaza con tu usuario de GitHub

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then(response => response.json())
      .then(data => {
        const filtered = data.filter(repo => !repo.fork); // Opcional: omitir forks
        setRepos(filtered);
      })
      .catch(error => console.error('Error al obtener los repos:', error));
  }, []);

  return (
    <section className="min-h-screen bg-white py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800">Mis Proyectos</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {repos.map(repo => (
            <div
              key={repo.id}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{repo.name}</h3>
              <p className="text-gray-600 mt-2 text-sm">
                {repo.description || 'Sin descripción'}
              </p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                Ver en GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

// src/pages/Projects.jsx
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <section className="min-h-screen bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Mis Proyectos</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ProjectCard
            title="Proyecto 1"
            description="Una breve descripción de tu primer proyecto."
            link="#"
          />
          <ProjectCard
            title="Proyecto 2"
            description="Una breve descripción de tu segundo proyecto."
            link="#"
          />
          <ProjectCard
            title="Proyecto 3"
            description="Una breve descripción de tu tercer proyecto."
            link="#"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;

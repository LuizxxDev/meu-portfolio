import React from 'react';
import { PROJECTS_DATA } from '../utils/constants'; // Importando a lista

const Projects = () => {
  return (
    <section id="projetos" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
          <i className="fa-solid fa-laptop-code text-purple-400"></i> Meus Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Percorrendo a lista de utilitários */}
          {PROJECTS_DATA.map((project, index) => (
            <div key={index} className="bg-black rounded-2xl overflow-hidden border border-neutral-800 group hover:border-purple-500/50 transition-colors duration-300">
              <div className="relative h-48 overflow-hidden bg-neutral-900 flex items-center justify-center">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-purple-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.github} className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"><i className="fa-brands fa-github"></i></a>
                  <a href={project.link} className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"><i className="fa-solid fa-external-link-alt"></i></a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-neutral-900 rounded-md text-purple-400 border border-purple-900/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
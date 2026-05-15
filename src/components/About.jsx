import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-20 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-dark-surface/30 to-transparent -z-10"></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 border-4 border-brand-DEFAULT rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img src="https://placehold.co/400x400/1a1a24/a855f7?text=Sua+Foto" alt="Minha Foto" className="relative z-10 rounded-2xl object-cover w-full h-full shadow-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
              <i className="fa-regular fa-user text-brand-light"></i> Sobre Mim
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Sou um profissional apaixonado por tecnologia com experiência em desenvolvimento web. Adoro transformar ideias complexas em interfaces simples, intuitivas e bonitas. Minha jornada na programação começou quando percebi o poder de criar soluções que impactam a vida das pessoas através do código.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Quando não estou codificando, gosto de estudar novas tecnologias, contribuir para projetos acadêmicos e explorar o mundo do design UI/UX para melhorar minhas habilidades de front-end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
  Olá, eu sou <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-600">Luiz Felipe</span>
</h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Técnico em Informática e estudante de Engenharia de Controle e Automação no IFPA.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projetos" className="px-8 py-3 bg-brand-DEFAULT hover:bg-brand-light text-white font-semibold rounded-full transition-all duration-300 glow-effect flex items-center justify-center gap-2">
            Ver Projetos <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#contato" className="px-8 py-3 bg-transparent border-2 border-brand-DEFAULT hover:bg-brand-DEFAULT/20 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2">
            Contato <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
        
        <div className="mt-12 flex justify-center gap-6">
          <a href="https://github.com/LuizxxDev" className="text-gray-400 hover:text-brand-light text-2xl transition-colors"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/luiz-felipe-batista-rodrigues-925469254/" className="text-gray-400 hover:text-brand-light text-2xl transition-colors"><i className="fa-brands fa-linkedin"></i></a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
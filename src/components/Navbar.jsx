import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="text-2xl font-bold text-white flex items-center gap-2 group">
          <span className="text-brand-light group-hover:animate-pulse"><i className="fa-solid fa-code"></i></span>
          LF<span className="text-brand-light">Portfólio</span>
        </a>
        
        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-gray-300 hover:text-brand-light transition-colors duration-300">Início</a>
          <a href="#sobre" className="text-gray-300 hover:text-brand-light transition-colors duration-300">Sobre</a>
          <a href="#habilidades" className="text-gray-300 hover:text-brand-light transition-colors duration-300">Habilidades</a>
          <a href="#projetos" className="text-gray-300 hover:text-brand-light transition-colors duration-300">Projetos</a>
          <a href="#contato" className="text-gray-300 hover:text-brand-light transition-colors duration-300">Contato</a>
        </nav>

        {/* Botão Menu Mobile */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Menu Mobile (Condicional) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-surface border-b border-dark-border">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-brand-light transition-colors">Início</a>
            <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-brand-light transition-colors">Sobre</a>
            <a href="#habilidades" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-brand-light transition-colors">Habilidades</a>
            <a href="#projetos" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-brand-light transition-colors">Projetos</a>
            <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-brand-light transition-colors">Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
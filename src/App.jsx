import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/index.css';

import {LINKS} from '../src/utils/constants'

function App() {
  return (
      <div className="bg-black text-gray-100 antialiased font-sans flex flex-col min-h-screen relative overflow-x-hidden">
      
      <div className="fixed inset-0 z-[-2] w-full h-full bg-black"></div>
      <div className="fixed inset-0 z-[-1] w-full h-full bg-grid-pattern"></div>

      <div className="fixed top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-purple-800/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <Navbar />
      
      <main className="grow pt-20 relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-neutral-900 border-t border-neutral-800 py-8 mt-auto z-10 relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Luiz Felipe. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            {/* github */}
            <a href={LINKS.github} className="text-gray-500 hover:text-purple-400 transition-colors"><i className="fa-brands fa-github"></i></a> 
            {/* linkedin */}
            <a href={LINKS.linkedin} className="text-gray-500 hover:text-purple-400 transition-colors"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
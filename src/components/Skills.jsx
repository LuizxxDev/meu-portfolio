import React from 'react';

const Skills = () => {
  return (
    <section id="habilidades" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
          <i className="fa-solid fa-layer-group text-brand-light"></i> Minhas Habilidades
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {/* Habilidade 1 */}
          <div className="bg-dark-surface p-6 rounded-xl border border-dark-border hover:border-brand-DEFAULT transition-colors duration-300 group">
            <i className="fa-brands fa-html5 text-5xl text-gray-500 group-hover:text-[#E34F26] mb-4 transition-colors"></i>
            <h3 className="font-semibold text-lg">HTML5</h3>
          </div>
          {/* Habilidade 2 */}
          <div className="bg-dark-surface p-6 rounded-xl border border-dark-border hover:border-brand-DEFAULT transition-colors duration-300 group">
            <i className="fa-brands fa-css3-alt text-5xl text-gray-500 group-hover:text-[#1572B6] mb-4 transition-colors"></i>
            <h3 className="font-semibold text-lg">CSS3 / Tailwind</h3>
          </div>
          {/* Habilidade 3 */}
          <div className="bg-dark-surface p-6 rounded-xl border border-dark-border hover:border-brand-DEFAULT transition-colors duration-300 group">
            <i className="fa-brands fa-js text-5xl text-gray-500 group-hover:text-[#F7DF1E] mb-4 transition-colors"></i>
            <h3 className="font-semibold text-lg">JavaScript</h3>
          </div>
          {/* Habilidade 4 */}
          <div className="bg-dark-surface p-6 rounded-xl border border-dark-border hover:border-brand-DEFAULT transition-colors duration-300 group">
            <i className="fa-brands fa-java text-5xl text-gray-500 group-hover:text-[#f0380a] mb-4 transition-colors"></i>
            <h3 className="font-semibold text-lg">Java</h3>
          </div>
          {/* Habilidade 5 */}
          <div className="bg-dark-surface p-6 rounded-xl border border-dark-border hover:border-brand-DEFAULT transition-colors duration-300 group">
            <i className="fa-brands fa-node-js text-5xl text-gray-500 group-hover:text-[#339933] mb-4 transition-colors"></i>
            <h3 className="font-semibold text-lg">Node.js</h3>
          </div>
          {/* Habilidade 6 */}
          <div className="bg-dark-surface p-6 rounded-xl border border-dark-border hover:border-brand-DEFAULT transition-colors duration-300 group">
            <i className="fa-solid fa-database text-5xl text-gray-500 group-hover:text-brand-light mb-4 transition-colors"></i>
            <h3 className="font-semibold text-lg">SQL</h3>
          </div>
          {/* Habilidade 7 */}
          <div className="bg-dark-surface p-6 rounded-xl border border-dark-border hover:border-brand-DEFAULT transition-colors duration-300 group">
            <i className="fa-brands fa-git-alt text-5xl text-gray-500 group-hover:text-[#F05032] mb-4 transition-colors"></i>
            <h3 className="font-semibold text-lg">Git / GitHub</h3>
          </div>
          {/* Habilidade 8 */}
          <div className="bg-dark-surface p-6 rounded-xl border border-dark-border hover:border-brand-DEFAULT transition-colors duration-300 group">
            <i className="fa-solid fa-pen-nib text-5xl text-gray-500 group-hover:text-pink-500 mb-4 transition-colors"></i>
            <h3 className="font-semibold text-lg">UI/UX Design</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded transition-all duration-300 font-medium inline-flex items-center justify-center";
  
  const variants = {
    // Roxo vibrante com sombra brilhante (glow)
    primary: "bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-500/30 font-bold",
    // Borda roxa
    outline: "border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 font-mono",
    // Sem fundo
    ghost: "text-slate-300 hover:text-white hover:bg-slate-800"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
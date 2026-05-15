import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // Estados: idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulando o tempo de envio de um e-mail
    setTimeout(() => {
      setStatus('success');
      e.target.reset(); // Limpa o formulário
      
      // Tira a notificação da tela após 3 segundos
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contato" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
          <i className="fa-regular fa-paper-plane text-purple-400"></i> Vamos Conversar?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-2xl">
          
          {/* Coluna da Esquerda: Informações */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
            <p className="text-gray-400 mb-8">Sinta-se à vontade para entrar em contato comigo para oportunidades de trabalho, colaborações ou apenas para trocar uma ideia!</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-purple-400 border border-neutral-800">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="text-white font-medium">Localização</h4>
                  <p className="text-gray-400 text-sm">Ananindeua - PA, Brasil</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-purple-400 border border-neutral-800">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400 text-sm">luizfelipe.ifpa.2022@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Seu Nome</label>
              <input type="text" id="name" required className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" placeholder="João Silva" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Seu Email</label>
              <input type="email" id="email" required className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" placeholder="joao@exemplo.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Mensagem</label>
              <textarea id="message" rows="4" required className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none" placeholder="Como posso ajudar?"></textarea>
            </div>
            <button type="submit" disabled={status === 'sending'} className="w-full bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex justify-center items-center gap-2">
              {status === 'sending' ? (
                <><i className="fa-solid fa-circle-notch fa-spin"></i> Enviando...</>
              ) : (
                <>Enviar Mensagem <i className="fa-solid fa-paper-plane"></i></>
              )}
            </button>
          </form>
        </div>
      </div>
      
      {/* Notificação (Toast) que aparece quando o email é enviado */}
      {status === 'success' && (
        <div className="fixed bottom-5 right-5 z-50 animate-bounce px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 text-white font-medium border-l-4 bg-neutral-900 border-purple-500">
          <i className="fa-solid fa-check-circle text-purple-400"></i>
          <span>Mensagem enviada com sucesso!</span>
        </div>
      )}
    </section>
  );
};

export default Contact;
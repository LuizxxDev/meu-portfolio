# 👨‍💻 Portfólio Pessoal | Luiz Felipe

![Preview do Portfólio]()

Um portfólio moderno, responsivo e de alta performance construído para apresentar minha trajetória na Engenharia de Controle e Automação e no Desenvolvimento Web. O design segue uma estética "Dark Premium", utilizando fundos escuros absolutos com efeitos de brilho (glow) em roxo.

---

## ✨ Funcionalidades

- **Design Responsivo:** Adaptado para funcionar perfeitamente em dispositivos móveis, tablets e desktops.
- **Tema Dark Premium:** Interface elegante com uso avançado de Tailwind CSS (gradientes, glassmorphism e animações suaves).
- **Single Page Application (SPA):** Navegação fluida entre seções sem recarregamento da página.
- **Seção de Projetos Dinâmica:** Cards interativos para exibir projetos como *IFPA Academics*.
- **Formulário de Contato:** Simulação de envio com feedback visual em tempo real (Toast Notifications).
- **Dados Centralizados:** Uso de constantes (`utils/constants.js`) para fácil manutenção de links e conteúdos.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **[React](https://reactjs.org/)** - Biblioteca JavaScript para construção de interfaces de usuário.
- **[Vite](https://vitejs.dev/)** - Ferramenta de build extremamente rápida para projetos web modernos.
- **[Tailwind CSS (v4)](https://tailwindcss.com/)** - Framework CSS Utility-first para estilização rápida e customizável.
- **[FontAwesome](https://fontawesome.com/)** - Biblioteca de ícones.

---

## 📁 Estrutura do Projeto

A arquitetura foi pensada para ser escalável e de fácil manutenção:

```text
src/
├── assets/          # Imagens, SVGs e arquivos estáticos
├── components/      # Componentes React reutilizáveis
│   ├── ui/          # Componentes de interface base (Button, Card)
│   ├── About.jsx    # Seção Sobre Mim
│   ├── Contact.jsx  # Formulário de Contato
│   ├── Hero.jsx     # Seção principal/Apresentação
│   ├── Navbar.jsx   # Barra de navegação responsiva
│   ├── Projects.jsx # Vitrine de projetos
│   └── Skills.jsx   # Grade de habilidades
├── styles/          # Estilos globais e configurações do Tailwind
│   └── index.css
├── utils/           # Funções utilitárias e dados constantes
│   └── constants.js # Central de links e dados dos projetos
├── App.jsx          # Componente raiz que une as seções
└── main.jsx         # Ponto de entrada da aplicação
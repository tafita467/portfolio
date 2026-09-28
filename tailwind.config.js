/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // 1. On désactive le reset CSS automatique de Tailwind
  corePlugins: {
    preflight: false,
  },
  // 2. On ajoute le plugin daisyUI à la liste
  plugins: [
    require("daisyui")
  ],
  // 3. On configure daisyUI pour couper ses styles de base et ses thèmes
  daisyui: {
    base: false,    // Désactive les styles globaux sur les balises comme <body>, <html>, <a>
    themes: false,  // Désactive les thèmes de couleurs par défaut (light/dark)
    styled: true,   // Garde à 'true' pour que les classes de composants (ex: btn, card) fonctionnent encore
  },
}
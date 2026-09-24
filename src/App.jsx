import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import Contact from './pages/Contact'
import Footer from './pages/footer' 
import './styles/css/global.css'

function App() {
  return (
    <Router>
      {/* 💡 Remplacement de bg-gray-50 et text-gray-800 par les classes de thème DaisyUI */}
      {/* Optionnel : Ajoute data-theme="cupcake" ici si tu veux forcer cupcake partout */}
      <div className="flex flex-col min-h-screen bg-base-200 text-base-content">
        
        {/* 🧭 BARRE DE NAVIGATION (Utilise bg-base-100 au lieu de bg-white) */}
        <header className="navbar flex justify-between items-center px-10 py-5 bg-base-100 shadow-sm">
          <div className="text-2xl font-bold text-primary">⚡ TFT Project</div>
          <nav className="flex gap-6">
            <Link to="/" className="font-medium hover:text-primary transition duration-200">Accueil</Link>
            <Link to="/apropos" className="font-medium hover:text-primary transition duration-200">À Propos</Link>
            <Link to="/contact" className="font-medium hover:text-primary transition duration-200">Contact</Link>
          </nav>
        </header>

        {/* 📦 CONTENU PRINCIPAL (Utilise bg-base-100 pour la carte) */}
        <main className="">
          <div className="content">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/apropos" element={<Apropos />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        <Footer/> 
      </div>
    </Router>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import Contact from './pages/Contact'
import Footer from './pages/footer' // 👈 1. ON IMPORTE LE NOUVEAU COMPOSANT
import './styles/css/global.css'
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        
        {/* 🧭 BARRE DE NAVIGATION */}
        <header className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
          <div className="text-2xl font-bold text-indigo-600">⚡ TFT Project</div>
          <nav className="flex gap-6">
            <Link to="/" className="font-medium text-gray-600 hover:text-indigo-600 transition duration-200">Accueil</Link>
            <Link to="/apropos" className="font-medium text-gray-600 hover:text-indigo-600 transition duration-200">À Propos</Link>
            <Link to="/contact" className="font-medium text-gray-600 hover:text-indigo-600 transition duration-200">Contact</Link>
          </nav>
        </header>

        {/* 📦 ZONE DE CONTENU DYNAMIQUE */}
        <main className="flex-1 flex justify-center items-center p-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/apropos" element={<Apropos />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        {/* 👣 PIED DE PAGE PERSONNALISÉ */}
        <Footer /> {/* 👈 2. ON REMPLACE L'ANCIEN FOOTER PAR NOTRE COMPOSANT */}

      </div>
    </Router>
  )
}

export default App
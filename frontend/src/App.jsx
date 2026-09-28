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



        <main className="">
          <div className="content">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/apropos" element={<Apropos />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

      </div>
    </Router>
  )
}

export default App

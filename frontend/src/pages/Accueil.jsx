import { Link } from 'react-router-dom'

export default function Accueil() {
  return (
    <> 
    
      <div className="p-10 text-center">
        {/* text-4xl = très gros texte, font-bold = gras, text-indigo-600 = couleur indigo, mb-4 = marge en bas */}
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">⚡ Accueil</h1>
        <p className="text-gray-600 text-lg mb-6">
          Bienvenue sur la page principale de mon application Fullstack stylisée avec Tailwind !
        </p>
        
        <Link 
          to="/apropos" 
          className="btn w-64 rounded-full"
        >
          En savoir plus sur nous
        </Link>
      </div>

      <div className="fab flex flex-col items-center gap-2 mt-10">
        {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
        <div tabIndex={0} role="button" className="btn btn-lg btn-circle btn-primary">F</div>

        {/* Main Action button replaces the original button when FAB is open */}
        <div className="fab-main-action">
          Main Action <button className="btn btn-circle btn-secondary btn-lg">M</button>
        </div>

        {/* buttons that show up when FAB is open */}
        <div>Label A <button className="btn btn-lg btn-circle">A</button></div>
        <div>Label B <button className="btn btn-lg btn-circle">B</button></div>
        <div>Label C <button className="btn btn-lg btn-circle">C</button></div>
      </div>

    </>
  )
}
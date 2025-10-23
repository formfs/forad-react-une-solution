import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './composants/Navbar';
import Accueil from './pages/Accueil';
import Produits from './pages/Produits';
import Categories from './pages/Categories';
import CategorieDetail from './pages/CategorieDetail';
import Contact from './pages/Contact';
import data from './produits.json';
import './App.css';

function App() {
  const hasData = data && data.products && data.products.length > 0 && data.categories && data.categories.length > 0;

  if (!hasData) {
    return (
      <div className="App">
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h1>Erreur de chargement</h1>
          <p>Le fichier produits.json est introuvable ou vide.</p>
          <p>Vérifiez que le fichier existe dans le dossier src/</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/produits" element={<Produits />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categorie/:categoryId" element={<CategorieDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

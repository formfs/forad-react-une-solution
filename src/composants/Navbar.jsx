import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🛍️</span>
          <span className="logo-text">LaBoutique</span>
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link 
              to="/produits" 
              className={location.pathname === '/produits' ? 'active' : ''}
            >
              Produits
            </Link>
          </li>
          <li>
            <Link 
              to="/categories" 
              className={location.pathname === '/categories' ? 'active' : ''}
            >
              Catégories
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

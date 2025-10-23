import { useState } from 'react';
import ProductCard from '../composants/ProductCard';
import data from '../produits.json';
import './Produits.css';

function Produits() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = data.products.filter(product => {
    const search = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(search) ||
      product.brand.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search) ||
      product.price.toString().includes(search)
    );
  });

  return (
    <div className="produits-page">
      <h1>Nos Produits</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher un produit par nom, marque, description ou prix..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>

      <p className="results-count">
        {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
      </p>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-results">
          <p>Aucun produit ne correspond à votre recherche.</p>
        </div>
      )}
    </div>
  );
}

export default Produits;

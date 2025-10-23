import { useParams, Link } from 'react-router-dom';
import ProductCard from '../composants/ProductCard';
import data from '../produits.json';
import './CategorieDetail.css';

function CategorieDetail() {
  const { categoryId } = useParams();
  
  const category = data.categories.find(c => c.id === categoryId);
  const categoryProducts = data.products.filter(p => p.category === categoryId);

  if (!category) {
    return (
      <div className="category-not-found">
        <h1>Catégorie introuvable</h1>
        <Link to="/categories" className="back-link">← Retour aux catégories</Link>
      </div>
    );
  }

  return (
    <div className="category-detail-page">
      <div className="category-header">
        <Link to="/categories" className="back-link">← Retour aux catégories</Link>
        <h1>{category.name}</h1>
        <p className="products-count">
          {categoryProducts.length} produit{categoryProducts.length > 1 ? 's' : ''} disponible{categoryProducts.length > 1 ? 's' : ''}
        </p>
      </div>

      <div className="products-grid">
        {categoryProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {categoryProducts.length === 0 && (
        <div className="no-products">
          <p>Aucun produit dans cette catégorie pour le moment.</p>
        </div>
      )}
    </div>
  );
}

export default CategorieDetail;

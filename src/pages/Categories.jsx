import { Link } from 'react-router-dom';
import data from '../produits.json';
import './Categories.css';

function Categories() {
  const getCategoryProductCount = (categoryId) => {
    return data.products.filter(p => p.category === categoryId).length;
  };

  return (
    <div className="categories-page">
      <h1>Nos Catégories</h1>
      <p className="categories-subtitle">Explorez nos différentes gammes de produits</p>
      
      <div className="categories-grid">
        {data.categories.map(category => {
          const productCount = getCategoryProductCount(category.id);
          
          return (
            <Link 
              to={`/categorie/${category.id}`} 
              key={category.id}
              className="category-card"
            >
              <div className="category-icon">
                {category.id === 'electronics' && '💻'}
                {category.id === 'home' && '🏠'}
                {category.id === 'sports' && '⚽'}
              </div>
              <h2 className="category-name">{category.name}</h2>
              <p className="category-count">
                {productCount} produit{productCount > 1 ? 's' : ''}
              </p>
              <div className="category-arrow">→</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;

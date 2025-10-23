import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-brand">{product.brand}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">{product.price.toFixed(2)} €</span>
          <span className="product-rating">⭐ {product.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

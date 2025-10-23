import './Accueil.css';

function Accueil() {
  return (
    <div className="accueil">
      <div className="hero-section">
        <h1>Bienvenue chez LaBoutique</h1>
        <p className="hero-subtitle">Votre destination shopping en ligne</p>
      </div>
      
      <div className="content-section">
        <h2>Découvrez notre sélection</h2>
        <p>
          LaBoutique vous propose une gamme complète de produits dans les domaines de l'électronique, 
          de la maison et du sport. Nous sélectionnons avec soin chaque article pour vous garantir 
          qualité et satisfaction.
        </p>
        
        <div className="features">
          <div className="feature-card">
            <span className="feature-icon">📦</span>
            <h3>Livraison Rapide</h3>
            <p>Recevez vos commandes sous 48h</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💳</span>
            <h3>Paiement Sécurisé</h3>
            <p>Vos transactions sont protégées</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔄</span>
            <h3>Retours Gratuits</h3>
            <p>30 jours pour changer d'avis</p>
          </div>
        </div>

        <div className="cta-section">
          <h2>Explorez nos catégories</h2>
          <p>
            De l'électronique aux équipements sportifs en passant par les meubles, 
            trouvez tout ce dont vous avez besoin au même endroit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accueil;

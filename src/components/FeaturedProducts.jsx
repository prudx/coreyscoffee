const FeaturedProducts = ({ blends }) => (
  <section id="shop" className="panel">
    <header className="panel-header">
      <p className="eyebrow">Featured Blends</p>
      <h2>Familiar rituals, reimagined.</h2>
      <p>
        Choose from our tight rotation of carefully sourced coffees. Each bag lists origin,
        process, and roast date so you always know what is in your cup.
      </p>
    </header>
    <div className="card-grid">
      {blends.map((blend) => (
        <article key={blend.id} className="product-card">
          <header>
            <span className="badge">{blend.status}</span>
            <h3>{blend.name}</h3>
          </header>
          <p>{blend.description}</p>
          <div className="product-footer">
            <span className="price">{blend.price}</span>
            <button type="button" className="btn btn-outline">
              Add to bag
            </button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default FeaturedProducts;

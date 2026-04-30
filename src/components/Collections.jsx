const collections = [
  { name: "Necklaces", count: "120+", url: 'https://www.tanishq.co.in/shop/necklaces?lang=en_IN' },
  { name: "Rings", count: "80+", url: 'https://www.tanishq.co.in/shop/finger-rings?lang=en_IN' },
  { name: "Earrings", count: "150+", url: 'https://www.tanishq.co.in/shop/earrings?lang=en_IN' },
];

export default function Collections() {
  return (
    <section id="collections">
      <div className="section-header">
        <div className="section-eyebrow">Collections</div>
        <h2 className="section-title">Explore Our Range</h2>
      </div>

      <div className="collection-grid">
        {collections.map((item, i) => (
          <div className="coll-card" key={i}>
            <h3 className="coll-name">{item.name}</h3>
            <p className="coll-count">{item.count}</p>
            <div className="coll-underline"></div>
            <a href={item.url} className="coll-link" target="_blank" rel="noopener noreferrer">Shop Now</a>
          </div>
        ))}
      </div>
    </section>
  );
}
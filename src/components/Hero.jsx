export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">Luxury Jewellery</div>

        <h1 className="hero-title">
          Crafted in <em>Gold</em>, 
          
        </h1><h1>Worn with Pride</h1>

        <p className="hero-body">
          Discover timeless elegance with handcrafted jewellery
          designed for modern royalty.
        </p>

        <div className="hero-btns">
          <a href="#" className="btn-primary"><span>Explore</span></a>
          <a href="#" className="btn-ghost">View Collection</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-visual-wrap">
          <div className="hero-gem-center">
<img height={300} width={490}
  src="https://www.nobbier.com/wp-content/uploads/2024/11/faceted-emerald-gemstone-close-up.jpg" 
  alt="Emerald Gemstone" 
/>
          </div>
        </div>
      </div>
    </section>
  );
}
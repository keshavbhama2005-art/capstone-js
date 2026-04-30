export default function About() {
  return (
    <section id="about" className="about-layout">
      <div className="about-left">
        <h2 className="about-title">
          Legacy of <em>Trust</em> & Craftsmanship
        </h2>

        <p className="about-body">
          Since 1985, <em>A</em> Jewellers has been a symbol of
          trust, quality, and timeless design.
        </p>
      </div>

      <div className="about-right">
        <div className="values">
          <div className="value-item">
            <div className="value-num">01</div>
            <div>
              <div className="value-title">Authenticity</div>
              <div className="value-desc">Certified gold purity</div>
            </div>
          </div>

          <div className="value-item">
            <div className="value-num">02</div>
            <div>
              <div className="value-title">Craftsmanship</div>
              <div className="value-desc">Handcrafted excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
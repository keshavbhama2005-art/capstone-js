export default function Contact() {
  return (
    <section id="contact" className="contact-layout">
      <div className="contact-left">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-sub">
          Visit our store or contact us for custom jewellery.
        </p>
      </div>

      <div className="contact-right">
        <form>
          <div className="form-grid">
            <input className="form-input" placeholder="Name" />
            <input className="form-input" placeholder="Phone" />
            <textarea className="form-input full" placeholder="Message"></textarea>
          </div>

          <button className="form-submit">
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
}
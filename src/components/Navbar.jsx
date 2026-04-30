export default function Navbar() {
  return (
    <nav>
      <a href="#" className="logo">
        <span className="logo-name">A</span>
        <span className="logo-sub">JEWELLERS</span>
      </a>

      <ul className="nav-links">
        <li><a href="#collections">Collections</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-right">
        <a href="#" className="nav-cta">Book Visit</a>
      </div>
    </nav>
  );
}
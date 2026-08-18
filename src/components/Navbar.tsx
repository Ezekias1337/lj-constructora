import { useState } from "react";
import { Button } from "./button/Button";
import Logo from "../assets/images/logo/logo.png"

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "jbh-construction-galeria.html", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav" id="navigation" data-od-id="navigation">
      <div className="nav-inner">
        <a href="#" className="nav-logo" data-od-id="nav-logo">
          <img src={Logo} alt="Footer Logo" className="navbar-logo" style={{width: "50px"}}/>
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contacto" className="nav-cta" data-od-id="nav-cta">
          Solicitar cotización
        </a>

        <Button
          variant="primary"
          additionalClassNames="nav-toggle"
          onClickHandler={() => toggleMenu()}
        ></Button>
      </div>
      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        id="mobile-menu"
        data-od-id="mobile-menu"
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} data-mobile-link onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              data-mobile-link
              onClick={closeMenu}
              style={{ color: "var(--accent)", fontWeight: 700 }}
            >
              Solicitar cotización
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

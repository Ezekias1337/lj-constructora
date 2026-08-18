export interface FooterProps {}

const footerServices = [
  'Servicio general',
  'Azulejo',
  'Plomería',
  'Electricidad',
]

const footerCompany = [
  { label: 'Sobre nosotros', href: '#nosotros' },
  { label: 'Galería', href: 'jbh-construction-galeria.html' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'Cotización', href: '#contacto' },
  { label: 'Términos de servicio', href: 'jbh-construction-terminos.html' },
  { label: 'Aviso de privacidad', href: 'jbh-construction-aviso.html' },
]

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer" id="footer" data-od-id="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3>
              LJ <span>Constructora</span>
            </h3>
            <p>
              Servicios profesionales de construcción, remodelación y mantenimiento en Tijuana y la zona metropolitana
              de Baja California.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Servicios</h4>
              <ul>
                {footerServices.map((s) => (
                  <li key={s}>
                    <a href="#servicios">{s}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Empresa</h4>
              <ul>
                {footerCompany.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 LJ Constructora. Todos los derechos reservados.</p>
          <p>Tijuana, Baja California, México</p>
        </div>
      </div>
    </footer>
  )
}

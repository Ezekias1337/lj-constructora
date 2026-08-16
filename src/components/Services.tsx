export interface Service {
  id: string
  name: string
  description: string
  icon: React.FC
  centered?: boolean
}

const ServiceIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg">
    {children}
  </svg>
)

const services: Service[] = [
  {
    id: 'service-handyman',
    name: 'Servicio general',
    description:
      'Reparaciones, instalaciones menores y mantenimiento para tu hogar o negocio. Resolvemos lo que necesites, rápido y bien hecho.',
    icon: () => (
      <ServiceIcon>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </ServiceIcon>
    ),
  },
  {
    id: 'service-tile',
    name: 'Instalación de azulejo',
    description:
      'Colocación profesional de azulejo y porcelanico para pisos, paredes, baños, cocinas y áreas exteriores.',
    icon: () => (
      <ServiceIcon>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" x2="21" y1="9" y2="9" />
        <line x1="3" x2="21" y1="15" y2="15" />
        <line x1="9" x2="9" y1="3" y2="21" />
        <line x1="15" x2="15" y1="3" y2="21" />
      </ServiceIcon>
    ),
  },
  {
    id: 'service-plumbing',
    name: 'Plomería',
    description:
      'Instalación y reparación de tubería, grifos, inodoros, calentadores y sistemas de drenaje.',
    icon: () => (
      <ServiceIcon>
        <path d="M6 12h4v8H6z" />
        <path d="M14 4h4v16h-4z" />
        <path d="M10 8h8" />
        <path d="M10 16h8" />
      </ServiceIcon>
    ),
  },
  {
    id: 'service-electrical',
    name: 'Electricidad',
    description:
      'Instalación eléctrica, reparación de cortocircuitos, instalación de luminarias y puntos de luz.',
    icon: () => (
      <ServiceIcon>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </ServiceIcon>
    ),
  },
  {
    id: 'service-drywall',
    name: 'Tablaroca (drywall)',
    description:
      'Instalación y reparación de tablaroca, acabados lisos, divisiones de espacios y techos suspendidos.',
    icon: () => (
      <ServiceIcon>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </ServiceIcon>
    ),
  },
  {
    id: 'service-painting',
    name: 'Pintura',
    description:
      'Pintura interior y exterior, acabados decorativos, impermeabilización y preparación de superficies.',
    icon: () => (
      <ServiceIcon>
        <path d="M19 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" />
        <path d="M12 11v8" />
        <path d="M9 14h6" />
        <path d="M12 19v2" />
        <path d="M8 21h8" />
      </ServiceIcon>
    ),
  },
  {
    id: 'service-remodeling',
    name: 'Remodelaciones completas',
    description:
      'Remodelamos baños, cocinas, patios y espacios completos. Te ayudamos desde el diseño hasta el acabado final.',
    icon: () => (
      <ServiceIcon>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </ServiceIcon>
    ),
    centered: true,
  },
]

export interface ServicesProps {}

export const Services: React.FC<ServicesProps> = () => {
  return (
    <section className="section container" id="servicios" data-od-id="servicios">
      <span className="section-label">Lo que hacemos</span>
      <h2>Nuestros servicios</h2>
      <p className="section-desc">
        Ofrecemos soluciones completas para tu hogar o negocio, con materiales de primera y mano de obra calificada.
      </p>
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card"
            data-od-id={service.id}
            style={service.centered ? { gridColumn: '1 / -1', maxWidth: '480px', justifySelf: 'center', width: '100%' } : undefined}
          >
            <div className="service-icon">
              <service.icon />
            </div>
            <div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

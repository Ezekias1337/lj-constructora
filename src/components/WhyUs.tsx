const trustItems = [
  { number: '10+', label: 'Años de experiencia', desc: 'Proyectos residenciales y comerciales completados con éxito' },
  { number: '100%', label: 'Local', desc: 'Equipo basado en Tijuana, conocemos la región' },
  { number: '✓', label: 'Licenciados', desc: 'Personal capacitado y con permisos vigentes', useSuccess: true },
  { number: '✓', label: 'Garantía', desc: 'Respaldamos cada trabajo con garantía de satisfacción', useSuccess: true },
]

const testimonial = {
  quote: '"JBH Construction transformó nuestro baño por completo. El trabajo fue limpio, puntual y el resultado superó nuestras expectativas."',
  author: 'María G., Tijuana',
}

export interface WhyUsProps {}

export const WhyUs: React.FC<WhyUsProps> = () => {
  return (
    <section className="section trust-section" id="nosotros" data-od-id="nosotros">
      <div className="container">
        <span className="section-label">¿Por qué elegirnos?</span>
        <h2>Experiencia local que se nota en el resultado</h2>
        <p className="section-desc">
          Somos un equipo de Tijuana. Conocemos las necesidades de las construcciones en la zona y trabajamos con los
          materiales adecuados.
        </p>
        <div className="trust-grid">
          {trustItems.map((item) => (
            <div key={item.label} className="trust-item">
              <div className="trust-number" style={item.useSuccess ? { color: 'var(--success)' } : undefined}>
                {item.number}
              </div>
              <div className="trust-label">{item.label}</div>
              <div className="trust-desc">{item.desc}</div>
            </div>
          ))}
          <hr className="trust-divider" />
        </div>
        <div className="trust-quote">
          <p>{testimonial.quote}</p>
          <cite>— {testimonial.author}</cite>
        </div>
      </div>
    </section>
  )
}

//import { StarIcon } from './icons'
//import { Button } from "./button/Button"

export interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="hero container" id="hero" data-od-id="hero">
      <div className="hero-badge">
        <StarIcon />
        Tijuana, Baja California
      </div>
      <h1>Construimos tu proyecto con calidad y confianza</h1>
      <p>
        Servicios profesionales de remodelación, instalación y mantenimiento.
        Más de 10 años transformando hogares y negocios en Tijuana.
      </p>
      <div className="hero-cta-group">
        <a href="#contacto" className="btn-primary full-width-button" data-od-id="hero-cta" style={{width: "75%"}}>
          <QuoteIcon />
          Solicitar cotización
        </a>
        <a href="tel:+526641234567" className="btn-secondary full-width-button" data-od-id="hero-phone-link" style={{width: "75%"}}>
          <PhoneIcon />
          Llamar ahora
        </a>
      </div>
      {/* <p className="hero-phone" style={{marginTop: "10px"}}>
        O llámanos:{' '}
        <a href="tel:+526641234567">(664) 123-4567</a>
      </p> */}
    </section>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="hero-badge-icon">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  )
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  phone: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  service?: string
}

const services = [
  { value: '', label: 'Selecciona un servicio' },
  { value: 'handyman', label: 'Servicio general (handyman)' },
  { value: 'tile', label: 'Instalación de azulejo' },
  { value: 'plumbing', label: 'Plomería' },
  { value: 'electrical', label: 'Electricidad' },
  { value: 'drywall', label: 'Tablaroca (drywall)' },
  { value: 'painting', label: 'Pintura' },
  { value: 'remodeling', label: 'Remodelación completa' },
  { value: 'other', label: 'Otro' },
]

export interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Required'
    if (!formData.phone.trim()) newErrors.phone = 'Required'
    if (!formData.service) newErrors.service = 'Required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name as keyof FormErrors]
        return next
      })
    }
  }

  if (submitted) {
    return (
      <section className="section contact-section" id="contacto" data-od-id="contacto">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <span className="section-label">Contáctanos</span>
              <h3>Solicita tu cotización sin compromiso</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: 24 }}>
                Cuéntanos qué necesitas y te respondemos en menos de 24 horas. También puedes llamarnos o escribirnos
                por WhatsApp.
              </p>
              <ContactDetail
                icon={<PhoneIcon />}
                label="Teléfono"
                content="(664) 123-4567"
                href="tel:+526641234567"
              />
              <ContactDetail
                icon={<WhatsAppIcon />}
                label="WhatsApp"
                content="Enviar mensaje por WhatsApp"
                href="https://wa.me/526641234567"
              />
              <ContactDetail
                icon={<MapPinIcon />}
                label="Área de servicio"
                content="Tijuana, Tecate, Rosarito y valle de Mexicali"
              />
              <div className="contact-service-tags">
                <span>Servicio general</span>
                <span>Azulejo</span>
                <span>Plomería</span>
                <span>Electricidad</span>
                <span>Tablaroca</span>
                <span>Pintura</span>
                <span>Remodelaciones</span>
              </div>
            </div>
            <div>
              <div className="form-success visible" data-od-id="form-success">
                <SuccessIcon />
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por contactarnos. Te responderemos en menos de 24 horas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section contact-section" id="contacto" data-od-id="contacto">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-info">
            <span className="section-label">Contáctanos</span>
            <h3>Solicita tu cotización sin compromiso</h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: 24 }}>
              Cuéntanos qué necesitas y te respondemos en menos de 24 horas. También puedes llamarnos o escribirnos por
              WhatsApp.
            </p>
            <ContactDetail
              icon={<PhoneIcon />}
              label="Teléfono"
              content="(664) 123-4567"
              href="tel:+526641234567"
            />
            <ContactDetail
              icon={<WhatsAppIcon />}
              label="WhatsApp"
              content="Enviar mensaje por WhatsApp"
              href="https://wa.me/526641234567"
            />
            <ContactDetail
              icon={<MapPinIcon />}
              label="Área de servicio"
              content="Tijuana, Tecate, Rosarito y valle de Mexicali"
            />
            <div className="contact-service-tags">
              <span>Servicio general</span>
              <span>Azulejo</span>
              <span>Plomería</span>
              <span>Electricidad</span>
              <span>Tablaroca</span>
              <span>Pintura</span>
              <span>Remodelaciones</span>
            </div>
          </div>
          <div>
            <form className="contact-form" id="contact-form" data-od-id="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="form-name">Nombre completo</label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-phone">Teléfono</label>
                  <input
                    type="tel"
                    id="form-phone"
                    name="phone"
                    placeholder="(664) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.phone}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="form-service">Servicio que necesitas</label>
                <select
                  id="form-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.service}
                >
                  {services.map((opt) => (
                    <option key={opt.value || 'empty'} value={opt.value} disabled={!opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="form-message">Mensaje</label>
                <textarea
                  id="form-message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto, dimensiones, materiales o cualquier detalle..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="form-submit">
                <button type="submit" className="btn-primary" data-od-id="form-submit">
                  <SendIcon />
                  Enviar solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactDetail({
  icon,
  label,
  content,
  href,
}: {
  icon: React.ReactNode
  label: string
  content: string
  href?: string
}) {
  return (
    <div className="contact-detail">
      <div className="contact-detail-icon">{icon}</div>
      <div className="contact-detail-text">
        <strong>{label}</strong>
        {href ? <a href={href}>{content}</a> : <span>{content}</span>}
      </div>
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
      <line x1="22" x2="11" y1="2" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

function SuccessIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="success-icon">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

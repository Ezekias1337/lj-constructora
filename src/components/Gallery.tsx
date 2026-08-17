import work1 from "../assets/images/work/1.jpg"
import work2 from "../assets/images/work/2.jpg"
import work3 from "../assets/images/work/3.jpg"
import work4 from "../assets/images/work/4.jpg"
import work5 from "../assets/images/work/5.jpg"
import work6 from "../assets/images/work/6.jpg"

interface GalleryItem {
  id: string
  label: string
  tag?: string
  large?: boolean
  src: string
}

const items: GalleryItem[] = [
  { id: 'gallery-1', label: 'Proyecto pendiente de foto', tag: 'Antes y después', large: true, src: work1 },
  { id: 'gallery-2', label: 'Proyecto pendiente de foto', src: work2 },
  { id: 'gallery-3', label: 'Proyecto pendiente de foto', src: work3 },
  { id: 'gallery-4', label: 'Proyecto pendiente de foto', src: work4 },
  { id: 'gallery-5', label: 'Proyecto pendiente de foto', src: work5 },
  { id: 'gallery-6', label: 'Proyecto pendiente de foto', src: work6 },
]

export interface GalleryProps {}

export const Gallery: React.FC<GalleryProps> = () => {
  return (
    <section className="section container" id="galeria" data-od-id="galeria">
      <span className="section-label">Nuestro trabajo</span>
      <h2>Galería de proyectos</h2>
      <p className="section-desc">
        Algunos de los proyectos que hemos completado para nuestros clientes en Tijuana y la zona metropolitana.
      </p>
      <div className="gallery-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            data-od-id={item.id}
            style={item.large ? {} : undefined}
          >
            <div className="gallery-placeholder">
              <img src={item.src} />
              <p>{item.label}</p>
            </div>
            {item.tag && <span className="gallery-tag">{item.tag}</span>}
          </div>
        ))}
      </div>
    </section>
  )
}


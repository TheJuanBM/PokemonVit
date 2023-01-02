import Comic from '../../../model/comic'
import { Card } from '../card'
import './gallery.css'

interface GaleryProps {
  comics: Comic[]
}

export function Galery({ comics }: GaleryProps) {
  return (
    <main>
      <section className="gallery">
        {comics.map(comic => (
          <Card key={comic.id} {...comic} />
        ))}
      </section>
    </main>
  )
}

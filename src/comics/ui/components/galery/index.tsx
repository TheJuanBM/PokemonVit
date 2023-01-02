import { useState } from 'react'
import Comic from '../../../model/comic'
import { Card } from '../card'
import { Detail } from '../detail'
import './gallery.css'

interface GaleryProps {
  comics: Comic[]
}

export function Galery({ comics }: GaleryProps) {
  const [comicId, setComicId] = useState<number | null>(null)

  return (
    <main>
      <section className="gallery">
        {comics.map(comic => (
          <Card key={comic.id} handleAction={setComicId} {...comic} />
        ))}
        {comicId && <Detail comicId={comicId} handleAction={setComicId} />}
      </section>
    </main>
  )
}

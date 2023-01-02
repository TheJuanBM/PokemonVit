import Comic from '../../../model/comic'
import './card.css'

export function Card({ ...comic }: Comic) {
  return (
    <div className="featured">
      <img role="img" src={comic.image} />
      <p>{comic.title}</p>
    </div>
  )
}

import Comic from '../../../model/comic'
import './card.css'

interface CardProps extends Comic {
  handleAction: (value: number | null) => void
}

export function Card({ handleAction, ...comic }: CardProps) {
  return (
    <div className="featured" onClick={() => handleAction(comic.id)}>
      <img role="img" src={comic.image} />
      <p>{comic.title}</p>
    </div>
  )
}

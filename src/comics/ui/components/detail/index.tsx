import './detail.css'

interface DetailProps {
  comicId: number
  handleAction: (value: number | null) => void
}

export function Detail({ handleAction }: DetailProps) {
  return (
    <div className="detail" onClick={() => handleAction(null)}>
      <div>Hola</div>
    </div>
  )
}

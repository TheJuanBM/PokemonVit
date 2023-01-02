import loadingAnimation from './assets/loadingAnimation.gif'
import './loading.css'

export function Loading() {
  return (
    <div className="loading">
      <img alt="loading" role="figure" src={loadingAnimation} />
    </div>
  )
}

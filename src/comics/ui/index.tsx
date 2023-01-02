import { Galery, Loading, Search } from './components'
import { useComicsViewController } from './hooks'

export default function Comics() {
  const comicsViewController = useComicsViewController()

  if (comicsViewController.isLoading) return <Loading />

  return (
    <>
      <Search hanldeSearch={comicsViewController.hanldeSearch} />
      <Galery comics={comicsViewController.comics} />
    </>
  )
}

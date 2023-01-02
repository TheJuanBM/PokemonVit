import { useEffect, useState } from 'react'
import { ComicController } from '../../controller/comicController'
import Comic from '../../model/comic'

const comicInstance = new ComicController()

export function useComicsViewController() {
  const [search, setSearch] = useState<Comic[]>()
  const [comics, setComics] = useState<Comic[]>()

  useEffect(() => {
    comicInstance.comics().then(response => {
      if (response) {
        setSearch(response)
        setComics(response)
      }
    })
  }, [])

  function hanldeSearch(titleSearch: string) {
    setComics(
      comicInstance.filterComic({
        titleSearch,
        comics: search!
      })
    )
  }

  return {
    hanldeSearch,
    isLoading: !comics,
    comics: comics as Comic[]
  }
}

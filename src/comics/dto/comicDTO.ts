import Comic from '../model/comic'

export interface ComicResponse {
  id: number
  title: string
  description: string | null
  thumbnail: {
    path: string
    extension: string
  }
}

export function ComicDTO(comic: ComicResponse): Comic {
  return {
    id: comic.id,
    title: comic.title,
    description: comic.description || null,
    image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
  }
}

export function ComicsDTO(comicResponse: ComicResponse[]): Comic[] {
  return comicResponse.map(comic => ComicDTO(comic))
}

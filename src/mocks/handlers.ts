import { rest } from 'msw'
import { getEndPoint } from '../adapter/HTTPRequests'
import { ComicResponse } from '../comics/dto/comicDTO'

const commics: ComicResponse[] = [
  {
    id: 1,
    title: 'Marvel Previews (2017)',
    description: null,
    thumbnail: {
      extension: 'jpg',
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    }
  },
  {
    id: 2,
    title: 'Marvel Previews (2018)',
    description: null,
    thumbnail: {
      extension: 'jpg',
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    }
  }
]

export const handlers = [
  rest.get(getEndPoint('comics'), (_, res, ctx) => {
    return res(
      ctx.json({
        data: {
          results: commics
        }
      })
    )
  })
]

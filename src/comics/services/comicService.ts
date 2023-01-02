import { HTTPRequests } from '../../adapter/HTTPRequests'
import { ComicDTO, ComicsDTO, ComicResponse } from '../dto/comicDTO'

export class ComicService {
  HTTPRequests = new HTTPRequests()

  public async getComits() {
    return await this.HTTPRequests.getData<{ data: { results: ComicResponse[] } }>('comics').then(({ response }) => {
      if (response) {
        return ComicsDTO(response.data.results)
      }
    })
  }

  public async getComit(comicId: string) {
    return await this.HTTPRequests.getData<{ data: { results: ComicResponse } }>(`comics/${comicId}`).then(
      ({ response }) => {
        if (response) {
          return ComicDTO(response!.data.results)
        }
      }
    )
  }
}

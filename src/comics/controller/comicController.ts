import Comic from '../model/comic'
import { ComicService } from '../services/comicService'

export class ComicController {
  private readonly comicService = new ComicService()

  public comics() {
    return this.comicService.getComits()
  }

  public comic(comicId: string) {
    return this.comicService.getComit(comicId)
  }

  public filterComic({ titleSearch, comics }: { titleSearch: string; comics: Comic[] }) {
    return comics.filter(({ title }) => title.toLowerCase().includes(titleSearch.toLowerCase()))
  }
}

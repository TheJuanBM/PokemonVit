interface ComicData {
  id: number
  title: string
  image: string
  description: string | null
}

export default class Comic {
  id: number
  title: string
  image: string
  description: string | null

  constructor(data: ComicData) {
    this.id = data['id']
    this.title = data['title']
    this.image = data['image']
    this.description = data['description']
  }
}

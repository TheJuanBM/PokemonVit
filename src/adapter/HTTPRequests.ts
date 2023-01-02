import fetch from 'cross-fetch'

export function getEndPoint(path: string) {
  return `${import.meta.env.VITE_API_URL}${path}${import.meta.env.VITE_API_PARAMS}`
}

export class HTTPRequests {
  public async getData<T>(path: string) {
    const endPoint = getEndPoint(path)

    try {
      const responseFetch = await fetch(endPoint)
      const parseJSON = await responseFetch.json()

      return {
        status: true,
        response: parseJSON as T
      }
    } catch (error) {
      return {
        status: false,
        response: null
      }
    }
  }
}

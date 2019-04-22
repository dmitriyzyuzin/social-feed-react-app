export default class FeedApiService {
  static handleResponse = response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response.statusText)
    }
  }

  static get (apiUrl, limit = 20) {
    const url = `${apiUrl}?limit=${limit}`
    return window.fetch(url)
      .then(this.handleResponse)
      .then(this.transformData)
  }

  static transformData (posts) {
    return posts.map(post => ({
      id: post.id,
      createdAt: post.created_at,
      text: post.text,
      user: post.user.name
    }))
  }
}

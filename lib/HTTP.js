const fetch = require('node-fetch')

const APIError = require('./APIError')

class HTTP {
  constructor(client) {
    this.client = client
  }

  get headers() {
    return {
      Authorization: `Bearer ${this.client.token}`,
      Accept: 'application/json'
    }
  }

  async fetch (endpoint) {
    const res = await fetch(this.client.baseURL + endpoint, {
      headers: this.headers
    })
    if (!res.ok) throw new APIError(res, await res.text())
    return res.json()
  }

  async fetchPlayer (tag) {
    tag = tag.toUpperCase()
    return this.fetch(`players/%23${tag.replace("#", "")}`)
  }

  async fetchPlayerBattles (tag) {
    return this.fetch(`players/%23${tag.replace("#", "")}/battlelog`)
  }

  async fetchClub (tag) {
    tag = tag.toUpperCase()
    return this.fetch(`clubs/%23${tag.replace("#", "")}`)
  }
}

module.exports = HTTP

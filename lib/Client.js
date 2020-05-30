const Player = require('./Player')
const Club = require('./Club')
const HTTP = require('./HTTP')

class Client {

  /**
  * @param {string} opts Brawlstars API token
  */

  constructor(token) {
    if (!token) throw new TypeError('No token found for BrawlStars API.')

    this.baseURL = 'https://api.brawlstars.com/v1/'
    this.token = token
    this.http = new HTTP(this)
  }

  async fetchPlayer(tag) {
    return new Player(this, await this.http.fetchPlayer(tag))
  }

  async fetchClub(tag) {
    return new Club(this, await this.http.fetchClub(tag))
  }
}

module.exports = Client

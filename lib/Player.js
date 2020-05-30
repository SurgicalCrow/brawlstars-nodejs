const Club = require('./Club')
const BattleLog = require('./BattleLog')

class Player {
  constructor (client, data) {
    this.client = client
    this.parse(data)
  }

  async fetch () {
    this.parse(await this.client.http.fetchPlayer(this.tag))
    return this
  }

  parse (data) {
    this._data = data
    this.id = this.tag = data.tag
    this.xp = data.expPoints
    this.name = data.name
    this.club = data.club.tag ? new Club(this.client, data.club) : undefined
    this.level = data.expLevel
    this.color = this.colour = parseInt(data.nameColor.slice(4), 16)
    this.trophies = data.trophies
  }

  async fetchBattles() {
    return new BattleLog(this, await this.client.http.fetchPlayerBattles(this.tag))
  }
}

module.exports = Player

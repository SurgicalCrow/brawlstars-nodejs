const Battle = require('./Battle')

class BattleLog extends Array {
  constructor (player, data) {
    super()
    this.client = player.client
    this.player = player

    for (const item of data.items) {
      this.push(new Battle(item))
    }
  }
}

module.exports = BattleLog
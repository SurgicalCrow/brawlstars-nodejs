
// TODO: Support Teams
// TODO: Support starPlayer

class Battle {
  constructor (data) {
    this.id = data.event.id

    this.duration = data.battle.duration * 1000
    this.startedAt = new Date(data.battleTime)
    this.endedAt = new Date(this.startedAt.getTime() + this.duration)

    this.map = data.event.map
    this.type = data.battle.type
    this.mode = data.event.mode
    this.ranked = this.type === 'ranked'
  }
}

module.exports = Battle
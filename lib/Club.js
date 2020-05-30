class Club {
  constructor(client, data) {
    this.client = client
    this.parse(data)
  }

  async fetch () {
    this.parse(await this.client.http.fetchClub(this.tag))
    return this
  }

  parse (data) {
    this.id = this.tag = data.tag
    this.name             = data.name
    this.type             = data.type
    this.description      = data.description
    this.trophies         = data.trophies
    this.requiredTrophies = data.requiredTrophies
    this.members          = data.members
    this.memberCount      = this.members.length
  }

  get partial () {
    return !!this.type // TODO
  }

  isFull () {
    return this.memberCount === 1000
  }
}

module.exports = Club

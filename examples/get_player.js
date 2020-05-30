const BrawlStars = require('..')

const client = new BrawlStars.Client(process.env.TOKEN)

;(async function main () {
  const player = await client.fetchPlayer(process.env.PLAYER || '#JJL9YVJ2')
  console.log(await player.fetchBattles())
  console.log('Tag:', player.tag)
  console.log('Name:', player.name)
  console.log('Color:', player.color)
  console.log('──────────')

  if (player.club) {
    const club = player.club
    assert(club.partial === true)
    // NOTE: When you get a club from a Player instance
    //       It's not the full version of it. It's a `partial` club.

    await club.fetch()
    assert(club.partial === false)
    // NOTE: In order to get the full version of the club
    //       you can use <Club>.fetch()

    console.log('Club Name:', club.name)
    console.log('Club Trophies:', club.trophies)
    console.log('──────────')
  }
})()
exports.seed = function (knex, Promise) {
  return knex('hoard').del()
    .then(() => (
      Promise.all([
        knex('hoard').insert({
          id: 1,
          name: 'Fender Blondie',
          description: 'Really loud',
          barcode: 'XRA0K3QXBH',
          img_url: 'http://www.astrings.co.uk/images/product/a/amps-electric-valve-fender-vintage-reissue-%E2%80%9965-deluxe-blondi-320px-320px.png'
        }),
        knex('hoard').insert({
          id: 2,
          name: 'Cobra computer',
          description: 'In communist Romania, electrons were illegal.',
          barcode: 'F742MCBEKCG',
          img_url: 'http://www.old-computers.com/museum/photos/Felix_HC85_System_1.jpg'
        })
      ])
    ))
    .then(() => {
      return knex.raw(`SELECT setval('hoard_id_seq', (SELECT MAX(id) FROM hoard));`)
    })
}

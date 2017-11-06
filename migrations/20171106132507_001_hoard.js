exports.up = function (knex, Promise) {
  return knex.schema.createTable('hoard', (table) => {
    table.increments()
    table.varchar('name', 256)
    table.varchar('description', 256)
    table.varchar('barcode', 512)
    table.varchar('img_url', 512)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('hoard')
}

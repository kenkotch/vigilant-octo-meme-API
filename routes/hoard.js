var express = require('express');
var router = express.Router();
const humps = require('humps')
const knex = require('../knex')

const fake = [
  {
    id: 1,
    name: 'Yamaha CS 80',
    description: 'Best low pass filter ever',
    imgUrl: 'http://res.cloudinary.com/akey7/image/upload/c_scale,h_578/v1509817453/IMAG0635_qtqd07.jpg'
  }
]

router.get('/', (req, res, next) => {
  knex('hoard')
    .select('id', 'barcode', 'name', 'description', 'img_url')
    .orderBy('id')
    .then((rows) => {
      const camelized = humps.camelizeKeys(rows)
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(camelized))
    })
})

// curl -H "Content-Type: application/json" -X POST -d '{"name": "kdjkfdjs", "description": "ksdjklsdjf", "imgUrl": "kjsdfksjdf", "barcode": "klsdjflkdsjf"}' http://localhost:8181/hoard
router.post('/', function (req, res, next) {
  const { name, description, barcode, imgUrl } = req.body
  knex('hoard')
    .insert({
      name: name,
      description: description,
      barcode: barcode,
      img_url: imgUrl
    })
    .then(() => res.sendStatus(200))
    .catch((err) => next(err))
})

// curl -X DELETE http://localhost:8181/hoard/2
router.delete('/:id', function (req, res, next) {
  const { id } = req.params
  knex('hoard')
    .where('id', id)
    .del()
    .then(() => res.sendStatus(200))
    .catch((err) => next(err))
})

module.exports = router

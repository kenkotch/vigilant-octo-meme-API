var express = require('express');
var router = express.Router();

const fake = [
  {
    id: 1,
    name: 'Yamaha CS 80',
    description: 'Best low pass filter ever',
    imgUrl: 'http://res.cloudinary.com/akey7/image/upload/c_scale,h_578/v1509817453/IMAG0635_qtqd07.jpg'
  }
]

router.get('/', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(fake))
})

module.exports = router

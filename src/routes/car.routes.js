const { Router } = require('express')
const router = Router()
const { getCars, createCar, updateCar, deleteCar } = require('../controllers/car.controllers')

//READ
router.get('/', getCars)

//CREATE
router.post('/', createCar)

//UPDATE
router.put('/:id', updateCar)

//DELETE
router.delete('/:id', deleteCar)

module.exports = router
const { cars } = require('../database/db')
const { v4: uuid } = require('uuid')

//READ
const getCars = (req, res) => {
	return res.json({
		ok: true,
		msg: 'Lista de carros obtenida',
		data: cars,
	})
}

//CREATE
const createCar = (req, res) => {
	const { brand, models,type } = req.body
	const car = {
		id: uuid(),
		brand,
		models,
        type,
	}
	cars.push(car)
	return res.json({
		ok: true,
		msg: 'Carro Agregado',
		data: car,
	})
}

//UPDATE
const updateCar = (req, res) => {
	const { id } = req.params
	const { brand, models,type} = req.body

	const car = cars.find((car) => car.id === id)

	car.brand = brand
	car.models = models
    car.type = type

	return res.json({
		ok: true,
		msg: 'Carro Actualizado',
		data: car,
	})
}

//DELETE
const deleteCar = (req, res) => {
	const { id } = req.params

	const car = cars.find((car) => car.id === id)

	cars.splice(cars.indexOf(car), 1)

	return res.json({
		ok: true,
		msg: 'Usuarios Eliminado',
		data: car,
	})
}

module.exports = { getCars, createCar, updateCar, deleteCar }

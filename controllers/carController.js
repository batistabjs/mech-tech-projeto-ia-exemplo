const db = require('../models/db');

exports.index = (req, res) => {
  const cars = db.readData('cars.json');
  const clients = db.readData('clients.json');
  const carsWithClients = cars.map(car => {
    const client = clients.find(c => c.id == car.clientId);
    return { ...car, clientName: client ? client.name : 'Desconhecido' };
  });
  res.render('cars/index', { cars: carsWithClients });
};

exports.getCreate = (req, res) => {
  const clients = db.readData('clients.json');
  res.render('cars/form', { car: {}, clients });
};

exports.postCreate = (req, res) => {
  const cars = db.readData('cars.json');
  const newCar = {
    id: db.generateId(cars),
    clientId: parseInt(req.body.clientId),
    brand: req.body.brand,
    model: req.body.model,
    year: req.body.year,
    plate: req.body.plate
  };
  cars.push(newCar);
  db.writeData('cars.json', cars);
  res.redirect('/cars');
};

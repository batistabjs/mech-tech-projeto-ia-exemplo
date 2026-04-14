const db = require('../models/db');

exports.index = (req, res) => {
  const services = db.readData('services.json');
  res.render('services/index', { services });
};

exports.getCreate = (req, res) => {
  res.render('services/form', { service: {} });
};

exports.postCreate = (req, res) => {
  const services = db.readData('services.json');
  const newService = {
    id: db.generateId(services),
    name: req.body.name,
    description: req.body.description,
    price: parseFloat(req.body.price)
  };
  services.push(newService);
  db.writeData('services.json', services);
  res.redirect('/services');
};

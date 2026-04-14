const db = require('../models/db');

exports.index = (req, res) => {
  const clients = db.readData('clients.json');
  res.render('clients/index', { clients });
};

exports.getCreate = (req, res) => {
  res.render('clients/form', { client: {} });
};

exports.postCreate = (req, res) => {
  const clients = db.readData('clients.json');
  const newClient = {
    id: db.generateId(clients),
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email
  };
  clients.push(newClient);
  db.writeData('clients.json', clients);
  res.redirect('/clients');
};

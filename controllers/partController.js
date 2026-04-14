const db = require('../models/db');

exports.index = (req, res) => {
  const parts = db.readData('parts.json');
  res.render('parts/index', { parts });
};

exports.getCreate = (req, res) => {
  res.render('parts/form', { part: {} });
};

exports.postCreate = (req, res) => {
  const parts = db.readData('parts.json');
  const newPart = {
    id: db.generateId(parts),
    name: req.body.name,
    price: parseFloat(req.body.price),
    stock: parseInt(req.body.stock)
  };
  parts.push(newPart);
  db.writeData('parts.json', parts);
  res.redirect('/parts');
};

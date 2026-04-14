const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const clientController = require('../controllers/clientController');
const carController = require('../controllers/carController');
const partController = require('../controllers/partController');
const serviceController = require('../controllers/serviceController');

// Middleware de autenticação
const requireAuth = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/login');
  }
};

// Autenticação
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/logout', authController.logout);

// Dashboard
router.get('/', requireAuth, (req, res) => {
  res.render('dashboard');
});

// Clientes
router.get('/clients', requireAuth, clientController.index);
router.get('/clients/create', requireAuth, clientController.getCreate);
router.post('/clients/create', requireAuth, clientController.postCreate);

// Carros
router.get('/cars', requireAuth, carController.index);
router.get('/cars/create', requireAuth, carController.getCreate);
router.post('/cars/create', requireAuth, carController.postCreate);

// Peças
router.get('/parts', requireAuth, partController.index);
router.get('/parts/create', requireAuth, partController.getCreate);
router.post('/parts/create', requireAuth, partController.postCreate);

// Serviços
router.get('/services', requireAuth, serviceController.index);
router.get('/services/create', requireAuth, serviceController.getCreate);
router.post('/services/create', requireAuth, serviceController.postCreate);

module.exports = router;

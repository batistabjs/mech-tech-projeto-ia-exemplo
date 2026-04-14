const db = require('../models/db');

exports.getLogin = (req, res) => {
  res.render('login', { error: null });
};

exports.postLogin = (req, res) => {
  const { username, password } = req.body;
  const users = db.readData('users.json');
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    req.session.userId = user.id;
    res.redirect('/');
  } else {
    res.render('login', { error: 'Usuário ou senha inválidos' });
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
};

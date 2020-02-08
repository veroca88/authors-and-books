const express = require('express');
const authRouter = express.Router();
const User = require('../models/User.model')

const bcryptjs = require('bcryptjs');
const saltRounds = 10;

authRouter.get('/signup', (req, res) => res.render('auth-views/signup'));

authRouter.post('/signup', (req,res, next) => {
  const { username, email, password } = req.body;

  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword => {
      return User.create({username, email, passwordHash: hashedPassword })
    })
    .then(userFromDB => {console.log('Newly created user is: ', userFromDB);
    res.redirect('/userProfile');
  })
    .catch(error => next(error));
});

authRouter.get('/userProfile', (req, res) => res.render('users/user-profile'));

module.exports = authRouter
const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require('bcrypt');
const { validateToken } = require('../middlewares/AuthMiddleware');
const { sign } = require('jsonwebtoken');

router.get('/', async (req, res) => {
  const userList = await Users.findAll();
  res.json(userList);
});

// send users post request - async and await to wait for data to be inserted before moving on
router.post('/', async (req, res) => {
  const { email, displayName, firstName, lastName, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      email: email,
      displayName: displayName,
      firstName: firstName,
      lastName: lastName,
      password: hash,
    });
    res.json('SUCCESS');
  });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // tell sequelize to go to users table to find one user whos username matches the inputed username
  const user = await Users.findOne({ where: { email: email } });

  if (!user) res.json({ error: 'User does not exist' });
  // compare inputed password to password user has stored in database
  bcrypt.compare(password, user.password).then((match) => {
    if (!match)
      return res.json({ error: 'Wrong Username and Password Combination' });
    const accessToken = sign(
      { displayName: user.displayName, id: user.id },
      '3VDFC4bgaG'
    );
    return res.json(accessToken);
  });
});

// valid token check

router.get('/auth', validateToken, (req, res) => {
  res.json(req.user);
});

router.get('/userinfo/:id', async (req, res) => {
  const id = req.params.id;
  const userInfo = await Users.findByPk(id, {
    attributes: { exclude: ['password', 'email'] },
  });

  res.json(userInfo);
});

module.exports = router;

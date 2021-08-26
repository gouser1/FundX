const express = require('express');
const router = express.Router();
const { Pitches } = require('../models');
const { validateToken } = require('../middlewares/AuthMiddleware');

router.get('/', async (req, res) => {
  const pitchList = await Pitches.findAll();
  res.json(pitchList);
});

router.get('/byId/:id', async (req, res) => {
  const id = req.params.id;
  const pitch = await Pitches.findByPk(id);
  res.json(pitch);
});

// send Pitches post request - async and await to wait for data to be inserted before moving on
router.post('/', validateToken, async (req, res) => {
  const pitch = req.body;
  const displayName = req.user.displayName;
  pitch.displayName = displayName;
  await Pitches.create(pitch);
  res.json(pitch);
});

module.exports = router;

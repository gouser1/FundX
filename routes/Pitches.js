const express = require('express');
const router = express.Router();
const { Pitches, Favourites } = require('../models');
const { validateToken } = require('../middlewares/AuthMiddleware');

router.get('/', validateToken, async (req, res) => {
  const pitchList = await Pitches.findAll({ include: [Favourites] });
  // get all the favourites that includes the user id = to user id logged in
  const favouritedPitches = await Favourites.findAll({
    where: { UserId: req.user.id },
  });
  res.json({ pitchList: pitchList, favouritedPitches: favouritedPitches });
});

router.get('/byId/:id', async (req, res) => {
  const id = req.params.id;
  const pitch = await Pitches.findByPk(id);
  res.json(pitch);
});

// get all posts where user id is === to id in params
router.get('/byuserId/:id', async (req, res) => {
  const id = req.params.id;
  const pitchList = await Pitches.findAll({
    where: { UserId: id },
    include: [Favourites],
  });
  res.json(pitchList);
});

// send Pitches post request - async and await to wait for data to be inserted before moving on
router.post('/', validateToken, async (req, res) => {
  const pitch = req.body;
  pitch.displayName = req.user.displayName;
  pitch.UserId = req.user.id;
  await Pitches.create(pitch);
  res.json(pitch);
});

// Delete a pitch
router.delete('/:pitchId', validateToken, async (req, res) => {
  const pitchId = req.params.pitchId;
  await Pitches.destroy({
    where: {
      id: pitchId,
    },
  });
  res.json('DELETED SUCCESSFULLY');
});

module.exports = router;

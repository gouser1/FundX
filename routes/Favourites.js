const express = require('express');
const router = express.Router();
const { Favourites } = require('../models');
const { validateToken } = require('../middlewares/AuthMiddleware');

router.post('/', validateToken, async (req, res) => {
  const { PitchId } = req.body;
  const UserId = req.user.id;

  const found = await Favourites.findOne({
    where: { PitchId: PitchId, UserId: UserId },
  });

  //    Check if user has liked Pitch. If found no like then add favourite to favourites table, if not destroy the favourite from favourites table
  if (!found) {
    await Favourites.create({ PitchId: PitchId, UserId: UserId });
    res.json({ favourited: true });
  } else {
    await Favourites.destroy({
      where: {
        PitchId: PitchId,
        UserId: UserId,
      },
    });
    res.json({ favourited: false });
  }
});

module.exports = router;

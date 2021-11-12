const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User } = require("../../db/models");

const router = express.Router();

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const playlists = await Playlist.findAll({
      include: User,
      where: {
        userId: id,
      },
    });
    res.json(playlists);
  })
);

module.exports = router;

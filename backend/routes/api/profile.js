const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User, Playlist, Sound } = require("../../db/models");

const router = express.Router();
//validations
const validatePlaylist = [
  check("name")
    .exists({ checkFalsy: true })
    .not()
    .isEmpty()
    .withMessage("Please provide a name for your playlist."),
  check("content")
    .exists({ checkFalsy: true })
    .not()
    .isEmpty()
    .withMessage("Please provide a description for your playlist."),
  handleValidationErrors,
];

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const playlists = await Playlist.findAll({
      include: [{ model: User }, { model: Sound }],
      where: {
        userId: id,
      },
    });
    res.json(playlists);
  })
);

router.post(
  "/:id(\\d+)",
  validatePlaylist,
  asyncHandler(async (req, res) => {
    const { name, content, id } = req.body;
    const playlistErrors = validationResult(req);

    if (playlistErrors.isEmpty()) {
      const newPlaylist = await Playlist.create({
        name,
        content,
        userId: id,
      });
      return res.json({ newPlaylist });
    } else {
      let errors = playlistErrors.array().map((error) => error.msg);
      return res.json({ errors });
    }
  })
);

router.delete(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const response = await Playlist.findByPk();
  })
);

module.exports = router;

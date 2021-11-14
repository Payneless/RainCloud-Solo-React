const express = require("express");
const asyncHandler = require("express-async-handler");

const { Stored } = require("../../db/models");

const router = express.Router();

router.post(
  "stored/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const soundId = req.params.id;
    const { playlistId } = req.body;
		const playlist = await Playlist.findByPk(playlistId);

    const newStored = await Stored.create({
      soundId,
      playlistId,
    });
    return res.json({ playlist });
  })
);

module.exports = router;

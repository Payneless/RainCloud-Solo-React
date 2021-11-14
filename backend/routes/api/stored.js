const express = require("express");
const asyncHandler = require("express-async-handler");

const { Stored, Playlist } = require("../../db/models");

const router = express.Router();

router.post(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const soundId = req.params.id;
    const { playlistId } = req.body;
    const playlist = await Playlist.findByPk(playlistId);

    const newStored = await Stored.create({
      soundId,
      playlistId,
    });
    return res.json(playlist.id);
  })
);
router.delete(
  "/:id(\\d+)/playlists/:playlistid(\\d+)",
  asyncHandler(async (req, res) => {
    const soundId = req.params.id;
    const playlistId = req.params.playlistid;
    const stored = await Stored.findOne({
      where: { soundId, playlistId },
    });
    stored.destroy();
    res.status(204).end();
  })
);
module.exports = router;

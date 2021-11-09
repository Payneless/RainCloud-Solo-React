const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");
const { User, Sound } = require("../../db/models");

const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();
//validations
const validateSound = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Please provide a name for your sound."),
  check("content")
    .not()
    .isEmpty()
    .withMessage("Please provide a description for your sound."),
  check("file")
    .isURL()
    .withMessage("Please provide a url where your file is uploaded."),
];

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const sounds = await Sound.findAll();
    res.json(sounds);
  })
);

router.post(
  "/",
  validateSound,
  asyncHandler(async (req, res) => {
    const { name, content, file, userId, playlistId } = req.body;
    const soundErrors = validationResult(req);

    if (soundErrors.isEmpty()) {
      const newSound = await Sound.create({
        name,
        content,
        userId,
        playlistId,
        file,
      });
      return res.json({ newSound });
    } else {
      let errors = soundErrors.array().map((error) => error.msg);
      res.json({ errors });
    }
  })
);

router.get(":id(\\d+)"),
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const sound = await Sound.findByPk(id);
    const soundUserId = sound.userId;
  });

module.exports = router;

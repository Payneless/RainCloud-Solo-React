const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");
const { User, Sound } = require("../../db/models");

const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const soundNotFoundError = (id) => {
  const err = Error("Sound not found");
  err.errors = [`Sound with id of ${id} could not be found.`];
  err.title = "Sound not found.";
  err.status = 404;
  return err;
};
//validations
const validateSound = [
  check("name")
    .exists({ checkFalsy: true })
    .not()
    .isEmpty()
    .withMessage("Please provide a name for your sound."),
  check("content")
    .exists({ checkFalsy: true })
    .not()
    .isEmpty()
    .withMessage("Please provide a description for your sound."),
  check("file")
    .exists({ checkFalsy: true })
    .isURL()
    .withMessage("Please provide a url where your file is uploaded."),
  handleValidationErrors,
];

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const sounds = await Sound.findAll({
      include: User,
      order: [["updatedAt", "DESC"]],
      limit: 8,
    });
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
      return res.json({ errors });
    }
  })
);

router.put("/:id(\\d+)", async (req, res, next) => {
  const sound = await Sound.findByPk(req.params.id);
  if (sound) {
    sound.name = req.body.name || sound.name;
    sound.content = req.body.content || sound.content;
    sound.file = req.body.file || sound.file;

    await sound.save();
    res.json({ sound });
  } else {
    next(soundNotFoundError(req.params.id));
  }
});

router.delete("/:id(\\d+)", async (req, res, next) => {
  const sound = await Sound.findByPk(req.params.id);
  if (sound) {
    await sound.destroy();
    res.status(204).end();
  } else {
    next(soundNotFoundError(req.params.id));
  }
});

router.get(":id(\\d+)"),
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const sound = await Sound.findByPk(id);
    const soundUserId = sound.userId;
  });

module.exports = router;

const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { User, Sound } = require("../../db/models");

const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    // const sounds = Sound.get();
    const sounds = await Sound.findAll();
    console.log(sounds);
    console.log(JSON.stringify(sounds));
    res.json(sounds);
  })
);

module.exports = router;

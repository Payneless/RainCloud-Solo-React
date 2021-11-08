const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { User, Sound } = require("../../db/models");

const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

router.get(
  "/sounds",
  asyncHandler(async (req, res) => {
    const sounds = Sound.get();
    return res.json({ sounds });
  })
);

const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const soundsRouter = require("./sounds.js");
const profileRouter = require("./profile.js");
const storedRouter = require("./stored.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/sounds", soundsRouter);

router.use("/profile", profileRouter);

router.use("/stored", storedRouter);

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

// router.get("/restore-user", restoreUser, (req, res) => {
//   return res.json(req.user);
// });

// router.get(
//   "/set-token-cookie",
//   asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: "Demo-lition",
//       },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
//   })
// );

// router.post("/test", function (req, res) {
//   res.json({ requestBody: req.body });
// });

module.exports = router;

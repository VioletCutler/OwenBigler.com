const Express = require("express");
const router = Express.Router();

require("dotenv").config();

const ApiError = require('./error/ApiError')

router.use("/health", async (req, res, next) => {
  try {
    const uptime = process.uptime();
    const currentTime = new Date();
    const lastRestart = new Intl.DateTimeFormat("en", {
      timestyle: "long",
      dateStyle: "long",
      timeZone: "America/New_York",
    }).format(currentTime - uptime * 1000);
    res.send({ message: "healthy", uptime, currentTime, lastRestart });
  } catch (error) {
    next(error);
  }
});

const imagesRouter = require("./images");

router.use("/images", imagesRouter)

module.exports = router;
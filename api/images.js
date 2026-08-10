const Express = require("express");
const imagesRouter = Express.Router();
const cloudinary = require("cloudinary");
const ApiError = require("./error/ApiError");

require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/* ======
Retrieve images from Cloudinary
====== */
imagesRouter.use((req, res, next) => {
  console.log("A request has been made to the images router");
  next();
});

imagesRouter.get("/", async (req, res, next) => {
  try{ 
    console.log('imagesRouter.get')
    const query = await cloudinary.v2.search.expression("resource_type:image AND asset_folder:Photo_Portfolio/*").execute();
    const _images = query.resources;
    const images = await Promise.all(_images.map((image) => image.secure_url));
    
    res.send({
      success: true,
      images
    })

  } catch (error) {
    ApiError.internal("Something went wrong.")
  }
});


module.exports = imagesRouter;

// netlify/functions/images.js
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

exports.handler = async (event, context) => {
  try {
    console.log( 'Netlify function called successfully!');
    
    const query = await cloudinary.search
      .expression("resource_type:image AND asset_folder:Photo_Portfolio/*")
      .execute();
      
    const _images = query.resources;
    const images = _images.map((image) => image.secure_url);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, images })
    };
  } catch (error) {
    console.error('❌ Cloudinary error:', error.message);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};
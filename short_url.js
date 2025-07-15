import urlSchema from "../models/short_url.model.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
  try {
    const newUrl = new urlSchema({
      full_url: longUrl,
      short_url: shortUrl, // Example user ID, replace with actual user ID
    });
    if (userId) {
      newUrl.user = userId; // Optional: if you want to associate the URL with a user
    }
    await newUrl.save();
  } catch (err) {
    if (err.code === 11000) {
      // Duplicate key error
      throw new ConflictError("Short URL already exists");
    }
    // Handle other errors
   throw new Error(err);
  }
};

export const getShortUrl = async (shortUrl) => {
  return await urlSchema.findOneAndUpdate(
    { short_url: shortUrl },
    { $inc: { clicks: 1 } }
  );
};

export const getCustomeShortUrl = async (slug) => {
  return await urlSchema.findOne({ short_url: slug });
};
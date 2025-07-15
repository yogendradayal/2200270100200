import express from "express";
import dotenv from "dotenv";
dotenv.config("./.env");
import { nanoid } from "nanoid";
import connectDB from "./src/config/mongo.config.js";
import auth_routes from "./src/routes/auth.routes.js";
import user_routes from "./src/routes/user.routes.js";
import short_url from "./src/routes/short_url.route.js";

import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";
import { attachUser } from "./src/utils/attachUser.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.NODE_ENV === "production" 
      ? [
          "https://url-shortner-mu-three.vercel.app",
          // Add any other production domains here
        ] 
      : "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(attachUser);

app.use("/api/auth", auth_routes);
app.use("/api/user", user_routes);
app.use("/api/create", short_url);
app.get("/:id", redirectFromShortUrl);

app.use(errorHandler);

app.listen(3000, () => {
  connectDB();
  console.log("http://localhost:3000/");
});

//get - Redirection
//POST - Create-short url

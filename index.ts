import express from "express";
import { connectToMongo } from "./database/mongo.connection";
import { registerRoutes } from "./routes/routes.register";
import { PORT } from "./config";
import { connectToRedis } from "./database/redis.connection";
import { firebaseApp } from "./utils/firebase";
export const startServer = async () => {
  try {
    const app = express();
    await connectToMongo();
    await connectToRedis()
    await firebaseApp()
    registerRoutes(app);
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT: ${PORT}`));
  } catch (e) {
    console.error("COULD NOT START SERVER");
    process.exit(1);
  }
};

startServer();

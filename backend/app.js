import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

// We call this right after the imports to load the variables immediately
dotenv.config({ path: "./config/config.env" });

const app = express();

// This middleware needs process.env.FRONTEND_URL, so it must come AFTER dotenv.config()
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
    optionsSuccessStatus: 200 // Some browsers need this
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using the router
app.use("/api/v1/reservation", reservationRouter);

// A simple test route
app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  });
});

// Connect to the database
dbConnection();

// Error handling must be the last middleware
app.use(errorMiddleware);

export default app;

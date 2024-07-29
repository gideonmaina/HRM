import express from "express";
import cors from "cors";
import { userRouter } from "./Router/UserRoute.js";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/auth", userRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running");
});

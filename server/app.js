import express from "express";
import userRoutes from "./routes/user.js";

const app = express();

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

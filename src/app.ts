import express from "express";
import path from "path";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes";
import rootRoutes from "./routes/rootRoutes";
import authRoutes from "./routes/authRoutes";

dotenv.config();


const app = express();


app.use(express.static(path.join(__dirname, "..", "public")));

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

app.use(express.json());
app.use("/", rootRoutes);
app.use("/", authRoutes);
app.use("/users", userRoutes);

export default app;

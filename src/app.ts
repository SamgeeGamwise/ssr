import express from "express";
import userRoutes from "./routes/userRoutes";
import rootRoutes from "./routes/rootRoutes";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

app.use(express.json());
app.use("/", rootRoutes);
app.use("/users", userRoutes);

export default app;

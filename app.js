import express from "express";
const app = express();
import mongoose from "mongoose";
import Cities from "./src/controllers/Cities.js";
import Users from "./src/controllers/Users.js";
import { Login } from "./src/controllers/Login.js";
import bodyParser from "body-parser";
import auth from "./src/auth/auth.js";
import esm from "esm";
import cors from "cors";

app.use(bodyParser.json());
app.use(cors());

mongoose
    .connect(
        "mongodb+srv://YNOV:1234@cluster0.58uovvk.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.get("/cities",  Cities.getAll);
app.get("/cities/:name" , Cities.getOne);
app.get("/users",  Users.getAll);
app.get("/users/:id", Users.getOne);
app.get("/users_by_username/:username", Users.getByUsername)
app.post('/api/login', Login.login);



app.listen(3000, () => {
    console.log("Server started on port 3000");
});

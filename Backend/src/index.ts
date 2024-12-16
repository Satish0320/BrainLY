import mongoose from "mongoose";
import express from "express"
import { UserRouter } from "./routers/user_routes";

const app = express()
app.use(express.json());


app.use("/user", UserRouter);

async function Connect() {
    await mongoose.connect("mongodb+srv://Satish3:Satish3.0@cluster0.w4ugm0a.mongodb.net/Brainly");
    app.listen(4000);
    console.log("Connected Sucessfully");
}

Connect();
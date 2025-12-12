import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./routes/todoRoutes.js";

const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
connectDB()


//routes

app.use('/api/todo',router)

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}` )  

})


// async await ki waje se pahle
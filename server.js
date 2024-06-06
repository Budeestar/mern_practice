import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import cors from 'cors'
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"
dotenv.config();
connectDB()
const app=express()

app.use(cors())
app.use(express.json())

app.use(morgan(`dev`))

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);
app.get('/',(req,res)=>{
    res.send(
        "<h1>welcome to mern</h1>"
    )
})

const port=process.env.port||8080;

app.listen(port,()=>{
    console.log(`server running on ${process.env.DEV_MODE} mode on port ${port}`.bgCyan.white);
});
import express from 'express';
import dotenv from 'dotenv';
import resourceRoutes from './Routes/resourceRoutes.js'

const app = express();
dotenv.config();

app.get('/',(req,res)=>{
    res.status(200).send("<h1>Welcome to Backend</h1>")
})

app.use('/',resourceRoutes)


app.get('*',(req,res)=>{
    res.status(404).send('Page not found')
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})
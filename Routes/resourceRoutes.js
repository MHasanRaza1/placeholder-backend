import express from 'express';
import posts from '../utils/constant/posts.js'; 
import comments from '../utils/constant/comments.js';
import albums from '../utils/constant/albums.js';

const resourceRoutes = express.Router();

resourceRoutes.get('/posts',(req,res)=>{
    res.status(200).send({status:200, message:"success",data:posts})
})

resourceRoutes.get('/comments',(req,res)=>{
    res.status(200).send({status:200, message:"success",data:comments})
})

resourceRoutes.get('/albums',(req,res)=>{
    res.status(200).send({status:200, message:"success",data:albums})
})

export default resourceRoutes
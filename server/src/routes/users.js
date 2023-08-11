import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router =express.Router();

router.post("/register", async(req,res)=>{
    const {firstName,lastName,email,password}=req.body; 
    const user=await UserModel.findOne({email});

    if(user){
        console.log("email already exist");
        return res.json({message:"the email is already registered"});
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const newUser=await UserModel.create({firstName,lastName,email,password:hashedPassword});
    await newUser.save();
    res.json({message:"User registered Successfully"});
});

router.post("/login",async(req,res)=>{
    const {email,password}=req.body; 
    const user=await UserModel.findOne({email}); 
    if(!user){
        console.log("user doesnt exist");
        return res.json({message:"User Doesnt exist"});
    }
    const isPasswordvalid=await bcrypt.compare(password,user.password);
    if(!isPasswordvalid){
        return res.json({message:"Username or Password is incorrect"});
    }
    const token=jwt.sign({id:user._id},"secret");
    res.json({token,userID:user._id});
    console.log("user logged in successfully");

});

export {router as userRouter};
const express = require('express');
const StudentModel = require('../models/studentModel');

const studentRouter = express.Router()


studentRouter.post("/addStudent",async(req,res)=>{
  try{
    await StudentModel.create(req.body)
    res.status(201).json({message: "Student added successfully"})
  }catch(err){
    res.status(400).json({error: err.message})
  }

})


module.exports = studentRouter;
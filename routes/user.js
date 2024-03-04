const express= require("express")
const router= express.Router()
const Model = require("../models/paper_model")
const multer= require("multer")
const fs= require("fs")
const {index, storage,  upload} = require("../controllers/user")


router.get('/', async(req, res) => {
    
    try {
        const entry= await Model.find({})
        res.status(200).json (entry);
    }

    catch(error){
        res.status(500).json({message: error});
    }
});


router.post('/uploads', async(req, res) => {
    try {

      const {bt_id, course_code, title, year, exam_type, semester, approved}= req.body;
      const unique_id  = bt_id+"_"+year+exam_type+course_code+"_"+index;

      const model= new Model({bt_id, unique_id, course_code, title, year, exam_type, semester, approved});
      const entry= await Model.create(model);
      res.status(200).json(entry);

  }
  catch(error){
      res.status(500).json({message: error.message});
  }
});




module.exports= router;
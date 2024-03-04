const express= require("express")
const multer= require("multer")
const fs= require("fs")
const Model= require("../models/paper_model")

const one_entry = async (req, res) => {
    try {
        const {bt_id, course_code, title, year, exam_type, semester, approved}= req.body;
        const unique_id  = bt_id+"_"+course_code+"_"+exam_type;

        const model= new Model({bt_id, unique_id, course_code, title, year, exam_type, semester, approved});
        const entry= await Model.create(model);
        res.status(200).json(model);

    }
    catch{
        res.status(500).json({message: error.message});
    }
}

function date_time(){
    const cur_date= new Date();

    const minutes = cur_date.getMinutes(); 
    const seconds = cur_date.getSeconds(); 

    return minutes*seconds;

}

const index= date_time()

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads')
    },
    filename: function(req, file, cb){

        const uniqueFilename = req.body.bt_id+"_"+req.body.course_code+"_"+req.body.exam_type+"_"+index;
        cb(null, uniqueFilename);
      }
});

const upload = multer({ storage: storage });

module.exports= {index, storage, upload};



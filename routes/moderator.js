const express= require("express")
const router= express.Router()
const Model = require("../models/paper_model")
const multer= require("multer")

router.get('/fetchData', async (req, res) => {
    try {
      const criteria = req.query.criteria; 
      const data = await Model.findOne({ unique_id: criteria }); 
      res.json(data);
    }

    catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/fetchall', async(req, res) => {
    try {
        const data= await Model.find({});
        res.json(data)
    }
    catch (err){
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})


router.put('/:id', async (req, res) => {
    const paperId = req.params.id; 
    const updateData = req.body; 

    try {
        const updatedPaper = await Model.findByIdAndUpdate(paperId, updateData, { new: true });

        if (updatedPaper) {
            res.status(200).json({ message: 'Approval status updated successfully', updatedPaper });
        } else {
            res.status(404).json({ message: 'Paper not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports= router;
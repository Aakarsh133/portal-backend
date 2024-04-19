const express = require('express')
const router = express.Router()
const Model = require('../models/paper_model')
const multer = require('multer')
const fs = require('fs')
const { index, storage, upload } = require('../controllers/user')

//Hey i used prettier to make it look like this, not ChatGPT if you think the code is all copied :)

const bt_id = 'BT23CSE178'
let approved = false

router.post('/uploads', upload.single('pdf'), async (req, res) => {
  try {
    const { courseCode, year, examType, semester, contributor} = req.body
    const unique_id = bt_id + '_' + year + examType + courseCode + '_' + index
    const path = req.file.path

    const model = new Model({
      //department,
      contributor, 
      bt_id,
      unique_id,
      courseCode,
      year,
      examType,
      semester,
      approved,
      path
    })
    const entry = await Model.create(model)
    res.status(200).json(entry)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router

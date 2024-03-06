const express = require('express')
const multer = require('multer')
const fs = require('fs')
const Model = require('../models/paper_model')

function date_time () {
  const cur_date = new Date()

  const minutes = cur_date.getMinutes()
  const seconds = cur_date.getSeconds()

  return minutes * seconds
}

const index = date_time()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueFilename =
      req.body.course_code +
      req.body.year +
      '_' +
      req.body.exam_type +
      '_' +
      index
    cb(null, uniqueFilename)
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    if (file.mimetype == 'application/pdf') {
      cb(null, true)
    } else {
      cb(new Error('Only PDF files are allowed'))
    }
  }
})

module.exports = { index, storage, upload }

const express = require('express')
const mongoose = require('mongoose')
const Model = require('./models/paper_model.js')
const { error } = require('console')
const date_time = require('./controllers/user.js')
const user = require('./routes/user.js')
const app = express()
const path = require('path')
const multer = require('multer')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose
  .connect('mongodb://localhost:27017/Paper_Data')
  .then(() => {
    console.log('Connected to DB')
  })
  .catch(() => {
    console.log("Coudn't connect")
  })

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.use('/', user)

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(400).send(err.message)
  } else {
    res.status(500).send(err.message)
  }
})

app.listen(3000, () => {
  console.log('Lisenting..')
})

const express = require('express')
const mongoose = require('mongoose')
const Model = require('./models/paper_model.js')
const { error } = require('console')
const date_time = require('./controllers/user.js')
const user = require('./routes/user.js')
const app = express()
const path = require('path')
const cors= require('cors')
const multer = require('multer')
const bodyParser= require('body-parser')


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

mongoose
  .connect('mongodb://localhost:27017/Paper_Data')
  .then(() => {
    console.log('Connected to DB')
  })
  .catch(() => {
    console.log("Coudn't connect")
  })


app.use('/', user)

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(400).send(err.message)
  } else {
    res.status(500).send(err.message)
  }
})

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.listen(3001, () => {
  console.log('Lisenting..')
})

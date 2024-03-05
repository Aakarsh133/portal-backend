const express= require("express")
const mongoose= require("mongoose")
const Model= require("./models/paper_model.js")
const { error } = require("console")
const date_time = require("./controllers/user.js")
const user= require('./routes/user.js')
const moderator= require('./routes/moderator.js')
const path= require("path")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true})); 


mongoose.connect("mongodb://localhost:27017/Paper_Data").then(() => {
    console.log("Connected to DB");
}).catch(() => {
    console.log("Coudn't connect");
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/fetch', (req, res) => {
    res.sendFile(path.join(__dirname, 'fetch.html'));
});

app.use('/', user);
app.use('/mod', moderator);

app.listen(3000, () => {
    console.log("Lisenting..");
})
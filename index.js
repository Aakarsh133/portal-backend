const express= require("express")
const mongoose= require("mongoose")
const Model= require("./models/paper_model.js")
const { error } = require("console")
const date_time = require("./controllers/user.js")
const router= require('./routes/user.js')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))


mongoose.connect("mongodb://localhost:27017/Paper_Data").then(() => {
    console.log("Connected to DB");
}).catch(() => {
    console.log("Coudn't connect");
});



/*app.post('/', async(req, res) => {
    try {
        const index= date_time();

        const {bt_id, course_code, title, year, exam_type, semester, approved}= req.body;
        const unique_id  = bt_id+"_"+course_code+"_"+exam_type+"_"+index;

        const model= new Model({bt_id, unique_id, course_code, title, year, exam_type, semester, approved});
        const entry= await Model.create(model);
        res.status(200).json(entry);

    }
    catch{
        res.status(500).json({message: error.message});
    }
});*/

app.use('/', router);

app.listen(3000, () => {
    console.log("Lisenting..");
})
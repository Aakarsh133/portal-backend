const mongoose= require("mongoose")

const PaperModel= new mongoose.Schema(
    { 
      department : {
      type: String,
      required: false
  },  
      
      contributor : {
        type: String,
        required: true
    },
       
        bt_id : {
            type: String,
            required: true
        },

        unique_id : {
            type: String,
            required: true
        },

        pdf : {
            type: String,
            required: false
        },

        courseCode : {
            type: String,
            required: true
        },

        title: {
            type: String,
            required: false
        },

        year :{
            type: String,
            required: true
        },

        examType :{
            type: String,
            enum: ['S1', 'S2', 'ES'],
            required: true
        },

        semester: {
            type: String,
            required: true
        },

        index :{
            type: Number,
            required: false
        },

        approved: {
            type: Boolean,
            required: true,
            default: false
        },
        
        path : {
            type: String,
            required: false
        }
    },

    {
        timestamps: true
    }
);

const Model = mongoose.model('Paper', PaperModel);

module.exports = Model;

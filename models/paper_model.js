const mongoose = require('mongoose')

const PaperModel = new mongoose.Schema(
  {
    unique_id: {
      type: String,
      required: true
    },

    course_code: {
      type: String,
      required: true
    },

    year: {
      type: Number,
      required: true
    },

    exam_type: {
      type: String,
      enum: ['S1', 'S2', 'ES'],
      required: true
    },

    semester: {
      type: Number,
      required: true
    },

    index: {
      type: Number,
      required: false
    },

    approved: {
      type: Boolean,
      required: true,
      default: false
    },

    path: {
      type: String,
      required: false
    }
  },

  {
    timestamps: true
  }
)

const Model = mongoose.model('Paper', PaperModel)

module.exports = Model

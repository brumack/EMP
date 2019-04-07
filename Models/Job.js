const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
  ID: {
    type: Number
  },
  date: {
    type: Date
  },
  admin: {
    type: Boolean,
    default: false
  },
  customerLastName: {
    type: String
  },
  customerFirstName: {
    type: String
  },
  customerAddress: {
    type: String,
  },
  crew: {
    type: Array,
    default: []
  },
  status: {
    type: String,
    default: 'Pending'
  },
  isArchived: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Job', JobSchema)

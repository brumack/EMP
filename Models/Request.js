const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
  employeeId: {
    type: Number
  },
  date: {
    type: Date
  },
  requestDates: {
    type: Array,
    default: []
  },
  status: {
    type: String,
    default: 'Pending'
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Job', JobSchema)

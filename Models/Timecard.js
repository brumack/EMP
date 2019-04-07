const mongoose = require('mongoose')

const TimecardSchema = new mongoose.Schema({
  employeeId: {
    type: Number
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  days: {
    type: Array,
    default: []
  },
  status: {
    type: String,
    default: 'In Progress'
  },
  isArchived: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Timecard', TimecardSchema)

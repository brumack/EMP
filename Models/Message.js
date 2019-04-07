const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  from: {
    type: Number
  },
  to: {
    type: Number
  },
  admin: {
    type: Boolean,
    default: false
  },
  message: {
    type: String
  },
  status: {
    type: String,
    default: 'Unread'
  },
  isArchived: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Message', MessageSchema)

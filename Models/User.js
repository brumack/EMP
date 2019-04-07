const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'employee'
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  profileImage: {
    type: String
  },
  messages: {
    type: Array,
    default: []
  },
  jobs: {
    type: Array,
    default: []
  },
  timecards: {
    type: Array,
    default: []
  },
  isArchived: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    default: 'default.jpg'
  }
})

UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}
UserSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', UserSchema)

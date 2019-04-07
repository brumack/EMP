const router = require('express').Router()
const User = require('../Models/User')
const UserSession = require('../Models/UserSession')
const bodyParser = require('body-parser')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './client/public/userAvatars')
  },
  filename: function (req, file, cb) {
    console.log(req.body)
    cb(null, req.body.timestamp + '-' + file.originalname)
  }
})

const upload = multer({ storage })

router.use(bodyParser.json())

router.get('/', (req, res) => {
  const { query } = req
  const { token } = query

  if (token.match(/^[0-9a-fA-F]{24}$/)) {
    UserSession.find({ _id: token, isDeleted: false }, (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error.'
        })
      }

      if (sessions.length !== 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid session'
        })
      }

      const session = sessions[0]

      User.find({ _id: session.userId }, (err, users) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: Server error.'
          })
        }

        const user = users[0]

        return res.send({
          success: true,
          data: user
        })
      })
    })
  } else {
    return res.send({
      success: false,
      message: 'Error: Invalid token.'
    })
  }
})

router.post('/login', (req, res) => {
  const { body } = req
  let { email, password } = body

  if (!email) {
    return res.send({
      success: false,
      message: 'Email address required.'
    })
  }

  if (!password) {
    return res.send({
      success: false,
      message: 'Password Required'
    })
  }

  email = email.toLowerCase()

  User.find({ email }, (err, users) => {
    if (err) {
      return res.end({
        success: false,
        message: 'Server error.'
      })
    }

    if (users.length !== 1) {
      return res.send({
        success: false,
        message: 'Invalid credentials. Please try again.'
      })
    }

    const user = users[0]
    if (!user.validatePassword(password)) {
      return res.send({
        success: false,
        message: 'Invalid credentials. Please try again.'
      })
    }

    const userSession = new UserSession()
    userSession.userId = user._id
    userSession.save((err, doc) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Server error.'
        })
      }

      return res.send({
        success: true,
        message: 'Login successfull.',
        token: doc._id,
        email
      })
    })
  })
})

router.get('/logout', (req, res) => {
  const { query } = req
  const { token } = query

  if (token.match(/^[0-9a-fA-F]{24}$/)) {
    UserSession.findOneAndUpdate(
      {
        _id: token,
        isDeleted: false
      },
      {
        $set: { isDeleted: true }
      },
      err => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: Server error.'
          })
        }

        return res.send({
          success: true,
          message: 'Logged out.'
        })
      })
  } else {
    return res.send({
      success: false,
      message: 'Error: Invalid token.'
    })
  }
})

router.post('/new', upload.single('file'), (req, res) => {
  const { body, file } = req
  let { email, password, type, firstName, lastName, verifyPassword, timestamp } = body
  email = email.toLowerCase()
  const emailCheck = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

  if (!email) {
    return res.send({
      success: false,
      message: 'Email address required.'
    })
  }

  if (!password) {
    return res.send({
      success: false,
      message: 'Password Required.'
    })
  }

  if (!verifyPassword) {
    return res.send({
      success: false,
      message: 'Passwords do not match.'
    })
  }

  // email address not valid (regex)
  if (email.search(emailCheck) !== 0) {
    return res.send({
      success: false,
      message: 'Invalid email address.'
    })
  }

  if (password.length < 8) {
    return res.send({
      success: false,
      message: 'Invalid password. Password must be 8 characters or longer.'
    })
  }

  if (password !== verifyPassword) {
    return res.send({
      success: false,
      message: 'Passwords do not match.'
    })
  }

  User.find({ email }, (err, users) => {
    if (err) {
      console.log('find', err)
      return res.end({
        success: false,
        message: 'Server error.'
      })
    }

    if (users.length > 0) {
      return res.send({
        success: false,
        message: 'Account already exists. Please try again.'
      })
    }

    const newUser = new User()
    newUser.type = type
    newUser.email = email
    newUser.password = newUser.generateHash(password)
    newUser.firstName = firstName
    newUser.lastName = lastName
    newUser.avatar = timestamp + '-' + file.originalname

    newUser.save((err, user) => {
      if (err) {
        console.log('save', err)
        return res.send({
          success: false,
          message: 'Server error'
        })
      }

      return res.send({
        success: true,
        message: `New ${type} created.`
      })
    })
  })
})

router.get('/verify', (req, res) => {
  const { query } = req
  const { token } = query

  if (token.match(/^[0-9a-fA-F]{24}$/)) {
    UserSession.find({ _id: token, isDeleted: false }, (err, sessions) => {
      if (err) {
        console.log(err)
        return res.send({
          success: false,
          message: 'Error: Server error.'
        })
      }

      if (sessions.length !== 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid session'
        })
      }

      return res.send({
        success: true,
        message: 'Valid session'
      })
    })
  } else {
    return res.send({
      success: false,
      message: 'Error: Invalid token.'
    })
  }
})

// router.get('/search,' (req,res) => {

// })

module.exports = router

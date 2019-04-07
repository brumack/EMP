const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const path = require('path')
// const apiRoutes = require('./routes/apiRoutes')
const userRoutes = require('./Routes/userRoutes')

// app.use('/api', apiRoutes) // documentation ?
app.use('/api/user', userRoutes)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(express.static('public'))

// mongoose.connect(process.env.DATABASEURL, { useNewUrlParser: true })
mongoose.connect('mongodb://127.0.0.1:27017/EMP', { useNewUrlParser: true })

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
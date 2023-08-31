const express = require('express')
const dotenv = require('dotenv').config().parsed.PORT
const cors = require('cors')
const app = express()
const usersRoute = require('./controller/user');
app.use(cors())
app.use(express.json())

app.use('/users', usersRoute);

app.listen(dotenv, console.log(dotenv))

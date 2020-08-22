import mongoose from 'mongoose'

mongoose.connect('mongodb://mongodb:27017', {
  auth: {
    user: 'user',
    password: 'pass',
  },
  dbName: 'db',
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
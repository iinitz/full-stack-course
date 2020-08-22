import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017', {
  auth: {
    user: 'root',
    password: '1234',
  },
  dbName: 'db',
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
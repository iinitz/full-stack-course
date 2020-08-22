import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, index: true },
  name: { type: String },
  password: { type: String },
})

export const UserModel = mongoose.model('User', UserSchema)
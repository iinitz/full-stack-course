import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  imgUrl: { type: String },
  price: { type: Number, required: true },
  category: { type: String, enum: ['Food', 'Drink'] }
})

export const ProductModel = mongoose.model('Product', ProductSchema)
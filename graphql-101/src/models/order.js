import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  name: { type: String },
  address: { type: String },
  total: { type: Number },
  status: { type: String, enum: ['Pending', 'Shipping', 'Completed', 'Cancel'] },
})

export const OrderModel = mongoose.model('Order', OrderSchema)
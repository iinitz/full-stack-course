import mongoose from 'mongoose'

const OrderItemSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
})

export const OrderItemModel = mongoose.model('OrderItem', OrderItemSchema)
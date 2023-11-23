import  { Schema } from 'mongoose'
import { Address, FullName, Order, User } from './users.interface'

const OrderSchema = new Schema<Order>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
})

const FullNameSchema = new Schema<FullName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
})

const AddressSchema = new Schema<Address>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
})

export const UserSchema = new Schema<User>({
  userId: { type: Number, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: FullNameSchema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: { type: AddressSchema, required: true },
  orders: { type: [OrderSchema], default: [] },
})

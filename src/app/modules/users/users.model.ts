/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from 'mongoose';
import { TAddress, TFullName, TUser, UserModel } from './users.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
// const OrderSchema = new Schema<Order>({
//   productName: { type: String, required: true },
//   price: { type: Number, required: true },
//   quantity: { type: Number, required: true },
// });
const saltRounds = Number(config.bcrypt_salt);
const FullNameSchema = new Schema<TFullName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const AddressSchema = new Schema<TAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const UserSchema = new Schema<TUser, UserModel>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: FullNameSchema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: { type: AddressSchema, required: true },
  // orders: { type: [OrderSchema], default: [] },
});
// stacie
UserSchema.statics.isUserExists = async function (userId: number) {
  const existingUser = await User.findOne({ userId });
  return existingUser;
};

// password hash
UserSchema.pre('save', async function (next) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this;
    const hashPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashPassword;
    next();
  } catch (error: any) {
    next(error);
  }
});

UserSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

// create modal
export const User = model<TUser, UserModel>('User', UserSchema);

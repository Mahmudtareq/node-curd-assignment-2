/* eslint-disable no-unused-vars */
// export type Order = {
//   productName: string
//   price: number
//   quantity: number

import { Model } from 'mongoose';

// }
export type TFullName = {
  firstName: string;
  lastName: string;
};
export type TAddress = {
  street: string;
  city: string;
  country: string;
};

export type TUser = {
  userId: number;
  username: string;
  password: string; // Hashed password using bcrypt
  fullName: TFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TAddress;
  // orders: Order[]
};

export interface UserModel extends Model<TUser> {
  isUserExists(userId: number): Promise<TUser | null>;
}

// for create instance
// export type UserMethods = {
//   isUserExists(userId: number): Promise<TUser | null>;
// };
// export type UserModel = Model<TUser, Record<string, never>, UserMethods>;

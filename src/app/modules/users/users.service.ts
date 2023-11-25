/* eslint-disable @typescript-eslint/no-explicit-any */
import { TUser } from './users.interface';
import { User } from './users.model';

const createUserIntoDB = async (userData: TUser) => {
  if (await User.isUserExists(userData.userId)) {
    throw new Error('User Allready Exists');
  }
  const result = await User.create(userData);
  // Customize the transformation to exclude the password field
  const updateNewUserResponse = result.toObject({
    transform: (doc, ret) => {
      delete ret.password;
      return ret;
    },
  });
  return updateNewUserResponse;
};

const getAllUsersIntoDB = async () => {
  const result = await User.find().select({
    _id: 0,
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });
  if (result.length === 0) {
    return false;
  }
  return result;
};

const getSingleUser = async (id: number) => {
  if (await User.isUserExists(id)) {
    const result = await User.findOne({ userId: id }).select({
      password: 0,
    });
    return result;
  } else {
    return false;
  }
};
const deleteUser = async (id: number) => {
  if (await User.isUserExists(id)) {
    const deletedUser = await User.deleteOne({ userId: id });
    return deletedUser;
  } else {
    return false;
  }
};

const updateUser = async (id: number, updatedData: any) => {
  const userExists = await User.isUserExists(id);
  if (!userExists) {
    return false;
  }
  const result = await User.findOneAndUpdate(
    { userId: id },
    { $set: updatedData },
    { new: true, runValidators: true },
  ).select({
    password: 0,
  });
  if (!result) {
    return false;
  }
  return { data: result.toObject() };
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersIntoDB,
  getSingleUser,
  deleteUser,
  updateUser,
};

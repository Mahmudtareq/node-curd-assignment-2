import { TUser } from './users.interface';
import { User } from './users.model';

const createUserIntoDB = async (userData: TUser) => {
  if (await User.isUserExists(userData.userId)) {
    throw new Error('User Allready Exists');
  }
  const result = await User.create(userData); //built in static method
  // const userInstance = new User(userData); //instance method
  // if (await userInstance.isUserExists(userData.userId)) {
  //   throw new Error('User Allready Exists');
  // }
  // const convertId = userData.userId.toString();

  // const result = await userInstance.save();
  return result;
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

export const UserServices = {
  createUserIntoDB,
  getAllUsersIntoDB,
  getSingleUser,
};

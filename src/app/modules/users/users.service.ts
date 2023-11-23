import { User } from './users.interface';
import { UserModel } from './users.model';

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUsersIntoDB = async () => {
  const result = await UserModel.find().select({
    _id: 0,
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });
  return result;
};
const getSingleUser = async (id:string) => {
    const result = await UserModel.findOne({ id });
    console.log(result);
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersIntoDB,
  getSingleUser,
};

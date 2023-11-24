/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { UserServices } from './users.service';
import UserSchemaValidation from './users.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const userZodData = UserSchemaValidation.parse(userData);
    const result = await UserServices.createUserIntoDB(userZodData);
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
    // return result;
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersIntoDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const convertUserId = parseInt(userId);
    const result = await UserServices.getSingleUser(convertUserId);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'Users fetched successfully!',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: {
        code: 500,
        description:
          'An unexpected error occurred while processing the request.',
      },
    });
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
};

import { z } from 'zod';

// const OrderSchemaValidation = z.object({
//   productName: z.string(),
//   price: z.number(),
//   qantity: z.number(),
// });

const FullNameSchemaValidation = z.object({
  firstName: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }),
  lastName: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }),
});

const AddressSchemaValidation = z.object({
  street: z.string({ required_error: 'street is required' }),
  city: z.string({ required_error: 'city is required' }),
  country: z.string({ required_error: 'country is required' }),
});

const UserSchemaValidation = z.object({
  userId: z.number({
    required_error: 'userId is required',
    invalid_type_error: 'userId must be a number',
  }),
  username: z
    .string()
    .refine((data) => data.trim() !== '', {
      message: 'Username cannot be empty',
    })
    .transform((data) => data.replace(/\s{2,}/g, ' ')),
  password: z.string().refine((data) => data.trim() !== '', {
    message: 'password cannot be empty',
  }),
  fullName: FullNameSchemaValidation,
  age: z
    .number({
      required_error: 'Age is required',
    })
    .int({ message: 'Age must be a positive integer' }),
  email: z.string().email({ message: 'Invalid email address' }),
  isActive: z.boolean({
    required_error: 'isActive is required',
    invalid_type_error: 'isActive must be a boolean',
  }),
  hobbies: z.array(
    z.string({
      required_error: 'hobbies is required',
    }),
  ),
  address: AddressSchemaValidation,
  //   orders: OrderSchemaValidation,
});

export default UserSchemaValidation;

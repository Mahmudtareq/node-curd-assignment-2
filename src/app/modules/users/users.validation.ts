import { z } from 'zod';

// const OrderSchemaValidation = z.object({
//   productName: z.string(),
//   price: z.number(),
//   qantity: z.number(),
// });

const createFullNameSchemaValidation = z.object({
  firstName: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }),
  lastName: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }),
});
const updateFullNameSchemaValidation = z.object({
  firstName: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    })
    .optional(),
  lastName: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    })
    .optional(),
});

const createAddressSchemaValidation = z.object({
  street: z.string({ required_error: 'street is required' }),
  city: z.string({ required_error: 'city is required' }),
  country: z.string({ required_error: 'country is required' }),
});
const updateAddressSchemaValidation = z.object({
  street: z.string({ required_error: 'street is required' }).optional(),
  city: z.string({ required_error: 'city is required' }).optional(),
  country: z.string({ required_error: 'country is required' }).optional(),
});

const createUserSchemaValidation = z.object({
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
  fullName: createFullNameSchemaValidation,
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
  address: createAddressSchemaValidation,
  //   orders: OrderSchemaValidation,
});
const updateUserSchemaValidation = z.object({
  userId: z
    .number({
      required_error: 'userId is required',
      invalid_type_error: 'userId must be a number',
    })
    .optional(),
  username: z
    .string()
    .refine((data) => data.trim() !== '', {
      message: 'Username cannot be empty',
    })
    .transform((data) => data.replace(/\s{2,}/g, ' '))
    .optional(),
  password: z
    .string()
    .refine((data) => data.trim() !== '', {
      message: 'password cannot be empty',
    })
    .optional(),
  fullName: updateFullNameSchemaValidation.optional(),
  age: z
    .number({
      required_error: 'Age is required',
    })
    .int({ message: 'Age must be a positive integer' })
    .optional(),
  email: z.string().email({ message: 'Invalid email address' }).optional(),
  isActive: z
    .boolean({
      required_error: 'isActive is required',
      invalid_type_error: 'isActive must be a boolean',
    })
    .optional(),
  hobbies: z
    .array(
      z.string({
        required_error: 'hobbies is required',
      }),
    )
    .optional(),
  address: updateAddressSchemaValidation.optional(),
  //   orders: OrderSchemaValidation,
});

export const UserSchemaValidation = {
  updateUserSchemaValidation,
  createUserSchemaValidation,
};

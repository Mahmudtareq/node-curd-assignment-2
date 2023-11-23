import { z } from 'zod';

// const OrderSchemaValidation = z.object({
//   productName: z.string(),
//   price: z.number(),
//   qantity: z.number(),
// });

const FullNameSchemaValidation = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const AddressSchemaValidation = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const UserSchemaValidation = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: FullNameSchemaValidation,
  age: z.number(),
  email: z.string(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: AddressSchemaValidation,
  //   orders: OrderSchemaValidation,
});

export default UserSchemaValidation;

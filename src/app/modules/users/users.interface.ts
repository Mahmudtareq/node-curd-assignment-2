

export type Order = {
  productName: string
  price: number
  quantity: number
}
export type FullName = {
  firstName: string
  lastName: string
}
export type Address = {
  street: string
  city: string
  country: string
}

export type User = {
  userId: number
  username: string
  password: string // Hashed password using bcrypt
  fullName: FullName
  age: number
  email: string
  isActive: boolean
  hobbies: string[]
  address: Address
  orders: Order[]
}
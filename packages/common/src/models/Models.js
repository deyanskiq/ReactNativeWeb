export const UserSchema = {
  schemaName: 'User',
  properties: {
    id: 'string',
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    phone: 'string',
    cars: 'Car[]',
    // motorcycles: 'Motorcycle[]'
  },
};

export const CarSchema = {
  schemaName: 'Car',
  properties: {
    id: 'string',
    color: 'string',
    make: 'string',
    model: 'string',
    user: 'ref(User, cars)'
  },
};

// export const MotorcycleSchema = {
//   schemaName: 'Motorcycle',
//   properties: {
//     id: 'string',
//     color: 'string',
//     make: 'string',
//     model: 'string',
//     user: 'ref(User, motorcycles)'
//   },
// };


export const schemas = [
  UserSchema, 
  CarSchema,
  // MotorcycleSchema,
]

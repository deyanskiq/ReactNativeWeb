
export const CarSchema = {
  name: 'Car',
  schemaVersion: 1,
  primaryKey: 'id',
  properties: {
    id: 'string',
    color: 'string',
    make: 'string',
    model: 'string',
    user: { type: 'linkingObjects', objectType: 'User', property: 'cars' },
  },
};

export const UserSchema = {
  name: 'User',
  schemaVersion: 1,
  primaryKey: 'id',
  properties: {
    id: 'string',
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    phone: 'string',
    cars: 'Car[]'
  },
};


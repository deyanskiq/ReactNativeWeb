

import Realm from 'realm';

export const CarSchema = {
  name: 'Car',
  schemaVersion: 1,
  primaryKey: 'id',
  properties: {
    id: 'string',
    color: 'string',
    make: 'string',
    model: 'string',
    wheels: 'Wheel[]',
    user: { type: 'linkingObjects', objectType: 'User', property: 'cars' },
    ability: 'Ability',
  },
};

export const MotorcycleSchema = {
  name: 'Motorcycle',
  schemaVersion: 1,
  primaryKey: 'id',
  properties: {
    id: 'string',
    color: 'string',
    make: 'string',
    model: 'string',
    wheels: 'Wheel[]',
    user: { type: 'linkingObjects', objectType: 'User', property: 'motorcycles' },
    ability: 'Ability',
  },
};

export const WheelSchema = {
  name: 'Wheel',
  schemaVersion: 1,
  primaryKey: 'id',
  properties: {
    id: 'string',
    type: 'string',
    treadDepth: 'string',
    ability: 'Ability',
    car: { type: 'linkingObjects', objectType: 'Car', property: 'wheels' },
    motorcycle: { type: 'linkingObjects', objectType: 'Motorcycle', property: 'wheels' },
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
    cars: 'Car[]',
    motorcycles: 'Motorcycle[]',
    ability: 'Ability',
  },
};

export const AbilitySchema = {
  name: 'Ability',
  schemaVersion: 1,
  properties: {
    userAbilityA: 'int?',
    userAbilityB: 'int?',
    userAbilityC: 'int?',
    motorcycleAbilityA: 'int?',
    motorcycleAbilityB: 'int?',
    motorcycleAbilityC: 'int?',
    carAbilityA: 'int?',
    carAbilityB: 'int?',
    carAbilityC: 'int?',
    wheelAbilityA: 'int?',
    wheelAbilityB: 'int?',
    wheelAbilityC: 'int?',
  },
};

export const realmSchemas = {
  UserSchema,
  CarSchema,
  MotorcycleSchema,
  WheelSchema,
  AbilitySchema,
};

const generateKey = (secret) => {
  let sortedSecretKeyArr = secret.split('');
  while (sortedSecretKeyArr.length < 64) {
    sortedSecretKeyArr = sortedSecretKeyArr.concat(secret.split(''));
  }

  const key = new Int8Array(64);
  for (let index = 0; index < key.length; index += 1) {
    key[index] = sortedSecretKeyArr[index].charCodeAt(0);
  }
  return key;
};

export const key = generateKey('TestSecretString');

const realm = new Realm({
  schema: [
    UserSchema,
    CarSchema,
    MotorcycleSchema,
    WheelSchema,
    AbilitySchema,
  ],
  encryptionKey: key,
});

export default realm;

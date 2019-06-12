import Realm from 'realm'
import {
    schemas
  } from '@mono-repo/common/src/models/Models';
import { parseModel } from './utils/modelParser'  
import _ from 'lodash'

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

const key = generateKey('TestSecretString');

const generateSchemas = () => {
   return _.map(schemas, schema => parseModel(schema))  
}

export default realm = new Realm({
    schema: generateSchemas(),
    encryptionKey: key,
  });
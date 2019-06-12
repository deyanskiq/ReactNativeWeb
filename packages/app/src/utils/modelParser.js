import { schema } from 'normalizr';

export const parseMobileModel = (model) => {
    for (let [key, value] of Object.entries(model.properties)) {
        if(value.includes('ref')) {
            const data = value.substring(4, value.length - 1).split(',')
            model.properties[key] = { type: 'linkingObjects', objectType: data[0].trim(), property: data[1].trim() }
        }
    }
    return {
        ...model, 
        name: model.schemaName, 
        schemaVersion: 1, 
        primaryKey: 'id'}
}

export const parseWebModel = (model) => {
    let attrObject = {}
    for (let [key, value] of Object.entries(model.properties)) {
        if(typeof value == 'string' && value.includes('[]')) {
            attrObject[key] = `[${value.substring(0, value.length - 2).toLocaleLowerCase()}]`
        }
    }
    return new schema.Entity(model.name, attrObject)
}
 
import { schema } from 'normalizr';

export const parseModel = (model) => {
    let attrObject = {}
    for (let [key, value] of Object.entries(model.properties)) {
        if(typeof value == 'string' && value.includes('[]')) {
            attrObject[key] = `[${value.substring(0, value.length - 2).toLocaleLowerCase()}]`
        }
    }
    return new schema.Entity(model.name, attrObject)
}
 
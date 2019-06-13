export const parseModel = (model) => {
    for (let [key, value] of Object.entries(model.properties)) {
        if(value.includes('ref')) {
            const data = value.substring(4, value.length - 1).split(',')
            model.properties[key] = { type: 'linkingObjects', objectType: data[0].trim(), property: data[1].trim() }
        }
    }
    return {
        ...model, 
        name: model.schemaName, 
        schemaVersion: 2, 
        primaryKey: 'id'}
}

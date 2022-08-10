const characterModel = require('../model/characterModel')

const getAll = async () => {
    const result = await characterModel.getAll()
    if(!result) return []
    return result
}

const getById = async (id) => {
    const result = await characterModel.getById(id)
    if(!result) return []
    return result
}

const add = async (name, cartoon) => {
    if(name && cartoon){
        const result = await characterModel.add(name,cartoon)
        return result
    }
    return []
}

const update = async (id, name, cartoon) => {
    const result = await characterModel.update(id, name, cartoon)
    if(result != 1) return []
    return result
}

const exclude = async (id) => {
    const result = await characterModel.exclude(id)
    if(!result) return []
    return result
}

module.exports = {add, getAll, getById, update, exclude}
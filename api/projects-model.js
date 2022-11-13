const db = require('../data/dbconfig.js')

function get() {
    return db('projects')
}
function add(project) {
    return db('projects')
    .insert(project)
}
function update(id, changes) {
    return db('projects')
    .where("id", id)
    .update(changes)
}
function remove(id) {
    return db('projects')
    .where("id", id)
    .del()
}

module.exports = {
    get,
    add,
    update,
    remove
}
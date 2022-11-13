const db = require('../data/dbconfig.js')

function get() {
    return db('projects')
}

module.exports = {
    get
}
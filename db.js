//use lowDB
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
// Set some defaults (required if your JSON file is empty)
db.defaults({ Books: [], count: 0 })
    .write()
db.defaults({ users: [] })
    .write()
db.defaults({collection: []})
    .write()
module.exports = db;

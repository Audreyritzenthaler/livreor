const mysql = require('mysql')
require('dotenv').config()

const dbSettings = typeof process.env.CLEARDB_DATABASE_URL === 'string' ? process.env.CLEARDB_DATABASE_URL : {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
} 

const connection = mysql.createPool(
  dbSettings
)

connection.connect((err) => {
  if (err) throw err
  console.log('connected !')
})

module.exports = connection
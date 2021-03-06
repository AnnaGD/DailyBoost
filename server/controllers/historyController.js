const mysql = require('mysql')
const pool = require('../sql/connections')
const { handleSQLError } = require('../sql/error')

const getAllHistory = (req, res) => {
  console.log("get it Gurl")
  pool.query("SELECT * FROM history", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getClientById = (req, res) => {
  console.log("got the deets")
  let sql = "SELECT * FROM test WHERE id = ?"
  let id = parseInt( req.params.id )
  sql = mysql.format(sql, [ id ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    console.log(rows)
    return res.json(rows);
  })
}

const createClient = (req, res) => {
  const { firstName, lastName } = req.body
  let sql = "INSERT INTO clients (first_name, last_name) VALUES (?, ?)"
  sql = mysql.format(sql, [ firstName, lastName ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

const updateClientById = (req, res) => {
  const { firstName, lastName } = req.body
  let sql = "UPDATE clients SET first_name = ?, last_name = ? WHERE id = ?"
  sql = mysql.format(sql, [ firstName, lastName, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const deleteClientByFirstName = (req, res) => {
  let sql = "DELETE FROM clients WHERE first_name = ?"
  sql = mysql.format(sql, [ req.params.first_name ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} Client(s)` });
  })
}

module.exports = {
  getAllHistory
}
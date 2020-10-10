const express = require('express')
const router = express.Router()
const connection = require('../database')

router.get('/', (req, res) => {
  connection.query('SELECT * FROM comments', (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' })
    } else {
      return res.status(200).json(result)
    }
  })
})

router.post('/', (req, res) => {
  if (req.body.message) {
    const comment = req.body

    connection.query('INSERT INTO comments SET ?', comment, (err, stats) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error !' })
      } else {
        const messageId = stats.insertId
        const newMessage = {
          id: messageId,
          ...comment
        }
        console.log(newMessage)
        return res.status(201).json(newMessage)
      }
    })
  } else {
    return res.status(400).json({ error: 'Write a message please !' })
  }
})

module.exports = router

const dotenvx = require('@dotenvx/dotenvx')
const express = require('express')
// dotenvx.config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const hello = dotenvx.get('HELLO')
  res.send(`Hello, ${hello}!`)
})

app.get('/env', (req, res) => {
  res.send(JSON.stringify(process.env, null, 2))
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

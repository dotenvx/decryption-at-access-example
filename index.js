const dotenvx = require('@dotenvx/dotenvx')
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const hello = dotenvx.get('HELLO')
  res.send(`Hello, ${hello}!\n\n(from process.env: ${process.env.HELLO})`)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

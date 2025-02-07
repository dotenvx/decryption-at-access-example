const dotenvx = require('@dotenvx/dotenvx')
const express = require('express')
// dotenvx.config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const hello = dotenvx.get('HELLO')
  res.send(`Hello, ${hello}!

  (the following should be undefined as process.env should NOT get set for decryption-at-access: ${process.env.HELLO})`)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

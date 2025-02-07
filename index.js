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
  const env = JSON.stringify(process.env, null, 2)
  res.send(env)
})

// simulates a badly controlled (leaky) log - leaking envs
app.get('/leakylog', (req, res) => {
  const env = JSON.stringify(process.env, null, 2)
  res.send(env)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

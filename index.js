const express = require('express')
const cors = require('cors')
const app = express()

app.listen(8080)

app.use(cors())
app.get('/password-generator', (req, res) => {
  const passwordGenerator = (len) => {
    let pass = ''
    const string =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456890!@#$%^&*)(}{][_+/.,?><|'
    for (let i = 0; i < len; i++) {
      const randomNumber = Math.floor(Math.random() * string.length)
      pass += string[randomNumber]
    }
    return pass
  }
  let { length } = req.query
  if (!length) length = 8
  res.status(200).json({ success: true, password: passwordGenerator(length) })
})

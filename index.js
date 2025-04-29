const express = require('express')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {
    const a = 2
    const b = 3
    const c = a + b
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

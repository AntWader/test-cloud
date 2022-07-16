const express = require('express')
const app = express()
const port = 8080

let i = 0
app.get('/', (req, res) => {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log(fullUrl);
  i++
  res.send(`<h1>Counter: ${i}</h1>`)
})

app.listen(port, () => {
  console.log(`Open the following link in your browser: http://3.68.160.227:${port}`)
})

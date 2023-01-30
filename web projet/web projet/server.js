const express = require('express') // npm install express
const app = express()
const path = require('path')
const port = 1234

app.use('/', express.static(path.join(__dirname, './public')))


app.listen(port, () => {
  console.log(`Your app is listening to port ${port}`)
})




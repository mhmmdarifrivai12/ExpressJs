const express = require('express')
const app = express()
const port = 3000
const db = ('config.js')

//get data
app.get('/mahasiswa', (req, res) => {
  res.send('Hello World!')
})


//insert data (post)
app.post('/mahasiswa/post', (req, res) => {
    res.send('ini data post')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
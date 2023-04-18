
const express = require('express')
const app = express()
const port = 5005



app.get('/', (req, res) => {
        res.send('Hello World!')
      })
     


app.post('/postmessage', (req, res) => {
 res.send("message")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


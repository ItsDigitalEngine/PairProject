const express = require('express')
const app = express()
const port = 3000
const router = require('./routers/index.js')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended : true}))

app.use(router)

app.listen(port, () => {
  console.log(`Live On  http://localhost:${port}`)
})
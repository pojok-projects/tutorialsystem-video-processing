const express = require('express')
const bodyParser = require('body-parser')
const gqlServer = require('./graphql/schema')


const app = express()
app.use(bodyParser.json())
gqlServer.applyMiddleware({ app, path: '/vidp'})

// jalankan nodejs di port sesuai ENV
if(process.env.PORT) {
  app.listen(process.env.PORT, () => {
      console.log('server running at port', process.env.PORT)
  })
}

module.exports = app;
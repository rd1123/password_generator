// require relate module
const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
const port = 3000

console.log('version => 1.0.0')
console.log('version => 2.0.0')
console.log('version => 3.0.0')
console.log('version => 4.0.0')
console.log('version => 5.0.0')
console.log('version => 6.0.0')
console.log('version => 7.0.0')
console.log('version => 7.0.1')

// set route
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password, options })
})

// start server
app.listen(port, () => {
  console.log(`Server is started on http://localhost:${port}`)
})
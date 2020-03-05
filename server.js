const express = require('express')
const app = express()
const Router = require('./api/routes/routes')
const exphbs = require('express-handlebars')


app.set('view engine', '.hbs')
app.engine('.hbs', exphbs({ defaultLayout: 'main.hbs', partialsDir: 'views/partials' }))
app.use(express.static('public'))

app.use('/', Router)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server is listening on port ${port}`))
const express = require('express')
const bodyParser = require('body-parser')

//import models-------------------
const user = require('./routes/user-route')
const medicine = require('./routes/medicine-route')
const supplier = require('./routes/supplier-route')

const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))



// parse application/json
app.use(bodyParser.json())

// set routes
app.use('/api/v1/medicine', medicine);
app.use('/api/v1/user', user);
app.use('/api/v1/supplier', supplier);
app.use('/images',express.static('images'))

app.listen(port, () => {
    console.log(`Pharmacy app listening on port ${port}`)
})

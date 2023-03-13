const express = require('express')
const app = express()
require('dotenv').config();


require('./config/configDB').connect()


app.use(express.urlencoded({extended: true}))
app.use(express.json())

const PÖRT = process.env.PORT_APP || 5000

app.listen(PÖRT, () => {
    console.log(`Server listening on PORT ${PÖRT}`)
})
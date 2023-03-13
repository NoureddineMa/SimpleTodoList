const express = require('express')
const app = express()
require('dotenv').config();
require('./config/configDB').connect()
const PÖRT = process.env.PORT_APP || 5000
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const cors = require('cors')
const router = require('./routes/TaskRouter')

app.use(cors({origin:true,credentials:true}));
app.use('/api', router)

app.listen(PÖRT, () => {
    console.log(`Server listening on PORT ${PÖRT}`)
})
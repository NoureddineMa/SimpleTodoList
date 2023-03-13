const mongoose = require('mongoose')

const DB_CONNECT = process.env.DB_CONNECT;

exports.connect = () => {
    mongoose.set('strictQuery' , true)
    // connecting to db :
    mongoose.connect(DB_CONNECT , {
        useNewUrlParser : true
    })
    .then(() => {
        console.log('Succesfully Connected to Database !');
    })
    .catch((err) => {
        console.log('Data Base Connection Failed ...')
        console.log(err)
        process.exit(1)
    })
}
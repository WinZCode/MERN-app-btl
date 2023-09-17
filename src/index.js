const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require("./routes");
dotenv.config()
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3001

routes(app);
console.log('process.env.MONGO_DB', process.env.MONGO_DB)
mongoose.connect(`${process.env.MONGO_DB}`)
.then(() => {
    console.log('Connect DB success!')
})
.catch((err) => {
    console.log(err)
})
app.use(bodyParser.json())
app.listen(port, () => {
    console.log('Server is running in port : ', + port)
})
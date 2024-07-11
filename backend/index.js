const express = require('express')
const cors = require('cors')

const connectDb = require('./server/connection/connection')
const route = require('./server/routes/routes')

const PORT = process.env.PORT
const ORIGIN = process.env.ORIGIN

const app = express()

const corsOptions = {
    origin:process.env.ORIGIN,
    optionsSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',route)

app.listen(PORT,()=>{
    console.log('Server is connected');
})
connectDb()
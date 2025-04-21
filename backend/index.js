const {connectToMongo} = require ('./db.js')
console.log("connected")
connectToMongo();
const express = require('express')
const app = express()
const port =5000
var cors = require('cors')
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
app.use(cors())

app.use(express.json())
app.use('/api/auth',require('./routes/auth.js'))


app.listen(port,()=>{
    console.log(`Example app litening at http://localhost:${port}`)
})

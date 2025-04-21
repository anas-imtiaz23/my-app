const mongoose = require ('mongoose')
const URI =('mongodb://127.0.0.1:27017/wallpaper')

const connectToMongo=()=>{
  mongoose.connect(URI) 
}

module.exports = {connectToMongo};


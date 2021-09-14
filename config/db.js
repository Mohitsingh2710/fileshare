require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {

const URI = process.env.MONGO_CONNECTION_URL;

mongoose.connect(URI, {

useNewUrlParser: true, 

useUnifiedTopology: true 

}, err => {
if(err) throw err;
console.log('Connected to MongoDB!!!')
});

}
 
module.exports = connectDB;
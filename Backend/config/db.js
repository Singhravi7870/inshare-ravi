require('dotenv').config();
const mongoose=require("mongoose");
function connectDB(){
    // Database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true});
    const connection= mongoose.connection;

    connection.once('open', () => {
        console.log('MongoDB database connection established successfully 🥳🥳🥳🥳');
    }).on('error', ()=> {
        console.log('Connection failed ☹️☹️☹️☹️');
    });
}

module.exports=connectDB;
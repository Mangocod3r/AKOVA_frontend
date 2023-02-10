// // // // mongodb.js
// // // import mongoose from 'mongoose';

// // // const uri =
// // //   'mongodb+srv://user1:vevBpOaTO56k6nl9@cluster0.vf0s7dl.mongodb.net/test?retryWrites=true&w=majority';

// // // const connectToMongoDB = async () => {
// // //   try {
// // //     await mongoose.connect(uri, {
// // //       useNewUrlParser: true,
// // //       useUnifiedTopology: true
// // //     });
// // //     console.log('Connected to MongoDB Atlas');
// // //   } catch (error) {
// // //     console.error(error);
// // //   }
// // // };

// // // connectToMongoDB();

// // // const dataSchema = new mongoose.Schema({
// // //   name: String
// // // });

// // // const Data = mongoose.model('Data', dataSchema);

// // // export default Data;

// // server.js
// // const mongoose = require('mongoose');

// // mongoose.connect(
// //  'mongodb+srv://user1:pM5NGE0fJ7FDgKPI@cluster0.vf0s7dl.mongodb.net/test?retryWrites=true&w=majority',
// // { useNewUrlParser: true, useUnifiedTopology: true }
// // );

// // const connection = mongoose.connection;
// // connection.once('open', () => {
// //   console.log('MongoDB database connection established successfully');
// // });
// const mongoose = require("mongoose");

// const dbUrl =
// "mongodb+srv://user1:pM5NGE0fJ7FDgKPI@cluster0.mwivf0s7dlfk43.mongodb.net/?retryWrites=true&w=majority"

// mongoose.set("strictQuery", false);
// mongoose
//   .connect(dbUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Atlas connected successfully"))
//   .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));
// const MongoClient = require("mongodb").MongoClient;
// const uri =
// "mongodb+srv://user1:pM5NGE0fJ7FDgKPI@cluster0.vf0s7dl.mongodb.net/?retryWrites=true&w=majority"
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect((err) => {
//   const db = client.db("AKOVA");
//   const collection = db.collection("Users");
//   collection.find({}).toArray(function (err, docs) {
//     console.log(docs);
//     client.close();
//   });
// });

const express = require("express")
const app = express()
const bodyParser = require('body-parser')
//const cors = require('cors')
const mongoose = require("mongoose")
const port = 8080;
const conn_str = 'mongodb+srv://user1:0ORIa9bMW6IaqOjp@cluster0.vf0s7dl.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(
conn_str,
{ 
useNewUrlParser: true, 
useUnifiedTopology: true 
},(err) => {
if (err) {
console.log("error in connection");
} else {
console.log("mongodb is connected");
}});

app.use(bodyParser.urlencoded({extended: true}))
//app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello Anjali Madam!!!')
})
//create a server object:
app.listen(port, () => {
console.log("starting the server");
}); 
//the server object listens on port 8080
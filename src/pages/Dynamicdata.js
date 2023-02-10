// // import React, { useState, useEffect } from 'react';
// // //import Data from './data';
// // // import mongoose from 'mongoose';
// // //const mongoose = require('mongoose');
// //  const Data = require('./data');

// // // mongoose.connect(
// // //  'mongodb+srv://user1:vevBpOaTO56k6nl9@cluster0.vf0s7dl.mongodb.net/test?retryWrites=true&w=majority',
// // // { useNewUrlParser: true, useUnifiedTopology: true }
// // // );

// // const DynamicData = () => {
// //   //const Data = require('./data');
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const result = await Data.find({});
// //       setData(result);
// //     };
// //     fetchData();
// //   }, []);

// //   return (
// //     <ul>
// //       {data.map((item, index) => (
// //         <li key={index}>{item.name}</li>
// //       ))}
// //     </ul>
// //   );
// // };

// // export  {DynamicData};

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
// import React, { useState, useEffect } from 'react';
// import Data from './data';

// const DynamicData = () => {
//   const [setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await Data.find({});
//       setData(result);
//     };
//     fetchData();
//   }, []);

//   return (
//     <ul>
//       {/* {data.map((item, index) => (
//         <li key={index}>{item.name}</li>
//       ))} */}
//     </ul>
//   );
// };

// export  {DynamicData};

// // const client = new MongoClient(uri, { useNewUrlParser: true });
// // client.connect((err) => {
// //   const db = client.db("AKOVA");
// //   const collection = db.collection("Users");
// //   collection.find({}).toArray(function (err, docs) {
// //     console.log(docs);
// //     client.close();
// //   });
// // });
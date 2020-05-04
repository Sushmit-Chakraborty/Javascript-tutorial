// const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// const app = express();

// let url = 'mongodb://localhost';

// MongoClient.connect(url,{ useUnifiedTopology: true },async function(err,client){
//     var db = client.db('PersonDataBASE');
//     await db.createCollection('Person',{validator: {$jsonSchema: {
//         required: ["name","major","address"],
//         properties: {
//             name: {
//                 bsonType: "string",
//                 description: "must be a string and is required"
//             },
//             address: {
//                 bsonType: "object",
//                 required: [ "zipcode" ],
//                 properties: {
//                     "street": {bsonType: "string"},
//                     "zipcode": {bsonType: "string"}
//                 }
//             }
//         }
//     }},
//     validationAction:'error'
//     });
//     const collection = db.collection('Person');
//     collection.insertOne({name:'hgi',major:'Science',address:{street:'ABC',zipcode:'700084'}});
    
// })

const str = 'hi there';
const convert = str.toArray();
console.log(convert);
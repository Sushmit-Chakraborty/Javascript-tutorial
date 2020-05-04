const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bodyParser = require('body-parser');

const app = express();

let url = 'mongodb://localhost:27017';

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

MongoClient.connect(url,{useUnifiedTopology:true},async function(err,client){
    var db = client.db('CRUDProj');
    await db.createCollection('Person',{validator: {$jsonSchema: {
        required: ["name","age"],
        properties: {
            name: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            address: {
                bsonType: ["array"],
                minItems:1,
                uniqueItems:true,
                items:{
                    bsonType: ["object"],
                    required: ["state","city"],
                    additionalProperties: false,
                    description: "Items must contain stated fields",
                    properties:{
                        state:{
                            bsonType:"string",
                            description:"state is required field"
                        },
                        city:{
                            bsonType:"string",
                            description:"state is required field"
                        }
                    }
                }
            }
        }
    }
    },validationAction:'error'});
    // const collection = db.collection('Person');
    // collection.insertOne({name:'John',age:50,address:[{state:"WB",city:"Kolkata"}]});
})

//READ
app.get('/',function(req,res,next){
    MongoClient.connect(url,function(error,client){
        if(error){
            error.httpStatusCode = 500;
            error.message = "A problem occured while connecting to mongodb database";
            return next(error);
        }
        var db = client.db('CRUDProj');
        var cursor = db.collection('Person').find({}).toArray(function(err,docs){
            if(err){
                err.httpStatusCode = 500;
                err.message = "No collection with that name exists";
                return next(err);
            }
            else{
                if(docs.length == 0){
                    res.send('No records to show!');
                }
                res.send(docs);
            }
        });
    });
});

//CREATE
app.post('/addPerson',function(req,res,next){
    const name = req.body.name;
    const age = req.body.age;
    const address = req.body.address;
    
    MongoClient.connect(url,function(error,client){
        if(error){
            error.httpStatusCode = 500;
            error.message = "A problem occured while connecting to mongodb database";
            return next(error);
        }
        var db = client.db('CRUDProj');
        const collection = db.collection('Person');
        collection.insertOne({name:name,age:age,address:address},function(err,result){
            if(err){
                err.httpStatusCode = 400;
                err.message = "Document validation failed. Ensure you have put inputs in specified format"
                return next(err);
            }
            res.send('Record inserted successfully');
        });
    });
})

//DELETE
app.post('/deletePerson',function(req,res,next){
    const deletePerson = req.body.name;
    MongoClient.connect(url,async function(error,client){
        let responseOne;
        if(error){
            error.httpStatusCode = 500;
            error.message = "A problem occured while connecting to mongodb database";
            return next(error);
        }
        let db = client.db('CRUDProj');
        const collection = db.collection('Person');
        let cursor = await db.collection('Person').find({name:deletePerson}).toArray();
        if(cursor.length == 0){
            responseOne = 'No record exists';
            res.status(200).send(responseOne);
        }
        else{
            collection.deleteOne({name:deletePerson},function(err,result){
                if(err){
                    err.httpStatusCode = 500;
                    err.message = "A problem occured while deleting the record!";
                    return next(error);
                }
                responseOne = 'Record deleted successfully';
                res.status(200).send(responseOne);
            });
        }
    });
})

//UPDATE NAME
app.post('/updatePerson/name',function(req,res,next){
    let oldName = req.body.oldName;
    let newName = req.body.newName;
    if((typeof oldName != 'string') || (typeof newName != 'string')){
        res.status(400).send('Bad update request');
    }
    MongoClient.connect(url,async function(error,client){
        let response;
        if(error){
            error.httpStatusCode = 500;
            error.message = "A problem occured while connecting to mongodb database";
            return next(error);
        }
        let db = client.db('CRUDProj');
        const collection = db.collection('Person');
        let cursor = await db.collection('Person').find({name:oldName}).toArray();
        if(cursor.length == 0){
            response = 'No record exists';
            res.status(200).send(response);
        }
        else{
            collection.findOneAndUpdate({name:oldName},{$set:{name:newName}},function(err,result){
                if(err){
                    err.httpStatusCode = 500;
                    err.message = 'A problem occured while trying to update the record';
                    return next(err);
                }
                response="Record updated successfully";
                res.status(200).send(response);
            })
        }
    })
});

//UPDATE AGE
app.post('/updatePerson/age',function(req,res,next){
    let name = req.body.name;
    let newAge = req.body.age;
    MongoClient.connect(url,async function(error,client){
        let response;
        if(error){
            error.httpStatusCode = 500;
            error.message = "A problem occured while connecting to mongodb database";
            return next(error);
        }
        let db = client.db('CRUDProj');
        const collection = db.collection('Person');
        let cursor = await db.collection('Person').find({name:name}).toArray();
        if(cursor.length == 0){
            response = 'No record exists';
            res.status(200).send(response);
        }
        else{
            collection.findOneAndUpdate({name:name},{$set:{age:newAge}},function(err,result){
                if(err){
                    err.httpStatusCode = 500;
                    err.message = 'A problem occured while trying to update the record';
                    return next(err);
                }
                response="Record updated successfully";
                res.status(200).send(response);
            })
        }
    });
});

//UPDATE ADDRESS
app.post('/updatePerson/address/',function(req,res,next){
    let name = req.body.name;
    let newAddress = req.body.address;
    MongoClient.connect(url,async function(error,client){
        let response;
        if(error){
            error.httpStatusCode = 500;
            error.message = "A problem occured while connecting to mongodb database";
            return next(error);
        }
        let db = client.db('CRUDProj');
        const collection = db.collection('Person');
        let cursor = await db.collection('Person').find({name:name}).toArray();
        if(cursor.length == 0){
            response = 'No record exists';
            res.status(200).send(response);
        }
        else{
            collection.findOneAndUpdate({name:name},{$set:{address:newAddress}},function(err,result){
                if(err){
                    err.httpStatusCode = 500;
                    err.message = 'A problem occured while trying to update the record';
                    return next(err);
                }
                response="Record updated successfully";
                res.status(200).send(response);
            })
        }
    })
});

//ADD NEW ADDRESS
// app.post('/updatePerson/address/o',function(req,res){
//     let name = req.body.name;
//     let newAddress = req.body.address;
//     MongoClient.connect(url,function(err,client){
//         var db = client.db('CRUDProj');
//         const collection = db.collection('Person');
//         collection.find({name:name}).toArray(function(err,docs){
//             var oldArr = docs[0].address;
//         });
//         console.log(oldArr);
//         //let resultAddress = oldArr.concat(newAddress);
//         //console.log(resultAddress);
//         collection.findOneAndUpdate({name:name},{$set:{address:newAddress}},function(err,result){
//             assert.equal(err,null);
//             res.send('Age updated successfully');
//         });
//     });
// });

app.listen(3000,function(){
    console.log('Server running on port 3000');
})

app.use((err,req,res,next) => {
    res.status(500).send(err.message);
})
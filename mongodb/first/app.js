const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'myproject';

const client = new MongoClient(url,{ useUnifiedTopology: true });

//INSERT RECORDS
const insertDocuments = function(db,callback){
    const collection = db.collection('documents');
    collection.insertMany([
        {a:1},{a:2},{a:3}
    ],function(err,result){
        assert.equal(err,null);
        assert.equal(3,result.result.n);
        assert.equal(3,result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}

//SELECT RECORDS
const findDocuments = function(db,callback){
    const collection = db.collection('documents');
    collection.find({}).toArray(function(err,docs){
        assert.equal(err,null);
        console.log('Found the following records');
        console.log(docs);
        callback(docs);
    });
}

//INITIATE CONNECTION AND DO TASKS
client.connect(function(err){
    assert.equal(null,err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    insertDocuments(db,function(){
        findDocuments(db,function(){
            client.close();
        })
    });
})
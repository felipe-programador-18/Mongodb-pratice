const mongo = require("mongodb")
const MongoClient = mongo.MongoClient;



MongoClient.connect('mongodb://localhost:27017/practicemongo', (err, db) => {
   
//this i called the collection when a create const to receive ds.collection
const pessoas = db.collection("pessoas")

pessoas.remove({
    _id:"640744f958a4de3f90d00210"
}, (err, res) => {
    console.log(err,'testing my dates here remove')
})
})
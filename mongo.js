const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
//when a build one const to receive mongoclinet i need adding connect and adding
//localhost and name of banc

//here i can adding mongoclient i need whote way that url always he receive one promisses
MongoClient.connect('mongodb://localhost:27017/intro-mongo', (err, db) => {
   
  //this i called the collection when a create const to receive ds.collection
  const pessoas = db.collection('pessoas')
      //pessoas.update(
        //  {
          // _id: mongodb.ObjectID('620930b6debd9326a05aec62')
      //}, {
        //  $set:{
          //    nome:'Felipe Martins',
            //  born:'1853-01-30'
        //  }
      //}, (err, res) => console.log(err))
    pessoas.remove({
        _id: mongodb.ObjectID('620930b6debd9326a05aec62')
    }, (err,res) => console.log(err)  )

})
  
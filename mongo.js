const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
//when a build one const to receive mongoclinet i need adding connect and adding
//localhost and name of banc

//here i can adding mongoclient i need whote way that url always he receive one promisses
MongoClient.connect('mongodb://localhost:27017/practicemongo', (err, db) => {
   
  //this i called the collection when a create const to receive ds.collection
  const pessoas = db.collection('pessoas')
  pessoas.insert({
    name:"Programer 18",
    age:'30',
    city:'Porto alegre',
    adress:"Av circular 921",
    email:'machadofelipe2016@outlook.com'
  }, (err, res) => {
    console.log(err,'practice mongo pure' )
  }) 
})
  
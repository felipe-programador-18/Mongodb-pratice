const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
//when a build one const to receive mongoclinet i need adding connect and adding
//localhost and name of banc

//here i can adding mongoclient i need whote way that url always he receive one promisses
MongoClient.connect('mongodb://localhost:27017/intro-mongo', (err, db) => {
   
  //this i called the collection when a create const to receive ds.collection
  const pessoas = db.collection('pessoas')
  //pessoas.insert({
     // name: 'Felipe programmer',
     // born:'18-01-1995',
     // adress:'Avenida circular 921',
     // complemento: 'casa',
      //Nacionalidade:'Brasileiro'
     /* const CursorPessoas = pessoas.find({})
      CursorPessoas.forEach( doc => {
          console.log(doc)
      },() => console.log('end') ) */

      //THIS IS TO UPDATE DATABASE
      //The method have three parameters to update
      pessoas.update({
          _id: mongodb.ObjetcID('62029720a78ce03150a9cf0b')
      }, {
          $set :{
              name:'Felipe Martins'
          }
      }, (err, res) => console.log(err))

})
      //, (err, res)=> {
     //console.log(err, res)
  //})
//}

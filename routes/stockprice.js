const express = require('express')
const router = express.Router()
// Mongodb setup
const MongoClient = require('mongodb');
const uri = "mongodb+srv://cdubyoo:Chungpwns1@cluster0.8xutm.mongodb.net/stockprice?retryWrites=true&w=majority";


router.get('/stockinfo', (req, res) => {
  MongoClient.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
    }, function(err, client) {
  
    if(err) {
         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    }
    console.log('Looking up database...');
    const randId = Math.floor((Math.random() * 5000) + 1)
    const maxId = randId + 3897
    console.log(randId)
    const db = client.db('stockprice')
    const collection = db.collection("^DJI");
    collection.find({Id: {$gt: (randId-1), $lt: (maxId+1)}}).toArray(function(err, result) {
      if (err) throw err;    
      res.json(result);
      // close the connection inside the callback to avoid session ended error
      client.close();
    })
  });
});


module.exports = router
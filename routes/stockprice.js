const express = require('express')
const router = express.Router()
// Mongodb setup
const MongoClient = require('mongodb');
const uri = "mongodb+srv://cdubyoo:Chungpwns1@cluster0.8xutm.mongodb.net/stockprice?retryWrites=true&w=majority";








router.get('/stockprice/:id', (req, res) => {
  MongoClient.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
    }, function(err, client) {
  
    if(err) {
         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    }
    console.log('Looking up database...');
    const db = client.db('stockprice')
    const collection = db.collection("^DJI");
    const query = { Id: req.params.id };
    // query db with parameter
    collection.find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
    
    
    res.json(result);
    // close the connection inside the callback to avoid session ended error
    client.close();
  })
  });
  
});


module.exports = router
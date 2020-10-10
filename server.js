const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Mongodb setup
const MongoClient = require('mongodb');
const uri = "mongodb+srv://cdubyoo:Chungpwns1@cluster0.8xutm.mongodb.net/stocksim?retryWrites=true&w=majority";


app.listen(port, () => {
  console.log(`stocksim app listening at http://localhost:${port}`)
});

app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});


MongoClient.connect(uri, {
  useNewUrlParser: true, useUnifiedTopology: true
  }, function(err, client) {

  if(err) {
       console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
  }
  console.log('Connected to Mongo Database');
  const db = client.db('stockprice')
  const collection = db.collection("^DJI");
  // perform actions on the collection object
  collection.findOne({}, function(err, result) { // find the first document
    if (err) throw err;
    console.log(result.Close);
    // close the connection inside the callback to avoid session ended error
    client.close();
  });

});


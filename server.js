const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = process.env.PORT || 3000
const stockpriceRoute = require('./routes/stockprice')

// bodyparser set up
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// express setup
app.use(express.json());



app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

// routes
app.use(stockpriceRoute)


// 404 route
app.use((req, res, next) => {
  res.status(404).send('404 error the page resource was not found!')
})







app.listen(port, () => {
  console.log(`stocksim app listening at http://localhost:${port}`)
});

/*
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
  

  
  
    // close the connection inside the callback to avoid session ended error
    client.close();
});

*/
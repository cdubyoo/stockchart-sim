const express = require('express')
const app = express()
const port = process.env.PORT || 3000



app.listen(port, () => {
  console.log(`stocksim app listening at http://localhost:${port}`)
});

app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});
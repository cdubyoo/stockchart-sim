const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const stockpriceRoute = require('./routes/stockinfo')

// express setup
app.use(express.json());

// routes
app.use(stockpriceRoute)

// 404 route
app.use((req, res, next) => {
  res.status(404).send('404 error the page resource was not found!')
})

app.listen(port, () => {
  console.log(`stocksim app listening at http://localhost:${port}`)
});

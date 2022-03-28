const express = require('express')
require('dotenv').config()
const axios = require('axios')
const url = require('url')

const API_URL=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.API_KEY}&page=1`

const SEARCH =`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&`

const PORT = process.env.PORT || 8080

// Initialize express
const app = express()

app.use(express.static('public'))


app.get('/movies', (req, res) => {
  axios.get(API_URL)
    .then(response => {res.json(response.data)})
    .catch(error => {
      console.log(error);
    })
})


app.get('/search', (req, res) => {
  console.log(url.parse(req.url, true).query)
  axios.get(`${SEARCH}`, {
    params: {
      query: req.query,
    }
   })
  .then(response => {res.json(response.data)})
  .catch(error => {
    console.log(error);
  })
})




app.listen(PORT, () => console.log(`Server running on port ${PORT}`))



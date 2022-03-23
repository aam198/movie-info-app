const express = require('express')

const PORT = process.env.PORT || 5000

// Initialize express
const app = express()

// To use Routes 
app.get('/', (req, res) => {
 res.status(200).send('hello world!');
})


app.listen(PORT, () => console.log(`Server running on port PORT ${PORT}`))


const express = require('express'),
    app = express()

require('dotenv').config()
// set view engine to ejs
app.set('view engine', 'ejs')
// when someone goes to /api/ send to /routes/hello
app.use('/api/', require('./routes/hello'))

// set port to port stored in .env file

const PORT = process.env.PORT || 3001

// listen to port 

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})

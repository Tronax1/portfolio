const express = require('express');
const bodyParser = require('body-parser')
const http = require('http')
const allRoutes = require('./routes/api/index')
require('dotenv').config();

const app = express();

setInterval(()=>{
    http.get("http://jorge-villarreal.herokuapp.com")
}, 300000);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use('/api', allRoutes);

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('my-app/build'));

    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'my-app', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, '0.0.0.0', () => console.log(`Server started running on port ${port}`));
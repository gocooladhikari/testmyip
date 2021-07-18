
const express = require('express');

const app = express();



app.get('/', (req, res) => {
    // res.render('home.ejs', {title: 'Diamond Sushi', auth: false})
    res.send('your IP is: ' + req.connection.remoteAddress);
})

app.listen(8000, () => {
    console.log('Server up and running on port 8000')
})
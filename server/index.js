const express = require('express');

const path = require('path');

const app = express();

const port = process.env.PORT || 3003;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public','landing.html'));
})

app.use(express.static(path.join(__dirname,'../public')))
app.listen(port, () => {
    console.log(`Port at ${port}`);
})
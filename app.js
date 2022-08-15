const express = require ('express');
const app = express ();
app.use(express.static('public'));
const path = require('path');
app.listen(process.env.PORT || 3000, () => console.log('servidor corriendo'));
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})
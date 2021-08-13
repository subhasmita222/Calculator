const express = require('express')
const app = express();
const path = require('path');
const router = express.Router();


app.get('/calculator', (req, res )=> {
     res.sendFile(path.join(__dirname+'/calc.html'));
});


app.listen(3000, ()=>{
    console.log('ON PORT 3000!')
})
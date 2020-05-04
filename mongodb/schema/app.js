const express = require('express');

const app = express();

app.get('/',(req,res) => {
    try{
        throw new Error('BROKEN');
    }
    catch(err){
        res.send('Whoops!')
    }
    
})

app.listen(3000)
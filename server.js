// Gives access to the express library by searching nod_modules for 'express'
const express = require('express'); 

// Creates an express constructor instance called 'app'
const app = express();

// app.listen method will start up the server locally 
// with the port which is provided by us as the first arg in this case 8000
app.listen(8000,function(){
    console.log('server is running')
})


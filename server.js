// Gives access to the express library by searching nod_modules for 'express'
const express = require('express'); 

// Creates an express constructor instance called 'app'
const app = express();

const mockUserData  = [
    {name: 'Ver'},
    {name: 'Len '}
]

// this app.get method is used to get the route to the user data
// You just made your first endpoint! This function will respond to a GET request at http://localhost:8000/users with a JSON file, which includes our mockData under the key 'users'. Let's test it out!


app.get('/users', function(req, res){
    res.json({
        success: true ,
        message: 'successfully got users. Noice!',
        users: mockUserData
    })
})
// In Express, words with a colon in front of them in the url are treated as variables. 
// You can access the value of each variable through req.params, like this:
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})
// app.listen method will start up the server locally 
// with the port which is provided by us as the first arg in this case 8000
app.listen(8000,function(){
    console.log('server is running')
})


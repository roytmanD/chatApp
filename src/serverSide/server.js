///RDB
var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    console.log('connected');
});
//RDB


//same with express.js

const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 3000;

//to solve corse
var cors = require('cors');
app.use(cors());


//get contacts
app.get('/chatapp/api/users', (request, response)=>{
    client.keys('*', function (err, keys) {
        if (err) return console.log(err);

        for(var i = 0; i < keys.length; i++) {
            console.log(keys[i]);
        }
        response.send({data: keys});
    });
})



//auth
app.get(`/chatapp/api/users/auth`, (request, response) => {


console.log(request.query);



const {username, password} = request.query;

    client.get(username, (err, res)=>{
        if(err){
            console.log(err);
        }else {
            console.log('huy');
            console.log(res);
            if(res === password)
            response.send("SUCCESS");
        }
    })



});

/*
app.post('/chatapp/api/users/new/:usrnm/:pwd', (request, response)=>{
    const username = request.params.username;
    const password = request.params.password; //TODO dont forget to hash this later
    client.set(username, password);
    console.log(response);
})
*/

app.listen(port, (err) =>{
    if(err){
        return console.log('hit happens and seems like it just did', err)
    }

    console.log(`all good listening port ${port}`);
})


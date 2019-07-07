///RDB
const redis = require('redis');
const client = redis.createClient();

client.on('connect', function() {
    console.log('connected');
});
//RDB


const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 3000;

//to solve corse
const cors = require('cors');
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

// //add msg to list in db
// app.post('/chatapp/api/messages', (request,response) =>{
//
//     const {message} = request.query;
//     client.selected_db(1);
//     client.rpush('messages', message);
// })//todo later



//auth
app.get(`/chatapp/api/users/auth`, (request, response) => {

const {username, password} = request.query;

    client.get(username, (err, res)=>{
        if(err){
            console.log(err);
        }else {
            if(res === password){
            response.send("SUCCESS");
            }else{
                response.send("FAIL");
            }
        }
    })



});

app.post('/chatapp/api/users/new', (request, response)=>{

    const {username, password} = request.query;

    client.get(username , (err,res)=>{
        if (err){
            console.log(err);
        }
        if(res === null){
            client.set([username, password]);
            response.send('SUCCESS');
        }else{
            response.send('FAIL. TOKEN EXISTS');
        }
    })


})


app.listen(port, (err) =>{
    if(err){
        return console.log('Server error', err)
    }

    console.log(`all good listening port ${port}`);
});


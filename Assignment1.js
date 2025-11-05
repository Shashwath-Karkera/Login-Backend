const express = require('express')
const server = express()
server.use(express.json());

let userprofile = [];

server.post('/submit', (req, res) => {
    const name = req.body.name;
    const USN = req.body.USN;
    const age = req.body.age;
    const gender = req.body.gender;
    const email = req.body.email;

    //or
    // const {name,USN,age,gender,email} = request.body;

userprofile.push({name, USN, age, gender, email});

console.log("Data Recieved Sucesfully")
});

server.get('/profile', (req, res) => {
    res.send(userprofile);
})

server.listen(4001, () => {
    console.log('Server Started on http://localhost:4001')
})

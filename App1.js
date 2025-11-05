const express = require('express')
const server = express()
let name = 'Shashwath B Karkera'
let USN = '4SF23IS092'
let age = 21
let gender = 'Male'
let email = 'shashwathkarkera119@gmail.com'

server.get('/', (req, res) => {
res.send("Name : " + name + "\nUSN : " + USN + "\nAge : " + age + "\nGender : " + gender + "\nEmail : " + email)
})

server.listen(4000, () => {
    console.log('Server Started on http://localhost:4000')
})

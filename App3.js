const express = require('express')
const server = express()
server.use(express.json());

server.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log(email)
    console.log(password)
// Login Logic
if (email === "shashwathkarkera119@gmail.com" && password === "password123") {
    res.send("Login Successful");
} else {
    res.send("Login Failed");
}
})

server.get('/login', (req, res) => {
    const email = req.query.email;
    const password = req.query.password;

// Login Logic
if (email === "shashwathkarkera119@gmail.com" && password === "password123") {
    res.send("Login Successful");
} else {
    res.send("Login Failed");
}
})
server.listen(4001, () => {
    console.log('Server Started on http://localhost:4001')
})

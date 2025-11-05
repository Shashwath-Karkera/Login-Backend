const Websocket = require('ws');

const chatServer = new Websocket.Server({port:3003});

console.log('Server Created')
let message = [];
chatServer.on('connection',(ws)=>{

    ws.on('message',(message)=>
    {
        console.log('Someone sent ${message}')
        chatServer.clients.forEach((clients)=>{
            clients.send(message.toString())
        })
    })
    ws.on('close',()=>{
        console.log('Tata Bye Bye');
    })
})
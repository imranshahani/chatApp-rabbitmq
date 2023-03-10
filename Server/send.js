const amqp = require("amqplib");

// const server = require("socket.io");
// const Express = require("express");
// const app = Express();

const queue = "welcome";
const message = "welcome to";


const sendMsg = async()=>{
const connection = await amqp.connect("amqp://localhost");
const channel = await connection.createChannel();
await channel.assertQueue(queue,{durable: false});
channel.prefetch(1);
channel.sendToQueue(queue,Buffer.from(message), {persistent: true});
console.log("sent:" , message) 
// setTimeout(()=>{
//     connection.close(0);
//     process.exit(0);
// }, 500)
}

sendMsg();





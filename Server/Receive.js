const amqp = require("amqplib");

const queue ="welcome";

const sendMsg = async()=>{
    const connect = await amqp.connect("amqp://localhost");
    const channel = await connect.createChannel();
     await channel.assertQueue(queue, {durable: false})
    console.log(`Running Server ${queue}`);
    channel.consume(queue, message =>{
        console.log("Received ", message.connect.toString())
    }, {noAck: true})
    }

sendMsg(); 
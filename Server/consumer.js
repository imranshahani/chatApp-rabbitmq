const amqp= require("amqplib");

const queue = "hello";

const consume = async ()=>{
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();
    await channel.assertQueue(queue,{durable: true});
    console.log(`waiting for messages in queue: ${queue}`)
    channel.consume(queue,message=>{
        const secs = message.content.toString().split(".").length -1;
        console.log("[x] Receive:", message.connect.toString());
        setTimeout(()=>{ console.log("Done Resizing image ")
        channel.ack(message);
    }, secs *1000)
    },{noAck: true})
}

consume();   
const amqp = require('amqplib');

async function sendMessageToQueue(command, data) {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        const queueName = 'qtest1';
        await channel.assertQueue(queueName, { durable: true });

        const message = JSON.stringify({ command, data });
        channel.sendToQueue(queueName, Buffer.from(message), { persistent: true });

        console.log(`Message sent to queue ${queueName}:`, message);

        await channel.close();
        await connection.close();
    } catch (error) {
        console.error('Error sending message to queue:', error.message);
        throw error;
    }
}

module.exports = {
    sendMessageToQueue
};
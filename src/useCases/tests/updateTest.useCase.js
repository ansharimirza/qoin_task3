const { sendMessageToQueue } = require('../../frameworks/messageBroker/rabbitmq');

module.exports = dependencies => {
    const execute = async ({
        Id,
        Nama,
        Status,
    }) => {
        try {
            return await sendMessageToQueue('update', { Id,Nama, Status });
        } catch (error) {
            console.error('Error executing command:', error.message);
            throw error;
        }
    };

    return {
        execute
    };
}


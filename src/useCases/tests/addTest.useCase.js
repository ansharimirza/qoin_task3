const { sendMessageToQueue } = require('../../frameworks/messageBroker/rabbitmq');

module.exports = dependencies => {
    const execute = async ({
        Nama,
        Status,
    }) => {
        try {
            return await sendMessageToQueue('create', { Nama, Status });
        } catch (error) {
            console.error('Error executing command:', error.message);
            throw error;
        }
    };

    return {
        execute
    };
}


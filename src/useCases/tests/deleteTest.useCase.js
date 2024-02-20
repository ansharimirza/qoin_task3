const { sendMessageToQueue } = require('../../frameworks/messageBroker/rabbitmq'); 

module.exports = dependencies => {

    const execute = async (
        Id,
    ) => {
        try {
            return await sendMessageToQueue('delete', { Id });
        } catch (error) {
            console.error('Error executing command:', error.message);
            throw error;
        }
    };

    return {
        execute
    };
}


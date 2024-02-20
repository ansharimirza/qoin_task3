const {
    Response
} = require('../../frameworks/common');

module.exports = dependencies => {
    const {
        useCases: {
            test: {
                addTestUseCase
            }
        }
    } = dependencies;

    const addTest = async (req,res,next)  => {
        try {
            const {
                body = {}
            } = req;

            const {
                Nama,
                Status,
            } = body;

            const addTest = await addTestUseCase(dependencies);
            const response = await addTest.execute({
                Nama,
                Status,
            });

            res.status(201).json(new Response({
                statusCode:201,
                statusMessage:'success',
                statusDescription: "create test successfully",
                result: response,
            }));

            next();

        } catch (error) {
            next(error);
        }
    }

    return addTest;
}
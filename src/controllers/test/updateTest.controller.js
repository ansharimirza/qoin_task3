const {
    Response
} = require('../../frameworks/common');


module.exports = dependencies => {
    const {
        useCases: {
            test: {
                updateTestUseCase
            }
        }
    } = dependencies;

    const updateTest = async (req,res,next)  => {
        try {

            const {Id,Nama,Status} = req.body;
            const response = await updateTestUseCase(dependencies).execute({Id,Nama,Status});

            res.status(204);
            res.json(new Response({
                statusCode:204,
                statusMessage:'success',
                statusDescription:'update test successfully',
                result: response,
            }));

            next();
            
        } catch (error) {
            next(error);
        }
    }

    return updateTest;
}
const {
    Response
} = require('../../frameworks/common');


module.exports = dependencies => {
    const {
        useCases: {
            test: {
                deleteTestUseCase
            }
        }
    } = dependencies;

    const deleteTest = async (req,res,next)  => {
        try {
            const Id = req.params.id;
            
            const response = await deleteTestUseCase(dependencies).execute(Id);

            res.status(204);
            res.json(new Response({
                statusCode:204,
                statusMessage:'success',
                statusDescription:'delete test successfully',
                result: response,
            }));

            next();
            
        } catch (error) {
            next(error);
        }
    }

    return deleteTest;
}
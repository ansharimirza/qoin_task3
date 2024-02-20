const {
    Response
} = require('../../frameworks/common');


module.exports = dependencies => {
    const {
        useCases: {
            test: {
                getTestByIdUseCase
            }
        }
    } = dependencies;

    const getTestById = async (req,res,next)  => {
        try {

            const {
                params = {}
            } = req;

            const {
                id
            } = params;
            
            const response = await getTestByIdUseCase(dependencies).execute(id); 

            res.json(new Response({
                statusCode:200,
                statusMessage:'success',
                statusDescription:'search by id test successfully',
                result: response,
            }));

            next();
            
        } catch (error) {
            next(error);
        }
    }

    return getTestById;
}
const {
    Response
} = require('../../frameworks/common');


module.exports = dependencies => {
    const {
        useCases: {
            test: {
                getTestByPageUseCase
            }
        }
    } = dependencies;

    const getTestByPage = async (req,res,next)  => {
        try {

            const {
                body = {}
            } = req;

            const {
                page
            } = body;
            
            const response = await getTestByPageUseCase(dependencies).execute(page); 

            res.json(new Response({
                statusCode:200,
                statusMessage:'success',
                statusDescription:'search by page test successfully',
                result: response,
            }));

            next();
            
        } catch (error) {
            next(error);
        }
    }

    return getTestByPage;
}
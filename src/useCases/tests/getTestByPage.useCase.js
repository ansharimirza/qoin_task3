
module.exports = dependencies => {
    const {testsRepository} = dependencies;
    if (!testsRepository) {
        throw new Error('The test repository should be exists in dependencies');
    }

    const execute = (
        page
    ) => {
        const limit = 20; // Set limit to 20 data per page
        const offset = (page - 1) * limit;

        return testsRepository.getByPage(limit,offset);
    }

    return {
        execute
    }
}


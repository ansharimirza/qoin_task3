
module.exports = dependencies => {
    const {testsRepository} = dependencies;
    if (!testsRepository) {
        throw new Error('The test repository should be exists in dependencies');
    }

    const execute = (
        id
    ) => {
        
        return testsRepository.getById(id);
    }

    return {
        execute
    }
}


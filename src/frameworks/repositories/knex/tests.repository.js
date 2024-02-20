const repository = () => {
    //Model
    const TestsModel = require('../../models/knex/tests');

    //crud executables
    return {
        add: async test => {
            return await TestsModel.query().insert(test);
        },
        update: async test => {
            const {
                id
            } = test;

            return await TestsModel.query().patchAndFetchById(id, {
                ...test,
                updated: new Date()
            });
        },
        delete: async id => {
            return await TestsModel.query().where({ id: id }).del();
        },
        getById: async id => {
            return await TestsModel.query().findOne({
                id: id,
            });
        },
        getByPage: async (limit,offset) => {
            return await TestsModel.query().limit(limit).offset(offset);
        }
    }
}

module.exports = repository();
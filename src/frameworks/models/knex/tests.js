const { Model } = require('objection');
const {connect} = require('../../database/mariadb');
const visibilityPlugin = require('objection-visibility').default;
Model.knex(connect());

class TestsModel extends visibilityPlugin(Model) {
    static get tableName() {
        return 'Test01';
    }

    $beforeInsert() {
        this.created = new Date().toISOString().replace('T', ' ').replace('Z', '');
    }
    
    $beforeUpdate() {
        this.updated = new Date().toISOString().replace('T', ' ').replace('Z', '');
    }
}

module.exports = TestsModel;
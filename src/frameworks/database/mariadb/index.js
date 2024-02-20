require('dotenv').config();

module.exports = {
    connect: () => {
        const environment = process.env.NODE_ENV;
        const config = require('../../../../knexfile')[environment]
        const mariadb = require("knex")(config);

        mariadb.raw("SELECT 1").then(() => {
            console.log("MariaDB connected");
        })
        .catch((e) => {
            console.log("MariaDB not connected");
            console.error(e);
        });

        return mariadb;
    },
}
module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            port: 3308,
            database: 'reldens_skeleton',
            user: 'dbuser',
            password: 'dbpass',
            multipleStatements: true
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: './node_modules/reldens/migrations/development',
            tableName: 'knex_migrations'
        }
    },
    production: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            port: 3308,
            database: 'reldens_skeleton',
            user: 'dbuser',
            password: 'dbpass',
            multipleStatements: true
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: './node_modules/reldens/migrations/production',
            tableName: 'knex_migrations'
        }
    }
};

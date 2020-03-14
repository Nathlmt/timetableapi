var Connection = require('tedious').Connection;
var config = {
    server: 'dreamteam.database.windows.net',
    authentication: {
        type: 'default',
        options: {
            userName: 'letuan3112',
            password: 'Technology2312'
        }
    },
    options: {
        database: 'tableTime',
        encrypt: true
    }
}
var connection = new Connection(config);
connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected');
    }
});
module.exports = connection;
var Connection = require('tedious').Connection;
var ConnectionPool = require('tedious-connection-pool');
var poolConfig = {
    min: 2,
    max: 100,
    log: true
};

var config = {
    server: 'dreamteam.database.windows.net',
    userName: 'letuan3112',
    password: 'Technology2312',
    options: {
        database: 'timeTable',
        encrypt: true
    }
}
var pool = new ConnectionPool(poolConfig, config);
pool.on('error', function (err) {
    if (err) {
        console.log(err);
    } 
});
module.exports = pool
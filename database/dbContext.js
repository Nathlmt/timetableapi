var Request = require('tedious').Request;
var pool = require('./connect');
var utility = require('../utils/utils');

async function spGetExecute(qry, callback) {
    var data = [];
    var dataset = [];
    var resultset = 0;
    await pool.acquire((err, connection) => {
        request = new Request(qry, function (err, rowCount) {
            utility.sendDbResponse(err, rowCount, dataset, callback);
        });
        request.on('row', function (columns) {
            utility.buildRow(columns, data);
        });
        request.on('doneInProc', function (rowCount, more, rows) {
            dataset.push(data);
            data = [];
        });
        connection.callProcedure(request);
    })
}

async function spPostExecute(qry, params, callback) {
    await pool.acquire((err, connection) => {
        var newdata = [];
        request = new Request(qry, function (err, rowCount) {
            utility.sendDbResponse(err, rowCount, newdata, callback);
        });
        params.forEach(param => {
            request.addParameter(param.name, param.type, param.val);
        });
        request.on('row', function (columns) {
            utility.buildRow(columns, newdata);
        });
        connection.callProcedure(request);
    })
}
async function queryGetExecute(qry, params, isMultiSet, callback) {
    var data = [];
    var dataset = [];
    var resultset = 0;
    await pool.acquire((err, connection) => {
        request = new Request(qry, function (err, rowCount) {
            utility.sendDbResponse(err, rowCount, dataset, callback);

        });

        params.forEach(param => {
            request.addParameter(param.name, param.type, param.val);
        });

        request.on('row', function (columns) {
            utility.buildRow(columns, data);
        });

        request.on('doneInProc', function (rowCount, more, rows) {
            if (isMultiSet == false) {
                dataset = data;
            } else {
                dataset.push(data);
                data = [];
            }
        });

        connection.execSql(request);
    })
}
module.exports = {
    get: spGetExecute,
    post: spPostExecute,
    getQuery: queryGetExecute
};
var response = require('../../utils/response');
var model = require('./model');
var TYPES = require('tedious').TYPES;

function tableRepository(dbContext) {
    function getTables(req, res) {
        dbContext.get("getTable", function table(error, data) {
            return res.json(response(data, error));
        });
    }
    function getTable(req, res, next) {
        if (req.params.sid) {
            var parameters = [];
            parameters.push({ name: 'MSSV', type: TYPES.Int, val: req.params.sid });
            var query = "select * from thong_tin_lop where MSSV = @MSSV"
            dbContext.getQuery(query, parameters, false, function (error, data) {
                if (data) {
                    return res.json(response(data, error));
                }
                return res.sendStatus(404);
            });
        }
    }
    function postTables(req, res) {
        var parameters = model(req)
        console.log(parameters)
        dbContext.post("InsertOrUpdateTime", parameters, function (error, data) {
            return res.json(response(data, error));
        });
    }
    return {
        getAll: getTables,
        get: getTable,
        post: postTables
    }
}

module.exports = tableRepository;
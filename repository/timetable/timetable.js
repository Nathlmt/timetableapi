var response = require('../../utils/response');
var model = require('./model');
var TYPES = require('tedious').TYPES;

function tableRepository(dbContext) {
    function getTables(req, res) {
        dbContext.get("getTable", function table(error, data) {
            return res.json(response(data, error));
        });
    }
    function getTable(req, res) {
        if (req.params.sid) {
            var parameters = [];
            parameters.push({ name: 'Id', type: TYPES.Int, val: req.params.sid });
            var query = "select * from thong_tin_lop where MSSV = @Id"
            dbContext.getQuery(query, parameters, false, function (error, data) {
                if (data) {
                    req.data = data[0];
                    return next();
                }
                return res.sendStatus(404);
            });
        }
    }
    function postTables(req, res) {
        var parameters = model.modelTable(req)
        dbContext.post("InsertOrUpdateTable", parameters, function (error, data) {
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
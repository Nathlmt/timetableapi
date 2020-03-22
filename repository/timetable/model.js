
var TYPES = require('tedious').TYPES;

const fields = [
    {
        field: 'MSSV',
        type: TYPES.Int
    }, {
        field: 'Ma_HP',
        type: TYPES.VarChar
    }, {
        field: 'Ma_Lop',
        type: TYPES.VarChar
    }, {
        field: 'Ten_Lop',
        type: TYPES.NVarChar
    }, {
        field: 'Tin_Chi',
        type: TYPES.Int
    }, {
        field: 'Loai_Lop',
        type: TYPES.VarChar
    }, {
        field: 'Bat_Dau',
        type: TYPES.Time
    },  {
        field: 'Ket_Thuc',
        type: TYPES.Time
    }, {
        field: 'Thu',
        type: TYPES.VarChar
    }, {
        field: 'Phong_Hoc',
        type: TYPES.VarChar
    }, {
        field: 'Tuan_Hoc',
        type: TYPES.VarChar
    }]

function modelTable(req) {
    return parameters = fields.map((field) => ({
        name: field.field,
        type: field.type,
        val: req.body[field.field]
    }));
}
module.exports = modelTable;

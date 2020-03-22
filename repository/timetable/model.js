
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

    let parameters = fields.map((field) => ({
        name: field.field,
        type: field.type,
        val: req.body[field.field]
    }))
    return [...parameters,{
        name: 'Bat_Dau',
        type: TYPES.Time,
        val: req.body.Bat_Dau ? new Date('1970-01-01T' + req.body.Bat_Dau + 'Z') : undefined

    }, {
        name: 'Ket_Thuc',
        type: TYPES.Time,
        val: req.body.Ket_Thuc ? new Date('1970-01-01T' + req.body.Ket_Thuc + 'Z') : undefined
    }]
}
module.exports = modelTable;

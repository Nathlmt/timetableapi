
var TYPES = require('tedious').TYPES;

const fields= ['MSSV', 'Ma_HP', 'Ma_Lop', 'Ten_Lop', 'Tin_Chi', 
                'Loai_Lop', 'Thoi_Gian', 'Thu', 'Phong_Hoc', 'Tuan_Hoc']

function modelTable(req) {
    return parameters = fields.map((field) => ({
        name: field, 
        type: TYPES.VarChar,
        val: req.body[field] }));
}
module.exports = modelTable;

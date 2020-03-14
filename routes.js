const express = require('express');
const timetable = require('./repository/timetable/routes');
function routes() {
    const router = express.Router();
    timetable(router);
    return router;
}
module.exports = routes;
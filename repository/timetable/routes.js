const _tableRepository = require('./timetable');
const dbContext = require('../../database/dbContext');

function routes(router) {
    const tableRepository = _tableRepository(dbContext);
    router.route('/tables')
        .get(tableRepository.getAll)
        .post(tableRepository.post);

    router.route('/tables/:sid')
        .get(tableRepository.get)
}

module.exports = routes
const _tableRepository = require('./timetable.');
const dbContext = require('../../database/dbContext');

function routes(router) {
    const tableRepository = _tableRepository(dbContext);
    router.route('/tables')
        .get(tableRepository.getAll)
        .post(tableRepository.post);

    router.route('/tables/department')
    router.get(tableRepository.getMulti);
    router.use('/tables/:sid', tableRepository.intercept);
    router.route('/tables/:sid')
        .get(tableRepository.get)
        .put(tableRepository.put)
        .delete(tableRepository.delete);
}

module.exports = routes
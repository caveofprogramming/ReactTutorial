
class BookRepository {
    constructor(connectionPool) {
        this.connectionPool = connectionPool;
    }

    save(book, callback) {
        this.connectionPool.getPool().query('insert into books set ?', book, callback);
    }

    get(id) {

    }

    getAll() {

    }

    update(id, book) {

    }

    delete() {

    }
}

module.exports = BookRepository;
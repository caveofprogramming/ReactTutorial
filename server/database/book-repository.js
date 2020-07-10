
class BookRepository {
    constructor(connectionPool) {
        this.connectionPool = connectionPool;
    }

    get pool() {
        return this.connectionPool.getPool();
    }

    save(book, callback) {
        this.pool.query('insert into books set ?', book, callback);
    }

    get(id) {

    }

    getAll() {

    }

    update(id, book, callback) {
        this.pool.query('update books set ? where id = ?', [book, id], callback);
    }

    delete() {

    }
}

module.exports = BookRepository;
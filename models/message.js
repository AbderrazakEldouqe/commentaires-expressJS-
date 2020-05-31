let connection = require('../config/db');
let moment = require('../config/moment');
class Message {

    constructor(row) {
        this.row = row;
    }
    get id()
    {
        return this.row.id;
    }
    get content() {
        return this.row.content;
    }
    get created_at() {
        return moment(this.row.created_at);
    }
    static create(content, cb) {
        connection.query('INSERT INTO messages SET content=? ,created_at=?',
            [content, new Date()], (err, res) => {
                if (err)  {console.log("Mysql Error");throw err;}
                cb(res);

            });
    }
    static all(cb) {
        connection.query('select * from messages order by id desc',
            [], (err, rows) => {
                if (err)  {console.log("Mysql Error");throw err;}
                cb(rows.map((row) => {
                    return new Message(row);
                }));
            });
    }
    static find(id,cb) {
        connection.query('select * from messages where id=?',
            [id], (err, rows) => {
                if (err) {console.log("Mysql Error");throw err;}
                cb(new Message(rows[0]));
            });
    }
}
module.exports = Message
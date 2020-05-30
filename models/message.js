let connection = require('../config/db');
class Message {


    static create(content,cb) {
        connection.query('INSERT INTO messages SET content=? ,created_at=?',
            [content, new Date()], (err, res) => {
                if(err) throw err;
                cb(res);

            });
    }
}
module.exports = Message
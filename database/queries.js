const pool = require('./pool');



async function getAllMessagesQuery() {
    const messages  = await pool.query("SELECT * FROM messages");
    return messages;
  }

async function newMessageQuery(req, res) {
    const newMessage = await pool.query('INSERT INTO messages (username, message, date_posted) VALUES ($1, $2, $3);', [req.name, req.message, req.added])
    return newMessage;
}

async function getMessageDetailsQuery(req, res) {
    const details = await pool.query('SELECT * FROM messages WHERE id = $1;', [req])
    return details;
}

  
module.exports = {
    getAllMessagesQuery,
    newMessageQuery,
    getMessageDetailsQuery
}

//add search message functionality
//add user search

const { Pool } = require('pg');
const postgresConfig = require('./config.js');
const pool = new Pool(postgresConfig);

// CREATE
const createNewAlbumComment = (params, callback) => {
  const queryStr = `INSERT INTO album_comments (albumid, username, comment, profileimg, id) values ($1, $2, $3, $4, DEFAULT) RETURNING *`;
  pool.connect()
    .then(client => {
      return client.query(queryStr, params)
        .then(result => {
          client.release()
          callback(null, result.rows)
        })
        .catch(e => {
          client.release()
          console.error(e.stack)
        })
    })
}

// READ
const getAlbumComments = (param, callback) => {
  const queryStr = `SELECT * FROM album_comments WHERE albumId = $1`;
  pool.connect()
    .then(client => {
      return client.query(queryStr, param)
        .then(result => {
          client.release()
          callback(null, result.rows)
        })
        .catch(e => {
          client.release()
          console.error(e.stack)
        })
    })
}

// UPDATE
const updateAlbumComment = (params, callback) => {
  const queryStr = `UPDATE album_comments SET comment = $2 WHERE id = $1 RETURNING *`;
  pool.connect()
    .then(client => {
      return client.query(queryStr, params)
        .then(result => {
          client.release()
          callback(null, result.rows)
        })
        .catch(e => {
          client.release()
          console.error(e.stack)
        })
    })
}

// DELETE
const deleteAlbumComment = (param, callback) => {
  const queryStr = `DELETE FROM album_comments WHERE id = $1 RETURNING *`;
  pool.connect()
    .then(client => {
      return client.query(queryStr, param)
        .then(result => {
          client.release()
          callback(null, result.rows)
        })
        .catch(e => {
          client.release()
          console.error(e.stack)
        })
    })
}

module.exports = {
  getAlbumComments,
  createNewAlbumComment,
  updateAlbumComment,
  deleteAlbumComment}





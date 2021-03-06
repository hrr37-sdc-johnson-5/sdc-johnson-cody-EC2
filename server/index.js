require('newrelic');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3004;

app.use(cors());
app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/albums/:id', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/loaderio-015c2da76f01c0046740c7f89a27396f', (req, res) => {
  const filePath = path.join(__dirname, './loaderio-015c2da76f01c0046740c7f89a27396f.txt')
  res.sendFile(filePath);
});


//===========Routes====================//

const db = require('../database/index.js');

app.get('/support/:id', (req, res) => {
  const albumId = Number(req.params.id);
  const param = [ albumId ];

  db.getAlbumComments(param, (err, albumUsers) => {
    if (err) {
      console.log(err);
    } else {
      res.send(albumUsers);
    }
  });
});

app.post('/support/:id', (req, res) => {
  let albumId = Number(req.params.id);
  let params = [albumId, req.body.username, req.body.comment, req.body.profileImg]

  db.createNewAlbumComment(params, (err, result) => {
    if (err) {
      console.error(error);
    } else {
      res.status(201);
      res.send(result);
    }
  });
});

app.put('/support/comments/:id', (req, res) => {
  const commentId = Number(req.params.id);
  const params = [commentId, req.body.comment];

  db.updateAlbumComment(params, (err, result) => {
    if (err) {
      console.log(error);
    } else {
      res.status(202);
      res.send(result);
    }
  });
});

app.delete('/support/comments/:id', (req, res) => {
  const commentId = Number(req.params.id);
  const param = [ commentId ]

  db.deleteAlbumComment(param, (err, result) => {
    if (err) {
      console.error(error);
    } else {
      res.status(202);
      res.send(result);
    }
  });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');

const MySQL = require('./../services/mysql');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/uploadedData');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  }
});

const upload = multer({ storage: storage }).single('myFile');

const uploadFile = (req, res) => {
  upload(req, res, err => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    fs.createReadStream(`./src/uploadedData/${req.file.filename}`)
      .pipe(csv())
      .on('data', row => {
        MySQL.insert(row);
      })
      .on('end', () => {
        return res.status(200).send(`Uploaded successfully!`);
      });
  });
};

const find = async (req, res) => {
  const id = parseInt(req.body.id, 10);
  const result = await MySQL.find(id);
  return res.json(result);
};

const update = async (req, res) => {
  const id = parseInt(req.body.id, 10);
  const result = await MySQL.update(id, req.body.newName);
  return res.send(result);
};

const del = async (req, res) => {
  const id = parseInt(req.body.id, 10);
  const result = await MySQL.del(id);
  return res.json(result);
};

module.exports = {
  uploadFile: uploadFile,
  find: find,
  update: update,
  del: del
};

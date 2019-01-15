const Media = require('../models/media')

exports.getProducts = (req, res, next) => {
    Media.fetchAll()
      .then(([rows, fieldData]) => {
        console.log(rows)
      })
      .catch(err => console.log(err));
  };
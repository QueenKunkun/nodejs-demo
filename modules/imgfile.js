var fs = require('fs');

module.exports = {
  readImg: function (file, res) {
    fs.readFile(file, 'binary', function (err, data) {
      if (err) {
        console.log('err', err);
        throw err
      };
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.write(data, 'binary');
      res.end();
    })
  }
}
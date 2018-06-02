var file = require('./file');
var url = require('url');


module.exports = {
  home: function (req, res) {
    // res.write('首页');
    file.readFile('./views/home.html', res, req);
  },
  login: function (req, res) {
    // res.write('登录页面');
    // var urlObject = url.parse(req.url, true).query;
    // console.log(urlObject.email);
    // console.log(urlObject.password);
    // file.readFile('./views/login.html', res, req);

    var post = '';
    req.on('data', function(chunk) {
      post += chunk
    });
    req.on('end', function() {
      // var urlObject = queryString.parse(post);
      // console.log(urlObject.email);
      // console.log(urlObject.password);
      file.postReadFile('./views/login.html', res, req, post);
    });
    // file.readFile('./views/login.html', res, req);
  },
  register: function (req, res) {
    res.write('注册页面');
  },
  img: function (req, res) {
    file.readImg('./images/psb.jpg', res);
  }
}
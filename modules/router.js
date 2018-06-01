var file = require('./file');
var url = require('url');


module.exports = {
  home: function (req, res) {
    // res.write('首页');
    file.readFile('./views/home.html', res, req);
  },
  login: function (req, res) {
    var urlObject = url.parse(req.url, true).query;
    console.log(urlObject.email);
    console.log(urlObject.password);
    file.readFile('./views/login.html', res, req);
    // res.write('登录页面');
  },
  register: function (req, res) {
    res.write('注册页面');
  },
  img: function (req, res) {
    file.readImg('./images/psb.jpg', res);
  }
}
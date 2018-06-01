var file = require('./file');


module.exports = {
  home: function (req, res) {
    // res.write('首页');
    file.readFile('./views/home.html', req, res);
  },
  login: function (req, res) {
    res.write('登录页面');
  },
  register: function (req, res) {
    res.write('注册页面');
  },
  img: function (req, res) {
    file.readImg('./images/psb.jpg', res);
  }
}
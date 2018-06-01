var imgfile = require('./imgfile');


module.exports = {
  home: function (req, res) {
    res.write('首页');
  },
  login: function (req, res) {
    res.write('登录页面');
  },
  register: function (req, res) {
    res.write('注册页面');
  },
  img: function (req, res) {
    imgfile.readImg('./images/psb.jpg', res)
  }
}
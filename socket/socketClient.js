var net = require('net');
var port = 9000;
var host = '127.0.0.1';

// 创建一个socket对象的实例
var client = new net.Socket();
client.setEncoding = 'UTF-8';

// 连接服务器
client.connect(port, host, function() {
  client.write('您好');
});

client.on('data', function(data) {
  console.log('服务端传来：' + data);
  say();
});

client.on('error', function(error) {
  console.log('error' + error);
});

client.on('close', function() {
  console.log('connection closed');
})


const readline = require('readline');// 进程的标准的输入和输出

const r1 = readline.createInterface({
  input: process.stdin,// 一个标准的输入
  output: process.stdout // 一个标准的输出
});

function say () {
  r1.question('请输入', (inputStr) => {
    if (inputStr != 'bye') {
      client.write(inputStr + '/n');
    } else {
      client.distory(); // 关闭连接
      r1.close()
    }
  })
}

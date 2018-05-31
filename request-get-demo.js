var https = require('https');

var options = {
  hostname: 'api.douban.com',
  port: 443,
  path: '/v2/movie/top250',
  method: 'GET'
};

var responseData = '';
var request = https.request(options, (res) => {
  // console.log('res:', res);
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    // console.log('chunk', chunk);
    responseData += chunk;
  });
  res.on('end', () => {
    JSON.parse(responseData).subjects.map((item) => {
      console.log(item.title);
    })
  })
});

request.on('error', (error) => {
  console.log(error);
});

request.end();
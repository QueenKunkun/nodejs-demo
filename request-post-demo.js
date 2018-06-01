const http = require('http');
const querystring = require('querystring');

var postData = querystring.stringify({
  'question[title]':'css外部文件导入',
  'question[content]':'<p>css外部文件导入</p>',
  'question[courseId]':'227',
  'question[lessonId]':'1753',
  '_csrf_token':'def34c34d3e4a3b99b1e727d9bbaecaef7eb17e0'
});

var options = {
  hostname: 'www.codingke.com',
  port: 80,
  method: 'POST',
  path: '/ajax/create/course/question',
  header: { //此处需要带上token用户登录信息
    'Accept':'*/*',
    'Accept-Encoding':'gzip, deflate',
    'Access-Language':'zh-CN,zh;q=0.8,en=0.6',
    'Content-Encoding':'gzip',
    'Content-Length':'138932',
    'Content-Type':'application/javascript',
    'Date':'Thu, 31 May 2018 021937 GMT',
    'Expires':'Thu, 30 May 2019 210320 GMT',
    'Last-Modified':'Sat, 01 Jan 2000 000000 GMT',
    'Server':'GitHub.com',
    'Timing-Allow-Origin':'*',
    'Vary':'Accept-Encoding',
    'Via':'1.1 varnish',
    'X-Cache':'HIT',
    'X-Cache-Hits':'2574',
    'X-Fastly-Request-ID':'ee9800577ec25ef250e4258b161a1971e79b054d',
    'X-GitHub-Request-Id':'358C7D95D82837F6EC375B0F1198',
    'X-Served-By':'cache-hnd18746-HND',
    'X-Timer':'S1527733177.396427,VS0,VE0'
  }
}

var request = http.request(options, (res) => {
  console.log('Status: ', res.statusCode);
  console.log('headers: ', JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', (chuck) => {
    console.log(chuck);
  });
  res.on('end', () => {
    console.log('提交完毕');
  })
});

request.on('error', (error) => {
  console.log(error);
});

request.write(postData);

request.end();
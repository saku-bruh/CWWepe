// basic http server

const http = require('http');

http.createServer((req, res) => {
    const path = req.url.split('?')[0];
    switch (path) {
        case '/prod/client/notice/config/com.kurogame.aki.internal/0.1.0/LoginNotice.json':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('{"Id":"62bea858a0d107f59266efb2","ModifyTime":1657253232278,"BeginTime":1656900000,"EndTime":1672502100,"Title":"CrepeWW","content":"poger poger poger poger"}');
            break;
        case '/client/0.1.0/Windows/config.json':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(`{"LauncherIndexSha1":"A2411424AE1EF0674DC12474AA40AD298113E388","LauncherVersion":"0.1.6","PackageVersion":"0.1.0","PriceRatio":0.2,"PrimaryUrlPrefix":"prod-cn-aliyun-mccdn.kurogame.com/client/,100;prod-cn-tengxunyun-mccdn.kurogame.com/client/,95","ResourceIndexSha1":"2E81CD2EB075E31C4FA6AEA0356B5F54F92D189A","ResourceVersion":"0.1.6","SecondaryUrlPrefix":"prod-cn-aliyun-mccdn.kurogame.com/client/,100","SpeedRatio":0.8}`)
            break;
        default:
            console.log(req.url)
    }
}).listen(80, '0.0.0.0');
const http = require("http");
const querystring = require('node:querystring');

const server = http.createServer((req, res) => {
    
    const urlPath = req.url;

    let queryString = urlPath.split("?")?.[1] ?? '';
    res.end("Successfully started a server??: " + JSON.stringify({reqUrl: req.url, reqMethod: req.method, queryString: querystring.parse(queryString)}));
});

server.listen(3000, "localhost");

var fs = require('fs');
var http= require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-Type':'text/plain'
    });
    let myfile= fs.readFileSync(__dirname+'/write.txt')
    res.end(myfile);
}).listen(1200,'127.0.0.1');

http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-Type':'text/plain'
    });
    let myfile= fs.readFile(__dirname+'/write.txt','utf8',(err,data)=>{
        res.end(data);
    });
   
}).listen(1300,'127.0.0.1');

http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-Type':'text/plain'
    });
    let myfile= fs.createReadStream(__dirname+'/write.txt').pipe(res);
    
   
}).listen(1400,'127.0.0.1');

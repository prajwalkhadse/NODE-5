var http = require("http");
const PORT=8081;

const httpServer = http.createServer(handleServer);


function handleServer(req, res){
    if(req.url === '/welcome'){
        res.writeHead(200,{'Content-Type':'text/Plain'});
        res.end('Welcome to Dominos!');
    }else if(req.url==='/contact'){
        res.writeHead(200,{'Content-Type':'application/json'});
        const contactInfo={
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        };
        res.end(JSON.stringify(contactInfo));
    }else {
        res.writeHead(400);
        res.end();
    }
  
}

httpServer.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})

module.exports = httpServer;
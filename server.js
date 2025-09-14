const http=require("http");
const server=http.createServer(function(req,res){
    if(req.url==="/mahi"){
        res.end("hello deyam");
    }
    res.end("I love you ammu");

})

server.listen(1433);
const http =require('http');

const httpserver = http.createServer((req,res)=>{
    console.log('we have connnected')
    res._write()
})


httpserver.listen(8080,()=>console.log('connected to port'))
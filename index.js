const http = require('http');

let server = http.createServer((req, res)=>{

    console.log('URL:', req.url);
    console.log('METHOD:', req.method);

    switch (req.url) {

        case '/': 

        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Hello</h1>');

        break;


    }

});

server.listen(5000, '127.0.0.1', ()=>{

    console.log('servidor rodando!');

});
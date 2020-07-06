const http = require('http');

const server = http.createServer((request, response)=>{

    const book = {
        author: 'Charles Dickens',
        title: 'Great Expectations',
    };

    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(book));
    response.end();
});

server.listen(8000);
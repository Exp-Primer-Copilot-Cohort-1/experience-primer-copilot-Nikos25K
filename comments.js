const http = require('http');
const fs = require('fs');

// Create web server
// Create a web server that listens to incoming requests and responds with a file that contains the comments.

// The server should listen on port 8080.
const server = http.createServer((req, res) => {
    // Read the comments file
    fs.readFile('/path/to/comments.txt', 'utf8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
        }

        // Set the response headers
        res.setHeader('Content-Type', 'text/plain');

        // Send the comments as the response
        res.end(data);
    });
});

server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
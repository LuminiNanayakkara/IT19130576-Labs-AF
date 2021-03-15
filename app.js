//Question-01
console.log('Hello World');

//Question-02
const os = require('os');

console.log('Architcture '+ os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS '+os.platform());


//Question--03
const fs = require('fs');

const fileName = __dirname + '/test.txt';

fs.readFile(fileName,(error,data) => {
    if(error){
        console.error(error);
    }
    console.log(data.toString());
});


const data = fs.readFileSync(fileName);
console.log(data.toString());


//Question-04
const fileName = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on('data',data => {
    console.log(data.toString());
})

//Question-05

const http = require('http');

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1> Hello World </h1>');
    response.end();
}).listen(3000);

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    
    switch (request.method){
        case 'GET':
            response.write('<h1> Hello World</h1>');
            response.end();
            break;

            case 'POST':
                request.on('data', data => {
                    response.write('<h1> Hello '+data+'<h1>');
                    response.end();
                });
                break;
    }
}).listen(3000,(error) => {
    console.log('Server is listening to port 3000');
});




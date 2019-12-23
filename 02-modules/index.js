const http = require('http');
// importing custom module Person
const person = require('./Person');
// importing custom module (as a calculator object)
const Operations = require('./Operations');
// create a PORT constant value
const PORT = 3000;

http.createServer((req,res) => {
    console.log('Index.js server has been launched....');

    res.writeHead(200,{'Content-Type':'text/html'});

    // output Person properties here 
    res.write('Importing Custom Module Person <br>');
    res.write(person.Person('Bongani','Male',27));

    // output Calculator properties here
    res.write('Performing Calculator operations... <br>');
    var ops = new Operations(5,3);
    res.write(ops.addition());
    res.write(ops.subtraction());
    res.write(ops.multiplication());
    res.write(ops.division());

    // clear response buffer
    res.end();

}).listen(PORT);
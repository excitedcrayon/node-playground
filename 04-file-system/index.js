const http = require('http');
const fs = require('fs');
const FileOperations = require('./FileOperations');
const PORT = 3000;

http.createServer((req,res) => {
    // read the homepage index file
    fs.readFile('./html/homepage.html', (err,data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(PORT);

// perform file operations
const file = new FileOperations();

const Filenames = {
    fileOne: 'fileOne.txt',
    fileTwo: 'fileTwo.txt',
    fileOneRename: 'fileOneRename.txt',
    fileDelete: 'fileDelete.txt'
}

file.createFile(Filenames.fileOne,'This is fileOne content');
file.createFile(Filenames.fileDelete,'This file is for deleting');
file.openFile(Filenames.fileTwo, 'w');
file.updateFile(Filenames.fileOne, 'Newly inserted content.');
file.overwriteFile(Filenames.fileTwo, 'Overridden content');
file.deleteFile(Filenames.fileDelete);
file.renameFile(Filenames.fileOne, Filenames.fileOneRename);

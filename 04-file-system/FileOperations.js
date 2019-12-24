// FileOperations class uses the filesystem module to create files 
const fs = require('fs');

class FileOperations{

    constructor(){
        // create a directory if is does not exist
        this.dir = 'files';
        if(!fs.existsSync(this.dir)){
            fs.mkdirSync(this.dir);
            console.log('Folder has been created');
        }
    }

    // method creates a file and append the content to the create file
    createFile(filename, content){
        fs.appendFile(`${this.dir}/${filename}`, content, (err) => {
            if(err){
                console.log(`Error trying to create file: ${filename}`);
            }else{
                console.log(`File: ${filename} has been created`);
            }
        });
    }

    // method opens a file and uses the mode (r/w/a) to perform operations
    openFile(filename, mode){
        fs.open(`${this.dir}/${filename}`, mode, (err,file) => {
            if(err){
                console.log(`Error opening file: ${filename}`);
            }else{
                console.log(`File: ${filename} opened successfully.`);
            }
        });
    }

    // method updates file by appending new content at the end of the file
    updateFile(filename, content){
        fs.appendFile(`${this.dir}/${filename}`, content, (err) => {
            if(err){
                console.log(`Error updating file: ${filename}`);
            }else{
                console.log(`File: ${filename} has been updated`);
            }
        });
    }

    // method updates file by over writing existing content
    overwriteFile(filename, content){
        fs.writeFile(`${this.dir}/${filename}`, content, (err) => {
            if(err){
                console.log(`Error over writing file: ${filename}`);
            }else{
                console.log(`File: ${filename} has been overridden`);
            }
        });
    }

    // method deletes the filename specified
    deleteFile(filename){
        fs.unlink(`${this.dir}/${filename}`, (err) => {
            if(err){
                console.log(`Error deleting file: ${filename}`);
            }else{
                console.log(`File: ${filename} has been deleted`);
            }
        });
    }

    // method renames the filename to the new filename
    renameFile(oldFileName, newFileName){
        fs.rename(`${this.dir}/${oldFileName}`, `${this.dir}/${newFileName}`, (err) => {
            if(err){
                console.log(`Error trying to rename ${oldFileName} to ${newFileName}`);
            }else{
                console.log(`File: ${oldFileName} has been renamed to ${newFileName}`);
            }
        });
    }
}

module.exports = FileOperations
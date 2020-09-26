const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('../dist/index.html', fileContent, err => {
            // If there is an error, reject the error
            if (err) {
                reject(err);
                return
            }
            // If everything went well, create the file
            resolve({
                ok: true,
                message: 'File Created'
            });
        });
    });
};

const copyFile = () => {
    fs.copyFile('../dist/index.html', fileContent, err => {
        // if there is an error, reject the error
        if (err) {
            reject(err)
            return
        }
        resolve({
            ok: true,
            message: 'File Copied'
        });
    });
};

module.exports = { writeFile, copyFile };
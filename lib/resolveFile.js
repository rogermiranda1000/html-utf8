const parser = require('./parse.js');
const fs = require('fs');
const path = require('path');
const dirExistsSync = require('../lib/dirExistsSync.js');

const resolveFile = function (source, output) {
    const dirpath = path.join(process.cwd(), output);
    if (!dirExistsSync(dirpath)) fs.mkdirSync(dirpath);

    const filename = path.basename(source, '.html');
    const dest = path.join(process.cwd(), output, filename + ".html");
    if (!path.isAbsolute(source)) source = path.resolve(process.cwd(), source);

    fs.readFile(source, 'latin1', function (err, data) {
        if (err) {
            console.log(err);
            throw new Error('Error while reading file \'' + source + '\': ' + err);
        }

        data = parser(data);
        fs.writeFile(dest, data, function (err) {
            if (err) {
                console.log(err);
                throw new Error('Error while writting file \'' + source + '\' into \'' + dest + '\': ' + err);
            }
            // all ok
        });
    });
};
module.exports = resolveFile;

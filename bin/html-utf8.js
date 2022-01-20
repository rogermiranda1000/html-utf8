#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const { program } = require('commander');
const resolveFile = require('../lib/resolveFile.js');

const version = require('../package.json').version;
program
    .version(version)
    .option('-d, --dir <dir>', 'specify a source directory')
    .option('-o, --output <output>', 'specify a output directory');

program.parse(process.argv);

const options = program.opts();
const { dir, output } = options;
if (!dir || !output) {
    console.log('You need to provide an input and output directory');
    throw new Error('You need to provide an input and output directory');
}

fs.readdir(path.join(process.cwd(), dir), (err, filenames) => {
    if (err) {
        console.log(err);
        throw new Error('Invalid directory \'' + path.join(process.cwd(), dir) + '\'');
    }

    filenames.forEach((filename) => {
        if (filename.endsWith('.html')) resolveFile(path.join(process.cwd(), dir, filename), output);
    });
});
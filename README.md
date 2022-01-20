# html-utf8
After running this command it will copy all the .html files from `sourcedir`, and it will save them to `distdir` (changing characters like 'ñ' to '&ntilde;', so you can use UTF8-based APIs)

## Installation
`npm install html-utf8 --save-dev`

## Usage
`html-utf8 -d sourcedir -o distdir`

or

`html-utf8 --dir sourcedir --output distdir`
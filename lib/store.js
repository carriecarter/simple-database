const { readdir, readFile, writeFile, } = require('./fs');
const path = require('path');
const shortid = require('shortid');

// this is where we create the class and methods for that class
module.exports = class Store {
    constructor(path) {
        this.path = path;
    }

    save(mountain) {
        mountain._id = shortid.generate();
        const destName = path.join(this.path, `${mountain._id.json}`);
        const mtObject = JSON.stringify(mtObject);
        return writeFile(destName, mtObject)
            .then(() => mtObject);
    }

};
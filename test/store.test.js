const assert = require('assert');
const store = require('../lib/store');
const path = require('path');
const { rimraf, mkdirp } = require('../lib/fs');
const dest = path.join(__dirname, 'mountains');

describe('store', () => {
    
    let newStore = null;

    beforeEach(() => {
        newStore = new store(dest);
    });

    beforeEach(()=> {
        return rimraf(dest);
    });

    beforeEach(()=> {
        return mkdirp(dest);
    });

    it('saves a file to my mountains directory and assigns an id', () => {
        return store.save({ name: 'Klickitat' })
            .then(mountain => {
                assert.ok(mountain._id);
                return store.get(mountain._id);
            })
            .then(mountain => {
                assert.equal(mountain.name, 'Klickitat');
            });
    });
});
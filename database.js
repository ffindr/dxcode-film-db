'use strict';
const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const db2json = require('./db2json');

const products = parse(fs.readFileSync('data/products.csv', 'utf-8'), {ltrim: true});
const manufacturers = parse(fs.readFileSync('data/manufacturers.csv', 'utf-8'), {ltrim: true});

module.exports = db2json.createLookupTable(
	manufacturers,
	products
);

const fs = require('fs');
const parse = require('csv-parse/lib/sync');

const products = parse(fs.readFileSync('data/products.csv', 'utf-8'), {delimiter: ', '});
const manufacturers = parse(fs.readFileSync('data/manufacturers.csv', 'utf-8'), {delimiter: ', '});

module.exports = {
	products,
	manufacturers
};
